---
sidebar_label: Client SSL certificate configuration
description: How to configure Moderne DX to connect to a service with a self-signed certificate. 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure Moderne DX service with client SSL certificates

If you are configuring the Moderne DX service to connect to a service that requires a self-signed certificate to perform an HTTPS request (e.g., Maven or Artifactory) you will need to:

* Supply a KeyStore for the service to use in the `PKCS12` format at the following location: `${JAVA_HOME}/lib/security/client_keystore.p12`
* Configure the service to `skipSSL` for this service (See the [Artifactory](./configure-dx-with-artifactory-recipes.md) or [Maven](./configure-dx-with-maven-repository-access.md) service documentation)

Below are a few examples of creating the KeyStore in some common scenarios:

<Tabs>
<TabItem value="certificate-without-key" label="Certificate without key">

```bash
RUN openssl pkcs12 -export \
-in <pathtocertfolder>/cert.pem \
-out ${JAVA_HOME}/lib/security/client_keystore.p12 \
-name ssl_cert \
-passout pass:changeit \
-nokeys
```

</TabItem>

<TabItem value="certificate-and-key-files" label="Certificate and key files">

```bash
openssl pkcs12 -export \
-in <pathtocertfolder>/cert.pem \
-inkey <pathtocertfolder>/cert.key \
-out ${JAVA_HOME}/lib/security/client_keystore.p12 \
-name ssl_cert \
-passout pass:changeit
```
</TabItem>

<TabItem value="certificate-and-key-in-one-file" label="Certificate and key in one file">

```bash
RUN openssl pkcs12 -export \
-in ${JAVA_HOME}/lib/security/s2s-cert.pem \
-out ${JAVA_HOME}/lib/security/client_keystore.p12 \
-name ssl_cert \
-passout pass:changeit
```
</TabItem>
</Tabs>

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

If you are running the service in an OCI container, you will need to create a new Dockerfile based on the Moderne DX service and supply the image with the KeyStore.

**Example:**

```docker
FROM moderne.azurecr.io/moderne-dev/moderne/moderne-dx:latest
USER root

COPY s2s-cert.pem ${JAVA_HOME}/lib/security/s2s-cert.pem

# Certificate without keys
RUN openssl pkcs12 -export \
-in ${JAVA_HOME}/lib/security/s2s-cert.pem \
-out ${JAVA_HOME}/lib/security/client_keystore.p12 \
-name ssl_cert \
-passout pass:changeit \
-nokeys
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

Nothing else needs to happen for the executable JAR flow other than ensuring the KeyStore has been added to the following location: `${JAVA_HOME}/lib/security/client_keystore.p12`

```
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
```
</TabItem>
</Tabs>

