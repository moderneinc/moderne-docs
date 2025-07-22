---
description: Detect and prevent exposure of Personally Identifiable Information (PII) in applications.
---

# PII Protection

Protecting Personally Identifiable Information (PII) is crucial for regulatory compliance (GDPR, CCPA, HIPAA) and user privacy. OpenRewrite provides recipes to detect PII exposure in URLs and unencrypted storage, helping prevent data breaches and privacy violations.

## Understanding PII Risks

Think of PII like someone's house keys and ID card. If these fall into the wrong hands, the person's security and privacy are compromised. In applications, PII includes names, email addresses, social security numbers, credit card details, and health information. Exposing this data is like leaving copies of everyone's keys and IDs in public places.

### Common PII Types

```java
// High Sensitivity PII
- Social Security Numbers (SSN)
- Credit card numbers
- Bank account numbers
- Driver's license numbers
- Passport numbers
- Health records
- Biometric data

// Medium Sensitivity PII
- Full names
- Email addresses
- Phone numbers
- Date of birth
- Home addresses
- IP addresses

// Context-Dependent PII
- User IDs (when linkable)
- Device identifiers
- Location data
- Employment information
```

## PII in URLs Detection

The `FindPiiInUrls` recipe detects when sensitive information is exposed in URLs, which can be logged, cached, or shared inadvertently.

### Why URLs Are Dangerous for PII

URLs are particularly risky because they:
- Appear in server logs
- Get stored in browser history
- Are sent in HTTP Referrer headers
- Can be cached by proxies
- May be shared via copy/paste
- Appear in analytics tools

### Vulnerable Patterns

#### Query Parameters with PII

```java
// VULNERABLE - SSN in URL
@GetMapping("/user")
public User getUser(@RequestParam String ssn) {
    return userService.findBySSN(ssn);
}
// URL: /user?ssn=123-45-6789 - SSN exposed in logs!

// VULNERABLE - Email in path
@GetMapping("/profile/{email}")
public Profile getProfile(@PathVariable String email) {
    return profileService.findByEmail(email);
}
// URL: /profile/john.doe@example.com - Email in URL
```

#### Password Reset with Token in URL

```java
// VULNERABLE - Sensitive token in URL
@GetMapping("/reset-password")
public String resetPassword(@RequestParam String token, 
                          @RequestParam String email) {
    // Token and email exposed in URL
    return passwordService.resetWithToken(email, token);
}
// URL: /reset-password?email=user@example.com&token=secret123
```

#### Building URLs with PII

```java
// VULNERABLE - Constructing URLs with PII
@PostMapping("/search")
public String search(UserSearchRequest request) {
    String redirectUrl = "/results?name=" + request.getFullName() + 
                        "&dob=" + request.getDateOfBirth() +
                        "&ssn=" + request.getLastFourSSN();
    return "redirect:" + redirectUrl;
}
```

### Safe Patterns for URL Parameters

#### Use POST for Sensitive Data

```java
// SAFE - POST request with body
@PostMapping("/user/lookup")
public User getUser(@RequestBody UserLookupRequest request) {
    // SSN in request body, not URL
    return userService.findBySSN(request.getSsn());
}

public class UserLookupRequest {
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String ssn;
    // getters/setters
}
```

#### Use Session or Temporary Storage

```java
// SAFE - Store sensitive data in session
@PostMapping("/search")
public String initiateSearch(@RequestBody SearchRequest request, 
                           HttpSession session) {
    String searchId = UUID.randomUUID().toString();
    session.setAttribute("search-" + searchId, request);
    return "redirect:/results/" + searchId;
}

@GetMapping("/results/{searchId}")
public String showResults(@PathVariable String searchId, 
                         HttpSession session) {
    SearchRequest request = (SearchRequest) session.getAttribute("search-" + searchId);
    // Process without exposing PII in URL
    return "results";
}
```

#### Use Database-Backed Tokens

