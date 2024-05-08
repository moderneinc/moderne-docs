# Moderne CLI workshop

In this workshop, you will use the [Moderne CLI](../../getting-started/cli-intro.md), a free tool that allows developer to run OpenRewrite recipes without configuring any build plugin, to migrate various repositories from Spring Boot 2 to Spring Boot 3.

After that, we'll provide some additional examples that show other capabilities of the CLI (such as creating and viewing data tables and fixing static code analysis issues across your repositories).

### Prepare your environment

#### Download and configure the Moderne CLI

1. Go to the [Moderne platform](https://app.moderne.io) and sign in. If you don't have an account, you can sign up for free.
2. Click on help in the bottom left-hand corner and select the version of the CLI you want to download. Then select the way you'd like to install it:

![](../../.gitbook/assets/cli-download.gif)

3. Once you have it downloaded, save it somewhere that your terminal can access. If you want it available in each of your terminal windows, consider updating your `PATH` to point ot this location or aliasing `mod` to the location of the CLI. You could also save the file to a directory that's already on your `PATH` such as a `/usr/bin` directory.
4. Ensure you can run the CLI by typing `mod`.

<details>

<summary>If everything is set up correctly, you should see output similar to the following:</summary>

```
➜ mod

Moderne CLI 3.3.2

Usage:

mod [-h] [--version] [COMMAND]

Description:

Automated code remediation.

Options:

  -h, --help      Display this help message.
      --version   Display version info.

Commands:

  build                Generates LST artifacts for one or more repositories.
  clean                Clean build and run artifacts produced by the CLI.
  config               Global configuration options that are required by some
                         CLI commands.
  exec                 Execute an arbitrary shell command recursively on
                         selected repository roots.
  git                  Multi-repository git operations.
  log                  Manages a log aggregate.
  list                 Lists the repositories that can be built and published.
  monitor              (INCUBATING) Launches an HTTP server used to monitor the
                         CLI.
  publish              Publishes the LST artifacts for one or more projects.
  run                  Runs an OpenRewrite recipe locally on pre-built LSTS.
  run-history          Get information about the most recent recipe runs.
  study                Produces studies from OpenRewrite recipe data tables
                         locally.
  generate-completion  Generate bash/zsh completion script for mod.

MOD SUCCEEDED in (0.01s)
```

</details>

{% hint style="success" %}
If you want to enable tab auto-completion for CLI commands (Unix systems only), you can run:

```shell
source <(mod generate-completion)
```

or you can update your `~/.zshrc` or `~/.bashrc` file and add this command to the bottom of it:

```shell
# The next line enables shell command completion for mod
source <(mod generate-completion)
```
{% endhint %}

5. Before you run any commands, you'll want to connect the CLI to Moderne. This allows you to easily sync the recipe catalog from Moderne to your local machine, and it will allow you to download LSTs that have already been built to save time and compute power. To do this, you will need to create a Moderne access token. Go to [https://app.moderne.io/settings/access-token](https://app.moderne.io/settings/access-token), enter a name for your token, and press `generate`.
   * For more details on access token creation, please check out our [creating a personal access token doc](../moderne-platform/how-to-guides/create-api-access-tokens.md)
6. Once created, copy the token and use it in the following command so that the CLI can communicate with Moderne:

```bash
mod config moderne edit https://app.moderne.io --token mat-YOUR_TOKEN_HERE
```

7. With the Moderne connection established, install the Spring Boot recipe on your machine:

```bash
mod config recipes moderne install UpgradeSpringBoot_3_2
```

8. Select the `Migrate to Spring Boot 3.2` from the list that appears and then enter `Y` to confirm the installation.

<details>

<summary>This will look something like:</summary>

```shell
➜ mod config recipes moderne install UpgradeSpringBoot_3_2

Moderne CLI 3.3.2

[1] Migrate to Spring Boot 3.2
[2] Migrate to Spring Boot 3.1
[3] Migrate to Spring Boot 3.0
[4] Migrate to Spring Boot 2.6
[5] Upgrade to Spring Boot 2.5
[6] Migrate to Spring Boot 2.3
[7] Migrate to Spring Boot 2.2
[8] Migrate to Spring Boot 2.1
[9] Migrate Spring Boot properties to 3.0
[10] Migrate to Spring Boot 2.0
[11] Migrate Spring Boot properties to 2.0
[12] Migrate Spring Boot properties to 2.3
[13] Upgrade to springdoc-openapi 2
[14] Migrate Spring Boot properties to 2.1
[15] Migrate Spring Boot properties to 2.2
[16] Migrate Spring Boot properties to 2.5
[17] Migrate Spring Boot properties to 3.2
[18] Find patterns that require updating for Spring Boot 2.5
[19] Migrate Spring Boot properties to 3.1
[20] Remove the deprecated properties `additional-keys-to-sanitize` from the `configprops` and `env` end points
[21] Migrate to Spring Data 2.3
[22] Upgrade un-managed spring project dependencies
Select a recipe [1-22]: 1

Migrate to Spring Boot 3.2
Migrate applications to the latest Spring Boot 3.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.1.


Install org.openrewrite.recipe:rewrite-spring:5.2.0-20231219.181744-58 which contains this recipe [Yn]? Y
```

</details>

{% hint style="success" %}
Alternatively, you can sync all recipes available on Moderne with `mod config recipes moderne sync`, although this can take a while to complete.
{% endhint %}

### Configure the Spring PetClinic repository

With the CLI downloaded and configured, you're now ready to set up the repository.

1. Clone the [Spring PetClinic repository](https://github.com/spring-projects/spring-petclinic):

```bash
git clone https://github.com/spring-projects/spring-petclinic
```

2. Check out the last Spring Boot 2.0 commit:

```bash
cd spring-petclinic
git checkout b527de52f5fd19f9fe550372c017d145a3b2a809
```

3. If you tried building this repository right now, you would more than likely run into errors. This is because this version of the Spring PetClinic repo requires Java 8. To ensure that everything builds correctly, you may need to download Java 8 and update your `JAVA_HOME` environment variable. If you are on a Unix-based system, we recommend using [SDKMan](https://sdkman.io/):

```bash
sdk install java 8.0.392-zulu
sdk use java 8.0.392-zulu
```

{% hint style="info" %}
If you want to use `sdk` and the `java 8.0.392-zulu` distribution is not available for you, select any distribution that represents a Java 8 version.
{% endhint %}

{% hint style="info" %}
If you aren't on a Unix-based system or you don't want to install SDKMan, you'll need to install Java 8 and run something like:

```bash
export JAVA_HOME="C:\Program Files\Java\jdk1.8.0_202

# OR

setx JAVA_HOME "C:\Program Files\Java\jdk1.8.0_202"
```
{% endhint %}

4. With Java 8 configured, make sure that the Spring PetClinic repository builds on your machine:

```bash
./mvnw verify -DskipTests
```

5. If everything has been set up correctly, you should see a `BUILD SUCCESS` message after the project is built and the tests passed (Do not worry about any warnings that appear as long as you get the success message at the end).

### Migrate to Spring Boot 3 using the Moderne CLI

Now that the repository is configured, it's time to migrate it to Spring Boot 3 using the Moderne CLI.

{% embed url="https://www.youtube.com/watch?v=zHlVg9H_JRo" %}

1. Run the build command to generate the LST for the PetClinic repo:

```bash
mod build .
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.3.2

> Selecting repositories

> spring-projects/spring-petclinic@main
Selected 1 repositories (0.23s)

> Building LST(s)

> spring-projects/spring-petclinic@main
    Build output will be written to /Users/mikesol/Desktop/code/spring-petclinic/.moderne/build/20240429090553-7Yqcr/build.log
    > Step 1 - build with Maven
        Selected the 1.8.0_392-zulu JDK
    > Step 2 - build resources using the native CLI
    ✓ Built LST /Users/mikesol/Desktop/code/spring-petclinic/.moderne/build/20240429090553-7Yqcr/spring-petclinic-20240429090644-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
Built 1 repositories. (52s)

* What to do next
    > Run mod run . --recipe=<RecipeName>

MOD SUCCEEDED in (27s)
```

</details>

{% hint style="info" %}
If you want to run the CLI against private repositories you will [need to configure a license](../moderne-cli/getting-started/moderne-cli-license.md). This isn't needed for this workshop, though.
{% endhint %}

2. Kick off the migration recipe by running the following command from the `spring-petclinic` repository:

```bash
mod run . --recipe UpgradeSpringBoot_3_2
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.3.2

> Selecting repositories

> spring-projects/spring-petclinic@main
Selected 1 repositories (0.2s)

> Running recipe org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2

> spring-projects/spring-petclinic@main
    ✓ Fix results at /Users/mikesol/Desktop/code/spring-petclinic/.moderne/run/20240429090727-PhIhX/fix.patch
Found results on 1 repositories (1m 23s)

51s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
          org.openrewrite.table.SourcesFiles
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240429090727-PhIhX to apply the changes

MOD SUCCEEDED in (1m 24s)
```

</details>

3. The previous command will generate a patch file (`fix.patch`) that contains the changes the recipe would make to your repository. You can examine the file with your favorite editor (ctrl/command + click on the file to open it), or you can apply the changes to the code and use `git diff` to check out the changes. It's important to always double-check that the changes made match your expectations:

```bash
mod git apply . --last-recipe-run
git diff
```

<details>

<summary>You should see output similar to the following.</summary>

```diff
diff --git a/pom.xml b/pom.xml
index 0b8f9c2..5957815 100644
--- a/pom.xml
+++ b/pom.xml
@@ -10,14 +10,17 @@
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
-    <version>2.0.0.RELEASE</version>
+    <version>3.2.5</version>
   </parent>
   <name>petclinic</name>
 
   <properties>
+    <basedir>/Users/mikesol/Desktop/code/spring-petclinic</basedir>
+    <maven.compiler.source>17</maven.compiler.source>
+    <maven.compiler.target>17</maven.compiler.target>
 
     <!-- Generic properties -->
-    <java.version>1.8</java.version>
+    <java.version>17</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
 
@@ -25,7 +28,7 @@
     <webjars-bootstrap.version>3.3.6</webjars-bootstrap.version>
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
-    <wro4j.version>1.8.0</wro4j.version>
+    <wro4j.version>1.10.1</wro4j.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -53,6 +56,10 @@
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-thymeleaf</artifactId>
     </dependency>
+    <dependency>
+      <groupId>org.springframework.boot</groupId>
+      <artifactId>spring-boot-starter-validation</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-test</artifactId>
@@ -66,8 +73,13 @@
       <scope>runtime</scope>
     </dependency>
     <dependency>
-      <groupId>mysql</groupId>
-      <artifactId>mysql-connector-java</artifactId>
+      <groupId>com.mysql</groupId>
+      <artifactId>mysql-connector-j</artifactId>
+      <scope>runtime</scope>
+    </dependency>
+    <dependency>
+      <groupId>org.glassfish.jaxb</groupId>
+      <artifactId>jaxb-runtime</artifactId>
       <scope>runtime</scope>
     </dependency>
 
@@ -76,9 +88,14 @@
       <groupId>javax.cache</groupId>
       <artifactId>cache-api</artifactId>
     </dependency>
+    <dependency>
+      <groupId>jakarta.validation</groupId>
+      <artifactId>jakarta.validation-api</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.ehcache</groupId>
       <artifactId>ehcache</artifactId>
+      <classifier>jakarta</classifier>
     </dependency>
 
     <!-- webjars -->
@@ -133,22 +150,6 @@
           </execution>
         </executions>
       </plugin>
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>${cobertura.version}</version>
-        <configuration>
-          <check />
-        </configuration>
-        <executions>
-          <execution>
-            <goals>
-              <goal>clean</goal>
-              <goal>check</goal>
-            </goals>
-          </execution>
-        </executions>
-      </plugin>
 
       <!-- Spring Boot Actuator displays build-related information if a git.properties
         file is present at the classpath -->
@@ -204,17 +205,6 @@
   <reporting>
     <plugins>
       <!-- integrate maven-cobertura-plugin to project site -->
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>${cobertura.version}</version>
-        <configuration>
-          <formats>
-            <format>html</format>
-          </formats>
-          <check />
-        </configuration>
-      </plugin>
     </plugins>
   </reporting>
 
diff --git a/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java b/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
index 86cc210..d45134c 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/BaseEntity.java
@@ -17,10 +17,10 @@ package org.springframework.samples.petclinic.model;
 
 import java.io.Serializable;
 
-import javax.persistence.GeneratedValue;
-import javax.persistence.GenerationType;
-import javax.persistence.Id;
-import javax.persistence.MappedSuperclass;
+import jakarta.persistence.GeneratedValue;
+import jakarta.persistence.GenerationType;
+import jakarta.persistence.Id;
+import jakarta.persistence.MappedSuperclass;
 
 /**
  * Simple JavaBean domain object with an id property. Used as a base class for objects
diff --git a/src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java b/src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java
index d66c97a..83bb717 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/NamedEntity.java
@@ -15,8 +15,8 @@
  */
 package org.springframework.samples.petclinic.model;
 
-import javax.persistence.Column;
-import javax.persistence.MappedSuperclass;
+import jakarta.persistence.Column;
+import jakarta.persistence.MappedSuperclass;
 
 
 /**
diff --git a/src/main/java/org/springframework/samples/petclinic/model/Person.java b/src/main/java/org/springframework/samples/petclinic/model/Person.java
index 5d23523..7294998 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/Person.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/Person.java
@@ -15,9 +15,9 @@
  */
 package org.springframework.samples.petclinic.model;
 
-import javax.persistence.Column;
-import javax.persistence.MappedSuperclass;
-import javax.validation.constraints.NotEmpty;
+import jakarta.persistence.Column;
+import jakarta.persistence.MappedSuperclass;
+import jakarta.validation.constraints.NotEmpty;
 
 /**
  * Simple JavaBean domain object representing an person.
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/Owner.java b/src/main/java/org/springframework/samples/petclinic/owner/Owner.java
index 89aad2c..063c750 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/Owner.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/Owner.java
@@ -21,13 +21,13 @@ import java.util.HashSet;
 import java.util.List;
 import java.util.Set;
 
-import javax.persistence.CascadeType;
-import javax.persistence.Column;
-import javax.persistence.Entity;
-import javax.persistence.OneToMany;
-import javax.persistence.Table;
-import javax.validation.constraints.Digits;
-import javax.validation.constraints.NotEmpty;
+import jakarta.persistence.CascadeType;
+import jakarta.persistence.Column;
+import jakarta.persistence.Entity;
+import jakarta.persistence.OneToMany;
+import jakarta.persistence.Table;
+import jakarta.validation.constraints.Digits;
+import jakarta.validation.constraints.NotEmpty;
 
 import org.springframework.beans.support.MutableSortDefinition;
 import org.springframework.beans.support.PropertyComparator;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java b/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java
index d914ed7..a25870b 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.ui.Model;
 import org.springframework.validation.BindingResult;
@@ -26,7 +25,7 @@ import org.springframework.web.bind.annotation.PathVariable;
 import org.springframework.web.bind.annotation.PostMapping;
 import org.springframework.web.servlet.ModelAndView;
 
-import javax.validation.Valid;
+import jakarta.validation.Valid;
 import java.util.Collection;
 import java.util.Map;
 
@@ -43,7 +42,6 @@ class OwnerController {
     private final OwnerRepository owners;
 
 
-    @Autowired
     public OwnerController(OwnerRepository clinicService) {
         this.owners = clinicService;
     }
@@ -102,14 +100,14 @@ class OwnerController {
     }
 
     @GetMapping("/owners/{ownerId}/edit")
-    public String initUpdateOwnerForm(@PathVariable("ownerId") int ownerId, Model model) {
+    public String initUpdateOwnerForm(@PathVariable int ownerId, Model model) {
         Owner owner = this.owners.findById(ownerId);
         model.addAttribute(owner);
         return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
     }
 
     @PostMapping("/owners/{ownerId}/edit")
-    public String processUpdateOwnerForm(@Valid Owner owner, BindingResult result, @PathVariable("ownerId") int ownerId) {
+    public String processUpdateOwnerForm(@Valid Owner owner, BindingResult result, @PathVariable int ownerId) {
         if (result.hasErrors()) {
             return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
         } else {
@@ -126,7 +124,7 @@ class OwnerController {
      * @return a ModelMap with the model attributes for the view
      */
     @GetMapping("/owners/{ownerId}")
-    public ModelAndView showOwner(@PathVariable("ownerId") int ownerId) {
+    public ModelAndView showOwner(@PathVariable int ownerId) {
         ModelAndView mav = new ModelAndView("owners/ownerDetails");
         mav.addObject(this.owners.findById(ownerId));
         return mav;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/Pet.java b/src/main/java/org/springframework/samples/petclinic/owner/Pet.java
index 5e226a1..106934b 100755
--- a/src/main/java/org/springframework/samples/petclinic/owner/Pet.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/Pet.java
@@ -23,16 +23,16 @@ import java.util.LinkedHashSet;
 import java.util.List;
 import java.util.Set;
 
-import javax.persistence.CascadeType;
-import javax.persistence.Column;
-import javax.persistence.Entity;
-import javax.persistence.FetchType;
-import javax.persistence.JoinColumn;
-import javax.persistence.ManyToOne;
-import javax.persistence.OneToMany;
-import javax.persistence.Table;
-import javax.persistence.Temporal;
-import javax.persistence.TemporalType;
+import jakarta.persistence.CascadeType;
+import jakarta.persistence.Column;
+import jakarta.persistence.Entity;
+import jakarta.persistence.FetchType;
+import jakarta.persistence.JoinColumn;
+import jakarta.persistence.ManyToOne;
+import jakarta.persistence.OneToMany;
+import jakarta.persistence.Table;
+import jakarta.persistence.Temporal;
+import jakarta.persistence.TemporalType;
 
 import org.springframework.beans.support.MutableSortDefinition;
 import org.springframework.beans.support.PropertyComparator;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
index 9c52e03..8694be1 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.ui.ModelMap;
 import org.springframework.util.StringUtils;
@@ -23,7 +22,7 @@ import org.springframework.validation.BindingResult;
 import org.springframework.web.bind.WebDataBinder;
 import org.springframework.web.bind.annotation.*;
 
-import javax.validation.Valid;
+import jakarta.validation.Valid;
 import java.util.Collection;
 
 /**
@@ -39,7 +38,6 @@ class PetController {
     private final PetRepository pets;
     private final OwnerRepository owners;
 
-    @Autowired
     public PetController(PetRepository pets, OwnerRepository owners) {
         this.pets = pets;
         this.owners = owners;
@@ -51,7 +49,7 @@ class PetController {
     }
 
     @ModelAttribute("owner")
-    public Owner findOwner(@PathVariable("ownerId") int ownerId) {
+    public Owner findOwner(@PathVariable int ownerId) {
         return this.owners.findById(ownerId);
     }
 
@@ -89,7 +87,7 @@ class PetController {
     }
 
     @GetMapping("/pets/{petId}/edit")
-    public String initUpdateForm(@PathVariable("petId") int petId, ModelMap model) {
+    public String initUpdateForm(@PathVariable int petId, ModelMap model) {
         Pet pet = this.pets.findById(petId);
         model.put("pet", pet);
         return VIEWS_PETS_CREATE_OR_UPDATE_FORM;
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetType.java b/src/main/java/org/springframework/samples/petclinic/owner/PetType.java
index ac827b3..e6a7271 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetType.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetType.java
@@ -15,8 +15,8 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import javax.persistence.Entity;
-import javax.persistence.Table;
+import jakarta.persistence.Entity;
+import jakarta.persistence.Table;
 
 import org.springframework.samples.petclinic.model.NamedEntity;
 
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java b/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java
index 78451ca..8ad364f 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java
@@ -20,7 +20,6 @@ import java.text.ParseException;
 import java.util.Collection;
 import java.util.Locale;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.format.Formatter;
 import org.springframework.stereotype.Component;
 
@@ -41,7 +40,6 @@ public class PetTypeFormatter implements Formatter<PetType> {
     private final PetRepository pets;
 
 
-    @Autowired
     public PetTypeFormatter(PetRepository pets) {
         this.pets = pets;
     }
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java b/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java
index d7afed1..c7e6109 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/VisitController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.samples.petclinic.visit.Visit;
 import org.springframework.samples.petclinic.visit.VisitRepository;
 import org.springframework.stereotype.Controller;
@@ -23,7 +22,7 @@ import org.springframework.validation.BindingResult;
 import org.springframework.web.bind.WebDataBinder;
 import org.springframework.web.bind.annotation.*;
 
-import javax.validation.Valid;
+import jakarta.validation.Valid;
 import java.util.Map;
 
 /**
@@ -40,7 +39,6 @@ class VisitController {
     private final PetRepository pets;
 
 
-    @Autowired
     public VisitController(VisitRepository visits, PetRepository pets) {
         this.visits = visits;
         this.pets = pets;
@@ -62,7 +60,7 @@ class VisitController {
      * @return Pet
      */
     @ModelAttribute("visit")
-    public Visit loadPetWithVisit(@PathVariable("petId") int petId, Map<String, Object> model) {
+    public Visit loadPetWithVisit(@PathVariable int petId, Map<String, Object> model) {
         Pet pet = this.pets.findById(petId);
         model.put("pet", pet);
         Visit visit = new Visit();
@@ -72,7 +70,7 @@ class VisitController {
 
     // Spring MVC calls method loadPetWithVisit(...) before initNewVisitForm is called
     @GetMapping("/owners/*/pets/{petId}/visits/new")
-    public String initNewVisitForm(@PathVariable("petId") int petId, Map<String, Object> model) {
+    public String initNewVisitForm(@PathVariable int petId, Map<String, Object> model) {
         return "pets/createOrUpdateVisitForm";
     }
 
diff --git a/src/main/java/org/springframework/samples/petclinic/system/CrashController.java b/src/main/java/org/springframework/samples/petclinic/system/CrashController.java
index 2f5e7a3..29f4fd5 100644
--- a/src/main/java/org/springframework/samples/petclinic/system/CrashController.java
+++ b/src/main/java/org/springframework/samples/petclinic/system/CrashController.java
@@ -30,8 +30,10 @@ class CrashController {
 
     @GetMapping("/oups")
     public String triggerException() {
-        throw new RuntimeException("Expected: controller used to showcase what "
-                + "happens when an exception is thrown");
+        throw new RuntimeException("""
+                Expected: controller used to showcase what \
+                happens when an exception is thrown\
+                """);
     }
 
 }
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java b/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java
index 5691c24..7727e21 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/Specialty.java
@@ -17,8 +17,8 @@ package org.springframework.samples.petclinic.vet;
 
 import java.io.Serializable;
 
-import javax.persistence.Entity;
-import javax.persistence.Table;
+import jakarta.persistence.Entity;
+import jakarta.persistence.Table;
 
 import org.springframework.samples.petclinic.model.NamedEntity;
 
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/Vet.java b/src/main/java/org/springframework/samples/petclinic/vet/Vet.java
index 43aecc4..d2841dd 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/Vet.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/Vet.java
@@ -21,13 +21,13 @@ import java.util.HashSet;
 import java.util.List;
 import java.util.Set;
 
-import javax.persistence.Entity;
-import javax.persistence.FetchType;
-import javax.persistence.JoinColumn;
-import javax.persistence.JoinTable;
-import javax.persistence.ManyToMany;
-import javax.persistence.Table;
-import javax.xml.bind.annotation.XmlElement;
+import jakarta.persistence.Entity;
+import jakarta.persistence.FetchType;
+import jakarta.persistence.JoinColumn;
+import jakarta.persistence.JoinTable;
+import jakarta.persistence.ManyToMany;
+import jakarta.persistence.Table;
+import jakarta.xml.bind.annotation.XmlElement;
 
 import org.springframework.beans.support.MutableSortDefinition;
 import org.springframework.beans.support.PropertyComparator;
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
index 7ce8374..ddaa364 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.vet;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.ResponseBody;
@@ -33,7 +32,6 @@ class VetController {
 
     private final VetRepository vets;
 
-    @Autowired
     public VetController(VetRepository clinicService) {
         this.vets = clinicService;
     }
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/Vets.java b/src/main/java/org/springframework/samples/petclinic/vet/Vets.java
index f5b24c3..c90b652 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/Vets.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/Vets.java
@@ -18,8 +18,8 @@ package org.springframework.samples.petclinic.vet;
 import java.util.ArrayList;
 import java.util.List;
 
-import javax.xml.bind.annotation.XmlElement;
-import javax.xml.bind.annotation.XmlRootElement;
+import jakarta.xml.bind.annotation.XmlElement;
+import jakarta.xml.bind.annotation.XmlRootElement;
 
 /**
  * Simple domain object representing a list of veterinarians. Mostly here to be used for the 'vets' {@link
diff --git a/src/main/java/org/springframework/samples/petclinic/visit/Visit.java b/src/main/java/org/springframework/samples/petclinic/visit/Visit.java
index ce10d7b..2a5e854 100755
--- a/src/main/java/org/springframework/samples/petclinic/visit/Visit.java
+++ b/src/main/java/org/springframework/samples/petclinic/visit/Visit.java
@@ -17,12 +17,12 @@ package org.springframework.samples.petclinic.visit;
 
 import java.util.Date;
 
-import javax.persistence.Column;
-import javax.persistence.Entity;
-import javax.persistence.Table;
-import javax.persistence.Temporal;
-import javax.persistence.TemporalType;
-import javax.validation.constraints.NotEmpty;
+import jakarta.persistence.Column;
+import jakarta.persistence.Entity;
+import jakarta.persistence.Table;
+import jakarta.persistence.Temporal;
+import jakarta.persistence.TemporalType;
+import jakarta.validation.constraints.NotEmpty;
 
 import org.springframework.format.annotation.DateTimeFormat;
 import org.springframework.samples.petclinic.model.BaseEntity;
diff --git a/src/main/resources/application.properties b/src/main/resources/application.properties
index c8d5a5c..0616806 100644
--- a/src/main/resources/application.properties
+++ b/src/main/resources/application.properties
@@ -1,7 +1,7 @@
 # database init, supports mysql too
 database=hsqldb
-spring.datasource.schema=classpath*:db/${database}/schema.sql
-spring.datasource.data=classpath*:db/${database}/data.sql
+spring.sql.init.schema-locations=classpath*:db/${database}/schema.sql
+spring.sql.init.data-locations=classpath*:db/${database}/data.sql
 
 # Web
 spring.thymeleaf.mode=HTML
diff --git a/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java b/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java
index 7da0d3d..61bf5ee 100644
--- a/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java
@@ -3,11 +3,10 @@ package org.springframework.samples.petclinic.model;
 import java.util.Locale;
 import java.util.Set;
 
-import javax.validation.ConstraintViolation;
-import javax.validation.Validator;
-
-import org.junit.Test;
+import jakarta.validation.ConstraintViolation;
+import jakarta.validation.Validator;
 
+import org.junit.jupiter.api.Test;
 import org.springframework.context.i18n.LocaleContextHolder;
 import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
 
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java b/src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java
index 7fccb3b..5c3af0d 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java
@@ -10,16 +10,14 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
 import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;
 
 import org.assertj.core.util.Lists;
-import org.junit.Before;
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import org.junit.jupiter.api.BeforeEach;
+import org.junit.jupiter.api.Test;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
 import org.springframework.boot.test.mock.mockito.MockBean;
 import org.springframework.samples.petclinic.owner.Owner;
 import org.springframework.samples.petclinic.owner.OwnerController;
 import org.springframework.samples.petclinic.owner.OwnerRepository;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 
 /**
@@ -27,7 +25,6 @@ import org.springframework.test.web.servlet.MockMvc;
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(OwnerController.class)
 public class OwnerControllerTests {
 
@@ -41,7 +38,7 @@ public class OwnerControllerTests {
 
     private Owner george;
 
-    @Before
+    @BeforeEach
     public void setup() {
         george = new Owner();
         george.setId(TEST_OWNER_ID);
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java
index f95d7c8..9944da2 100755
--- a/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java
@@ -8,9 +8,8 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
 import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;
 
 import org.assertj.core.util.Lists;
-import org.junit.Before;
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import org.junit.jupiter.api.BeforeEach;
+import org.junit.jupiter.api.Test;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
 import org.springframework.boot.test.mock.mockito.MockBean;
@@ -23,7 +22,6 @@ import org.springframework.samples.petclinic.owner.PetController;
 import org.springframework.samples.petclinic.owner.PetRepository;
 import org.springframework.samples.petclinic.owner.PetType;
 import org.springframework.samples.petclinic.owner.PetTypeFormatter;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 
 /**
@@ -31,7 +29,6 @@ import org.springframework.test.web.servlet.MockMvc;
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(value = PetController.class,
     includeFilters = @ComponentScan.Filter(
                             value = PetTypeFormatter.class,
@@ -51,7 +48,7 @@ public class PetControllerTests {
     @MockBean
     private OwnerRepository owners;
 
-    @Before
+    @BeforeEach
     public void setup() {
         PetType cat = new PetType();
         cat.setId(3);
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
index 4e8e36c..5a0d831 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
@@ -6,21 +6,22 @@ import java.util.Collection;
 import java.util.List;
 import java.util.Locale;
 
-import org.junit.Before;
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import static org.junit.jupiter.api.Assertions.assertEquals;
+import static org.junit.jupiter.api.Assertions.assertThrows;
+
+import org.junit.jupiter.api.BeforeEach;
+import org.junit.jupiter.api.Test;
+import org.junit.jupiter.api.extension.ExtendWith;
 import org.mockito.Mock;
 import org.mockito.Mockito;
-import org.mockito.junit.MockitoJUnitRunner;
-
-import static org.junit.Assert.assertEquals;
+import org.mockito.junit.jupiter.MockitoExtension;
 
 /**
  * Test class for {@link PetTypeFormatter}
  *
  * @author Colin But
  */
-@RunWith(MockitoJUnitRunner.class)
+@ExtendWith(MockitoExtension.class)
 public class PetTypeFormatterTests {
 
     @Mock
@@ -28,7 +29,7 @@ public class PetTypeFormatterTests {
 
     private PetTypeFormatter petTypeFormatter;
 
-    @Before
+    @BeforeEach
     public void setup() {
         this.petTypeFormatter = new PetTypeFormatter(pets);
     }
@@ -48,10 +49,12 @@ public class PetTypeFormatterTests {
         assertEquals("Bird", petType.getName());
     }
 
-    @Test(expected = ParseException.class)
+    @Test
     public void shouldThrowParseException() throws ParseException {
-        Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
-        petTypeFormatter.parse("Fish", Locale.ENGLISH);
+        assertThrows(ParseException.class, () -> {
+            Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
+            petTypeFormatter.parse("Fish", Locale.ENGLISH);
+        });
     }
 
     /**
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java b/src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java
index 08d6136..7cc65f2 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java
@@ -7,9 +7,8 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
 import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
 import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;
 
-import org.junit.Before;
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import org.junit.jupiter.api.BeforeEach;
+import org.junit.jupiter.api.Test;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
 import org.springframework.boot.test.mock.mockito.MockBean;
@@ -17,7 +16,6 @@ import org.springframework.samples.petclinic.owner.Pet;
 import org.springframework.samples.petclinic.owner.PetRepository;
 import org.springframework.samples.petclinic.owner.VisitController;
 import org.springframework.samples.petclinic.visit.VisitRepository;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 
 /**
@@ -25,7 +23,6 @@ import org.springframework.test.web.servlet.MockMvc;
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(VisitController.class)
 public class VisitControllerTests {
 
@@ -40,7 +37,7 @@ public class VisitControllerTests {
     @MockBean
     private PetRepository pets;
 
-    @Before
+    @BeforeEach
     public void init() {
         given(this.pets.findById(TEST_PET_ID)).willReturn(new Pet());
     }
diff --git a/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java b/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java
index 7ed5bf8..37c8c43 100644
--- a/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java
@@ -5,8 +5,7 @@ import static org.assertj.core.api.Assertions.assertThat;
 import java.util.Collection;
 import java.util.Date;
 
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import org.junit.jupiter.api.Test;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
 import org.springframework.context.annotation.ComponentScan;
@@ -20,7 +19,6 @@ import org.springframework.samples.petclinic.vet.VetRepository;
 import org.springframework.samples.petclinic.visit.Visit;
 import org.springframework.samples.petclinic.visit.VisitRepository;
 import org.springframework.stereotype.Service;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.transaction.annotation.Transactional;
 
 /**
@@ -44,7 +42,6 @@ import org.springframework.transaction.annotation.Transactional;
  * @author Dave Syer
  */
 
-@RunWith(SpringRunner.class)
 @DataJpaTest(includeFilters = @ComponentScan.Filter(Service.class))
 public class ClinicServiceTests {
 
diff --git a/src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java b/src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java
index 3f108bf..5f2ca2f 100644
--- a/src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java
@@ -1,12 +1,10 @@
 package org.springframework.samples.petclinic.system;
 
-import org.junit.Ignore;
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import org.junit.jupiter.api.Disabled;
+import org.junit.jupiter.api.Test;
 
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 
 import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
@@ -20,9 +18,7 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
-// Waiting https://github.com/spring-projects/spring-boot/issues/5574
-@Ignore
+@Disabled
 @WebMvcTest(controllers = CrashController.class)
 public class CrashControllerTests {
 
diff --git a/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java b/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java
index 9636e36..5d436ba 100644
--- a/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java
@@ -1,14 +1,11 @@
 package org.springframework.samples.petclinic.system;
 
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import org.junit.jupiter.api.Test;
 
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.context.SpringBootTest;
 import org.springframework.samples.petclinic.vet.VetRepository;
-import org.springframework.test.context.junit4.SpringRunner;
 
-@RunWith(SpringRunner.class)
 @SpringBootTest
 public class ProductionConfigurationTests {
 
diff --git a/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java b/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java
index ce6adf8..60095d8 100644
--- a/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java
@@ -10,9 +10,8 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
 import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;
 
 import org.assertj.core.util.Lists;
-import org.junit.Before;
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import org.junit.jupiter.api.BeforeEach;
+import org.junit.jupiter.api.Test;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
 import org.springframework.boot.test.mock.mockito.MockBean;
@@ -21,14 +20,12 @@ import org.springframework.samples.petclinic.vet.Specialty;
 import org.springframework.samples.petclinic.vet.Vet;
 import org.springframework.samples.petclinic.vet.VetController;
 import org.springframework.samples.petclinic.vet.VetRepository;
-import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 import org.springframework.test.web.servlet.ResultActions;
 
 /**
  * Test class for the {@link VetController}
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(VetController.class)
 public class VetControllerTests {
 
@@ -38,7 +35,7 @@ public class VetControllerTests {
     @MockBean
     private VetRepository vets;
 
-    @Before
+    @BeforeEach
     public void setup() {
         Vet james = new Vet();
         james.setFirstName("James");
diff --git a/src/test/java/org/springframework/samples/petclinic/vet/VetTests.java b/src/test/java/org/springframework/samples/petclinic/vet/VetTests.java
index de3a7b9..c512e86 100644
--- a/src/test/java/org/springframework/samples/petclinic/vet/VetTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/vet/VetTests.java
@@ -15,8 +15,7 @@
  */
 package org.springframework.samples.petclinic.vet;
 
-import org.junit.Test;
-
+import org.junit.jupiter.api.Test;
 import org.springframework.util.SerializationUtils;
 
 import static org.assertj.core.api.Assertions.assertThat;
```

</details>

If you look at the results, you should see that:

* The `@Autowired` annotation was removed
* JUnit 4 has been replaced with JUnit 5
* `javax` has been replaced with `jakarta`
* The code has been migrated to Java 17, and text blocks are used
* Some best practices are applied (such as adding the `public` test method modifier)

Some of you might be tempted to run `./mvnw verify` to confirm that the build works. Unfortunately, this isn't the case as the commit we started from is using `Wro4j` -- which has [some slight dependency conflicts](https://github.com/wro4j/wro4j/issues/1129). We've decided not to cover `Wro4j` with recipes for now, as [Spring PetClinic has dropped Wro4J](https://github.com/spring-projects/spring-petclinic/pull/868) as well.

### Run a recipe on multiple local repositories

In the previous example, we used the Moderne CLI to run a recipe against a repository on your local machine. This is fine when you only have one repository you're working with. However, what if you wanted to run a recipe against many repositories at once? Checking them out locally, building each of them, and then running a separate command for each would take a considerable amount of time.

Fortunately, the Moderne CLI offers the ability to work on groups of repositories. This can be especially helpful when you're working on debugging a new recipe and want to test it against many repositories at once.

For this exercise, we have prepared a list of Spring 2.x open-source repositories from the `spring-projects` GitHub organization that can be migrated. These repositories have been added to the Moderne platform and put inside the `Spring Projects 2.x` organization.

{% embed url="https://www.youtube.com/watch?v=cs-6FJ_mtro" %}

To clone all of these repositories at once:

```bash
mkdir -p $HOME/workshop
mod git clone moderne $HOME/workshop "Spring Projects 2.x"
```

If you look in the `$HOME/workshop/` directory, you should see 3 different repositories:

```bash
ls -ltr $HOME/workshop/ # For Mac/Unix users
dir $HOME/workshop      # For Windows users
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
total 8
drwxr-xr-x@ 19 mikesol  staff   608 Apr  8 14:15 spring-data-commons
drwxr-xr-x@ 13 mikesol  staff   416 Apr  8 14:15 spring-data-release
-rw-r--r--@  1 mikesol  staff  1816 Apr  8 14:15 clone.log
drwxr-xr-x@ 14 mikesol  staff   448 Apr  8 14:15 spring-session-data-mongodb-examples
```

</details>

Now that you have the repositories locally, you can run a recipe against all of them at once. Since all of these repositories have their LSTs published onto the Moderne platform, the build operation will download the LSTs without having to build the repositories locally. This will save you a lot of time!

```bash
mod build $HOME/workshop
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.3.2

> Selecting repositories

> spring-projects/spring-data-commons@main
> spring-projects/spring-data-release@main
> spring-projects/spring-session-data-mongodb-examples@main
Selected 3 repositories (0.26s)

> Building LST(s)

> spring-projects/spring-data-commons@main
    Build output will be written to /Users/mikesol/workshop/spring-data-commons/.moderne/build/20240429092425-0rhlX/build.log
    > Step 1 - download from Moderne
    ! Failed to download the LST from Moderne. Proceeding to build the LST locally
    > Step 1 - build with Maven
        Selected the 17.0.7-tem JDK
    > Step 2 - build with mod-java
        Selected the 21.0.1-oracle JDK
    > Step 3 - build resources using the native CLI
    ✓ Built LST /Users/mikesol/workshop/spring-data-commons/.moderne/build/20240429092425-0rhlX/spring-data-commons-20240429092532-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> spring-projects/spring-data-release@main
    Build output will be written to /Users/mikesol/workshop/spring-data-release/.moderne/build/20240429092425-0rhlX/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/spring-data-release/.moderne/build/20240429092425-0rhlX/spring-data-release-20240429025646-ast.jar
    + Cleaned 0 older builds.
> spring-projects/spring-session-data-mongodb-examples@main
    Build output will be written to /Users/mikesol/workshop/spring-session-data-mongodb-examples/.moderne/build/20240429092425-0rhlX/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/spring-session-data-mongodb-examples/.moderne/build/20240429092425-0rhlX/spring-session-data-mongodb-examples-20240429114145-ast.jar
    + Cleaned 0 older builds.
Built 3 repositories. (1m 8s)

2m 17s saved by using previously built LSTs

* What to do next
    > Run mod run /Users/mikesol/workshop --recipe=<RecipeName>

MOD SUCCEEDED in (1m 9s)
```

</details>

```bash
mod run $HOME/workshop --recipe UpgradeSpringBoot_3_2
```

You can preview the changes by command/ctrl clicking on the patch file generated when running the recipe:

```bash
➜  ~ mod run $HOME/workshop --recipe UpgradeSpringBoot_3_2

Moderne CLI 3.3.2

> Selecting repositories

> spring-projects/spring-data-commons@main
> spring-projects/spring-data-release@main
> spring-projects/spring-session-data-mongodb-examples@main
Selected 3 repositories (0.18s)

> Running recipe org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2

> spring-projects/spring-data-commons@main
	# Command/ctrl click on the following file:
    ✓ Fix results at /Users/mikesol/workshop/spring-data-commons/.moderne/run/20240408141902-kHLCn/fix.patch
	...
```

You can then apply the changes to all of these repositories at once with the following command:

```bash
mod git apply $HOME/workshop --last-recipe-run
```

Next, you can add the changes so that they're ready to be committed with the following command:

```bash
mod git add $HOME/workshop --last-recipe-run
```

Finally, you can commit the changes to all the repositories at once with the following command:

{% hint style="info" %}
If you normally GPG sign your commits, please note that the [Moderne CLI does not currently support that](https://github.com/moderneinc/moderne-cli/issues/1543), and you will need to disable it for the `mod git commit` command to run.
{% endhint %}

```bash
mod git commit $HOME/workshop -m "Migrate to Spring Boot 3.2" --last-recipe-run
```

If you'd rather make a branch for each repository and make changes in that, you can use the `mod checkout` command before running `mod commit` to commit the changes. This might be useful if you want to create a pull request for each repository.

### (Optional) Data tables example

If you have time, the following example will demonstrate how to create and view the data tables available after a recipe runs.

#### Step 0: Create a new directory for the repositories:

```bash
mkdir $HOME/workshop/default
cd $HOME/workshop/default
```

#### Step 1: Clone repositories

Run the command:

```bash
mod git clone moderne . "Default"
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.3.2

> Listing repositories from Moderne

Moderne contains 12 repositories in Default. Cloning the first 12.

> Cloning repositories

Clone output will be written to /Users/mikesol/workshop/default/./clone.log

> blitz4j@master
> dynomite-manager@dev
> Fenzo@master
> hollow@master
> ndbench@master
> Priam@3.x
> spring-cloud-circuitbreaker@main
> spring-cloud-common-security-config@main
> spring-cloud-core-tests@main
> spring-cloud-netflix@main
> spring-hateoas-examples@main
> spring-petclinic@main
Cloned 12 repositories (32s)
```

</details>

#### Step 2: Build the LSTs

Run the command:

```bash
mod build .
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.3.2

> Selecting repositories

> Netflix/blitz4j@master
> Netflix/dynomite-manager@dev
> Netflix/Fenzo@master
> Netflix/hollow@master
> Netflix/ndbench@master
> Netflix/Priam@3.x
> spring-cloud/spring-cloud-circuitbreaker@main
> spring-cloud/spring-cloud-common-security-config@main
> spring-cloud/spring-cloud-core-tests@main
> spring-cloud/spring-cloud-netflix@main
> spring-projects/spring-hateoas-examples@main
> spring-projects/spring-petclinic@main
Selected 12 repositories (0.34s)

> Building LST(s)

> Netflix/blitz4j@master
    Build output will be written to /Users/mikesol/workshop/default/blitz4j/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/blitz4j/.moderne/build/20240429093337-JkwaY/blitz4j-20240429013713-ast.jar
    + Cleaned 0 older builds.
> Netflix/dynomite-manager@dev
    Build output will be written to /Users/mikesol/workshop/default/dynomite-manager/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/dynomite-manager/.moderne/build/20240429093337-JkwaY/dynomite-manager-20240429020614-ast.jar
    + Cleaned 0 older builds.
> Netflix/Fenzo@master
    Build output will be written to /Users/mikesol/workshop/default/Fenzo/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/Fenzo/.moderne/build/20240429093337-JkwaY/Fenzo-20240429054936-ast.jar
    + Cleaned 0 older builds.
> Netflix/hollow@master
    Build output will be written to /Users/mikesol/workshop/default/hollow/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/hollow/.moderne/build/20240429093337-JkwaY/hollow-20240429114403-ast.jar
    + Cleaned 0 older builds.
> Netflix/ndbench@master
    Build output will be written to /Users/mikesol/workshop/default/ndbench/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/ndbench/.moderne/build/20240429093337-JkwaY/ndbench-20240429144252-ast.jar
    + Cleaned 0 older builds.
> Netflix/Priam@3.x
    Build output will be written to /Users/mikesol/workshop/default/Priam/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/Priam/.moderne/build/20240429093337-JkwaY/Priam-20240429013913-ast.jar
    + Cleaned 0 older builds.
> spring-cloud/spring-cloud-circuitbreaker@main
    Build output will be written to /Users/mikesol/workshop/default/spring-cloud-circuitbreaker/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-cloud-circuitbreaker/.moderne/build/20240429093337-JkwaY/spring-cloud-circuitbreaker-20240428083116-ast.jar
    + Cleaned 0 older builds.
> spring-cloud/spring-cloud-common-security-config@main
    Build output will be written to /Users/mikesol/workshop/default/spring-cloud-common-security-config/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-cloud-common-security-config/.moderne/build/20240429093337-JkwaY/spring-cloud-common-security-config-20240429141351-ast.jar
    + Cleaned 0 older builds.
> spring-cloud/spring-cloud-core-tests@main
    Build output will be written to /Users/mikesol/workshop/default/spring-cloud-core-tests/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-cloud-core-tests/.moderne/build/20240429093337-JkwaY/spring-cloud-core-tests-20240429070354-ast.jar
    + Cleaned 0 older builds.
> spring-cloud/spring-cloud-netflix@main
    Build output will be written to /Users/mikesol/workshop/default/spring-cloud-netflix/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-cloud-netflix/.moderne/build/20240429093337-JkwaY/spring-cloud-netflix-20240428230728-ast.jar
    + Cleaned 0 older builds.
> spring-projects/spring-hateoas-examples@main
    Build output will be written to /Users/mikesol/workshop/default/spring-hateoas-examples/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-hateoas-examples/.moderne/build/20240429093337-JkwaY/spring-hateoas-examples-20240429083949-ast.jar
    + Cleaned 0 older builds.
> spring-projects/spring-petclinic@main
    Build output will be written to /Users/mikesol/workshop/default/spring-petclinic/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-petclinic/.moderne/build/20240429093337-JkwaY/spring-petclinic-20240428215542-ast.jar
    + Cleaned 0 older builds.
Built 12 repositories. (6s)

31m 13s saved by using previously built LSTs

* What to do next
    > Run mod run . --recipe=<RecipeName>

MOD SUCCEEDED in (6s)
```

</details>

#### Step 3: Install recipes

If you want to install all the recipes in Moderne:

```bash
mod config recipes moderne sync
```

If you want to install just the recipe we'll use below:

```bash
mod config recipes moderne install UpgradeToJava17
```

Then select the `Migrate to Java 17` recipe from the list

#### Step 4: Run the refactoring recipe against all of the repos

```bash
mod run . --recipe UpgradeToJava17
```

<details>

<summary>You should see results similar to the following</summary>

```bash
Moderne CLI 3.3.2

> Selecting repositories

> Netflix/blitz4j@master
> Netflix/dynomite-manager@dev
> Netflix/Fenzo@master
> Netflix/hollow@master
> Netflix/ndbench@master
> Netflix/Priam@3.x
> spring-cloud/spring-cloud-circuitbreaker@main
> spring-cloud/spring-cloud-common-security-config@main
> spring-cloud/spring-cloud-core-tests@main
> spring-cloud/spring-cloud-netflix@main
> spring-projects/spring-hateoas-examples@main
> spring-projects/spring-petclinic@main
Selected 12 repositories (0.35s)

[1] Migrate to Java 17 (org.openrewrite.java.migrate.UpgradeToJava17)
[2] Migrate to Java 17 (io.quarkus.updates.core.quarkus37.UpgradeToJava17)
Select a recipe [1-2]: 1

> Running recipe org.openrewrite.java.migrate.UpgradeToJava17

> Netflix/blitz4j@master
    ✓ Fix results at /Users/mikesol/workshop/default/blitz4j/.moderne/run/20240429093354-reHx5/fix.patch
> Netflix/dynomite-manager@dev
    ✓ Fix results at /Users/mikesol/workshop/default/dynomite-manager/.moderne/run/20240429093354-reHx5/fix.patch
> Netflix/Fenzo@master
    ✓ Fix results at /Users/mikesol/workshop/default/Fenzo/.moderne/run/20240429093354-reHx5/fix.patch
> Netflix/hollow@master
    ✓ Fix results at /Users/mikesol/workshop/default/hollow/.moderne/run/20240429093354-reHx5/fix.patch
> Netflix/ndbench@master
    ✓ Fix results at /Users/mikesol/workshop/default/ndbench/.moderne/run/20240429093354-reHx5/fix.patch
> Netflix/Priam@3.x
    ✓ Fix results at /Users/mikesol/workshop/default/Priam/.moderne/run/20240429093354-reHx5/fix.patch
> spring-cloud/spring-cloud-circuitbreaker@main
    No changes
> spring-cloud/spring-cloud-common-security-config@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-common-security-config/.moderne/run/20240429093354-reHx5/fix.patch
> spring-cloud/spring-cloud-core-tests@main
    No changes
> spring-cloud/spring-cloud-netflix@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-netflix/.moderne/run/20240429093354-reHx5/fix.patch
> spring-projects/spring-hateoas-examples@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-hateoas-examples/.moderne/run/20240429093354-reHx5/fix.patch
> spring-projects/spring-petclinic@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-petclinic/.moderne/run/20240429093354-reHx5/fix.patch
Found results on 10 repositories (1m 46s)

31m 13s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
          org.openrewrite.table.SourcesFiles
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240429093354-reHx5 to apply the changes

MOD SUCCEEDED in (1m 48s)
```

</details>

{% hint style="info" %}
You can command/control + click the patch file produced for each repository to view the diff.
{% endhint %}

#### Step 5: Run mod study to view a data table

Recipes can produce data tables as a recipe run proceeds. Data tables are, effectively, tabular data in a schema that is defined by the recipe.

Let's take a look at the data table for which source files had results:

```bash
mod study . --last-recipe-run --data-table SourcesFileResults
```

<details>

<summary>You should see results similar to the following.</summary>

```bash
Moderne CLI 3.3.2

Found recipe run 20240429093354-reHx5

> Selecting repositories

> Netflix/blitz4j@master
> Netflix/dynomite-manager@dev
> Netflix/Fenzo@master
> Netflix/hollow@master
> Netflix/ndbench@master
> Netflix/Priam@3.x
> spring-cloud/spring-cloud-circuitbreaker@main
> spring-cloud/spring-cloud-common-security-config@main
> spring-cloud/spring-cloud-core-tests@main
> spring-cloud/spring-cloud-netflix@main
> spring-projects/spring-hateoas-examples@main
> spring-projects/spring-petclinic@main
Selected 12 repositories (0.15s)

> Building a combined data table from results on every repository

> Netflix/blitz4j@master
    ✓ Added 112 rows
> Netflix/dynomite-manager@dev
    ✓ Added 485 rows
> Netflix/Fenzo@master
    ✓ Added 702 rows
> Netflix/hollow@master
    ✓ Added 4763 rows
> Netflix/ndbench@master
    ✓ Added 951 rows
> Netflix/Priam@3.x
    ✓ Added 1419 rows
> spring-cloud/spring-cloud-circuitbreaker@main
    ✓ Did not produce any rows for this data table
> spring-cloud/spring-cloud-common-security-config@main
    ✓ Added 196 rows
> spring-cloud/spring-cloud-core-tests@main
    ✓ Did not produce any rows for this data table
> spring-cloud/spring-cloud-netflix@main
    ✓ Added 13 rows
> spring-projects/spring-hateoas-examples@main
    ✓ Added 332 rows
> spring-projects/spring-petclinic@main
    ✓ Added 1 rows
Studied 12 repositories (24s)

* What to do next
    > Open /Users/mikesol/workshop/default/SourcesFileResults.xlsx

MOD SUCCEEDED in (25s)
```

</details>

You can open up the Excel output that was produced to see that on these 12 repositories, thousands of changes were made.

#### Step 6: Using templates with mod study

You can modify the `mod study` command to add a `--template` argument that lets you change the structure of the produced table.

Let's install and run the `FindMethods` recipe to demonstrate this (if you didn't already install it earlier):

```bash
mod config recipes moderne install FindMethods
# Select the first one (org.openrewrite.java.search.FindMethods)

mod run . --recipe FindMethods -PmethodPattern="java.util.List add(..)"
```

You can then filter the data table down to only a couple columns we're interested in and use a GoTemplate to produce a markdown file containing code samples for all of the matching methods found across all of the repositories:

{% code overflow="wrap" %}
````bash
mod study . --last-recipe-run --data-table MethodCalls --json sourceFile,method --template '{{"# Search results\n\n"}}{{range .}}{{"* "}}{{.sourceFile}}{{"\n```\n"}}{{.method}}{{"\n```\n"}}{{end}}' > methods.md 
````
{% endcode %}

Open up `methods.md` in your favorite markdown editor to view the results.

### (Optional) Fix static code analysis issues

If you have time, we recommend trying out one of the showcase recipes in OpenRewrite: [common static analysis](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis). This recipe is composed of 50+ recipes that find and fix common mistakes people make.

1. Ensure you're still in the `$HOME/workshop/default` directory:

```bash
cd $HOME/workshop/default
```

1. Run the common static analysis recipe:

```bash
mod run . --recipe org.openrewrite.staticanalysis.CommonStaticAnalysis
```

<details>

<summary>You should see results similar to:</summary>

```bash
Moderne CLI 3.3.2

> Selecting repositories

> Netflix/blitz4j@master
> Netflix/dynomite-manager@dev
> Netflix/Fenzo@master
> Netflix/hollow@master
> Netflix/ndbench@master
> Netflix/Priam@3.x
> spring-cloud/spring-cloud-circuitbreaker@main
> spring-cloud/spring-cloud-common-security-config@main
> spring-cloud/spring-cloud-core-tests@main
> spring-cloud/spring-cloud-netflix@main
> spring-projects/spring-hateoas-examples@main
> spring-projects/spring-petclinic@main
Selected 12 repositories (0.4s)

> Running recipe org.openrewrite.staticanalysis.CommonStaticAnalysis

> Netflix/blitz4j@master
    ✓ Fix results at /Users/mikesol/workshop/default/blitz4j/.moderne/run/20240429094336-dm2W2/fix.patch
> Netflix/dynomite-manager@dev
    ✓ Fix results at /Users/mikesol/workshop/default/dynomite-manager/.moderne/run/20240429094336-dm2W2/fix.patch
> Netflix/Fenzo@master
    ✓ Fix results at /Users/mikesol/workshop/default/Fenzo/.moderne/run/20240429094336-dm2W2/fix.patch
> Netflix/hollow@master
    ✓ Fix results at /Users/mikesol/workshop/default/hollow/.moderne/run/20240429094336-dm2W2/fix.patch
> Netflix/ndbench@master
    ✓ Fix results at /Users/mikesol/workshop/default/ndbench/.moderne/run/20240429094336-dm2W2/fix.patch
> Netflix/Priam@3.x
    ✓ Fix results at /Users/mikesol/workshop/default/Priam/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-cloud/spring-cloud-circuitbreaker@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-circuitbreaker/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-cloud/spring-cloud-common-security-config@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-common-security-config/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-cloud/spring-cloud-core-tests@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-core-tests/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-cloud/spring-cloud-netflix@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-netflix/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-projects/spring-hateoas-examples@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-hateoas-examples/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-projects/spring-petclinic@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-petclinic/.moderne/run/20240429094336-dm2W2/fix.patch
Found results on 12 repositories (1m 38s)

31m 13s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240429094336-dm2W2 to apply the changes

MOD SUCCEEDED in (1m 39s)
```

</details>

2. You can examine all the changes the recipe would make by command/ctrl clicking on the patch file that is generated by the recipe run.

<details>

<summary>You should see results similar to:</summary>

```diff
diff --git a/src/main/java/com/netflix/blitz4j/DefaultBlitz4jConfig.java b/src/main/java/com/netflix/blitz4j/DefaultBlitz4jConfig.java
index bfe7b2f..527895e 100644
--- a/src/main/java/com/netflix/blitz4j/DefaultBlitz4jConfig.java
+++ b/src/main/java/com/netflix/blitz4j/DefaultBlitz4jConfig.java
@@ -46,7 +46,7 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
 
     private static final String NETFLIX_BLITZ4J_LOCKFREE = "netflix.blitz4j.lockfree";
     // Use concurrent hash map to avoid multithreaded contention
-    private Map<String, Object> propsMap = new ConcurrentHashMap<String, Object>();
+    private final Map<String, Object> propsMap = new ConcurrentHashMap<>();
 
     private static final DynamicPropertyFactory CONFIGURATION = DynamicPropertyFactory
             .getInstance();
diff --git a/src/main/java/com/netflix/blitz4j/NFHierarchy.java b/src/main/java/com/netflix/blitz4j/NFHierarchy.java
index 32392e1..db79074 100644
--- a/src/main/java/com/netflix/blitz4j/NFHierarchy.java
+++ b/src/main/java/com/netflix/blitz4j/NFHierarchy.java
@@ -37,12 +37,12 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
  */
 public class NFHierarchy extends Hierarchy {
     private LoggerFactory myFactory;
-    private AbstractQueue<HierarchyEventListener> listeners;
+    private final AbstractQueue<HierarchyEventListener> listeners;
 
     public NFHierarchy(Logger root) {
         super(root);
         myFactory = new NFCategoryFactory();
-        listeners = new ConcurrentLinkedQueue<HierarchyEventListener>();
+        listeners = new ConcurrentLinkedQueue<>();
     }
 
     /*
diff --git a/src/main/java/com/netflix/blitz4j/AsyncAppender.java b/src/main/java/com/netflix/blitz4j/AsyncAppender.java
index 4993d9b..585b490 100644
--- a/src/main/java/com/netflix/blitz4j/AsyncAppender.java
+++ b/src/main/java/com/netflix/blitz4j/AsyncAppender.java
@@ -83,10 +83,10 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
     private MessageBatcher<LoggingEvent> batcher;
     private String originalAppenderName;
     private static final String LOGGER_ASYNC_APPENDER = "asyncAppenders";
-    private AppenderAttachableImpl appenders = new AppenderAttachableImpl();
+    private final AppenderAttachableImpl appenders = new AppenderAttachableImpl();
 
     // The Map to the summary events
-    private ConcurrentMap<String, LogSummary> logSummaryMap = new ConcurrentHashMap<String, LogSummary>();
+    private ConcurrentMap<String, LogSummary> logSummaryMap = new ConcurrentHashMap<>();
 
     private Timer putBufferTimeTracer;
     private Timer putDiscardMapTimeTracer;
@@ -108,25 +108,30 @@
         int result = 1;
         result = prime
                 * result
-                + ((originalAppenderName == null) ? 0 : originalAppenderName
+                + (originalAppenderName == null ? 0 : originalAppenderName
                         .hashCode());
         return result;
     }
 
     @Override
     public boolean equals(Object obj) {
-        if (this == obj)
+        if (this == obj) {
             return true;
-        if (obj == null)
+        }
+        if (obj == null) {
             return false;
-        if (getClass() != obj.getClass())
+        }
+        if (getClass() != obj.getClass()) {
             return false;
+        }
         AsyncAppender other = (AsyncAppender) obj;
         if (originalAppenderName == null) {
-            if (other.originalAppenderName != null)
+            if (other.originalAppenderName != null) {
                 return false;
-        } else if (!originalAppenderName.equals(other.originalAppenderName))
+            }
+        } else if (!originalAppenderName.equals(other.originalAppenderName)) {
             return false;
+        }
         return true;
     }
 
@@ -220,8 +225,8 @@
      * @see org.apache.log4j.AppenderSkeleton#append(org.apache.log4j.spi.LoggingEvent)
      */
     public void append(final LoggingEvent event) {
-        boolean isBufferSpaceAvailable = (batcher.isSpaceAvailable() && (logSummaryMap
-                .size() == 0));
+        boolean isBufferSpaceAvailable = batcher.isSpaceAvailable() && (logSummaryMap
+                .size() == 0);
         boolean isBufferPutSuccessful = false;
         LocationInfo locationInfo = null;
         // Reject it when we have a fast property as these can be expensive
@@ -405,15 +410,14 @@
         public LoggingEvent createEvent() {
             String msg = MessageFormat
                     .format("{1}[Summarized {0} messages of this type because the internal buffer was full]",
-                            new Object[] { new Integer(count),
+                            new Object[] { Integer.valueOf(count),
                                     event.getMessage() });
-            LoggingEvent loggingEvent = new LoggingEvent(
+            return new LoggingEvent(
                     event.getFQNOfLoggerClass(), event.getLogger(),
                     event.getTimeStamp(), event.getLevel(), msg, Thread
                             .currentThread().getName(),
                     event.getThrowableInformation(), null, null,
                     event.getProperties());
-            return loggingEvent;
         }
     }
 
diff --git a/src/main/java/com/netflix/blitz4j/LoggingConfiguration.java b/src/main/java/com/netflix/blitz4j/LoggingConfiguration.java
index 7283e14..f0e9232 100644
--- a/src/main/java/com/netflix/blitz4j/LoggingConfiguration.java
+++ b/src/main/java/com/netflix/blitz4j/LoggingConfiguration.java
@@ -85,18 +85,18 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
     private static final String ASYNC_APPENDERNAME_SUFFIX = "_ASYNC";
     private static final String ROOT_CATEGORY = "rootCategory";
     private static final String ROOT_LOGGER = "rootLogger";
-    
-    private Map<String, String> originalAsyncAppenderNameMap = new HashMap<String, String>();
+
+    private final Map<String, String> originalAsyncAppenderNameMap = new HashMap<>();
     private BlitzConfig blitz4jConfig;
-    private Properties initialProps = new Properties();
-    private Properties overrideProps = new Properties();
+    private final Properties initialProps = new Properties();
+    private final Properties overrideProps = new Properties();
     private final ExecutorService executorPool;
     private final AtomicInteger pendingRefreshes = new AtomicInteger();
     private final AtomicInteger refreshCount = new AtomicInteger();
     private Logger logger;
     private static final int MIN_DELAY_BETWEEN_REFRESHES = 200;
     private static final CharSequence PROP_LOG4J_ASYNC_APPENDERS = "log4j.logger.asyncAppenders";
-    private static LoggingConfiguration instance = new LoggingConfiguration();
+    private static final LoggingConfiguration instance = new LoggingConfiguration();
 
     protected LoggingConfiguration() {
         this.executorPool = Executors.newCachedThreadPool(
@@ -130,7 +130,7 @@
         NFHierarchy nfHierarchy = null;
         
         // Make log4j use blitz4j implementations
-        if ((!NFHierarchy.class.equals(LogManager.getLoggerRepository().getClass()))) {
+        if (!NFHierarchy.class.equals(LogManager.getLoggerRepository().getClass())) {
             nfHierarchy = new NFHierarchy(new NFRootLogger(org.apache.log4j.Level.INFO));
             org.apache.log4j.LogManager.setRepositorySelector(new NFRepositorySelector(nfHierarchy), guard);
         }
@@ -287,7 +287,7 @@
      * java.lang.String, java.lang.Object, boolean)
      */
     public synchronized void addProperty(Object source, String name, Object value, boolean beforeUpdate) {
-        if (beforeUpdate == false && isLog4JProperty(name)) {
+        if (!beforeUpdate && isLog4JProperty(name)) {
             overrideProps.put(name, value);
             reConfigureAsynchronously();
         }
@@ -308,7 +308,7 @@
      * java.lang.String, java.lang.Object, boolean)
      */
     public synchronized void clearProperty(Object source, String name, Object value, boolean beforeUpdate) {
-        if (beforeUpdate == false && isLog4JProperty(name)) {
+        if (!beforeUpdate && isLog4JProperty(name)) {
             overrideProps.remove(name);
             reConfigureAsynchronously();
         }
@@ -345,7 +345,7 @@
      */
     public synchronized void setProperty(Object source, String name, Object value,
             boolean beforeUpdate) {
-        if (beforeUpdate == false && isLog4JProperty(name)) {
+        if (!beforeUpdate && isLog4JProperty(name)) {
             overrideProps.put(name, value);
             reConfigureAsynchronously();
         }
diff --git a/src/main/java/com/netflix/blitz4j/LoggingContext.java b/src/main/java/com/netflix/blitz4j/LoggingContext.java
index 7f523d2..42259f6 100644
--- a/src/main/java/com/netflix/blitz4j/LoggingContext.java
+++ b/src/main/java/com/netflix/blitz4j/LoggingContext.java
@@ -43,18 +43,18 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
  * @author Karthik Ranganathan
  * 
  */
-public class LoggingContext {
+public final class LoggingContext {
 
     public static final String CONTEXT_LEVEL = "contextlevel";
     private static final BlitzConfig CONFIGURATION = LoggingConfiguration.getInstance().getConfiguration();
     private static final String LOCATION_INFO = "locationInfo";
-    private ThreadLocal<StackTraceElement> stackLocal = new ThreadLocal<StackTraceElement>();
-    private ThreadLocal<LoggingEvent> loggingEvent = new ThreadLocal<LoggingEvent>();
-    private ThreadLocal<Level> contextLevel = new ThreadLocal<Level>();
+    private final ThreadLocal<StackTraceElement> stackLocal = new ThreadLocal<>();
+    private final ThreadLocal<LoggingEvent> loggingEvent = new ThreadLocal<>();
+    private final ThreadLocal<Level> contextLevel = new ThreadLocal<>();
     private final AtomicReference<HashSet<Category>> loggerNeedsLocationRef = new AtomicReference<>(new HashSet<Category>());
 
     private static final LoggingContext instance = new LoggingContext();
-    private Timer stackTraceTimer = Monitors.newTimer("getStacktraceElement",
+    private final Timer stackTraceTimer = Monitors.newTimer("getStacktraceElement",
             TimeUnit.NANOSECONDS);
 
     private LoggingContext() {
diff --git a/src/main/java/com/netflix/blitz4j/NFLockFreeLogger.java b/src/main/java/com/netflix/blitz4j/NFLockFreeLogger.java
index da5af48..5fe64eb 100644
--- a/src/main/java/com/netflix/blitz4j/NFLockFreeLogger.java
+++ b/src/main/java/com/netflix/blitz4j/NFLockFreeLogger.java
@@ -39,7 +39,7 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
 public class NFLockFreeLogger extends Logger {
 
     AppenderAttachableImpl aai;
-    private LoggingContext loggingContext = LoggingContext.getInstance();;
+    private final LoggingContext loggingContext = LoggingContext.getInstance();;
 
     protected NFLockFreeLogger(String name) {
         super(name);
@@ -75,7 +75,7 @@
         int writes = 0;
 
         for (Category c = this; c != null; c = c.getParent()) {
-            if (!(NFLockFreeLogger.class.isInstance(c))) {
+            if (!NFLockFreeLogger.class.isInstance(c)) {
                 continue;
             }
             if (((NFLockFreeLogger) c).aai != null) {
@@ -99,10 +99,11 @@
      */
     @Override
     public Enumeration getAllAppenders() {
-        if (aai == null)
+        if (aai == null) {
             return NullEnumeration.getInstance();
-        else
+        } else {
             return aai.getAllAppenders();
+        }
     }
 
     /*
@@ -113,8 +114,9 @@
     @Override
     public Appender getAppender(String name) {
 
-        if (aai == null || name == null)
+        if (aai == null || name == null) {
             return null;
+        }
 
         return aai.getAppender(name);
     }
@@ -126,9 +128,9 @@
      */
     @Override
     public boolean isAttached(Appender appender) {
-        if (appender == null || aai == null)
+        if (appender == null || aai == null) {
             return false;
-        else {
+        } else {
             return aai.isAttached(appender);
         }
     }
diff --git a/src/main/java/com/netflix/blitz4j/LoggerCache.java b/src/main/java/com/netflix/blitz4j/LoggerCache.java
index be52fa6..48f34dd 100644
--- a/src/main/java/com/netflix/blitz4j/LoggerCache.java
+++ b/src/main/java/com/netflix/blitz4j/LoggerCache.java
@@ -32,9 +32,9 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
  * @author Karthik Ranganathan
  *
  */
-public class LoggerCache {
-    private static LoggerCache instance = new LoggerCache();
-    private Map<String, Logger> appenderLoggerMap = new ConcurrentHashMap<String, Logger>(5000);
+public final class LoggerCache {
+    private static final LoggerCache instance = new LoggerCache();
+    private final Map<String, Logger> appenderLoggerMap = new ConcurrentHashMap<>(5000);
     
   
   private LoggerCache() {
diff --git a/src/main/java/com/netflix/blitz4j/NFAppenderAttachableImpl.java b/src/main/java/com/netflix/blitz4j/NFAppenderAttachableImpl.java
index e240e85..194cd6c 100644
--- a/src/main/java/com/netflix/blitz4j/NFAppenderAttachableImpl.java
+++ b/src/main/java/com/netflix/blitz4j/NFAppenderAttachableImpl.java
@@ -37,8 +37,8 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
 public class NFAppenderAttachableImpl extends AppenderAttachableImpl implements
 AppenderAttachable {
 
-    protected AbstractQueue<Appender> appenderList = new ConcurrentLinkedQueue<Appender>();
-    private AbstractQueue<String> configuredAppenderList = new ConcurrentLinkedQueue<String>();
+    protected AbstractQueue<Appender> appenderList = new ConcurrentLinkedQueue<>();
+    private final AbstractQueue<String> configuredAppenderList = new ConcurrentLinkedQueue<>();
 
     /*
      * (non-Javadoc)
@@ -104,9 +104,9 @@
      */
     @Override
     public Enumeration getAllAppenders() {
-        if (appenderList == null)
+        if (appenderList == null) {
             return null;
-        else {
+        } else {
             Iterator<Appender> it = appenderList.iterator();
             return new IteratorEnumeration(it);
         }
@@ -121,8 +121,9 @@
      */
     @Override
     public Appender getAppender(String name) {
-        if (appenderList == null || name == null)
+        if (appenderList == null || name == null) {
             return null;
+        }
         Appender appender;
         Iterator<Appender> it = appenderList.iterator();
         while (it.hasNext()) {
@@ -143,8 +144,9 @@
      */
     @Override
     public boolean isAttached(Appender appender) {
-        if (appenderList == null || appender == null)
+        if (appenderList == null || appender == null) {
             return false;
+        }
         Appender a;
         Iterator<Appender> it = appenderList.iterator();
         while (it.hasNext()) {
@@ -175,7 +177,7 @@
                 // This call is primarily made during dynamic log4 reconfiguration and we will
                 // retain the ability to queue the messages.
                 for (String asyncAppender : asyncAppenders) {
-                    if (!(asyncAppender.equals(a.getClass().getName()))) {
+                    if (!asyncAppender.equals(a.getClass().getName())) {
                          it.remove();
                          a.close();
                     }
@@ -193,8 +195,9 @@
      */
     @Override
     public void removeAppender(Appender appender) {
-        if (appender == null || appenderList == null)
+        if (appender == null || appenderList == null) {
             return;
+        }
         appenderList.remove(appender);
         configuredAppenderList.remove(appender.getName());
     }
@@ -208,8 +211,9 @@
      */
     @Override
     public void removeAppender(String name) {
-        if (name == null || appenderList == null)
+        if (name == null || appenderList == null) {
             return;
+        }
         Iterator<Appender> it = appenderList.iterator();
         while (it.hasNext()) {
             Appender a = (Appender) it.next();
diff --git a/src/main/java/com/netflix/logging/log4jAdapter/NFPatternParser.java b/src/main/java/com/netflix/logging/log4jAdapter/NFPatternParser.java
index 2ce0eb8..a999847 100644
--- a/src/main/java/com/netflix/logging/log4jAdapter/NFPatternParser.java
+++ b/src/main/java/com/netflix/logging/log4jAdapter/NFPatternParser.java
@@ -35,7 +35,7 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
  * @author Karthik Ranganathan
  */
 public class NFPatternParser extends PatternParser {
-    private static List<Character> contextCharList = Arrays.asList(Character.valueOf('c'),
+    private static final List<Character> contextCharList = Arrays.asList(Character.valueOf('c'),
             Character.valueOf('l'),
             Character.valueOf('M'),
             Character.valueOf('C'),
@@ -82,10 +82,10 @@
                 case 'L':
                     return locationInfo.getLineNumber();
                 case 'l':
-                    return (locationInfo.getFileName() + ":"
+                    return locationInfo.getFileName() + ":"
                             + locationInfo.getClassName() + " "
                             + locationInfo.getLineNumber() + " " + locationInfo
-                            .getMethodName());
+                            .getMethodName();
                 case 'F':
                     return locationInfo.getFileName();
             }
diff --git a/src/main/java/com/netflix/logging/messaging/MessageBatcher.java b/src/main/java/com/netflix/logging/messaging/MessageBatcher.java
index b2669be..c3aff7f 100644
--- a/src/main/java/com/netflix/logging/messaging/MessageBatcher.java
+++ b/src/main/java/com/netflix/logging/messaging/MessageBatcher.java
@@ -89,7 +89,7 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
 
     protected ThreadPoolExecutor processor;
 
-    protected MessageProcessor target = null;
+    protected MessageProcessor target;
 
     /**
      * The number of batches that are currently being processed by the target
@@ -111,15 +111,15 @@
 
     private volatile boolean isShutDown;
 
-    private AtomicLong numberAdded = new AtomicLong();
+    private final AtomicLong numberAdded = new AtomicLong();
 
-    private AtomicLong numberDropped = new AtomicLong();
+    private final AtomicLong numberDropped = new AtomicLong();
 
-    private boolean blockingProperty;
+    private final boolean blockingProperty;
 
     private boolean isCollectorPaused;
 
-    private Counter processCount;
+    private final Counter processCount;
     public static final String POOL_MAX_THREADS = "maxThreads";
     public static final String POOL_MIN_THREADS = "minThreads";
     public static final String POOL_KEEP_ALIVE_TIME = "keepAliveTime";
@@ -129,7 +129,7 @@
         this.target = target;
         queue = new ArrayBlockingQueue<T>(CONFIGURATION.getBatcherQueueMaxMessages(this.name));
         setBatchMaxMessages(CONFIGURATION.getBatchSize(this.name));
-        batch = new ArrayList<Object>(maxMessages);
+        batch = new ArrayList<>(maxMessages);
         setBatchMaxDelay(CONFIGURATION
                 .getBatcherMaxDelay(this.name));
         collector = new Collector(this, this.name + COLLECTOR_SUFFIX);
@@ -196,7 +196,7 @@
      * @return - true, if available false otherwise
      */
     public boolean isSpaceAvailable() {
-        return (queue.remainingCapacity() > 0);
+        return queue.remainingCapacity() > 0;
     }
 
     /**
@@ -347,7 +347,7 @@
         
         int waitTimeinMillis = CONFIGURATION.getBatcherWaitTimeBeforeShutdown(this.name);
         long timeToWait = waitTimeinMillis + System.currentTimeMillis();
-        while ((queue.size() > 0 || batch.size() > 0)
+        while ((!queue.isEmpty() || !batch.isEmpty())
                 && (System.currentTimeMillis() < timeToWait)) {
             try {
                 Thread.sleep(1000);
diff --git a/src/main/java/com/netflix/logging/messaging/BatcherFactory.java b/src/main/java/com/netflix/logging/messaging/BatcherFactory.java
index cf47699..cb0f28b 100644
--- a/src/main/java/com/netflix/logging/messaging/BatcherFactory.java
+++ b/src/main/java/com/netflix/logging/messaging/BatcherFactory.java
@@ -35,10 +35,10 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
  *
  */
 public class BatcherFactory {
-	private static BatcherFactory batcherFactory = new BatcherFactory();
+    private static final BatcherFactory batcherFactory = new BatcherFactory();
 
-	// List of all batchers cached
-	private static Map<String, MessageBatcher> batcherMap = new HashMap<String, MessageBatcher>();;
+    // List of all batchers cached
+    private static final Map<String, MessageBatcher> batcherMap = new HashMap<>();;
 
 	
     /**
@@ -47,8 +47,7 @@
      * @return - the batcher associated with the name
      */
 	public static MessageBatcher getBatcher(String name) {
-		MessageBatcher batcher = batcherMap.get(name);
-		return batcher;
+		return batcherMap.get(name);
 	}
```

</details>

3. As before, if you like the changes, you can apply the changes by running:

```bash
mod git apply . --last-recipe-run
```

4. You could then run tests on each of the projects to ensure everything still builds successfully before committing the results.

You can probably imagine that this recipe resolves a lot of technical debt when run at scale throughout an organization.
