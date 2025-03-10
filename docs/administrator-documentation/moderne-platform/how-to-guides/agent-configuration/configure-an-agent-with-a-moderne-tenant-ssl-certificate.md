---
sidebar_label: Moderne tenant SSL certificate configuration
description: How to configure the Moderne agent with Moderne tenant SSL certificates.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an agent with a Moderne tenant SSL certificate

If your enterprise network security posture requires SSL certificates to be trusted prior to initiating an HTTPS request to your Moderne tenant, you will need to:

* Download the Moderne certificate from your Moderne tenant:

```bash
openssl s_client -showcerts -connect <tenant_name>.moderne.io:443 </dev/null 2>/dev/null | openssl x509 -outform DER > moderne_cert.der
```

* Add the Moderne certificate to the default TrustStore of the agent's JRE:

```bash
keytool -import -trustcacerts -keystore $JAVA_HOME/lib/security/cacerts -storepass changeit -noprompt -alias moderne-cert -file moderne_cert.der
```