```java
// SAFE - Opaque tokens instead of PII
@Service
public class TokenService {
    @Autowired
    private TokenRepository tokenRepository;
    
    public String createToken(String email, String purpose) {
        String token = generateSecureToken();
        
        TokenEntity entity = new TokenEntity();
        entity.setToken(token);
        entity.setEmail(email);
        entity.setPurpose(purpose);
        entity.setExpiry(Instant.now().plus(1, ChronoUnit.HOURS));
        
        tokenRepository.save(entity);
        return token;
    }
    
    public Optional<String> validateToken(String token, String purpose) {
        return tokenRepository.findByTokenAndPurpose(token, purpose)
            .filter(t -> t.getExpiry().isAfter(Instant.now()))
            .map(TokenEntity::getEmail);
    }
}

// Usage
@GetMapping("/verify")
public String verifyEmail(@RequestParam String token) {
    // Token doesn't reveal email address
    Optional<String> email = tokenService.validateToken(token, "email-verify");
    // ...
}
```

## Unencrypted PII Storage Detection

The `FindUnencryptedPiiStorage` recipe identifies when sensitive data is stored without proper encryption.

### Vulnerable Storage Patterns

#### Plain Text in Database

```java
// VULNERABLE - Storing SSN in plain text
@Entity
public class User {
    @Id
    private Long id;
    
    private String name;
    private String email;
    private String ssn;  // Stored unencrypted!
    private String creditCardNumber;  // Also unencrypted!
}

// VULNERABLE - Direct storage
public void saveUser(UserDto dto) {
    User user = new User();
    user.setSsn(dto.getSsn());  // No encryption
    user.setCreditCardNumber(dto.getCreditCard());
    userRepository.save(user);
}
```

#### Logging PII

```java
// VULNERABLE - PII in logs
@PostMapping("/payment")
public PaymentResult processPayment(PaymentRequest request) {
    log.info("Processing payment for card: " + request.getCreditCardNumber());
    log.debug("Customer SSN: " + request.getCustomerSSN());
    
    // PII exposed in log files!
    return paymentService.process(request);
}
```

#### File Storage Without Encryption

```java
// VULNERABLE - Writing PII to files
public void exportUserData(List<User> users) throws IOException {
    try (PrintWriter writer = new PrintWriter("users.csv")) {
        writer.println("Name,Email,SSN,CreditCard");
        for (User user : users) {
            writer.printf("%s,%s,%s,%s%n", 
                user.getName(),
                user.getEmail(),
                user.getSsn(),  // Plain text PII in file!
                user.getCreditCard());
        }
    }
}
```

### Safe PII Storage Patterns

#### Field-Level Encryption

```java
// SAFE - Encrypted PII storage
@Entity
public class User {
    @Id
    private Long id;
    
    private String name;
    private String email;
    
    @Convert(converter = CryptoConverter.class)
    private String ssn;  // Encrypted in database
    
    @Convert(converter = CryptoConverter.class)
    private String creditCardNumber;  // Also encrypted
}

@Component
public class CryptoConverter implements AttributeConverter<String, String> {
    private final CryptoService cryptoService;
    
    @Override
    public String convertToDatabaseColumn(String plaintext) {
        if (plaintext == null) return null;
        return cryptoService.encrypt(plaintext);
    }
    
    @Override
    public String convertToEntityAttribute(String ciphertext) {
        if (ciphertext == null) return null;
        return cryptoService.decrypt(ciphertext);
    }
}
```

#### Secure Crypto Service

```java
@Service
public class CryptoService {
    private static final String ALGORITHM = "AES/GCM/NoPadding";
    private final SecretKey key;
    
    public CryptoService(@Value("${encryption.key}") String base64Key) {
        byte[] decodedKey = Base64.getDecoder().decode(base64Key);
        this.key = new SecretKeySpec(decodedKey, "AES");
    }
    
    public String encrypt(String plaintext) {
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            byte[] iv = new byte[12]; // GCM standard IV size
            new SecureRandom().nextBytes(iv);
            
            cipher.init(Cipher.ENCRYPT_MODE, key, new GCMParameterSpec(128, iv));
            byte[] ciphertext = cipher.doFinal(plaintext.getBytes(StandardCharsets.UTF_8));
            
            // Prepend IV to ciphertext
            byte[] result = new byte[iv.length + ciphertext.length];
            System.arraycopy(iv, 0, result, 0, iv.length);
            System.arraycopy(ciphertext, 0, result, iv.length, ciphertext.length);
            
            return Base64.getEncoder().encodeToString(result);
        } catch (Exception e) {
            throw new CryptoException("Encryption failed", e);
        }
    }
    
    public String decrypt(String encrypted) {
        try {
            byte[] decoded = Base64.getDecoder().decode(encrypted);
            
            // Extract IV
            byte[] iv = new byte[12];
            System.arraycopy(decoded, 0, iv, 0, iv.length);
            
            // Extract ciphertext
            byte[] ciphertext = new byte[decoded.length - iv.length];
            System.arraycopy(decoded, iv.length, ciphertext, 0, ciphertext.length);
            
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, key, new GCMParameterSpec(128, iv));
            
            byte[] plaintext = cipher.doFinal(ciphertext);
            return new String(plaintext, StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new CryptoException("Decryption failed", e);
        }
    }
}
```

