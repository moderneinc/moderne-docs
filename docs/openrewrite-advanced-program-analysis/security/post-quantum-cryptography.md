---
description: Identify cryptographic implementations that may need updating for post-quantum security.
---

# Post-quantum cryptography readiness

Quantum computers pose a significant threat to current cryptographic systems. While large-scale quantum computers don't exist today, experts predict that within the next 10-20 years, quantum computers will be powerful enough to break widely-used encryption algorithms like RSA, Elliptic Curve Cryptography (ECC), and Diffie-Hellman key exchange.

OpenRewrite's post-quantum cryptography analysis helps you identify cryptographic implementations in your codebase that may become vulnerable to quantum attacks. This will, in turn, allow you to track and plan accordingly.

## Understanding the quantum threat

Current public-key cryptography relies on mathematical problems that are computationally infeasible to reverse with classical computers:

* **RSA**: Based on the difficulty of factoring the product of two large prime numbers
* **ECC**: Based on the discrete logarithm problem over elliptic curves
* **Diffie-Hellman**: Based on the discrete logarithm problem in finite fields

Unfortunately, quantum computers can solve these problems exponentially faster than classical computers, rendering these cryptographic systems vulnerable once sufficiently powerful quantum computers exist.

### The "harvest now, decrypt later" threat

While quantum computers capable of breaking modern cryptography may be at least 10 years away according to experts, organizations cannot afford to wait. Bad actors are already capturing encrypted data today with the intention of storing it until quantum computers become available to decrypt it.

This means that data requiring long-term confidentiality (10+ years) needs to be quantum-resistant **today**.

## How our `PostQuantumCryptography` recipe helps

OpenRewrite's `PostQuantumCryptography` recipe analyzes your codebase to identify cryptographic configurations and implementations that will need to be updated in the post-quantum era.

The recipe detects:

**Hardcoded values:**

* Algorithm selections
* SSL/TLS protocol versions and cipher suites
* Cryptographic key lengths
* Private keys
* Certificates
* Security provider names

**Programmatic patterns:**

* Direct security provider modifications
* `SSLContext.setDefault()` usage
* SSL configuration edits
* `Security.setProperty()` calls

### Detection example

Here's what the recipe identifies in a typical cryptographic configuration:

**Before:**

```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocket;
import java.security.KeyPairGenerator;
import java.security.Security;
import java.security.Provider;

public class CryptoExample {
    private static final String ALGORITHM = "AES";
    private static final String PROTOCOL = "TLSv1.2";
    private static final int KEY_SIZE = 2048;

    public void configureCrypto() throws Exception {
        // Hardcoded algorithm
        KeyGenerator keyGen = KeyGenerator.getInstance(ALGORITHM);
        keyGen.init(128);

        // Hardcoded key length
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
        kpg.initialize(KEY_SIZE);

        // Hardcoded protocol
        SSLContext ctx = SSLContext.getInstance(PROTOCOL);

        // Hardcoded provider
        Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding", "SunJCE");

        // Programmatic provider editing
        Provider provider = Security.getProvider("SunJCE");
        Security.removeProvider("SunJCE");
        Security.insertProviderAt(provider, 1);

        // SSL configuration
        SSLSocket socket = (SSLSocket) ctx.getSocketFactory().createSocket();
        socket.setEnabledProtocols(new String[]{PROTOCOL});
    }
}
```

**After (with markers showing detected patterns):**

```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocket;
import java.security.KeyPairGenerator;
import java.security.Security;
import java.security.Provider;

public class CryptoExample {
    private static final String ALGORITHM = "AES";
    private static final String PROTOCOL = "TLSv1.2";
    private static final int KEY_SIZE = 2048;

    public void configureCrypto() throws Exception {
        // Hardcoded algorithm
        KeyGenerator keyGen = /*~~(ALGORITHM use)~~>*/KeyGenerator.getInstance(ALGORITHM);
        /*~~(KEY_SIZE use)~~>*/keyGen.init(128);

        // Hardcoded key length
        KeyPairGenerator kpg = /*~~(ALGORITHM use)~~>*/KeyPairGenerator.getInstance("RSA");
        /*~~(KEY_SIZE use)~~>*/kpg.initialize(KEY_SIZE);

        // Hardcoded protocol
        SSLContext ctx = /*~~(PROTOCOL use)~~>*/SSLContext.getInstance(PROTOCOL);

        // Hardcoded provider
        Cipher cipher = /*~~(ALGORITHM use)~~>*/Cipher.getInstance("AES/GCM/NoPadding", "SunJCE");

        // Programmatic provider editing
        Provider provider = Security.getProvider("SunJCE");
        /*~~(PROVIDER_NAME use)~~>*/Security.removeProvider("SunJCE");
        Security.insertProviderAt(provider, 1);

        // SSL configuration
        SSLSocket socket = (SSLSocket) ctx.getSocketFactory().createSocket();
        /*~~(PROTOCOL use)~~>*/socket.setEnabledProtocols(new String[]{PROTOCOL});
    }
}
```

## Prioritizing your results

When you review the recipe's findings, understanding which algorithms are quantum-vulnerable versus quantum-resistant helps you prioritize which tasks to tackle first.

**Quantum-vulnerable algorithms** require replacement with post-quantum alternatives (e.g., RSA, ECC, DSA, etc).

**Quantum-resistant algorithms** like **AES** and **SHA-2/SHA-3** remain secure, but may need key size adjustments. The recipe flags these so you know where they're hardcoded, not because they need replacement.

Most current **TLS cipher suites** rely on RSA or ECC for key exchange and will need migration to post-quantum alternatives.

## Using the recipe

Assuming that you have installed and configured the [Moderne CLI](../../user-documentation/moderne-cli/getting-started/cli-intro.md):

```shell
# Run the post-quantum cryptography analysis
mod run . --recipe PostQuantumCryptography

# View detailed results
mod study . --last-recipe-run --data-table TaintFlowTable
mod study . --last-recipe-run --data-table InsecureSetProperties
mod study . --last-recipe-run --data-table SecurityIssues
```

## Understanding the results

The recipe generates several data tables to help you assess your quantum readiness:

### Data tables

* **TaintFlowTable**: Records taint flows from sources to sinks with their taint types.

* **InsecureSetProperties**: Documents properties set via `Security.setProperty()` that may need updating for post-quantum algorithms.

* **SecurityIssues**: A list of security issues in the repository.

These tables provide a comprehensive inventory of your cryptographic usage, which is the essential first step in planning a migration to post-quantum cryptography.

## Migration planning

Prioritize migration based on data sensitivity (especially data requiring 10+ years confidentiality), system criticality, and external dependencies.

NIST has standardized these post-quantum cryptographic algorithms:

* **ML-KEM** (formerly CRYSTALS-Kyber): For key encapsulation mechanisms
* **ML-DSA** (formerly CRYSTALS-Dilithium): For digital signatures
* **SLH-DSA** (formerly SPHINCS+): For hash-based signatures

## Next steps

Use the post-quantum cryptography recipe as part of your security assessment strategy:

* [SQL Injection Detection](./sql-injection.md) - Maintain security during migration
* [Command Injection Analysis](./command-injection.md) - Comprehensive security analysis
* [PII Protection](./pii-protection.md) - Protect sensitive data
* [Security Analysis Overview](./overview.md) - Complete security picture