#### Secure Logging

```java
// SAFE - Masking PII in logs
@Component
public class PIIMaskingService {
    
    public String maskSSN(String ssn) {
        if (ssn == null || ssn.length() < 4) return "***";
        return "***-**-" + ssn.substring(ssn.length() - 4);
    }
    
    public String maskCreditCard(String cc) {
        if (cc == null || cc.length() < 4) return "****";
        return "**** **** **** " + cc.substring(cc.length() - 4);
    }
    
    public String maskEmail(String email) {
        if (email == null || !email.contains("@")) return "***";
        int atIndex = email.indexOf("@");
        if (atIndex <= 3) return "***@" + email.substring(atIndex + 1);
        return email.substring(0, 3) + "***@" + email.substring(atIndex + 1);
    }
}

// Usage in logging
@PostMapping("/payment") 
public PaymentResult processPayment(PaymentRequest request) {
    log.info("Processing payment for card: {}", 
        maskingService.maskCreditCard(request.getCreditCardNumber()));
    // Logs: "Processing payment for card: **** **** **** 1234"
    
    return paymentService.process(request);
}
```

#### Tokenization

Replace PII with tokens.
```java
@Service
public class TokenizationService {
    private final TokenVault vault;
    
    public String tokenize(String piiValue, PIIType type) {
        // Generate unique token
        String token = "tok_" + type.getPrefix() + "_" + generateRandomToken();
        
        // Store in secure vault
        vault.store(token, piiValue, type);
        
        return token;
    }
    
    public String detokenize(String token) {
        return vault.retrieve(token)
            .orElseThrow(() -> new TokenNotFoundException(token));
    }
    
    // Use tokens instead of real PII
    public void processOrder(OrderDto dto) {
        Order order = new Order();
        order.setCustomerToken(tokenize(dto.getCustomerSSN(), PIIType.SSN));
        order.setPaymentToken(tokenize(dto.getCreditCard(), PIIType.CREDIT_CARD));
        orderRepository.save(order);
    }
}
```

## Comprehensive PII Protection Strategy

### Data Classification

```java
@Component
public class DataClassifier {
    
    public enum Sensitivity {
        PUBLIC,      // Can be freely shared
        INTERNAL,    // Company use only  
        CONFIDENTIAL,// Restricted access
        RESTRICTED   // Highest protection (PII, secrets)
    }
    
    private static final Map<String, Sensitivity> FIELD_CLASSIFICATION = Map.of(
        "ssn", Sensitivity.RESTRICTED,
        "creditCard", Sensitivity.RESTRICTED,
        "email", Sensitivity.CONFIDENTIAL,
        "name", Sensitivity.CONFIDENTIAL,
        "userId", Sensitivity.INTERNAL,
        "country", Sensitivity.PUBLIC
    );
    
    public Sensitivity classify(String fieldName) {
        return FIELD_CLASSIFICATION.getOrDefault(
            fieldName.toLowerCase(), 
            Sensitivity.INTERNAL
        );
    }
    
    public boolean requiresEncryption(String fieldName) {
        return classify(fieldName) == Sensitivity.RESTRICTED;
    }
    
    public boolean canExposeInUrl(String fieldName) {
        return classify(fieldName) == Sensitivity.PUBLIC;
    }
}
```

### Automated PII Detection

```java
@Component
public class PIIScanner {
    
    private static final Pattern SSN_PATTERN = 
        Pattern.compile("\\b\\d{3}-\\d{2}-\\d{4}\\b");
    
    private static final Pattern CC_PATTERN = 
        Pattern.compile("\\b\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}\\b");
    
    private static final Pattern EMAIL_PATTERN = 
        Pattern.compile("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b");
    
    public List<PIIMatch> scan(String text) {
        List<PIIMatch> matches = new ArrayList<>();
        
        // Scan for SSNs
        Matcher ssnMatcher = SSN_PATTERN.matcher(text);
        while (ssnMatcher.find()) {
            matches.add(new PIIMatch(PIIType.SSN, ssnMatcher.start(), ssnMatcher.end()));
        }
        
        // Scan for credit cards
        Matcher ccMatcher = CC_PATTERN.matcher(text);
        while (ccMatcher.find()) {
            String potential = ccMatcher.group().replaceAll("[\\s-]", "");
            if (isValidCreditCard(potential)) {
                matches.add(new PIIMatch(PIIType.CREDIT_CARD, ccMatcher.start(), ccMatcher.end()));
            }
        }
        
        // Scan for emails
        Matcher emailMatcher = EMAIL_PATTERN.matcher(text);
        while (emailMatcher.find()) {
            matches.add(new PIIMatch(PIIType.EMAIL, emailMatcher.start(), emailMatcher.end()));
        }
        
        return matches;
    }
    
    private boolean isValidCreditCard(String number) {
        // Luhn algorithm validation
        int sum = 0;
        boolean alternate = false;
        for (int i = number.length() - 1; i >= 0; i--) {
            int n = Integer.parseInt(number.substring(i, i + 1));
            if (alternate) {
                n *= 2;
                if (n > 9) n = (n % 10) + 1;
            }
            sum += n;
            alternate = !alternate;
        }
        return (sum % 10 == 0);
    }
}
```

## Testing PII Protection

### Unit Tests

```java
@Test
void detectsPIIInURL() {
    rewriteRun(
        java("""
            @RestController
            class UserController {
                @GetMapping("/user")
                public User getUser(@RequestParam String ssn) {
                    ~~>return userService.findBySSN(ssn);
                }
            }
            """)
    );
}

@Test
void detectsUnencryptedPII() {
    rewriteRun(
        java("""
            @Entity
            class Customer {
                private String name;
                ~~>private String socialSecurityNumber;
                ~~>private String creditCardNumber;
            }
            """)
    );
}

@Test
void allowsEncryptedPII() {
    rewriteRun(
        java("""
            @Entity
            class Customer {
                private String name;
                
                @Convert(converter = CryptoConverter.class)
                private String socialSecurityNumber;
                
                @Convert(converter = CryptoConverter.class) 
                private String creditCardNumber;
            }
            """)
    );
}
```

## Compliance Considerations

### GDPR Requirements

```java
@Component
public class GDPRCompliance {
    
    // Right to erasure (right to be forgotten)
    public void deleteUserData(String userId) {
        // Delete from primary storage
        userRepository.deleteByUserId(userId);
        
        // Delete from audit logs (or anonymize)
        auditService.anonymizeUserData(userId);
        
        // Delete from backups (mark for deletion)
        backupService.markForDeletion(userId);
        
        // Delete from caches
        cacheManager.evictUser(userId);
    }
    
    // Data portability
    public UserDataExport exportUserData(String userId) {
        User user = userRepository.findById(userId);
        
        return UserDataExport.builder()
            .personalData(maskSensitiveData(user))
            .processingHistory(auditService.getUserHistory(userId))
            .consentRecords(consentService.getUserConsents(userId))
            .build();
    }
}
```

### Audit Logging

```java
@Aspect
@Component
public class PIIAccessAuditor {
    
    @Around("@annotation(PIIAccess)")
    public Object auditPIIAccess(ProceedingJoinPoint joinPoint) throws Throwable {
        PIIAuditEntry entry = new PIIAuditEntry();
        entry.setTimestamp(Instant.now());
        entry.setUser(SecurityContextHolder.getContext().getAuthentication().getName());
        entry.setOperation(joinPoint.getSignature().getName());
        entry.setDataType(getPIIType(joinPoint));
        
        try {
            Object result = joinPoint.proceed();
            entry.setSuccess(true);
            return result;
        } catch (Exception e) {
            entry.setSuccess(false);
            entry.setError(e.getMessage());
            throw e;
        } finally {
            auditRepository.save(entry);
        }
    }
}
```

:::warning Privacy First
PII protection is not just about security—it's about respecting user privacy and maintaining trust. Always apply the principle of data minimization: collect only what you need, store it only as long as necessary, and protect it at all times.
:::
