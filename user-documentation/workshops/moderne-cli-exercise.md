# Moderne CLI exercise

In this exercise, you will use the [Moderne CLI](../../getting-started/cli-intro.md), a free tool that allows developer to run OpenRewrite recipes without configuring any build plugin, to migrate a repository from Spring Boot 2 to Spring Boot 3.

After that, we'll provide some additional examples that show other capabilities of the CLI (such as creating and viewing data tables).

### Prepare your environment

#### Download and configure the Moderne CLI

1. Go to the [Moderne platform](https://app.moderne.io) and sign in. If you don't have an account, you can sign up for free.
2. Click on help in the bottom left-hand corner and select the version of the CLI you want to download. Then select the way you'd like to install it:

![](/.gitbook/assets/cli-download.gif)

3. Once you have it downloaded, save it somewhere that your terminal can access. If you want it available in each of your terminal windows, consider updating your `PATH` to point ot this location or aliasing `mod` to the location of the CLI. You could also save the file to a directory that's already on your `PATH` such as a `/usr/bin` directory.
4. Ensure you can run the CLI by typing `mod`.

<details>

<summary>If everything is set up correctly, you should see output similar to the following:</summary>

```
➜  moderne-docs git:(main) ✗ mod
        ▛▀▀▚▖  ▗▄▟▜
        ▌   ▜▄▟▀  ▐
        ▛▀▀█▀▛▀▀▀▀▜
        ▌▟▀  ▛▀▀▀▀▜
        ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 2.4.5

Usage:

mod [-h] [COMMAND]

Description:

Automated code remediation.

Options:

  -h, --help   Display this help message.

Commands:

  build                Generates LST artifacts for one or more repositories.
  clean                Clean build and run artifacts produced by the CLI.
  config               Global configuration options that are required by some
                         CLI commands.
  exec                 Execute an arbitrary shell command recursively on
                         selected repository roots.
  git                  Multi-repository git operations.
  list                 Lists the repositories that can be built and published.
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

5. Before you can run any commands, you'll need to create a Moderne access token. Go to [https://app.moderne.io/settings/access-token](https://app.moderne.io/settings/access-token), enter a name for your token, and press `generate`.
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
        ▛▀▀▚▖  ▗▄▟▜
        ▌   ▜▄▟▀  ▐
        ▛▀▀█▀▛▀▀▀▀▜
        ▌▟▀  ▛▀▀▀▀▜
        ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 2.4.5

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
export JAVA_HOME=REPLACE_WITH_LOCATION_OF_JAVA_8
```
{% endhint %}

4. With Java 8 configured, make sure that the Spring PetClinic repository builds on your machine:

```bash
./mvnw verify -DskipTests
```

5. If everything has been set up correctly, you should see a `BUILD SUCCESS` message after the project is built and the tests passed.

### Migrate to Spring Boot 3 using the Moderne CLI

Now that the repository is configured, it's time to migrate it to Spring Boot 3 using the Moderne CLI.

{% embed url="https://www.youtube.com/watch?v=zHlVg9H_JRo" %}

1. Run the build command to generate the LST for the PetClinic repo:

```bash
mod build .
```

<details>

<summary>You should see output similar to the following.</summary>

```
        ▛▀▀▚▖  ▗▄▟▜
        ▌   ▜▄▟▀  ▐
        ▛▀▀█▀▛▀▀▀▀▜
        ▌▟▀  ▛▀▀▀▀▜
        ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 2.4.5

> Selecting repositories

> spring-projects/spring-petclinic@main
Selected 1 repositories (0.39s)

> Building LST(s)

> spring-projects/spring-petclinic@main
    Build output will be written to file:///Users/mikesol/Desktop/code/spring-petclinic/.moderne/build/20231219102753-C5Dxy/build.log
    📶 Step 1 - build with Maven
    📶 Step 2 - build resources using the native CLI
    ✅ Built LST file:///Users/mikesol/Desktop/code/spring-petclinic/.moderne/build/20231219102753-C5Dxy/spring-petclinic-20231219102820-ast.jar
    📈 Reported build metrics to Moderne
    🧹 Cleaned 0 older builds.
Built 1 repositories. (27s)

* What to do next
    > Run mod run . --recipe <RecipeName>

MOD SUCCEEDED in (27s)
```

</details>

2. Kick off the migration recipe by running the following command from the `spring-petclinic` repository:

```bash
mod run . --recipe UpgradeSpringBoot_3_2
```

<details>

<summary>You should see output similar to the following.</summary>

```
    ▛▀▀▚▖  ▗▄▟▜
    ▌   ▜▄▟▀  ▐
    ▛▀▀█▀▛▀▀▀▀▜
    ▌▟▀  ▛▀▀▀▀▜
    ▀▀▀▀▀▀▀▀▀▀▀
 Moderne CLI 2.4.5

> Selecting repositories

> spring-projects/spring-petclinic@main
Selected 1 repositories (0.37s)

> Running recipe org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2

> spring-projects/spring-petclinic@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/spring-petclinic/.moderne/run/20231220083431-NiO1J/fix.patch
Found results on 1 repositories (12m 22s)

25s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.maven.table.DependenciesInUse
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
          org.openrewrite.table.SourcesFiles
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod apply . --last-recipe-run to apply the changes
    > Run mod apply . --recipe-run 20231220083431-NiO1J to apply the changes

MOD SUCCEEDED in (12m 23s)
```

</details>

3. The previous command will generate a patch file (`fix.patch`) that contains the changes the recipe would make to your repository. You can examine the file with your favorite editor, or you can apply the changes to the code and use `git diff` to check out the changes. It's important to always double-check that the changes made match your expectations:

```bash
mod git apply . --last-recipe-run
git diff
```

<details>

<summary>You should see output similar to the following.</summary>

```diff
diff --git a/pom.xml b/pom.xml
index 0b8f9c2..a454f84 100644
--- a/pom.xml
+++ b/pom.xml
@@ -10,14 +10,14 @@
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
-    <version>2.0.0.RELEASE</version>
+    <version>3.2.0</version>
   </parent>
   <name>petclinic</name>
 
   <properties>
 
     <!-- Generic properties -->
-    <java.version>1.8</java.version>
+    <java.version>17</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
 
@@ -25,7 +25,7 @@
     <webjars-bootstrap.version>3.3.6</webjars-bootstrap.version>
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
-    <wro4j.version>1.8.0</wro4j.version>
+    <wro4j.version>1.10.1</wro4j.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -33,6 +33,10 @@
 
   <dependencies>
     <!-- Spring and Spring Boot dependencies -->
+    <dependency>
+      <groupId>jakarta.xml.bind</groupId>
+      <artifactId>jakarta.xml.bind-api</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-actuator</artifactId>
@@ -53,6 +57,10 @@
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
@@ -66,8 +74,13 @@
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
 
@@ -79,6 +92,7 @@
     <dependency>
       <groupId>org.ehcache</groupId>
       <artifactId>ehcache</artifactId>
+      <classifier>jakarta</classifier>
     </dependency>
 
     <!-- webjars -->
@@ -133,22 +147,6 @@
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
@@ -204,17 +202,6 @@
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
index 7da0d3d..3f4bfe9 100644
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
 
@@ -17,7 +16,7 @@ import static org.assertj.core.api.Assertions.assertThat;
  * @author Michael Isvy Simple test to make sure that Bean Validation is working (useful
  * when upgrading to a new version of Hibernate Validator/ Bean Validation)
  */
-public class ValidatorTests {
+class ValidatorTests {
 
     private Validator createValidator() {
         LocalValidatorFactoryBean localValidatorFactoryBean = new LocalValidatorFactoryBean();
@@ -26,7 +25,7 @@ public class ValidatorTests {
     }
 
     @Test
-    public void shouldNotValidateWhenFirstNameEmpty() {
+    void shouldNotValidateWhenFirstNameEmpty() {
 
         LocaleContextHolder.setLocale(Locale.ENGLISH);
         Person person = new Person();
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java b/src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java
index 7fccb3b..7bfc2d7 100644
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
@@ -27,9 +25,8 @@ import org.springframework.test.web.servlet.MockMvc;
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(OwnerController.class)
-public class OwnerControllerTests {
+class OwnerControllerTests {
 
     private static final int TEST_OWNER_ID = 1;
 
@@ -41,8 +38,8 @@ public class OwnerControllerTests {
 
     private Owner george;
 
-    @Before
-    public void setup() {
+    @BeforeEach
+    void setup() {
         george = new Owner();
         george.setId(TEST_OWNER_ID);
         george.setFirstName("George");
@@ -54,7 +51,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testInitCreationForm() throws Exception {
+    void initCreationForm() throws Exception {
         mockMvc.perform(get("/owners/new"))
             .andExpect(status().isOk())
             .andExpect(model().attributeExists("owner"))
@@ -62,7 +59,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testProcessCreationFormSuccess() throws Exception {
+    void processCreationFormSuccess() throws Exception {
         mockMvc.perform(post("/owners/new")
             .param("firstName", "Joe")
             .param("lastName", "Bloggs")
@@ -74,7 +71,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testProcessCreationFormHasErrors() throws Exception {
+    void processCreationFormHasErrors() throws Exception {
         mockMvc.perform(post("/owners/new")
             .param("firstName", "Joe")
             .param("lastName", "Bloggs")
@@ -88,7 +85,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testInitFindForm() throws Exception {
+    void initFindForm() throws Exception {
         mockMvc.perform(get("/owners/find"))
             .andExpect(status().isOk())
             .andExpect(model().attributeExists("owner"))
@@ -96,7 +93,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testProcessFindFormSuccess() throws Exception {
+    void processFindFormSuccess() throws Exception {
         given(this.owners.findByLastName("")).willReturn(Lists.newArrayList(george, new Owner()));
         mockMvc.perform(get("/owners"))
             .andExpect(status().isOk())
@@ -104,7 +101,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testProcessFindFormByLastName() throws Exception {
+    void processFindFormByLastName() throws Exception {
         given(this.owners.findByLastName(george.getLastName())).willReturn(Lists.newArrayList(george));
         mockMvc.perform(get("/owners")
             .param("lastName", "Franklin")
@@ -114,7 +111,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testProcessFindFormNoOwnersFound() throws Exception {
+    void processFindFormNoOwnersFound() throws Exception {
         mockMvc.perform(get("/owners")
             .param("lastName", "Unknown Surname")
         )
@@ -125,7 +122,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testInitUpdateOwnerForm() throws Exception {
+    void initUpdateOwnerForm() throws Exception {
         mockMvc.perform(get("/owners/{ownerId}/edit", TEST_OWNER_ID))
             .andExpect(status().isOk())
             .andExpect(model().attributeExists("owner"))
@@ -138,7 +135,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testProcessUpdateOwnerFormSuccess() throws Exception {
+    void processUpdateOwnerFormSuccess() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/edit", TEST_OWNER_ID)
             .param("firstName", "Joe")
             .param("lastName", "Bloggs")
@@ -151,7 +148,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testProcessUpdateOwnerFormHasErrors() throws Exception {
+    void processUpdateOwnerFormHasErrors() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/edit", TEST_OWNER_ID)
             .param("firstName", "Joe")
             .param("lastName", "Bloggs")
@@ -165,7 +162,7 @@ public class OwnerControllerTests {
     }
 
     @Test
-    public void testShowOwner() throws Exception {
+    void showOwner() throws Exception {
         mockMvc.perform(get("/owners/{ownerId}", TEST_OWNER_ID))
             .andExpect(status().isOk())
             .andExpect(model().attribute("owner", hasProperty("lastName", is("Franklin"))))
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java
index f95d7c8..a2663a9 100755
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
@@ -31,12 +29,11 @@ import org.springframework.test.web.servlet.MockMvc;
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(value = PetController.class,
     includeFilters = @ComponentScan.Filter(
-                            value = PetTypeFormatter.class,
-                            type = FilterType.ASSIGNABLE_TYPE))
-public class PetControllerTests {
+        value = PetTypeFormatter.class,
+        type = FilterType.ASSIGNABLE_TYPE))
+class PetControllerTests {
 
     private static final int TEST_OWNER_ID = 1;
     private static final int TEST_PET_ID = 1;
@@ -51,8 +48,8 @@ public class PetControllerTests {
     @MockBean
     private OwnerRepository owners;
 
-    @Before
-    public void setup() {
+    @BeforeEach
+    void setup() {
         PetType cat = new PetType();
         cat.setId(3);
         cat.setName("hamster");
@@ -63,7 +60,7 @@ public class PetControllerTests {
     }
 
     @Test
-    public void testInitCreationForm() throws Exception {
+    void initCreationForm() throws Exception {
         mockMvc.perform(get("/owners/{ownerId}/pets/new", TEST_OWNER_ID))
             .andExpect(status().isOk())
             .andExpect(view().name("pets/createOrUpdatePetForm"))
@@ -71,7 +68,7 @@ public class PetControllerTests {
     }
 
     @Test
-    public void testProcessCreationFormSuccess() throws Exception {
+    void processCreationFormSuccess() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/pets/new", TEST_OWNER_ID)
             .param("name", "Betty")
             .param("type", "hamster")
@@ -82,7 +79,7 @@ public class PetControllerTests {
     }
 
     @Test
-    public void testProcessCreationFormHasErrors() throws Exception {
+    void processCreationFormHasErrors() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/pets/new", TEST_OWNER_ID)
             .param("name", "Betty")
             .param("birthDate", "2015-02-12")
@@ -96,7 +93,7 @@ public class PetControllerTests {
     }
 
     @Test
-    public void testInitUpdateForm() throws Exception {
+    void initUpdateForm() throws Exception {
         mockMvc.perform(get("/owners/{ownerId}/pets/{petId}/edit", TEST_OWNER_ID, TEST_PET_ID))
             .andExpect(status().isOk())
             .andExpect(model().attributeExists("pet"))
@@ -104,7 +101,7 @@ public class PetControllerTests {
     }
 
     @Test
-    public void testProcessUpdateFormSuccess() throws Exception {
+    void processUpdateFormSuccess() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/pets/{petId}/edit", TEST_OWNER_ID, TEST_PET_ID)
             .param("name", "Betty")
             .param("type", "hamster")
@@ -115,7 +112,7 @@ public class PetControllerTests {
     }
 
     @Test
-    public void testProcessUpdateFormHasErrors() throws Exception {
+    void processUpdateFormHasErrors() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/pets/{petId}/edit", TEST_OWNER_ID, TEST_PET_ID)
             .param("name", "Betty")
             .param("birthDate", "2015/02/12")
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
index 4e8e36c..7d716fb 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
@@ -6,35 +6,36 @@ import java.util.Collection;
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
-public class PetTypeFormatterTests {
+@ExtendWith(MockitoExtension.class)
+class PetTypeFormatterTests {
 
     @Mock
     private PetRepository pets;
 
     private PetTypeFormatter petTypeFormatter;
 
-    @Before
-    public void setup() {
+    @BeforeEach
+    void setup() {
         this.petTypeFormatter = new PetTypeFormatter(pets);
     }
 
     @Test
-    public void testPrint() {
+    void print() {
         PetType petType = new PetType();
         petType.setName("Hamster");
         String petTypeName = this.petTypeFormatter.print(petType, Locale.ENGLISH);
@@ -42,16 +43,18 @@ public class PetTypeFormatterTests {
     }
 
     @Test
-    public void shouldParse() throws ParseException {
+    void shouldParse() throws ParseException {
         Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
         PetType petType = petTypeFormatter.parse("Bird", Locale.ENGLISH);
         assertEquals("Bird", petType.getName());
     }
 
-    @Test(expected = ParseException.class)
-    public void shouldThrowParseException() throws ParseException {
-        Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
-        petTypeFormatter.parse("Fish", Locale.ENGLISH);
+    @Test
+    void shouldThrowParseException() throws ParseException {
+        assertThrows(ParseException.class, () -> {
+            Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
+            petTypeFormatter.parse("Fish", Locale.ENGLISH);
+        });
     }
 
     /**
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java b/src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java
index 08d6136..29f13aa 100644
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
@@ -25,9 +23,8 @@ import org.springframework.test.web.servlet.MockMvc;
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
 @WebMvcTest(VisitController.class)
-public class VisitControllerTests {
+class VisitControllerTests {
 
     private static final int TEST_PET_ID = 1;
 
@@ -40,20 +37,20 @@ public class VisitControllerTests {
     @MockBean
     private PetRepository pets;
 
-    @Before
-    public void init() {
+    @BeforeEach
+    void init() {
         given(this.pets.findById(TEST_PET_ID)).willReturn(new Pet());
     }
 
     @Test
-    public void testInitNewVisitForm() throws Exception {
+    void initNewVisitForm() throws Exception {
         mockMvc.perform(get("/owners/*/pets/{petId}/visits/new", TEST_PET_ID))
             .andExpect(status().isOk())
             .andExpect(view().name("pets/createOrUpdateVisitForm"));
     }
 
     @Test
-    public void testProcessNewVisitFormSuccess() throws Exception {
+    void processNewVisitFormSuccess() throws Exception {
         mockMvc.perform(post("/owners/*/pets/{petId}/visits/new", TEST_PET_ID)
             .param("name", "George")
             .param("description", "Visit Description")
@@ -63,7 +60,7 @@ public class VisitControllerTests {
     }
 
     @Test
-    public void testProcessNewVisitFormHasErrors() throws Exception {
+    void processNewVisitFormHasErrors() throws Exception {
         mockMvc.perform(post("/owners/*/pets/{petId}/visits/new", TEST_PET_ID)
             .param("name", "George")
         )
diff --git a/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java b/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java
index 7ed5bf8..aaa3c1d 100644
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
@@ -44,9 +42,8 @@ import org.springframework.transaction.annotation.Transactional;
  * @author Dave Syer
  */
 
-@RunWith(SpringRunner.class)
 @DataJpaTest(includeFilters = @ComponentScan.Filter(Service.class))
-public class ClinicServiceTests {
+class ClinicServiceTests {
 
     @Autowired
     protected OwnerRepository owners;
@@ -61,7 +58,7 @@ public class ClinicServiceTests {
     protected VetRepository vets;
 
     @Test
-    public void shouldFindOwnersByLastName() {
+    void shouldFindOwnersByLastName() {
         Collection<Owner> owners = this.owners.findByLastName("Davis");
         assertThat(owners.size()).isEqualTo(2);
 
@@ -70,7 +67,7 @@ public class ClinicServiceTests {
     }
 
     @Test
-    public void shouldFindSingleOwnerWithPet() {
+    void shouldFindSingleOwnerWithPet() {
         Owner owner = this.owners.findById(1);
         assertThat(owner.getLastName()).startsWith("Franklin");
         assertThat(owner.getPets().size()).isEqualTo(1);
@@ -80,7 +77,7 @@ public class ClinicServiceTests {
 
     @Test
     @Transactional
-    public void shouldInsertOwner() {
+    void shouldInsertOwner() {
         Collection<Owner> owners = this.owners.findByLastName("Schultz");
         int found = owners.size();
 
@@ -99,7 +96,7 @@ public class ClinicServiceTests {
 
     @Test
     @Transactional
-    public void shouldUpdateOwner() {
+    void shouldUpdateOwner() {
         Owner owner = this.owners.findById(1);
         String oldLastName = owner.getLastName();
         String newLastName = oldLastName + "X";
@@ -113,7 +110,7 @@ public class ClinicServiceTests {
     }
 
     @Test
-    public void shouldFindPetWithCorrectId() {
+    void shouldFindPetWithCorrectId() {
         Pet pet7 = this.pets.findById(7);
         assertThat(pet7.getName()).startsWith("Samantha");
         assertThat(pet7.getOwner().getFirstName()).isEqualTo("Jean");
@@ -121,7 +118,7 @@ public class ClinicServiceTests {
     }
 
     @Test
-    public void shouldFindAllPetTypes() {
+    void shouldFindAllPetTypes() {
         Collection<PetType> petTypes = this.pets.findPetTypes();
 
         PetType petType1 = EntityUtils.getById(petTypes, PetType.class, 1);
@@ -132,7 +129,7 @@ public class ClinicServiceTests {
 
     @Test
     @Transactional
-    public void shouldInsertPetIntoDatabaseAndGenerateId() {
+    void shouldInsertPetIntoDatabaseAndGenerateId() {
         Owner owner6 = this.owners.findById(6);
         int found = owner6.getPets().size();
 
@@ -155,7 +152,7 @@ public class ClinicServiceTests {
 
     @Test
     @Transactional
-    public void shouldUpdatePetName() throws Exception {
+    void shouldUpdatePetName() throws Exception {
         Pet pet7 = this.pets.findById(7);
         String oldName = pet7.getName();
 
@@ -168,7 +165,7 @@ public class ClinicServiceTests {
     }
 
     @Test
-    public void shouldFindVets() {
+    void shouldFindVets() {
         Collection<Vet> vets = this.vets.findAll();
 
         Vet vet = EntityUtils.getById(vets, Vet.class, 3);
@@ -180,7 +177,7 @@ public class ClinicServiceTests {
 
     @Test
     @Transactional
-    public void shouldAddNewVisitForPet() {
+    void shouldAddNewVisitForPet() {
         Pet pet7 = this.pets.findById(7);
         int found = pet7.getVisits().size();
         Visit visit = new Visit();
@@ -195,7 +192,7 @@ public class ClinicServiceTests {
     }
 
     @Test
-    public void shouldFindVisitsByPetId() throws Exception {
+    void shouldFindVisitsByPetId() throws Exception {
         Collection<Visit> visits = this.visits.findByPetId(7);
         assertThat(visits.size()).isEqualTo(2);
         Visit[] visitArr = visits.toArray(new Visit[visits.size()]);
diff --git a/src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java b/src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java
index 3f108bf..aa44f44 100644
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
@@ -20,17 +18,15 @@ import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.
  *
  * @author Colin But
  */
-@RunWith(SpringRunner.class)
-// Waiting https://github.com/spring-projects/spring-boot/issues/5574
-@Ignore
+@Disabled
 @WebMvcTest(controllers = CrashController.class)
-public class CrashControllerTests {
+class CrashControllerTests {
 
     @Autowired
     private MockMvc mockMvc;
 
     @Test
-    public void testTriggerException() throws Exception {
+    void triggerException() throws Exception {
         mockMvc.perform(get("/oups")).andExpect(view().name("exception"))
                 .andExpect(model().attributeExists("exception"))
                 .andExpect(forwardedUrl("exception")).andExpect(status().isOk());
diff --git a/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java b/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java
index 9636e36..cc58fa6 100644
--- a/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java
@@ -1,22 +1,19 @@
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
-public class ProductionConfigurationTests {
+class ProductionConfigurationTests {
 
     @Autowired
     private VetRepository vets;
 
     @Test
-    public void testFindAll() throws Exception {
+    void findAll() throws Exception {
         vets.findAll();
         vets.findAll(); // served from cache
     }
diff --git a/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java b/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java
index ce6adf8..dab5f15 100644
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
@@ -21,16 +20,14 @@ import org.springframework.samples.petclinic.vet.Specialty;
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
-public class VetControllerTests {
+class VetControllerTests {
 
     @Autowired
     private MockMvc mockMvc;
@@ -38,8 +35,8 @@ public class VetControllerTests {
     @MockBean
     private VetRepository vets;
 
-    @Before
-    public void setup() {
+    @BeforeEach
+    void setup() {
         Vet james = new Vet();
         james.setFirstName("James");
         james.setLastName("Carter");
@@ -56,7 +53,7 @@ public class VetControllerTests {
     }
 
     @Test
-    public void testShowVetListHtml() throws Exception {
+    void showVetListHtml() throws Exception {
         mockMvc.perform(get("/vets.html"))
             .andExpect(status().isOk())
             .andExpect(model().attributeExists("vets"))
@@ -64,7 +61,7 @@ public class VetControllerTests {
     }
 
     @Test
-    public void testShowResourcesVetList() throws Exception {
+    void showResourcesVetList() throws Exception {
         ResultActions actions = mockMvc.perform(get("/vets.json").accept(MediaType.APPLICATION_JSON))
             .andExpect(status().isOk());
         actions.andExpect(content().contentType("application/json;charset=UTF-8"))
@@ -72,7 +69,7 @@ public class VetControllerTests {
     }
 
     @Test
-    public void testShowVetListXml() throws Exception {
+    void showVetListXml() throws Exception {
         mockMvc.perform(get("/vets.xml").accept(MediaType.APPLICATION_XML))
             .andExpect(status().isOk())
             .andExpect(content().contentType(MediaType.APPLICATION_XML_VALUE))
diff --git a/src/test/java/org/springframework/samples/petclinic/vet/VetTests.java b/src/test/java/org/springframework/samples/petclinic/vet/VetTests.java
index de3a7b9..874a716 100644
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
@@ -25,10 +24,10 @@ import static org.assertj.core.api.Assertions.assertThat;
  * @author Dave Syer
  *
  */
-public class VetTests {
+class VetTests {
 
     @Test
-    public void testSerialization() {
+    void serialization() {
         Vet vet = new Vet();
         vet.setFirstName("Zaphod");
         vet.setLastName("Beeblebrox");
```

</details>

If you look at the results, you should see that:

* The `@Autowired` annotation was removed
* JUnit 4 has been replaced with JUnit 5
* `javax` has been replaced with `jakarta`
* The code has been migrated to Java 17, and text blocks are used
* Some best practices are applied (such as adding the `public` test method modifier)

Some of you might be tempted to run `./mvnw verify` to confirm that the build works. Unfortunately, this isn't the case as the commit we started from is using `Wro4j` -- which has some [slight dependency conflicts](../../../introduction.md). We've decided not to cover `Wro4j` with recipes for now, as [Spring PetClinic has dropped Wro4J](../../../introduction.md) as well.

### Run a recipe on multiple local repositories

In the previous example, we used the Moderne CLI to run a recipe against a repository on your local machine. This is fine when you only have one repository you're working with. However, what if you wanted to run a recipe against many repositories at once? Checking them out locally, building each of them, and then running a separate command for each would take a considerable amount of time.

Fortunately, the Moderne CLI offers the ability to work on groups of repositories. This can be especially helpful when you're working on debugging a new recipe and want to test it against many repositories at once.

For this exercise, we have prepared a list of Spring 2.x open-source repositories from the `spring-projects` GitHub organization that can be migrated. These repositories have been added to the Moderne platform and put inside the `Spring Projects 2.x` organization.

To clone all of these repositories at once:

```bash
mkdir -p $HOME/workshop
mod git clone moderne $HOME/workshop "Spring Projects 2.x"
```

If you look in the `$HOME/workshop/` directory, you should see 3 different repositories:

```bash
ls -ltr $HOME/workshop/
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
total 0
drwxr-xr-x@ 19 mikesol  staff  608 Jan  5 10:05 spring-data-commons
drwxr-xr-x@ 13 mikesol  staff  416 Jan  5 10:05 spring-data-release
drwxr-xr-x@ 14 mikesol  staff  448 Jan  5 10:05 spring-session-data-mongodb-examples
```

</details>

Now that you have the repositories locally, you can run a recipe against all of them at once. Since all of these repositories have their LSTs published onto the Moderne platform, the build operation will download the LSTs without having to build the repositories locally. This will save you a lot of time!

```bash
mod build $HOME/workshop
```

<details>

<summary>You should see output similar to the following.</summary>

```
   ▛▀▀▚▖  ▗▄▟▜
   ▌   ▜▄▟▀  ▐
   ▛▀▀█▀▛▀▀▀▀▜
   ▌▟▀  ▛▀▀▀▀▜
   ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 2.4.5

> Selecting repositories

> spring-projects/spring-data-commons@main
> spring-projects/spring-data-release@main
> spring-projects/spring-session-data-mongodb-examples@main
Selected 3 repositories (0.28s)

> Building LST(s)

> spring-projects/spring-data-commons@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data-commons/.moderne/build/20240105100553-BbBod/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data-commons/.moderne/build/20240105100553-BbBod/0-spring-data-commons-20240104182701-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-release@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data-release/.moderne/build/20240105100556-TFEb4/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data-release/.moderne/build/20240105100556-TFEb4/0-spring-data-release-20240105025554-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-session-data-mongodb-examples@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-session-data-mongodb-examples/.moderne/build/20240105100557-jYfqC/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-session-data-mongodb-examples/.moderne/build/20240105100557-jYfqC/0-spring-session-data-mongodb-examples-20240105114206-ast.jar
    🧹 Cleaned 0 older builds.
Built 3 repositories. (4s)

4m 34s saved by using previously built LSTs

* What to do next
    > Run mod run . --recipe <RecipeName>

MOD SUCCEEDED in (4s)
```

</details>

```
mod run $HOME/workshop --recipe UpgradeSpringBoot_3_2
```

You can apply the changes to all of these repositories at once with the following command:

```bash
mod git apply $HOME/workshop --last-recipe-run
```

You can preview the changes with git by going to each repository and running `git diff`:

```bash
cd $HOME/workshop/spring-projects/spring-data-release
git diff
```

Finally, you can commit the changes to all the repositories at once with the following command:

```bash
mod git commit $HOME/workshop -m "Migrate to Spring Boot 3.2" --last-recipe-run
```

If you'd rather make a branch for each repository and make changes in that, you can use the `mod checkout` command before running `mod commit` to commit the changes. This might be useful if you want to create a pull request for each repository.

### (Optional) Data tables example

If you have time, this example will show how you clone repositories from a CSV and how you can create and view data tables with the CLI.

#### Step 0: Make a directory to work in

```bash
mkdir $HOME/workshop/spring-data
cd $HOME/workshop/spring-data
```

#### Step 1: Make a repos.csv file

This file will contain a list of all of the repositories that should be cloned. At the very least, you'll need to specify the `cloneUrl` and the `branch` being used.

For this exercise, please copy the provided `repos.csv` file and put it in your `spring-data` directory:

```csv
cloneUrl,branch
git@github.com:spring-projects/spring-data-couchbase.git,main
git@github.com:spring-projects/spring-data-relational.git,main
git@github.com:spring-projects/spring-data-rest.git,main
git@github.com:spring-projects/spring-data-mongodb.git,main
git@github.com:spring-projects/spring-data-cassandra.git,main
git@github.com:spring-projects/spring-data-ldap.git,main
git@github.com:spring-projects/spring-data-elasticsearch.git,main
git@github.com:spring-projects/spring-data-redis.git,main
git@github.com:spring-projects/spring-data-keyvalue.git,main
git@github.com:spring-projects/spring-data-neo4j.git,main
git@github.com:spring-projects/spring-data-jpa.git,main
git@github.com:spring-projects/spring-data-commons.git,main
```

#### Step 2: Clone the repositories using said CSV file

Run the command:

```bash
mod git clone csv . repos.csv --filter=tree:0
```

{% hint style="info" %}
The `--filter=tree:0` argument is optional, but it helps it clone faster.
{% endhint %}

<details>

<summary>You should see output similar to the following.</summary>

```bash
➜  spring-data mod git clone csv . repos.csv --filter=tree:0

   ▛▀▀▚▖  ▗▄▟▜
   ▌   ▜▄▟▀  ▐
   ▛▀▀█▀▛▀▀▀▀▜
   ▌▟▀  ▛▀▀▀▀▜
   ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 2.4.5

> Reading CSV file

CSV file contains 12 repositories

> Cloning repositories

Clone output will be written to file:///Users/mikesol/.moderne/cli/clone.log

> spring-data-couchbase@main
> spring-data-relational@main
> spring-data-rest@main
> spring-data-mongodb@main
> spring-data-cassandra@main
> spring-data-ldap@main
> spring-data-elasticsearch@main
> spring-data-redis@main
> spring-data-keyvalue@main
> spring-data-neo4j@main
> spring-data-jpa@main
> spring-data-commons@main
Cloned 12 repositories (1m 16s)

MOD SUCCEEDED in (1m 16s)
```

</details>

#### Step 3: Build the LSTs

Run the command:

```bash
mod build .
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
➜  spring-data mod build .
   ▛▀▀▚▖  ▗▄▟▜
   ▌   ▜▄▟▀  ▐
   ▛▀▀█▀▛▀▀▀▀▜
   ▌▟▀  ▛▀▀▀▀▜
   ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 2.4.5

> Selecting repositories

> spring-projects/spring-data-cassandra@main
> spring-projects/spring-data-commons@main
> spring-projects/spring-data-couchbase@main
> spring-projects/spring-data-elasticsearch@main
> spring-projects/spring-data-jpa@main
> spring-projects/spring-data-keyvalue@main
> spring-projects/spring-data-ldap@main
> spring-projects/spring-data-mongodb@main
> spring-projects/spring-data-neo4j@main
> spring-projects/spring-data-redis@main
> spring-projects/spring-data-relational@main
> spring-projects/spring-data-rest@main
Selected 12 repositories (0.31s)

> Building LST(s)

> spring-projects/spring-data-cassandra@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-cassandra/.moderne/build/20240105092910-JRmT1/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-cassandra/.moderne/build/20240105092910-JRmT1/0-spring-data-cassandra-20240105060254-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-commons@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-commons/.moderne/build/20240105092913-Pl0fg/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-commons/.moderne/build/20240105092913-Pl0fg/0-spring-data-commons-20240104182701-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-couchbase@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-couchbase/.moderne/build/20240105092915-k8Hdh/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-couchbase/.moderne/build/20240105092915-k8Hdh/0-spring-data-couchbase-20240105104028-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-elasticsearch@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-elasticsearch/.moderne/build/20240105092917-hBKbG/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-elasticsearch/.moderne/build/20240105092917-hBKbG/0-spring-data-elasticsearch-20240105080612-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-jpa@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-jpa/.moderne/build/20240105092919-HQYOU/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-jpa/.moderne/build/20240105092919-HQYOU/0-spring-data-jpa-20240104181705-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-keyvalue@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-keyvalue/.moderne/build/20240105092921-aQZLw/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-keyvalue/.moderne/build/20240105092921-aQZLw/0-spring-data-keyvalue-20240105144419-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-ldap@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-ldap/.moderne/build/20240105092922-bGbqc/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-ldap/.moderne/build/20240105092922-bGbqc/0-spring-data-ldap-20240105091754-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-mongodb@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-mongodb/.moderne/build/20240105092922-vDSHH/build.log
    📶 Step 1 - build with Maven
        Selected the 21.0.1-oracle JDK
    📶 Step 2 - build with mod-java
        Selected the 21.0.1-oracle JDK
    📶 Step 3 - build resources using the native CLI
    ✅ Built LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-mongodb/.moderne/build/20240105092922-vDSHH/spring-data-mongodb-20240105093140-ast.jar
    📈 Reported build metrics to Moderne
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-neo4j@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-neo4j/.moderne/build/20240105093141-dGCrA/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-neo4j/.moderne/build/20240105093141-dGCrA/0-spring-data-neo4j-20240104194758-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-redis@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-redis/.moderne/build/20240105093143-O0HAC/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-redis/.moderne/build/20240105093143-O0HAC/0-spring-data-redis-20240105035743-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-relational@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-relational/.moderne/build/20240105093146-LJKD5/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-relational/.moderne/build/20240105093146-LJKD5/0-spring-data-relational-20240105035255-ast.jar
    🧹 Cleaned 0 older builds.
> spring-projects/spring-data-rest@main
    Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-rest/.moderne/build/20240105093148-cL1ge/build.log
    📶 Step 1 - download from Moderne
    ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-rest/.moderne/build/20240105093148-cL1ge/0-spring-data-rest-20240104180550-ast.jar
    🧹 Cleaned 0 older builds.
Built 12 repositories. (2m 39s)

38m 28s saved by using previously built LSTs

* What to do next
    > Run mod run . --recipe <RecipeName>

MOD SUCCEEDED in (2m 39s)
```

</details>

#### Step 4: Install recipes

If you want to install all the recipes in Moderne:

```bash
mod config recipes moderne sync
```

If you want to install just the recipe we'll use below:

```bash
mod config recipes moderne install UpgradeToJava17
```

Then select the `Migrate to Java 17` recipe from the list

#### Step 5: Run the refactoring recipe against all of the repos

```bash
mod run . --recipe UpgradeToJava17
```

<details>

<summary>You should see results similar to the following</summary>

```bash
➜  spring-data mod run . --recipe UpgradeToJava17
   ▛▀▀▚▖  ▗▄▟▜
   ▌   ▜▄▟▀  ▐
   ▛▀▀█▀▛▀▀▀▀▜
   ▌▟▀  ▛▀▀▀▀▜
   ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 2.4.5

> Selecting repositories

> spring-projects/spring-data-cassandra@main
> spring-projects/spring-data-commons@main
> spring-projects/spring-data-couchbase@main
> spring-projects/spring-data-elasticsearch@main
> spring-projects/spring-data-jpa@main
> spring-projects/spring-data-keyvalue@main
> spring-projects/spring-data-ldap@main
> spring-projects/spring-data-mongodb@main
> spring-projects/spring-data-neo4j@main
> spring-projects/spring-data-redis@main
> spring-projects/spring-data-relational@main
> spring-projects/spring-data-rest@main
Selected 12 repositories (0.29s)

> Running recipe org.openrewrite.java.migrate.UpgradeToJava17

> spring-projects/spring-data-cassandra@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-cassandra/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-commons@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-commons/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-couchbase@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-couchbase/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-elasticsearch@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-elasticsearch/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-jpa@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-jpa/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-keyvalue@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-keyvalue/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-ldap@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-ldap/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-mongodb@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-mongodb/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-neo4j@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-neo4j/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-redis@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-redis/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-relational@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-relational/.moderne/run/20240105093912-uQVr7/fix.patch
> spring-projects/spring-data-rest@main
    ✅ Fix results at file:///Users/mikesol/Desktop/code/workshop/spring-data/spring-data-rest/.moderne/run/20240105093912-uQVr7/fix.patch
Found results on 12 repositories (3m 3s)

40m 46s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
          org.openrewrite.table.SourcesFiles
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240105093912-uQVr7 to apply the changes

MOD SUCCEEDED in (3m 3s)
```

</details>

{% hint style="info" %}
You can command/control + click the result file to view the diff.
{% endhint %}

#### Step 6: Run mod study to view a data table

Recipes can produce data tables as a recipe run proceeds. Data tables are, effectively, tabular data in a schema that is defined by the recipe.

Let's take a look at the data table for which source files had results:

```bash
mod study . --last-recipe-run --data-table SourcesFileResults
```

<details>

<summary>You should see results similar to the following.</summary>

```bash
➜  spring-data mod study . --last-recipe-run --data-table SourcesFileResults
   ▛▀▀▚▖  ▗▄▟▜
   ▌   ▜▄▟▀  ▐
   ▛▀▀█▀▛▀▀▀▀▜
   ▌▟▀  ▛▀▀▀▀▜
   ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 2.4.5

Found recipe run 20240105093912-uQVr7

> Selecting repositories

> spring-projects/spring-data-cassandra@main
> spring-projects/spring-data-commons@main
> spring-projects/spring-data-couchbase@main
> spring-projects/spring-data-elasticsearch@main
> spring-projects/spring-data-jpa@main
> spring-projects/spring-data-keyvalue@main
> spring-projects/spring-data-ldap@main
> spring-projects/spring-data-mongodb@main
> spring-projects/spring-data-neo4j@main
> spring-projects/spring-data-redis@main
> spring-projects/spring-data-relational@main
> spring-projects/spring-data-rest@main
Selected 12 repositories (0.02s)

> Building a combined data table from results on every repository

> spring-projects/spring-data-cassandra@main
    ✅ Added 159 rows
> spring-projects/spring-data-commons@main
    ✅ Added 214 rows
> spring-projects/spring-data-couchbase@main
    ✅ Added 80 rows
> spring-projects/spring-data-elasticsearch@main
    ✅ Added 44 rows
> spring-projects/spring-data-jpa@main
    ✅ Added 52 rows
> spring-projects/spring-data-keyvalue@main
    ✅ Added 11 rows
> spring-projects/spring-data-ldap@main
    ✅ Added 4 rows
> spring-projects/spring-data-mongodb@main
    ✅ Added 162 rows
> spring-projects/spring-data-neo4j@main
    ✅ Added 95 rows
> spring-projects/spring-data-redis@main
    ✅ Added 153 rows
> spring-projects/spring-data-relational@main
    ✅ Added 115 rows
> spring-projects/spring-data-rest@main
    ✅ Added 63 rows
Studied 12 repositories (18s)

* What to do next
    > Open file:///Users/mikesol/Desktop/code/workshop/spring-data/SourcesFileResults.xlsx

MOD SUCCEEDED in (18s)
```

</details>

You can open up the Excel output that was produced to see that on these 12 repositories, 1100+ different changes were made.

#### Step 7: Using templates with mod study

You can modify the `mod study` command to add a `--template` argument that lets you change the structure of the produced table.

Let's install and run the `FindMethods` recipe to demonstrate this:

```bash
mod config recipes moderne install FindMethods
# Select the first one (org.openrewrite.java.search.FindMethods)

mod run . --recipe FindMethods -PmethodPattern="java.util.List add(..)"
```

You can then filter the data table down to only a couple columns we're interested in and use a GoTemplate to produce a markdown file containing code samples for all of the matching methods found across all of the repositories:

{% code overflow="wrap" %}
````bash
mod study ./spring-data --last-recipe-run --data-table MethodCalls --json sourceFile,method --template '{{"# Search results\n\n"}}{{range .}}{{"* "}}{{.sourceFile}}{{"\n```\n"}}{{.method}}{{"\n```\n"}}{{end}}' > methods.md 
````
{% endcode %}

### (Optional) Fix static code analysis issues

If you have time, we recommend trying out one of the showcase recipes in OpenRewrite: [common static analysis](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis). This recipe is composed of 50+ recipes that find and fix common mistakes people make.

To demonstrate this recipe, we'll use a different Maven repository that has a variety of errors that need to be fixed.

1. Switch to Java 17:

```bash
sdk install java 17.0.9-tem
sdk use java 17.0.9-tem
```

2. Clone the [Spring WS](https://github.com/spring-projects/spring-ws) repository:

```bash
git clone https://github.com/spring-projects/spring-ws
```

3. Test that you can build it:

```bash
cd spring-ws
mod build .
./mvnw verify -DskipTests
```

4. Run the common static analysis recipe:

```bash
mod run . --recipe org.openrewrite.staticanalysis.CommonStaticAnalysis
```

5. Apply the changes from the recipe

```bash
mod git apply . --last-recipe-run
```

6. Check out all of the changes that were made by running:

```bash
git diff
```

<details>

<summary>You should see results similar to:</summary>

```diff
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/client/core/WebServiceTemplate.java b/spring-ws-core/src/main/java/org/springframework/ws/client/core/WebServiceTemplate.java
index 9eefaec8..cbdfb1d4 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/client/core/WebServiceTemplate.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/client/core/WebServiceTemplate.java
@@ -793,7 +793,7 @@ public class WebServiceTemplate extends WebServiceAccessor implements WebService
 	}
 
 	/** Adapter to enable use of a WebServiceMessageCallback inside a WebServiceMessageExtractor. */
-	private static class WebServiceMessageCallbackMessageExtractor implements WebServiceMessageExtractor<Boolean> {
+	private static final class WebServiceMessageCallbackMessageExtractor implements WebServiceMessageExtractor<Boolean> {
 
 		private final WebServiceMessageCallback callback;
 
@@ -809,7 +809,7 @@ public class WebServiceTemplate extends WebServiceAccessor implements WebService
 	}
 
 	/** Adapter to enable use of a SourceExtractor inside a WebServiceMessageExtractor. */
-	private static class SourceExtractorMessageExtractor<T> implements WebServiceMessageExtractor<T> {
+	private static final class SourceExtractorMessageExtractor<T> implements WebServiceMessageExtractor<T> {
 
 		private final SourceExtractor<T> sourceExtractor;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/client/support/destination/Wsdl11DestinationProvider.java b/spring-ws-core/src/main/java/org/springframework/ws/client/support/destination/Wsdl11DestinationProvider.java
index 786af275..af9159e7 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/client/support/destination/Wsdl11DestinationProvider.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/client/support/destination/Wsdl11DestinationProvider.java
@@ -52,9 +52,9 @@ public class Wsdl11DestinationProvider extends AbstractCachingDestinationProvide
 	/** Default XPath expression used for extracting all {@code location} attributes from the WSDL definition. */
 	public static final String DEFAULT_WSDL_LOCATION_EXPRESSION = "/wsdl:definitions/wsdl:service/wsdl:port/soap:address/@location";
 
-	private static TransformerFactory transformerFactory = TransformerFactoryUtils.newInstance();
+	private static final TransformerFactory transformerFactory = TransformerFactoryUtils.newInstance();
 
-	private Map<String, String> expressionNamespaces = new HashMap<String, String>();
+	private final Map<String, String> expressionNamespaces = new HashMap<>();
 
 	private XPathExpression locationXPathExpression;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/client/support/interceptor/AbstractValidatingInterceptor.java b/spring-ws-core/src/main/java/org/springframework/ws/client/support/interceptor/AbstractValidatingInterceptor.java
index a0446f4a..9a09e8ab 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/client/support/interceptor/AbstractValidatingInterceptor.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/client/support/interceptor/AbstractValidatingInterceptor.java
@@ -58,7 +58,7 @@ public abstract class AbstractValidatingInterceptor extends TransformerObjectSup
 
 	private boolean validateRequest = true;
 
-	private boolean validateResponse = false;
+	private boolean validateResponse;
 
 	private XmlValidator validator;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/config/AnnotationDrivenBeanDefinitionParser.java b/spring-ws-core/src/main/java/org/springframework/ws/config/AnnotationDrivenBeanDefinitionParser.java
index d3db7cd0..180f11cb 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/config/AnnotationDrivenBeanDefinitionParser.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/config/AnnotationDrivenBeanDefinitionParser.java
@@ -108,10 +108,10 @@ class AnnotationDrivenBeanDefinitionParser implements BeanDefinitionParser {
 	private void registerEndpointAdapters(Element element, Object source, ParserContext parserContext) {
 		RootBeanDefinition adapterDef = createBeanDefinition(DefaultMethodEndpointAdapter.class, source);
 
-		ManagedList<BeanMetadataElement> argumentResolvers = new ManagedList<BeanMetadataElement>();
+		ManagedList<BeanMetadataElement> argumentResolvers = new ManagedList<>();
 		argumentResolvers.setSource(source);
 
-		ManagedList<BeanMetadataElement> returnValueHandlers = new ManagedList<BeanMetadataElement>();
+		ManagedList<BeanMetadataElement> returnValueHandlers = new ManagedList<>();
 		returnValueHandlers.setSource(source);
 
 		argumentResolvers.add(createBeanDefinition(MessageContextMethodArgumentResolver.class, source));
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/config/DynamicWsdlBeanDefinitionParser.java b/spring-ws-core/src/main/java/org/springframework/ws/config/DynamicWsdlBeanDefinitionParser.java
index 82917d7a..d45f9a1c 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/config/DynamicWsdlBeanDefinitionParser.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/config/DynamicWsdlBeanDefinitionParser.java
@@ -67,7 +67,7 @@ class DynamicWsdlBeanDefinitionParser extends AbstractBeanDefinitionParser {
 		if (commonsSchemaPresent) {
 			RootBeanDefinition collectionDef = createBeanDefinition(CommonsXsdSchemaCollection.class, source);
 			collectionDef.getPropertyValues().addPropertyValue("inline", "true");
-			ManagedList<String> xsds = new ManagedList<String>();
+			ManagedList<String> xsds = new ManagedList<>();
 			xsds.setSource(source);
 			for (Element schema : schemas) {
 				xsds.add(schema.getAttribute("location"));
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/config/annotation/WsConfigurationSupport.java b/spring-ws-core/src/main/java/org/springframework/ws/config/annotation/WsConfigurationSupport.java
index 64e5ff88..1d680d1a 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/config/annotation/WsConfigurationSupport.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/config/annotation/WsConfigurationSupport.java
@@ -118,7 +118,7 @@ public class WsConfigurationSupport {
 	 */
 	protected final EndpointInterceptor[] getInterceptors() {
 		if (interceptors == null) {
-			interceptors = new ArrayList<EndpointInterceptor>();
+			interceptors = new ArrayList<>();
 			addInterceptors(interceptors);
 		}
 		return interceptors.toArray(new EndpointInterceptor[interceptors.size()]);
@@ -140,10 +140,10 @@ public class WsConfigurationSupport {
 	 */
 	@Bean
 	public DefaultMethodEndpointAdapter defaultMethodEndpointAdapter() {
-		List<MethodArgumentResolver> argumentResolvers = new ArrayList<MethodArgumentResolver>();
+		List<MethodArgumentResolver> argumentResolvers = new ArrayList<>();
 		addArgumentResolvers(argumentResolvers);
 
-		List<MethodReturnValueHandler> returnValueHandlers = new ArrayList<MethodReturnValueHandler>();
+		List<MethodReturnValueHandler> returnValueHandlers = new ArrayList<>();
 		addReturnValueHandlers(returnValueHandlers);
 
 		DefaultMethodEndpointAdapter adapter = new DefaultMethodEndpointAdapter();
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/config/annotation/WsConfigurerComposite.java b/spring-ws-core/src/main/java/org/springframework/ws/config/annotation/WsConfigurerComposite.java
index 04cca7c1..7e74d5de 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/config/annotation/WsConfigurerComposite.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/config/annotation/WsConfigurerComposite.java
@@ -15,7 +15,7 @@ import org.springframework.ws.server.endpoint.adapter.method.MethodReturnValueHa
  */
 public class WsConfigurerComposite implements WsConfigurer {
 
-	private List<WsConfigurer> delegates = new ArrayList<WsConfigurer>();
+	private final List<WsConfigurer> delegates = new ArrayList<>();
 
 	public void addWsConfigurers(List<WsConfigurer> configurers) {
 		if (configurers != null) {
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/context/AbstractMessageContext.java b/spring-ws-core/src/main/java/org/springframework/ws/context/AbstractMessageContext.java
index 54d15374..2d31c20a 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/context/AbstractMessageContext.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/context/AbstractMessageContext.java
@@ -61,7 +61,7 @@ public abstract class AbstractMessageContext implements MessageContext {
 
 	private Map<String, Object> getProperties() {
 		if (properties == null) {
-			properties = new HashMap<String, Object>();
+			properties = new HashMap<>();
 		}
 		return properties;
 	}
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractDom4jPayloadEndpoint.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractDom4jPayloadEndpoint.java
index 25989dbf..6adea14d 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractDom4jPayloadEndpoint.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractDom4jPayloadEndpoint.java
@@ -44,7 +44,7 @@ import org.w3c.dom.Node;
 @Deprecated
 public abstract class AbstractDom4jPayloadEndpoint extends TransformerObjectSupport implements PayloadEndpoint {
 
-	private boolean alwaysTransform = false;
+	private boolean alwaysTransform;
 
 	/**
 	 * Set if the request {@link Source} should always be transformed into a new {@link DocumentResult}.
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractDomPayloadEndpoint.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractDomPayloadEndpoint.java
index 304b0aa1..785c2083 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractDomPayloadEndpoint.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractDomPayloadEndpoint.java
@@ -50,13 +50,13 @@ public abstract class AbstractDomPayloadEndpoint extends TransformerObjectSuppor
 
 	private DocumentBuilderFactory documentBuilderFactory;
 
-	private boolean validating = false;
+	private boolean validating;
 
 	private boolean namespaceAware = true;
 
-	private boolean expandEntityReferences = false;
+	private boolean expandEntityReferences;
 
-	private boolean alwaysTransform = false;
+	private boolean alwaysTransform;
 
 	/** Set whether or not the XML parser should be XML namespace aware. Default is {@code true}. */
 	public void setNamespaceAware(boolean namespaceAware) {
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractJDomPayloadEndpoint.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractJDomPayloadEndpoint.java
index 96842650..b15ac731 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractJDomPayloadEndpoint.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractJDomPayloadEndpoint.java
@@ -42,7 +42,7 @@ import org.w3c.dom.Node;
 @Deprecated
 public abstract class AbstractJDomPayloadEndpoint extends TransformerObjectSupport implements PayloadEndpoint {
 
-	private boolean alwaysTransform = false;
+	private boolean alwaysTransform;
 
 	/**
 	 * Set if the request {@link Source} should always be transformed into a new {@link JDOMResult}.
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractStaxStreamPayloadEndpoint.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractStaxStreamPayloadEndpoint.java
index 387d4d9a..c5b8b8dc 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractStaxStreamPayloadEndpoint.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractStaxStreamPayloadEndpoint.java
@@ -121,7 +121,7 @@ public abstract class AbstractStaxStreamPayloadEndpoint extends AbstractStaxPayl
 	 * Implementation of the {@code XMLStreamWriter} interface that creates a response {@code WebServiceMessage} as soon
 	 * as any method is called, thus lazily creating the response.
 	 */
-	private class ResponseCreatingStreamWriter implements XMLStreamWriter {
+	private final class ResponseCreatingStreamWriter implements XMLStreamWriter {
 
 		private MessageContext messageContext;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractValidatingMarshallingPayloadEndpoint.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractValidatingMarshallingPayloadEndpoint.java
index 346c445d..fa7cecee 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractValidatingMarshallingPayloadEndpoint.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractValidatingMarshallingPayloadEndpoint.java
@@ -54,7 +54,7 @@ public abstract class AbstractValidatingMarshallingPayloadEndpoint extends Abstr
 	/** Return the primary Validator for this controller. */
 	public Validator getValidator() {
 		Validator[] validators = getValidators();
-		return (validators != null && validators.length > 0 ? validators[0] : null);
+		return validators != null && validators.length > 0 ? validators[0] : null;
 	}
 
 	/**
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractXomPayloadEndpoint.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractXomPayloadEndpoint.java
index 740a6336..84fc7725 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractXomPayloadEndpoint.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/AbstractXomPayloadEndpoint.java
@@ -184,7 +184,7 @@ public abstract class AbstractXomPayloadEndpoint extends TransformerObjectSuppor
 	}
 
 	@SuppressWarnings("serial")
-	private static class XomParsingException extends NestedRuntimeException {
+	private static final class XomParsingException extends NestedRuntimeException {
 
 		private XomParsingException(ParsingException ex) {
 			super(ex.getMessage(), ex);
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/DefaultMethodEndpointAdapter.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/DefaultMethodEndpointAdapter.java
index 17e06ccb..42331abc 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/DefaultMethodEndpointAdapter.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/DefaultMethodEndpointAdapter.java
@@ -156,7 +156,7 @@ public class DefaultMethodEndpointAdapter extends AbstractMethodEndpointAdapter
 
 	private void initMethodArgumentResolvers() {
 		if (CollectionUtils.isEmpty(methodArgumentResolvers)) {
-			List<MethodArgumentResolver> methodArgumentResolvers = new ArrayList<MethodArgumentResolver>();
+			List<MethodArgumentResolver> methodArgumentResolvers = new ArrayList<>();
 			methodArgumentResolvers.add(new DomPayloadMethodProcessor());
 			methodArgumentResolvers.add(new MessageContextMethodArgumentResolver());
 			methodArgumentResolvers.add(new SourcePayloadMethodProcessor());
@@ -206,7 +206,7 @@ public class DefaultMethodEndpointAdapter extends AbstractMethodEndpointAdapter
 
 	private void initMethodReturnValueHandlers() {
 		if (CollectionUtils.isEmpty(methodReturnValueHandlers)) {
-			List<MethodReturnValueHandler> methodReturnValueHandlers = new ArrayList<MethodReturnValueHandler>();
+			List<MethodReturnValueHandler> methodReturnValueHandlers = new ArrayList<>();
 			methodReturnValueHandlers.add(new DomPayloadMethodProcessor());
 			methodReturnValueHandlers.add(new SourcePayloadMethodProcessor());
 			if (isPresent(DOM4J_CLASS_NAME)) {
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/MarshallingMethodEndpointAdapter.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/MarshallingMethodEndpointAdapter.java
index 569fc1f8..c4f03aa5 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/MarshallingMethodEndpointAdapter.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/MarshallingMethodEndpointAdapter.java
@@ -173,7 +173,7 @@ public class MarshallingMethodEndpointAdapter extends AbstractMethodEndpointAdap
 	}
 
 	private boolean supportsReturnType(Method method) {
-		return (Void.TYPE.equals(method.getReturnType()) || getMarshaller().supports(method.getReturnType()));
+		return Void.TYPE.equals(method.getReturnType()) || getMarshaller().supports(method.getReturnType());
 	}
 
 	private boolean supportsParameters(Method method) {
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/SourcePayloadMethodProcessor.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/SourcePayloadMethodProcessor.java
index a2a981af..1f35a5c4 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/SourcePayloadMethodProcessor.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/SourcePayloadMethodProcessor.java
@@ -46,7 +46,7 @@ import org.xml.sax.InputSource;
  */
 public class SourcePayloadMethodProcessor extends AbstractPayloadSourceMethodProcessor {
 
-	private XMLInputFactory inputFactory = createXmlInputFactory();
+	private final XMLInputFactory inputFactory = createXmlInputFactory();
 
 	// MethodArgumentResolver
 
@@ -135,7 +135,7 @@ public class SourcePayloadMethodProcessor extends AbstractPayloadSourceMethodPro
 
 	}
 
-	private static class SystemIdStreamReaderDelegate extends StreamReaderDelegate {
+	private static final class SystemIdStreamReaderDelegate extends StreamReaderDelegate {
 
 		private final String systemId;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/dom/XomPayloadMethodProcessor.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/dom/XomPayloadMethodProcessor.java
index a830873f..975fa8d7 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/dom/XomPayloadMethodProcessor.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/dom/XomPayloadMethodProcessor.java
@@ -47,7 +47,7 @@ import org.w3c.dom.DOMImplementation;
  */
 public class XomPayloadMethodProcessor extends AbstractPayloadSourceMethodProcessor {
 
-	private DocumentBuilderFactory documentBuilderFactory = createDocumentBuilderFactory();
+	private final DocumentBuilderFactory documentBuilderFactory = createDocumentBuilderFactory();
 
 	@Override
 	protected boolean supportsRequestPayloadParameter(MethodParameter parameter) {
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/jaxb/AbstractJaxb2PayloadMethodProcessor.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/jaxb/AbstractJaxb2PayloadMethodProcessor.java
index f9ef9868..a8b20e27 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/jaxb/AbstractJaxb2PayloadMethodProcessor.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/adapter/method/jaxb/AbstractJaxb2PayloadMethodProcessor.java
@@ -72,7 +72,7 @@ import org.xml.sax.ext.LexicalHandler;
  */
 public abstract class AbstractJaxb2PayloadMethodProcessor extends AbstractPayloadMethodProcessor {
 
-	private final ConcurrentMap<Class<?>, JAXBContext> jaxbContexts = new ConcurrentHashMap<Class<?>, JAXBContext>();
+	private final ConcurrentMap<Class<?>, JAXBContext> jaxbContexts = new ConcurrentHashMap<>();
 
 	@Override
 	public final void handleReturnValue(MessageContext messageContext, MethodParameter returnType, Object returnValue)
@@ -159,7 +159,7 @@ public abstract class AbstractJaxb2PayloadMethodProcessor extends AbstractPayloa
 			return null;
 		}
 		try {
-			JaxbElementSourceCallback<T> callback = new JaxbElementSourceCallback<T>(clazz);
+			JaxbElementSourceCallback<T> callback = new JaxbElementSourceCallback<>(clazz);
 			TraxUtils.doWithSource(requestPayload, callback);
 			if (logger.isDebugEnabled()) {
 				logger.debug("Unmarshalled payload request to [" + callback.result + "]");
@@ -341,7 +341,7 @@ public abstract class AbstractJaxb2PayloadMethodProcessor extends AbstractPayloa
 		}
 	}
 
-	private class Jaxb2ResultCallback implements TraxUtils.ResultCallback {
+	private final class Jaxb2ResultCallback implements TraxUtils.ResultCallback {
 
 		private final Marshaller marshaller;
 
@@ -388,7 +388,7 @@ public abstract class AbstractJaxb2PayloadMethodProcessor extends AbstractPayloa
 		}
 	}
 
-	private class JaxbStreamingPayload implements StreamingPayload {
+	private final class JaxbStreamingPayload implements StreamingPayload {
 
 		private final Object jaxbElement;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/interceptor/AbstractValidatingInterceptor.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/interceptor/AbstractValidatingInterceptor.java
index 4a99882e..6a9c7197 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/interceptor/AbstractValidatingInterceptor.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/interceptor/AbstractValidatingInterceptor.java
@@ -62,7 +62,7 @@ public abstract class AbstractValidatingInterceptor extends TransformerObjectSup
 
 	private boolean validateRequest = true;
 
-	private boolean validateResponse = false;
+	private boolean validateResponse;
 
 	private XmlValidator validator;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractAnnotationMethodEndpointMapping.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractAnnotationMethodEndpointMapping.java
index d2fff3a0..7df7d752 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractAnnotationMethodEndpointMapping.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractAnnotationMethodEndpointMapping.java
@@ -34,7 +34,7 @@ import org.springframework.ws.server.endpoint.annotation.Endpoint;
  */
 public abstract class AbstractAnnotationMethodEndpointMapping<T> extends AbstractMethodEndpointMapping<T> {
 
-	private boolean detectEndpointsInAncestorContexts = false;
+	private boolean detectEndpointsInAncestorContexts;
 
 	/**
 	 * Set whether to detect endpoint beans in ancestor ApplicationContexts.
@@ -60,9 +60,9 @@ public abstract class AbstractAnnotationMethodEndpointMapping<T> extends Abstrac
 		if (logger.isDebugEnabled()) {
 			logger.debug("Looking for endpoints in application context: " + getApplicationContext());
 		}
-		String[] beanNames = (this.detectEndpointsInAncestorContexts
+		String[] beanNames = this.detectEndpointsInAncestorContexts
 				? BeanFactoryUtils.beanNamesForTypeIncludingAncestors(getApplicationContext(), Object.class)
-				: getApplicationContext().getBeanNamesForType(Object.class));
+				: getApplicationContext().getBeanNamesForType(Object.class);
 
 		for (String beanName : beanNames) {
 			Class<?> endpointClass = getApplicationContext().getType(beanName);
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractEndpointMapping.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractEndpointMapping.java
index d0ca2d2f..2b129302 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractEndpointMapping.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractEndpointMapping.java
@@ -131,7 +131,7 @@ public abstract class AbstractEndpointMapping extends ApplicationObjectSupport i
 			}
 		}
 
-		List<EndpointInterceptor> interceptors = new ArrayList<EndpointInterceptor>();
+		List<EndpointInterceptor> interceptors = new ArrayList<>();
 		if (this.interceptors != null) {
 			interceptors.addAll(Arrays.asList(this.interceptors));
 		}
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractMapBasedEndpointMapping.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractMapBasedEndpointMapping.java
index a32e9093..16e91239 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractMapBasedEndpointMapping.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractMapBasedEndpointMapping.java
@@ -37,14 +37,14 @@ import org.springframework.ws.context.MessageContext;
  */
 public abstract class AbstractMapBasedEndpointMapping extends AbstractEndpointMapping {
 
-	private boolean lazyInitEndpoints = false;
+	private boolean lazyInitEndpoints;
 
-	private boolean registerBeanNames = false;
+	private boolean registerBeanNames;
 
-	private final Map<String, Object> endpointMap = new HashMap<String, Object>();
+	private final Map<String, Object> endpointMap = new HashMap<>();
 
 	// holds mappings set via setEndpointMap and setMappings
-	private Map<String, Object> temporaryEndpointMap = new HashMap<String, Object>();
+	private Map<String, Object> temporaryEndpointMap = new HashMap<>();
 
 	/**
 	 * Set whether to lazily initialize endpoints. Only applicable to singleton endpoints, as prototypes are always lazily
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractMethodEndpointMapping.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractMethodEndpointMapping.java
index d60b57f6..cdd7ab0a 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractMethodEndpointMapping.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/AbstractMethodEndpointMapping.java
@@ -48,7 +48,7 @@ import org.springframework.ws.server.endpoint.MethodEndpoint;
  */
 public abstract class AbstractMethodEndpointMapping<T> extends AbstractEndpointMapping {
 
-	private final Map<T, MethodEndpoint> endpointMap = new HashMap<T, MethodEndpoint>();
+	private final Map<T, MethodEndpoint> endpointMap = new HashMap<>();
 
 	/**
 	 * Lookup an endpoint for the given message. The extraction of the endpoint key is delegated to the concrete subclass.
@@ -158,8 +158,8 @@ public abstract class AbstractMethodEndpointMapping<T> extends AbstractEndpointM
 
 	private Set<Method> findEndpointMethods(Class<?> endpointType,
 			final ReflectionUtils.MethodFilter endpointMethodFilter) {
-		final Set<Method> endpointMethods = new LinkedHashSet<Method>();
-		Set<Class<?>> endpointTypes = new LinkedHashSet<Class<?>>();
+		final Set<Method> endpointMethods = new LinkedHashSet<>();
+		Set<Class<?>> endpointTypes = new LinkedHashSet<>();
 		Class<?> specificEndpointType = null;
 		if (!Proxy.isProxyClass(endpointType)) {
 			endpointTypes.add(endpointType);
@@ -167,7 +167,7 @@ public abstract class AbstractMethodEndpointMapping<T> extends AbstractEndpointM
 		}
 		endpointTypes.addAll(Arrays.asList(endpointType.getInterfaces()));
 		for (Class<?> currentEndpointType : endpointTypes) {
-			final Class<?> targetClass = (specificEndpointType != null ? specificEndpointType : currentEndpointType);
+			final Class<?> targetClass = specificEndpointType != null ? specificEndpointType : currentEndpointType;
 			ReflectionUtils.doWithMethods(currentEndpointType, new ReflectionUtils.MethodCallback() {
 				public void doWith(Method method) {
 					Method specificMethod = ClassUtils.getMostSpecificMethod(method, targetClass);
@@ -204,7 +204,7 @@ public abstract class AbstractMethodEndpointMapping<T> extends AbstractEndpointM
 	 */
 	protected List<T> getLookupKeysForMethod(Method method) {
 		T key = getLookupKeyForMethod(method);
-		return key != null ? Collections.singletonList(key) : Collections.<T> emptyList();
+		return key != null ? Collections.singletonList(key) : Collections. emptyList();
 	}
 
 	/**
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/PayloadRootAnnotationMethodEndpointMapping.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/PayloadRootAnnotationMethodEndpointMapping.java
index c9247327..e93c0b8a 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/PayloadRootAnnotationMethodEndpointMapping.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/PayloadRootAnnotationMethodEndpointMapping.java
@@ -76,7 +76,7 @@ public class PayloadRootAnnotationMethodEndpointMapping extends AbstractAnnotati
 
 	@Override
 	protected List<QName> getLookupKeysForMethod(Method method) {
-		List<QName> result = new ArrayList<QName>();
+		List<QName> result = new ArrayList<>();
 
 		PayloadRoots payloadRoots = AnnotationUtils.findAnnotation(method, PayloadRoots.class);
 		if (payloadRoots != null) {
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/UriEndpointMapping.java b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/UriEndpointMapping.java
index 77740486..91abd6ef 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/UriEndpointMapping.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/server/endpoint/mapping/UriEndpointMapping.java
@@ -61,7 +61,7 @@ import org.springframework.ws.transport.context.TransportContextHolder;
  */
 public class UriEndpointMapping extends AbstractMapBasedEndpointMapping {
 
-	private boolean usePath = false;
+	private boolean usePath;
 
 	/**
 	 * Indicates whether the path should be used instead of the full URI. Default is {@code false}.
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AbstractActionEndpointMapping.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AbstractActionEndpointMapping.java
index 5d3a44ba..708d88ee 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AbstractActionEndpointMapping.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AbstractActionEndpointMapping.java
@@ -44,7 +44,7 @@ public abstract class AbstractActionEndpointMapping extends AbstractAddressingEn
 	public static final String DEFAULT_FAULT_ACTION_SUFFIX = "Fault";
 
 	// keys are action URIs, values are endpoints
-	private final Map<URI, Object> endpointMap = new HashMap<URI, Object>();
+	private final Map<URI, Object> endpointMap = new HashMap<>();
 
 	private String outputActionSuffix = DEFAULT_OUTPUT_ACTION_SUFFIX;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AbstractAddressingEndpointMapping.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AbstractAddressingEndpointMapping.java
index 0dbd74bf..8436bd53 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AbstractAddressingEndpointMapping.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AbstractAddressingEndpointMapping.java
@@ -283,7 +283,7 @@ public abstract class AbstractAddressingEndpointMapping extends TransformerObjec
 		WebServiceMessageSender[] messageSenders = getMessageSenders(endpoint);
 		MessageIdStrategy messageIdStrategy = getMessageIdStrategy(endpoint);
 
-		List<EndpointInterceptor> interceptors = new ArrayList<EndpointInterceptor>();
+		List<EndpointInterceptor> interceptors = new ArrayList<>();
 		interceptors.addAll(Arrays.asList(preInterceptors));
 
 		AddressingEndpointInterceptor addressingInterceptor = new AddressingEndpointInterceptor(version, messageIdStrategy,
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AddressingEndpointInterceptor.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AddressingEndpointInterceptor.java
index b99879d9..0ef799ae 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AddressingEndpointInterceptor.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/AddressingEndpointInterceptor.java
@@ -50,9 +50,9 @@ class AddressingEndpointInterceptor implements SoapEndpointInterceptor {
 
 	private final WebServiceMessageSender[] messageSenders;
 
-	private URI replyAction;
+	private final URI replyAction;
 
-	private URI faultAction;
+	private final URI faultAction;
 
 	AddressingEndpointInterceptor(AddressingVersion version, MessageIdStrategy messageIdStrategy,
 			WebServiceMessageSender[] messageSenders, URI replyAction, URI faultAction) {
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/SimpleActionEndpointMapping.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/SimpleActionEndpointMapping.java
index 60f7b12c..9d82787d 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/SimpleActionEndpointMapping.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/server/SimpleActionEndpointMapping.java
@@ -53,7 +53,7 @@ import org.springframework.beans.BeansException;
 public class SimpleActionEndpointMapping extends AbstractActionEndpointMapping {
 
 	// contents will be copied over to endpointMap
-	private final Map<URI, Object> actionMap = new HashMap<URI, Object>();
+	private final Map<URI, Object> actionMap = new HashMap<>();
 
 	private URI address;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/version/AbstractAddressingVersion.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/version/AbstractAddressingVersion.java
index 76279fc8..90760ea8 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/version/AbstractAddressingVersion.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/addressing/version/AbstractAddressingVersion.java
@@ -63,7 +63,7 @@ import org.w3c.dom.Node;
  */
 public abstract class AbstractAddressingVersion extends TransformerObjectSupport implements AddressingVersion {
 
-	private static DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactoryUtils.newInstance();
+	private static final DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactoryUtils.newInstance();
 
 	private final XPathExpression toExpression;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoap11Header.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoap11Header.java
index 9c61e203..2cb8acb5 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoap11Header.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoap11Header.java
@@ -44,7 +44,7 @@ class SaajSoap11Header extends SaajSoapHeader implements Soap11Header {
 	@Override
 	@SuppressWarnings("unchecked")
 	public Iterator<SoapHeaderElement> examineHeaderElementsToProcess(String[] actors) {
-		List<SOAPHeaderElement> result = new ArrayList<SOAPHeaderElement>();
+		List<SOAPHeaderElement> result = new ArrayList<>();
 		Iterator<SOAPHeaderElement> iterator = getSaajHeader().examineAllHeaderElements();
 		while (iterator.hasNext()) {
 			SOAPHeaderElement saajHeaderElement = iterator.next();
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoap12Header.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoap12Header.java
index 6282a10e..5836b5ae 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoap12Header.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoap12Header.java
@@ -69,7 +69,7 @@ class SaajSoap12Header extends SaajSoapHeader implements Soap12Header {
 	@SuppressWarnings("unchecked")
 	public Iterator<SoapHeaderElement> examineHeaderElementsToProcess(String[] roles, boolean isUltimateDestination)
 			throws SoapHeaderException {
-		List<SOAPHeaderElement> result = new ArrayList<SOAPHeaderElement>();
+		List<SOAPHeaderElement> result = new ArrayList<>();
 		Iterator<SOAPHeaderElement> iterator = getSaajHeader().examineAllHeaderElements();
 		while (iterator.hasNext()) {
 			SOAPHeaderElement saajHeaderElement = iterator.next();
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoapFaultDetail.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoapFaultDetail.java
index e0b5b868..b6d2f120 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoapFaultDetail.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoapFaultDetail.java
@@ -70,7 +70,7 @@ class SaajSoapFaultDetail extends SaajSoapElement<SOAPFaultElement> implements S
 		return (Detail) getSaajElement();
 	}
 
-	private static class SaajSoapFaultDetailElementIterator implements Iterator<SoapFaultDetailElement> {
+	private static final class SaajSoapFaultDetailElementIterator implements Iterator<SoapFaultDetailElement> {
 
 		private final Iterator<DetailEntry> iterator;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoapMessage.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoapMessage.java
index 32a10df0..c14806d6 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoapMessage.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/SaajSoapMessage.java
@@ -339,7 +339,7 @@ public class SaajSoapMessage extends AbstractSoapMessage {
 		return builder.toString();
 	}
 
-	private static class SaajAttachmentIterator implements Iterator<Attachment> {
+	private static final class SaajAttachmentIterator implements Iterator<Attachment> {
 
 		private final Iterator<AttachmentPart> saajIterator;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajContentHandler.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajContentHandler.java
index e116e690..44d0dd60 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajContentHandler.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajContentHandler.java
@@ -46,7 +46,7 @@ public class SaajContentHandler implements ContentHandler {
 
 	private final SOAPEnvelope envelope;
 
-	private Map<String, String> namespaces = new LinkedHashMap<String, String>();
+	private final Map<String, String> namespaces = new LinkedHashMap<>();
 
 	/**
 	 * Constructs a new instance of the {@code SaajContentHandler} that creates children of the given {@code SOAPElement}.
@@ -64,7 +64,7 @@ public class SaajContentHandler implements ContentHandler {
 	}
 
 	@Override
-	public void characters(char ch[], int start, int length) throws SAXException {
+	public void characters(char[] ch, int start, int length) throws SAXException {
 		try {
 			String text = new String(ch, start, length);
 			element.addTextNode(text);
@@ -143,7 +143,7 @@ public class SaajContentHandler implements ContentHandler {
 	public void endDocument() throws SAXException {}
 
 	@Override
-	public void ignorableWhitespace(char ch[], int start, int length) throws SAXException {}
+	public void ignorableWhitespace(char[] ch, int start, int length) throws SAXException {}
 
 	@Override
 	public void processingInstruction(String target, String data) throws SAXException {}
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajUtils.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajUtils.java
index de0de8d5..e3d2c932 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajUtils.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajUtils.java
@@ -46,7 +46,7 @@ public abstract class SaajUtils {
 
 	public static final int SAAJ_13 = 2;
 
-	private static int saajVersion = SAAJ_13;
+	private static final int saajVersion = SAAJ_13;
 
 	/**
 	 * Gets the SAAJ version. Returns {@link #SAAJ_13} as of Spring-WS 2.2.
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajXmlReader.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajXmlReader.java
index a8e4de68..bb0848bd 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajXmlReader.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/saaj/support/SaajXmlReader.java
@@ -51,7 +51,7 @@ public class SaajXmlReader extends AbstractXmlReader {
 
 	private boolean namespacesFeature = true;
 
-	private boolean namespacePrefixesFeature = false;
+	private boolean namespacePrefixesFeature;
 
 	/**
 	 * Constructs a new instance of the {@code SaajXmlReader} that reads from the given {@code Node}.
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/server/SoapMessageDispatcher.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/server/SoapMessageDispatcher.java
index 147957c1..eb0076f1 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/server/SoapMessageDispatcher.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/server/SoapMessageDispatcher.java
@@ -107,7 +107,7 @@ public class SoapMessageDispatcher extends MessageDispatcher {
 		} else {
 			headerIterator = ((Soap12Header) soapHeader).examineHeaderElementsToProcess(actorsOrRoles, isUltimateReceiver);
 		}
-		List<QName> notUnderstoodHeaderNames = new ArrayList<QName>();
+		List<QName> notUnderstoodHeaderNames = new ArrayList<>();
 		while (headerIterator.hasNext()) {
 			SoapHeaderElement headerElement = headerIterator.next();
 			QName headerName = headerElement.getName();
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/SoapFaultMappingExceptionResolver.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/SoapFaultMappingExceptionResolver.java
index 33410139..f738f433 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/SoapFaultMappingExceptionResolver.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/SoapFaultMappingExceptionResolver.java
@@ -31,7 +31,7 @@ import org.springframework.util.CollectionUtils;
  */
 public class SoapFaultMappingExceptionResolver extends AbstractSoapFaultDefinitionExceptionResolver {
 
-	private Map<String, String> exceptionMappings = new LinkedHashMap<String, String>();
+	private final Map<String, String> exceptionMappings = new LinkedHashMap<>();
 
 	/**
 	 * Set the mappings between exception class names and SOAP Faults. The exception class name can be a substring, with
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/adapter/method/SoapHeaderElementMethodArgumentResolver.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/adapter/method/SoapHeaderElementMethodArgumentResolver.java
index 92493a2f..9d7d3389 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/adapter/method/SoapHeaderElementMethodArgumentResolver.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/adapter/method/SoapHeaderElementMethodArgumentResolver.java
@@ -121,7 +121,7 @@ public class SoapHeaderElementMethodArgumentResolver implements MethodArgumentRe
 
 	private List<SoapHeaderElement> extractSoapHeaderList(QName qname,
 			org.springframework.ws.soap.SoapHeader soapHeader) {
-		List<SoapHeaderElement> result = new ArrayList<SoapHeaderElement>();
+		List<SoapHeaderElement> result = new ArrayList<>();
 		Iterator<SoapHeaderElement> elements = soapHeader.examineAllHeaderElements();
 		while (elements.hasNext()) {
 			SoapHeaderElement e = elements.next();
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/mapping/SoapActionAnnotationMethodEndpointMapping.java b/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/mapping/SoapActionAnnotationMethodEndpointMapping.java
index f17e2ea7..a2142293 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/mapping/SoapActionAnnotationMethodEndpointMapping.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/soap/server/endpoint/mapping/SoapActionAnnotationMethodEndpointMapping.java
@@ -116,7 +116,7 @@ public class SoapActionAnnotationMethodEndpointMapping extends AbstractAnnotatio
 
 	@Override
 	protected List<String> getLookupKeysForMethod(Method method) {
-		List<String> result = new ArrayList<String>();
+		List<String> result = new ArrayList<>();
 
 		SoapActions soapActions = AnnotationUtils.findAnnotation(method, SoapActions.class);
 		if (soapActions != null) {
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/support/WebUtils.java b/spring-ws-core/src/main/java/org/springframework/ws/support/WebUtils.java
index 2b27b567..91868de7 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/support/WebUtils.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/support/WebUtils.java
@@ -60,7 +60,7 @@ public abstract class WebUtils {
 		}
 		int begin = urlPath.lastIndexOf('/', end) + 1;
 		int paramIndex = urlPath.indexOf(';', begin);
-		end = (paramIndex != -1 && paramIndex < end ? paramIndex : end);
+		end = paramIndex != -1 && paramIndex < end ? paramIndex : end;
 		return urlPath.substring(begin, end);
 	}
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/AbstractWebServiceConnection.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/AbstractWebServiceConnection.java
index f05dfbb6..cf9c35d0 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/AbstractWebServiceConnection.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/AbstractWebServiceConnection.java
@@ -33,7 +33,7 @@ public abstract class AbstractWebServiceConnection implements WebServiceConnecti
 
 	private TransportOutputStream tos;
 
-	private boolean closed = false;
+	private boolean closed;
 
 	@Override
 	public final void send(WebServiceMessage message) throws IOException {
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/TransportInputStream.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/TransportInputStream.java
index f311b469..e153d3e7 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/TransportInputStream.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/TransportInputStream.java
@@ -76,12 +76,12 @@ public abstract class TransportInputStream extends InputStream {
 	}
 
 	@Override
-	public int read(byte b[]) throws IOException {
+	public int read(byte[] b) throws IOException {
 		return getInputStream().read(b);
 	}
 
 	@Override
-	public int read(byte b[], int off, int len) throws IOException {
+	public int read(byte[] b, int off, int len) throws IOException {
 		return getInputStream().read(b, off, len);
 	}
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/TransportOutputStream.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/TransportOutputStream.java
index 1bb975d1..7fcc9c02 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/TransportOutputStream.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/TransportOutputStream.java
@@ -58,12 +58,12 @@ public abstract class TransportOutputStream extends OutputStream {
 	}
 
 	@Override
-	public void write(byte b[]) throws IOException {
+	public void write(byte[] b) throws IOException {
 		getOutputStream().write(b);
 	}
 
 	@Override
-	public void write(byte b[], int off, int len) throws IOException {
+	public void write(byte[] b, int off, int len) throws IOException {
 		getOutputStream().write(b, off, len);
 	}
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/CommonsHttpMessageSender.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/CommonsHttpMessageSender.java
index f2850601..562e017c 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/CommonsHttpMessageSender.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/CommonsHttpMessageSender.java
@@ -56,9 +56,9 @@ import org.springframework.ws.transport.WebServiceConnection;
 public class CommonsHttpMessageSender extends AbstractHttpWebServiceMessageSender
 		implements InitializingBean, DisposableBean {
 
-	private static final int DEFAULT_CONNECTION_TIMEOUT_MILLISECONDS = (60 * 1000);
+	private static final int DEFAULT_CONNECTION_TIMEOUT_MILLISECONDS = 60 * 1000;
 
-	private static final int DEFAULT_READ_TIMEOUT_MILLISECONDS = (60 * 1000);
+	private static final int DEFAULT_READ_TIMEOUT_MILLISECONDS = 60 * 1000;
 
 	private HttpClient httpClient;
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpComponents5ClientFactory.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpComponents5ClientFactory.java
index 7d23dc1d..7728d161 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpComponents5ClientFactory.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpComponents5ClientFactory.java
@@ -67,7 +67,7 @@ public class HttpComponents5ClientFactory implements FactoryBean<CloseableHttpCl
 
 	private AuthScope authScope = ANY;
 
-	private Credentials credentials = null;
+	private Credentials credentials;
 
 	private Map<String, String> maxConnectionsPerHost = Map.of();
 
@@ -168,7 +168,7 @@ public class HttpComponents5ClientFactory implements FactoryBean<CloseableHttpCl
 			HttpHost host = new HttpHost(uri.getScheme(), uri.getHost(), getPort(uri));
 			final HttpRoute route;
 
-			if (uri.getScheme().equals("https")) {
+			if ("https".equals(uri.getScheme())) {
 				route = new HttpRoute(host, null, true);
 			} else {
 				route = new HttpRoute(host);
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpComponentsMessageSender.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpComponentsMessageSender.java
index 5ebdd815..ff029036 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpComponentsMessageSender.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpComponentsMessageSender.java
@@ -58,9 +58,9 @@ import org.springframework.ws.transport.WebServiceConnection;
 public class HttpComponentsMessageSender extends AbstractHttpWebServiceMessageSender
 		implements InitializingBean, DisposableBean {
 
-	private static final int DEFAULT_CONNECTION_TIMEOUT_MILLISECONDS = (60 * 1000);
+	private static final int DEFAULT_CONNECTION_TIMEOUT_MILLISECONDS = 60 * 1000;
 
-	private static final int DEFAULT_READ_TIMEOUT_MILLISECONDS = (60 * 1000);
+	private static final int DEFAULT_READ_TIMEOUT_MILLISECONDS = 60 * 1000;
 
 	private HttpClient httpClient;
 
@@ -195,7 +195,7 @@ public class HttpComponentsMessageSender extends AbstractHttpWebServiceMessageSe
 			HttpHost host = new HttpHost(uri.getHost(), uri.getPort(), uri.getScheme());
 			final HttpRoute route;
 
-			if (uri.getScheme().equals("https")) {
+			if ("https".equals(uri.getScheme())) {
 				route = new HttpRoute(host, null, true);
 			} else {
 				route = new HttpRoute(host);
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpServletConnection.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpServletConnection.java
index cbe8e4eb..57d22ac2 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpServletConnection.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpServletConnection.java
@@ -50,7 +50,7 @@ public class HttpServletConnection extends AbstractReceiverConnection
 
 	private final HttpServletResponse httpServletResponse;
 
-	private boolean statusCodeSet = false;
+	private boolean statusCodeSet;
 
 	/**
 	 * Constructs a new servlet connection with the given {@code HttpServletRequest} and {@code HttpServletResponse}.
@@ -107,12 +107,12 @@ public class HttpServletConnection extends AbstractReceiverConnection
 
 	@Override
 	public Iterator<String> getRequestHeaderNames() throws IOException {
-		return new EnumerationIterator<String>(getHttpServletRequest().getHeaderNames());
+		return new EnumerationIterator<>(getHttpServletRequest().getHeaderNames());
 	}
 
 	@Override
 	public Iterator<String> getRequestHeaders(String name) throws IOException {
-		return new EnumerationIterator<String>(getHttpServletRequest().getHeaders(name));
+		return new EnumerationIterator<>(getHttpServletRequest().getHeaders(name));
 	}
 
 	@Override
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpUrlConnection.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpUrlConnection.java
index 47971491..e2a6e991 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpUrlConnection.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/HttpUrlConnection.java
@@ -105,7 +105,7 @@ public class HttpUrlConnection extends AbstractHttpSenderConnection {
 
 	@Override
 	public Iterator<String> getResponseHeaderNames() throws IOException {
-		Set<String> headerNames = new HashSet<String>();
+		Set<String> headerNames = new HashSet<>();
 		// Header field 0 is the status line, so we start at 1
 		int i = 1;
 		while (true) {
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/LastModifiedHelper.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/LastModifiedHelper.java
index 97c2bc0f..27998434 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/LastModifiedHelper.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/LastModifiedHelper.java
@@ -33,7 +33,7 @@ import org.w3c.dom.Document;
  * @author Arjen Poutsma
  * @since 1.5.3
  */
-class LastModifiedHelper {
+final class LastModifiedHelper {
 
 	private LastModifiedHelper() {}
 
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/MessageDispatcherServlet.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/MessageDispatcherServlet.java
index 41c46297..83bf2625 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/MessageDispatcherServlet.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/MessageDispatcherServlet.java
@@ -118,9 +118,9 @@ public class MessageDispatcherServlet extends FrameworkServlet {
 
 	private Map<String, XsdSchema> xsdSchemas;
 
-	private boolean transformWsdlLocations = false;
+	private boolean transformWsdlLocations;
 
-	private boolean transformSchemaLocations = false;
+	private boolean transformSchemaLocations;
 
 	/**
 	 * Public constructor, necessary for some Web application servers.
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/WsdlDefinitionHandlerAdapter.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/WsdlDefinitionHandlerAdapter.java
index 7acd4f0c..f3714187 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/WsdlDefinitionHandlerAdapter.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/WsdlDefinitionHandlerAdapter.java
@@ -79,7 +79,7 @@ public class WsdlDefinitionHandlerAdapter extends LocationTransformerObjectSuppo
 
 	private static final String CONTENT_TYPE = "text/xml";
 
-	private Map<String, String> expressionNamespaces = new HashMap<String, String>();
+	private final Map<String, String> expressionNamespaces = new HashMap<>();
 
 	private String locationExpression = DEFAULT_LOCATION_EXPRESSION;
 
@@ -89,9 +89,9 @@ public class WsdlDefinitionHandlerAdapter extends LocationTransformerObjectSuppo
 
 	private XPathExpression schemaLocationXPathExpression;
 
-	private boolean transformLocations = false;
+	private boolean transformLocations;
 
-	private boolean transformSchemaLocations = false;
+	private boolean transformSchemaLocations;
 
 	/**
 	 * Sets the XPath expression used for extracting the {@code location} attributes from the WSDL 1.1 definition.
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/XsdSchemaHandlerAdapter.java b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/XsdSchemaHandlerAdapter.java
index 07473afa..5501a7fa 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/transport/http/XsdSchemaHandlerAdapter.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/transport/http/XsdSchemaHandlerAdapter.java
@@ -57,13 +57,13 @@ public class XsdSchemaHandlerAdapter extends LocationTransformerObjectSupport
 
 	private static final String CONTENT_TYPE = "text/xml";
 
-	private Map<String, String> expressionNamespaces = new HashMap<String, String>();
+	private final Map<String, String> expressionNamespaces = new HashMap<>();
 
 	private String schemaLocationExpression = DEFAULT_SCHEMA_LOCATION_EXPRESSION;
 
 	private XPathExpression schemaLocationXPathExpression;
 
-	private boolean transformSchemaLocations = false;
+	private boolean transformSchemaLocations;
 
 	/**
 	 * Sets the XPath expression used for extracting the {@code schemaLocation} attributes from the WSDL 1.1 definition.
diff --git a/spring-ws-core/src/main/java/org/springframework/ws/wsdl/wsdl11/provider/SoapProvider.java b/spring-ws-core/src/main/java/org/springframework/ws/wsdl/wsdl11/provider/SoapProvider.java
index 5ca20bad..e4b04ea6 100644
--- a/spring-ws-core/src/main/java/org/springframework/ws/wsdl/wsdl11/provider/SoapProvider.java
+++ b/spring-ws-core/src/main/java/org/springframework/ws/wsdl/wsdl11/provider/SoapProvider.java
@@ -44,7 +44,7 @@ public class SoapProvider implements BindingsProvider, ServicesProvider {
 
 	private boolean createSoap11Binding = true;
 
-	private boolean createSoap12Binding = false;
+	private boolean createSoap12Binding;
 
 	/**
 	 * Indicates whether a SOAP 1.1 binding should be created.
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/MockWebServiceMessage.java b/spring-ws-core/src/test/java/org/springframework/ws/MockWebServiceMessage.java
index a811d812..ae0d568f 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/MockWebServiceMessage.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/MockWebServiceMessage.java
@@ -51,7 +51,7 @@ public class MockWebServiceMessage implements FaultAwareWebServiceMessage {
 
 	private StringBuilder content;
 
-	private boolean fault = false;
+	private boolean fault;
 
 	private QName faultCode;
 
@@ -170,7 +170,7 @@ public class MockWebServiceMessage implements FaultAwareWebServiceMessage {
 		return builder.toString();
 	}
 
-	private class StringBufferWriter extends Writer {
+	private final class StringBufferWriter extends Writer {
 
 		private StringBufferWriter() {
 			super(content);
@@ -198,7 +198,7 @@ public class MockWebServiceMessage implements FaultAwareWebServiceMessage {
 		public void flush() {}
 
 		@Override
-		public void write(char cbuf[], int off, int len) {
+		public void write(char[] cbuf, int off, int len) {
 
 			if (off < 0 || off > cbuf.length || len < 0 || off + len > cbuf.length || off + len < 0) {
 				throw new IndexOutOfBoundsException();
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/client/core/AbstractSoap11WebServiceTemplateIntegrationTestCase.java b/spring-ws-core/src/test/java/org/springframework/ws/client/core/AbstractSoap11WebServiceTemplateIntegrationTestCase.java
index 0b576e63..57b611c6 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/client/core/AbstractSoap11WebServiceTemplateIntegrationTestCase.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/client/core/AbstractSoap11WebServiceTemplateIntegrationTestCase.java
@@ -78,9 +78,9 @@ public abstract class AbstractSoap11WebServiceTemplateIntegrationTestCase {
 
 	private WebServiceTemplate template;
 
-	private String messagePayload = "<root xmlns='http://springframework.org/spring-ws'><child/></root>";
+	private final String messagePayload = "<root xmlns='http://springframework.org/spring-ws'><child/></root>";
 
-	private Logger logger = LogManager.getLogger();
+	private final Logger logger = LogManager.getLogger();
 
 	@BeforeAll
 	public static void startJetty() throws Exception {
@@ -278,7 +278,7 @@ public abstract class AbstractSoap11WebServiceTemplateIntegrationTestCase {
 
 	/** Servlet that returns and error message for a given status code. */
 	@SuppressWarnings("serial")
-	private static class ErrorServlet extends HttpServlet {
+	private static final class ErrorServlet extends HttpServlet {
 
 		private int sc;
 
@@ -296,7 +296,7 @@ public abstract class AbstractSoap11WebServiceTemplateIntegrationTestCase {
 	@SuppressWarnings("serial")
 	private abstract static class AbstractSoapServlet extends HttpServlet {
 
-		protected MessageFactory messageFactory = null;
+		protected MessageFactory messageFactory;
 
 		private int sc = -1;
 
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/client/core/AbstractSoap12WebServiceTemplateIntegrationTestCase.java b/spring-ws-core/src/test/java/org/springframework/ws/client/core/AbstractSoap12WebServiceTemplateIntegrationTestCase.java
index e5d3c006..8b1ca965 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/client/core/AbstractSoap12WebServiceTemplateIntegrationTestCase.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/client/core/AbstractSoap12WebServiceTemplateIntegrationTestCase.java
@@ -77,7 +77,7 @@ public abstract class AbstractSoap12WebServiceTemplateIntegrationTestCase {
 
 	private WebServiceTemplate template;
 
-	private String messagePayload = "<root xmlns='http://springframework.org/spring-ws'><child/></root>";
+	private final String messagePayload = "<root xmlns='http://springframework.org/spring-ws'><child/></root>";
 
 	@BeforeAll
 	public static void startJetty() throws Exception {
@@ -280,7 +280,7 @@ public abstract class AbstractSoap12WebServiceTemplateIntegrationTestCase {
 
 	/** Servlet that returns and error message for a given status code. */
 	@SuppressWarnings("serial")
-	public static class ErrorServlet extends HttpServlet {
+	public static final class ErrorServlet extends HttpServlet {
 
 		private int sc;
 
@@ -298,7 +298,7 @@ public abstract class AbstractSoap12WebServiceTemplateIntegrationTestCase {
 	@SuppressWarnings("serial")
 	public abstract static class AbstractSoapServlet extends HttpServlet {
 
-		protected MessageFactory messageFactory = null;
+		protected MessageFactory messageFactory;
 
 		@Override
 		public void init(ServletConfig servletConfig) throws ServletException {
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/client/core/DomPoxWebServiceTemplateIntegrationTest.java b/spring-ws-core/src/test/java/org/springframework/ws/client/core/DomPoxWebServiceTemplateIntegrationTest.java
index 3e394640..b0e2b7b0 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/client/core/DomPoxWebServiceTemplateIntegrationTest.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/client/core/DomPoxWebServiceTemplateIntegrationTest.java
@@ -109,7 +109,7 @@ public class DomPoxWebServiceTemplateIntegrationTest {
 
 	/** Servlet that returns and error message for a given status code. */
 	@SuppressWarnings("serial")
-	public static class ErrorServlet extends HttpServlet {
+	public static final class ErrorServlet extends HttpServlet {
 
 		private int sc;
 
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/client/core/SimpleSaajServlet.java b/spring-ws-core/src/test/java/org/springframework/ws/client/core/SimpleSaajServlet.java
index 6d5790a8..c17df2d0 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/client/core/SimpleSaajServlet.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/client/core/SimpleSaajServlet.java
@@ -42,7 +42,7 @@ import org.springframework.util.StringUtils;
 @SuppressWarnings("serial")
 public class SimpleSaajServlet extends HttpServlet {
 
-	private MessageFactory msgFactory = null;
+	private MessageFactory msgFactory;
 
 	@Override
 	public void init(ServletConfig servletConfig) throws ServletException {
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/adapter/XPathParamAnnotationMethodEndpointAdapterTest.java b/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/adapter/XPathParamAnnotationMethodEndpointAdapterTest.java
index 8ee8bc6f..2c5efe7d 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/adapter/XPathParamAnnotationMethodEndpointAdapterTest.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/adapter/XPathParamAnnotationMethodEndpointAdapterTest.java
@@ -50,7 +50,7 @@ public class XPathParamAnnotationMethodEndpointAdapterTest {
 
 	private XPathParamAnnotationMethodEndpointAdapter adapter;
 
-	private boolean supportedTypesInvoked = false;
+	private boolean supportedTypesInvoked;
 
 	private boolean supportedSourceInvoked;
 
@@ -179,7 +179,7 @@ public class XPathParamAnnotationMethodEndpointAdapterTest {
 
 		replay(requestMock, factoryMock);
 
-		Map<String, String> namespaces = new HashMap<String, String>();
+		Map<String, String> namespaces = new HashMap<>();
 		namespaces.put("root", rootNamespace);
 		namespaces.put("child", childNamespace);
 		adapter.setNamespaces(namespaces);
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/EndpointMappingTest.java b/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/EndpointMappingTest.java
index d8a58673..0fdf2ee2 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/EndpointMappingTest.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/EndpointMappingTest.java
@@ -191,7 +191,7 @@ public class EndpointMappingTest {
 		assertThat(MyEndpoint.constructorCount).isEqualTo(2);
 	}
 
-	private static class MyEndpoint {
+	private static final class MyEndpoint {
 
 		private static int constructorCount;
 
@@ -200,7 +200,7 @@ public class EndpointMappingTest {
 		}
 	}
 
-	private static class MySmartEndpointInterceptor extends DelegatingSmartEndpointInterceptor {
+	private static final class MySmartEndpointInterceptor extends DelegatingSmartEndpointInterceptor {
 
 		private MySmartEndpointInterceptor() {
 			super(new EndpointInterceptorAdapter());
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/LogAspect.java b/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/LogAspect.java
index 04d22a73..1755ee9d 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/LogAspect.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/LogAspect.java
@@ -28,7 +28,7 @@ public class LogAspect {
 
 	private static final Log logger = LogFactory.getLog(LogAspect.class);
 
-	private boolean logInvoked = false;
+	private boolean logInvoked;
 
 	public boolean isLogInvoked() {
 		return logInvoked;
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/PayloadRootAnnotationMethodEndpointMappingTest.java b/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/PayloadRootAnnotationMethodEndpointMappingTest.java
index 8a9e8277..1696e7ba 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/PayloadRootAnnotationMethodEndpointMappingTest.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/server/endpoint/mapping/PayloadRootAnnotationMethodEndpointMappingTest.java
@@ -139,7 +139,7 @@ public class PayloadRootAnnotationMethodEndpointMappingTest {
 
 		private static final org.apache.commons.logging.Log logger = LogFactory.getLog(MyEndpoint.class);
 
-		private boolean doItInvoked = false;
+		private boolean doItInvoked;
 
 		public boolean isDoItInvoked() {
 			return doItInvoked;
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/soap/client/core/SaajSoapActionCallbackTest.java b/spring-ws-core/src/test/java/org/springframework/ws/soap/client/core/SaajSoapActionCallbackTest.java
index 33eaa7d5..e24058e4 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/soap/client/core/SaajSoapActionCallbackTest.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/soap/client/core/SaajSoapActionCallbackTest.java
@@ -18,9 +18,9 @@ import org.springframework.ws.transport.TransportConstants;
 
 public class SaajSoapActionCallbackTest {
 
-	private SaajSoapMessageFactory saaj11Factory = new SaajSoapMessageFactory();
+	private final SaajSoapMessageFactory saaj11Factory = new SaajSoapMessageFactory();
 
-	private SaajSoapMessageFactory saaj12Factory = new SaajSoapMessageFactory();
+	private final SaajSoapMessageFactory saaj12Factory = new SaajSoapMessageFactory();
 
 	@BeforeEach
 	public void init() throws SOAPException {
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/soap/server/endpoint/FaultCreatingValidatingMarshallingPayloadEndpointTest.java b/spring-ws-core/src/test/java/org/springframework/ws/soap/server/endpoint/FaultCreatingValidatingMarshallingPayloadEndpointTest.java
index 7aca8fd0..d734d1c2 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/soap/server/endpoint/FaultCreatingValidatingMarshallingPayloadEndpointTest.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/soap/server/endpoint/FaultCreatingValidatingMarshallingPayloadEndpointTest.java
@@ -162,7 +162,7 @@ public class FaultCreatingValidatingMarshallingPayloadEndpointTest {
 		}
 	}
 
-	private static class Person {
+	private static final class Person {
 
 		private String name;
 
@@ -195,7 +195,7 @@ public class FaultCreatingValidatingMarshallingPayloadEndpointTest {
 		}
 	}
 
-	private static class PersonMarshaller implements Unmarshaller, Marshaller {
+	private static final class PersonMarshaller implements Unmarshaller, Marshaller {
 
 		private final Person person;
 
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/soap/soap11/AbstractSoap11MessageFactoryTestCase.java b/spring-ws-core/src/test/java/org/springframework/ws/soap/soap11/AbstractSoap11MessageFactoryTestCase.java
index 1ee8aa30..e29abc73 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/soap/soap11/AbstractSoap11MessageFactoryTestCase.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/soap/soap11/AbstractSoap11MessageFactoryTestCase.java
@@ -51,7 +51,7 @@ public abstract class AbstractSoap11MessageFactoryTestCase extends AbstractSoapM
 	public void testCreateSoapMessageNoAttachment() throws Exception {
 
 		InputStream is = AbstractSoap11MessageFactoryTestCase.class.getResourceAsStream("soap11.xml");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		headers.put("Content-Type", "text/xml");
 		String soapAction = "\"http://springframework.org/spring-ws/Action\"";
 		headers.put("SOAPAction", soapAction);
@@ -72,7 +72,7 @@ public abstract class AbstractSoap11MessageFactoryTestCase extends AbstractSoapM
 	public void doTestCreateSoapMessageIllFormedXml() throws Exception {
 
 		InputStream is = AbstractSoap11MessageFactoryTestCase.class.getResourceAsStream("soap11-ill-formed.xml");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		headers.put("Content-Type", "text/xml");
 		TransportInputStream tis = new MockTransportInputStream(is, headers);
 
@@ -83,7 +83,7 @@ public abstract class AbstractSoap11MessageFactoryTestCase extends AbstractSoapM
 	public void testCreateSoapMessageSwA() throws Exception {
 
 		InputStream is = AbstractSoap11MessageFactoryTestCase.class.getResourceAsStream("soap11-attachment.bin");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		headers.put("Content-Type",
 				"multipart/related;" + "type=\"text/xml\";" + "boundary=\"----=_Part_0_11416420.1149699787554\"");
 		TransportInputStream tis = new MockTransportInputStream(is, headers);
@@ -111,7 +111,7 @@ public abstract class AbstractSoap11MessageFactoryTestCase extends AbstractSoapM
 	public void testCreateSoapMessageMtom() throws Exception {
 
 		InputStream is = AbstractSoap11MessageFactoryTestCase.class.getResourceAsStream("soap11-mtom.bin");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		headers.put("Content-Type",
 				"multipart/related;" + "start-info=\"text/xml\";" + "type=\"application/xop+xml\";"
 						+ "start=\"<0.urn:uuid:492264AB42E57108E01176731445508@apache.org>\";"
@@ -140,7 +140,7 @@ public abstract class AbstractSoap11MessageFactoryTestCase extends AbstractSoapM
 	public void testCreateSoapMessageMtomWeirdStartInfo() throws Exception {
 
 		InputStream is = AbstractSoap11MessageFactoryTestCase.class.getResourceAsStream("soap11-mtom.bin");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		headers.put("Content-Type",
 				"multipart/related;" + "startinfo=\"text/xml\";" + "type=\"application/xop+xml\";"
 						+ "start=\"<0.urn:uuid:492264AB42E57108E01176731445508@apache.org>\";"
@@ -178,7 +178,7 @@ public abstract class AbstractSoap11MessageFactoryTestCase extends AbstractSoapM
 	public void testCreateSoapMessageUtf16BigEndianByteOrderMark() throws Exception {
 
 		InputStream is = AbstractSoap11MessageFactoryTestCase.class.getResourceAsStream("soap11-utf16-be-bom.xml");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		headers.put("Content-Type", "text/xml; charset=UTF-16");
 		TransportInputStream tis = new MockTransportInputStream(is, headers);
 
@@ -191,7 +191,7 @@ public abstract class AbstractSoap11MessageFactoryTestCase extends AbstractSoapM
 	public void testCreateSoapMessageUtf16LittleEndianByteOrderMark() throws Exception {
 
 		InputStream is = AbstractSoap11MessageFactoryTestCase.class.getResourceAsStream("soap11-utf16-le-bom.xml");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		headers.put("Content-Type", "text/xml; charset=UTF-16");
 		TransportInputStream tis = new MockTransportInputStream(is, headers);
 
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/soap/soap12/AbstractSoap12MessageFactoryTestCase.java b/spring-ws-core/src/test/java/org/springframework/ws/soap/soap12/AbstractSoap12MessageFactoryTestCase.java
index 6ad602ca..472809be 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/soap/soap12/AbstractSoap12MessageFactoryTestCase.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/soap/soap12/AbstractSoap12MessageFactoryTestCase.java
@@ -51,7 +51,7 @@ public abstract class AbstractSoap12MessageFactoryTestCase extends AbstractSoapM
 	public void testCreateSoapMessageNoAttachment() throws Exception {
 
 		InputStream is = AbstractSoap12MessageFactoryTestCase.class.getResourceAsStream("soap12.xml");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		String soapAction = "\"http://springframework.org/spring-ws/Action\"";
 		headers.put(TransportConstants.HEADER_CONTENT_TYPE, "application/soap+xml; action=" + soapAction);
 		TransportInputStream tis = new MockTransportInputStream(is, headers);
@@ -69,7 +69,7 @@ public abstract class AbstractSoap12MessageFactoryTestCase extends AbstractSoapM
 	public void doTestCreateSoapMessageIllFormedXml() throws Exception {
 
 		InputStream is = AbstractSoap12MessageFactoryTestCase.class.getResourceAsStream("soap12-ill-formed.xml");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		headers.put(TransportConstants.HEADER_CONTENT_TYPE, "application/soap+xml");
 		TransportInputStream tis = new MockTransportInputStream(is, headers);
 
@@ -80,7 +80,7 @@ public abstract class AbstractSoap12MessageFactoryTestCase extends AbstractSoapM
 	public void testCreateSoapMessageSwA() throws Exception {
 
 		InputStream is = AbstractSoap12MessageFactoryTestCase.class.getResourceAsStream("soap12-attachment.bin");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		headers.put("Content-Type",
 				"multipart/related;" + "type=\"application/soap+xml\";" + "boundary=\"----=_Part_0_11416420.1149699787554\"");
 		TransportInputStream tis = new MockTransportInputStream(is, headers);
@@ -103,7 +103,7 @@ public abstract class AbstractSoap12MessageFactoryTestCase extends AbstractSoapM
 	public void testCreateSoapMessageMtom() throws Exception {
 
 		InputStream is = AbstractSoap12MessageFactoryTestCase.class.getResourceAsStream("soap12-mtom.bin");
-		Map<String, String> headers = new HashMap<String, String>();
+		Map<String, String> headers = new HashMap<>();
 		headers.put("Content-Type",
 				"multipart/related;" + "start-info=\"application/soap+xml\";" + "type=\"application/xop+xml\";"
 						+ "start=\"<0.urn:uuid:40864869929B855F971176851454456@apache.org>\";"
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/transport/MockTransportInputStream.java b/spring-ws-core/src/test/java/org/springframework/ws/transport/MockTransportInputStream.java
index cf9c2687..5646be54 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/transport/MockTransportInputStream.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/transport/MockTransportInputStream.java
@@ -43,7 +43,7 @@ public class MockTransportInputStream extends TransportInputStream {
 
 		Assert.notNull(inputStream, "inputStream must not be null");
 		this.inputStream = inputStream;
-		headers = new HashMap<String, String>();
+		headers = new HashMap<>();
 	}
 
 	@Override
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/transport/MockTransportOutputStream.java b/spring-ws-core/src/test/java/org/springframework/ws/transport/MockTransportOutputStream.java
index 4b7238ec..442b1fa3 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/transport/MockTransportOutputStream.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/transport/MockTransportOutputStream.java
@@ -24,9 +24,9 @@ import org.springframework.util.Assert;
 
 public class MockTransportOutputStream extends TransportOutputStream {
 
-	private Map<String, String> headers = new HashMap<String, String>();
+	private final Map<String, String> headers = new HashMap<>();
 
-	private OutputStream outputStream;
+	private final OutputStream outputStream;
 
 	public MockTransportOutputStream(OutputStream outputStream) {
 
diff --git a/spring-ws-core/src/test/java/org/springframework/ws/transport/http/CommonsHttpMessageSenderIntegrationTest.java b/spring-ws-core/src/test/java/org/springframework/ws/transport/http/CommonsHttpMessageSenderIntegrationTest.java
index 16bb673e..c4610f8e 100644
--- a/spring-ws-core/src/test/java/org/springframework/ws/transport/http/CommonsHttpMessageSenderIntegrationTest.java
+++ b/spring-ws-core/src/test/java/org/springframework/ws/transport/http/CommonsHttpMessageSenderIntegrationTest.java
@@ -52,7 +52,7 @@ public class CommonsHttpMessageSenderIntegrationTest
 
 		CommonsHttpMessageSender messageSender = new CommonsHttpMessageSender();
 		messageSender.setMaxTotalConnections(2);
-		Map<String, String> maxConnectionsPerHost = new HashMap<String, String>();
+		Map<String, String> maxConnectionsPerHost = new HashMap<>();
 		maxConnectionsPerHost.put("https://www.example.com", "1");
 		maxConnectionsPerHost.put("http://www.example.com:8080", "7");
 		maxConnectionsPerHost.put("www.springframework.org", "10");
diff --git a/spring-ws-security/src/main/java/org/springframework/ws/soap/security/AbstractWsSecurityInterceptor.java b/spring-ws-security/src/main/java/org/springframework/ws/soap/security/AbstractWsSecurityInterceptor.java
index 8fd34556..3812df18 100644
--- a/spring-ws-security/src/main/java/org/springframework/ws/soap/security/AbstractWsSecurityInterceptor.java
+++ b/spring-ws-security/src/main/java/org/springframework/ws/soap/security/AbstractWsSecurityInterceptor.java
@@ -65,7 +65,7 @@ public abstract class AbstractWsSecurityInterceptor implements SoapEndpointInter
 
 	private boolean validateResponse = true;
 
-	private boolean skipValidationIfNoHeaderPresent = false;
+	private boolean skipValidationIfNoHeaderPresent;
 
 	private EndpointExceptionResolver exceptionResolver;
 
diff --git a/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/Wss4jHandler.java b/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/Wss4jHandler.java
index 10fcf3d9..2532ab90 100644
--- a/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/Wss4jHandler.java
+++ b/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/Wss4jHandler.java
@@ -38,7 +38,7 @@ import org.w3c.dom.Document;
 class Wss4jHandler extends WSHandler {
 
 	/** Keys are constants from {@link ConfigurationConstants}; values are strings. */
-	private Properties options = new Properties();
+	private final Properties options = new Properties();
 
 	private String securementPassword;
 
diff --git a/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/Wss4jSecurityInterceptor.java b/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/Wss4jSecurityInterceptor.java
index de89dd05..f89d789c 100644
--- a/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/Wss4jSecurityInterceptor.java
+++ b/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/Wss4jSecurityInterceptor.java
@@ -608,7 +608,7 @@ public class Wss4jSecurityInterceptor extends AbstractWsSecurityInterceptor impl
 	protected void secureMessage(SoapMessage soapMessage, MessageContext messageContext)
 			throws WsSecuritySecurementException {
 
-		List<HandlerAction> securementActionsVector = new ArrayList<HandlerAction>();
+		List<HandlerAction> securementActionsVector = new ArrayList<>();
 		try {
 			securementActionsVector = WSSecurityUtil.decodeHandlerAction(securementActions, wssConfig);
 		} catch (WSSecurityException ex) {
@@ -790,7 +790,7 @@ public class Wss4jSecurityInterceptor extends AbstractWsSecurityInterceptor impl
 		List<WSHandlerResult> handlerResults;
 		if ((handlerResults = (List<WSHandlerResult>) messageContext
 				.getProperty(WSHandlerConstants.RECV_RESULTS)) == null) {
-			handlerResults = new ArrayList<WSHandlerResult>();
+			handlerResults = new ArrayList<>();
 			messageContext.setProperty(WSHandlerConstants.RECV_RESULTS, handlerResults);
 		}
 		WSHandlerResult rResult = new WSHandlerResult(validationActor, results,
diff --git a/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/callback/SimplePasswordValidationCallbackHandler.java b/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/callback/SimplePasswordValidationCallbackHandler.java
index 7bcd36dd..1748bebf 100644
--- a/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/callback/SimplePasswordValidationCallbackHandler.java
+++ b/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/callback/SimplePasswordValidationCallbackHandler.java
@@ -40,7 +40,7 @@ import org.springframework.util.Assert;
 public class SimplePasswordValidationCallbackHandler extends AbstractWsPasswordCallbackHandler
 		implements InitializingBean {
 
-	private Map<String, String> users = new HashMap<String, String>();
+	private Map<String, String> users = new HashMap<>();
 
 	/** Sets the users to validate against. Property names are usernames, property values are passwords. */
 	public void setUsers(Properties users) {
diff --git a/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/support/CryptoFactoryBean.java b/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/support/CryptoFactoryBean.java
index c677ecd4..a78a1e52 100644
--- a/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/support/CryptoFactoryBean.java
+++ b/spring-ws-security/src/main/java/org/springframework/ws/soap/security/wss4j2/support/CryptoFactoryBean.java
@@ -43,7 +43,7 @@ import org.springframework.util.Assert;
  */
 public class CryptoFactoryBean implements FactoryBean<Crypto>, InitializingBean {
 
-	private Properties configuration = new Properties();
+	private final Properties configuration = new Properties();
 
 	private Crypto crypto;
 
diff --git a/spring-ws-security/src/test/java/org/springframework/ws/soap/security/callback/CallbackHandlerChainTest.java b/spring-ws-security/src/test/java/org/springframework/ws/soap/security/callback/CallbackHandlerChainTest.java
index 8a619241..a1e60a8e 100644
--- a/spring-ws-security/src/test/java/org/springframework/ws/soap/security/callback/CallbackHandlerChainTest.java
+++ b/spring-ws-security/src/test/java/org/springframework/ws/soap/security/callback/CallbackHandlerChainTest.java
@@ -26,13 +26,15 @@ import org.junit.jupiter.api.Test;
 
 public class CallbackHandlerChainTest {
 
-	private CallbackHandler supported = callbacks -> {};
+	private final CallbackHandler supported = callbacks -> {
+	};
 
-	private CallbackHandler unsupported = callbacks -> {
+	private final CallbackHandler unsupported = callbacks -> {
 		throw new UnsupportedCallbackException(callbacks[0]);
 	};
 
-	private Callback callback = new Callback() {};
+	private final Callback callback = new Callback() {
+	};
 
 	@Test
 	public void testSupported() throws Exception {
diff --git a/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorHeaderTestCase.java b/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorHeaderTestCase.java
index aeec4931..19404776 100644
--- a/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorHeaderTestCase.java
+++ b/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorHeaderTestCase.java
@@ -80,8 +80,8 @@ public abstract class Wss4jMessageInterceptorHeaderTestCase extends Wss4jTestCas
 
 			SoapHeaderElement element = i.next();
 			QName name = element.getName();
-			if (name.getNamespaceURI()
-					.equals("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd")) {
+			if ("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
+					.equals(name.getNamespaceURI())) {
 				fail("Security Header not removed");
 			}
 		}
@@ -107,8 +107,8 @@ public abstract class Wss4jMessageInterceptorHeaderTestCase extends Wss4jTestCas
 
 			SoapHeaderElement element = i.next();
 			QName name = element.getName();
-			if (name.getNamespaceURI()
-					.equals("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd")) {
+			if ("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
+					.equals(name.getNamespaceURI())) {
 				foundSecurityHeader = true;
 			}
 
diff --git a/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorSpringSecurityCallbackHandlerTestCase.java b/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorSpringSecurityCallbackHandlerTestCase.java
index c27e573d..ee60175b 100644
--- a/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorSpringSecurityCallbackHandlerTestCase.java
+++ b/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorSpringSecurityCallbackHandlerTestCase.java
@@ -35,7 +35,7 @@ import org.springframework.ws.soap.security.wss4j2.callback.SpringSecurityPasswo
 
 public abstract class Wss4jMessageInterceptorSpringSecurityCallbackHandlerTestCase extends Wss4jTestCase {
 
-	private Properties users = new Properties();
+	private final Properties users = new Properties();
 
 	private AuthenticationManager authenticationManager;
 
diff --git a/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorUsernameTokenTestCase.java b/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorUsernameTokenTestCase.java
index 6be44400..f809973a 100644
--- a/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorUsernameTokenTestCase.java
+++ b/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jMessageInterceptorUsernameTokenTestCase.java
@@ -30,7 +30,7 @@ import org.w3c.dom.Document;
 
 public abstract class Wss4jMessageInterceptorUsernameTokenTestCase extends Wss4jTestCase {
 
-	private Properties users = new Properties();
+	private final Properties users = new Properties();
 
 	@Override
 	protected void onSetup() throws Exception {
diff --git a/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jTestCase.java b/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jTestCase.java
index f8bf9afe..4963eda0 100644
--- a/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jTestCase.java
+++ b/spring-ws-security/src/test/java/org/springframework/ws/soap/security/wss4j2/Wss4jTestCase.java
@@ -65,7 +65,7 @@ public abstract class Wss4jTestCase {
 		saajSoap11MessageFactory = MessageFactory.newInstance();
 		saajSoap12MessageFactory = MessageFactory.newInstance(SOAPConstants.SOAP_1_2_PROTOCOL);
 
-		Map<String, String> namespaces = new HashMap<String, String>();
+		Map<String, String> namespaces = new HashMap<>();
 		namespaces.put("SOAP-ENV", "http://schemas.xmlsoap.org/soap/envelope/");
 		namespaces.put("wsse", "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd");
 		namespaces.put("ds", "http://www.w3.org/2000/09/xmldsig#");
@@ -195,8 +195,9 @@ public abstract class Wss4jTestCase {
 		SoapMessageFactory messageFactory;
 		if (saajTest) {
 			messageFactory = new SaajSoapMessageFactory(saajSoap12MessageFactory);
-		} else
+		} else {
 			throw new IllegalArgumentException();
+		}
 		messageFactory.setSoapVersion(SoapVersion.SOAP_12);
 		return messageFactory;
 	}
diff --git a/spring-ws-support/src/main/java/org/springframework/ws/transport/http/WebServiceMessageReceiverHttpHandler.java b/spring-ws-support/src/main/java/org/springframework/ws/transport/http/WebServiceMessageReceiverHttpHandler.java
index 524b58fe..e32725a4 100644
--- a/spring-ws-support/src/main/java/org/springframework/ws/transport/http/WebServiceMessageReceiverHttpHandler.java
+++ b/spring-ws-support/src/main/java/org/springframework/ws/transport/http/WebServiceMessageReceiverHttpHandler.java
@@ -39,7 +39,7 @@ import com.sun.net.httpserver.HttpHandler;
 public class WebServiceMessageReceiverHttpHandler extends SimpleWebServiceMessageReceiverObjectSupport
 		implements HttpHandler {
 
-	private boolean chunkedEncoding = false;
+	private boolean chunkedEncoding;
 
 	/** Enables chunked encoding on response bodies. Defaults to {@code false}. */
 	public void setChunkedEncoding(boolean chunkedEncoding) {
diff --git a/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/BytesMessageInputStream.java b/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/BytesMessageInputStream.java
index a063b3bf..d3041bec 100644
--- a/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/BytesMessageInputStream.java
+++ b/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/BytesMessageInputStream.java
@@ -41,7 +41,7 @@ class BytesMessageInputStream extends InputStream {
 	}
 
 	@Override
-	public int read(byte b[]) throws IOException {
+	public int read(byte[] b) throws IOException {
 		try {
 			return message.readBytes(b);
 		} catch (JMSException ex) {
@@ -50,7 +50,7 @@ class BytesMessageInputStream extends InputStream {
 	}
 
 	@Override
-	public int read(byte b[], int off, int len) throws IOException {
+	public int read(byte[] b, int off, int len) throws IOException {
 		if (off == 0) {
 			try {
 				return message.readBytes(b, len);
diff --git a/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/BytesMessageOutputStream.java b/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/BytesMessageOutputStream.java
index b7afd7cd..4d2f76c3 100644
--- a/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/BytesMessageOutputStream.java
+++ b/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/BytesMessageOutputStream.java
@@ -40,7 +40,7 @@ class BytesMessageOutputStream extends OutputStream {
 	}
 
 	@Override
-	public void write(byte b[]) throws IOException {
+	public void write(byte[] b) throws IOException {
 		try {
 			message.writeBytes(b);
 		} catch (JMSException ex) {
@@ -49,7 +49,7 @@ class BytesMessageOutputStream extends OutputStream {
 	}
 
 	@Override
-	public void write(byte b[], int off, int len) throws IOException {
+	public void write(byte[] b, int off, int len) throws IOException {
 		try {
 			message.writeBytes(b, off, len);
 		} catch (JMSException ex) {
diff --git a/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/JmsSenderConnection.java b/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/JmsSenderConnection.java
index e999d230..886330ea 100644
--- a/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/JmsSenderConnection.java
+++ b/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/JmsSenderConnection.java
@@ -71,9 +71,9 @@ public class JmsSenderConnection extends AbstractSenderConnection {
 
 	private MessagePostProcessor postProcessor;
 
-	private boolean sessionTransacted = false;
+	private boolean sessionTransacted;
 
-	private boolean temporaryResponseQueueCreated = false;
+	private boolean temporaryResponseQueueCreated;
 
 	/** Constructs a new JMS connection with the given parameters. */
 	protected JmsSenderConnection(ConnectionFactory connectionFactory, Connection connection, Session session,
diff --git a/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/support/JmsTransportUtils.java b/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/support/JmsTransportUtils.java
index 15ce2f0a..61dce6e6 100644
--- a/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/support/JmsTransportUtils.java
+++ b/spring-ws-support/src/main/java/org/springframework/ws/transport/jms/support/JmsTransportUtils.java
@@ -133,7 +133,7 @@ public abstract class JmsTransportUtils {
 	 */
 	public static Iterator<String> getHeaderNames(Message message) throws JMSException {
 		Enumeration<?> properties = message.getPropertyNames();
-		List<String> results = new ArrayList<String>();
+		List<String> results = new ArrayList<>();
 		while (properties.hasMoreElements()) {
 			String property = (String) properties.nextElement();
 			if (property.startsWith(JmsTransportConstants.PROPERTY_PREFIX)) {
diff --git a/spring-ws-support/src/main/java/org/springframework/ws/transport/mail/MailReceiverConnection.java b/spring-ws-support/src/main/java/org/springframework/ws/transport/mail/MailReceiverConnection.java
index dc47a49b..3f088ac9 100644
--- a/spring-ws-support/src/main/java/org/springframework/ws/transport/mail/MailReceiverConnection.java
+++ b/spring-ws-support/src/main/java/org/springframework/ws/transport/mail/MailReceiverConnection.java
@@ -139,7 +139,7 @@ public class MailReceiverConnection extends AbstractReceiverConnection {
 	@Override
 	public Iterator<String> getRequestHeaderNames() throws IOException {
 		try {
-			List<String> headers = new ArrayList<String>();
+			List<String> headers = new ArrayList<>();
 			Enumeration<?> enumeration = requestMessage.getAllHeaders();
 			while (enumeration.hasMoreElements()) {
 				Header header = (Header) enumeration.nextElement();
diff --git a/spring-ws-support/src/main/java/org/springframework/ws/transport/mail/MailSenderConnection.java b/spring-ws-support/src/main/java/org/springframework/ws/transport/mail/MailSenderConnection.java
index 2ff50457..e653746b 100644
--- a/spring-ws-support/src/main/java/org/springframework/ws/transport/mail/MailSenderConnection.java
+++ b/spring-ws-support/src/main/java/org/springframework/ws/transport/mail/MailSenderConnection.java
@@ -76,7 +76,7 @@ public class MailSenderConnection extends AbstractSenderConnection {
 
 	private String requestContentType;
 
-	private boolean deleteAfterReceive = false;
+	private boolean deleteAfterReceive;
 
 	private final URLName storeUri;
 
@@ -249,7 +249,7 @@ public class MailSenderConnection extends AbstractSenderConnection {
 	@Override
 	public Iterator<String> getResponseHeaderNames() throws IOException {
 		try {
-			List<String> headers = new ArrayList<String>();
+			List<String> headers = new ArrayList<>();
 			Enumeration<?> enumeration = responseMessage.getAllHeaders();
 			while (enumeration.hasMoreElements()) {
 				Header header = (Header) enumeration.nextElement();
diff --git a/spring-ws-support/src/main/java/org/springframework/ws/transport/support/AbstractStandaloneMessageReceiver.java b/spring-ws-support/src/main/java/org/springframework/ws/transport/support/AbstractStandaloneMessageReceiver.java
index 78f50483..07753105 100644
--- a/spring-ws-support/src/main/java/org/springframework/ws/transport/support/AbstractStandaloneMessageReceiver.java
+++ b/spring-ws-support/src/main/java/org/springframework/ws/transport/support/AbstractStandaloneMessageReceiver.java
@@ -29,11 +29,11 @@ import org.springframework.context.Lifecycle;
 public abstract class AbstractStandaloneMessageReceiver extends SimpleWebServiceMessageReceiverObjectSupport
 		implements Lifecycle, DisposableBean {
 
-	private volatile boolean active = false;
+	private volatile boolean active;
 
 	private boolean autoStartup = true;
 
-	private boolean running = false;
+	private boolean running;
 
 	private final Object lifecycleMonitor = new Object();
 
diff --git a/spring-ws-support/src/main/java/org/springframework/ws/transport/xmpp/XmppMessageReceiver.java b/spring-ws-support/src/main/java/org/springframework/ws/transport/xmpp/XmppMessageReceiver.java
index 89f19d5d..df5c40b2 100644
--- a/spring-ws-support/src/main/java/org/springframework/ws/transport/xmpp/XmppMessageReceiver.java
+++ b/spring-ws-support/src/main/java/org/springframework/ws/transport/xmpp/XmppMessageReceiver.java
@@ -50,7 +50,7 @@ public class XmppMessageReceiver extends AbstractStandaloneMessageReceiver {
 
 	private WebServicePacketListener packetListener;
 
-	private String messageEncoding = DEFAULT_MESSAGE_ENCODING;
+	private final String messageEncoding = DEFAULT_MESSAGE_ENCODING;
 
 	public XmppMessageReceiver() {}
 
diff --git a/spring-ws-support/src/test/java/org/springframework/ws/transport/http/SimpleHttpServerFactoryBean.java b/spring-ws-support/src/test/java/org/springframework/ws/transport/http/SimpleHttpServerFactoryBean.java
index ef9c934b..bc72468a 100644
--- a/spring-ws-support/src/test/java/org/springframework/ws/transport/http/SimpleHttpServerFactoryBean.java
+++ b/spring-ws-support/src/test/java/org/springframework/ws/transport/http/SimpleHttpServerFactoryBean.java
@@ -31,7 +31,7 @@ class SimpleHttpServerFactoryBean implements FactoryBean<HttpServer>, Initializi
 
 	private int backlog = -1;
 
-	private int shutdownDelay = 0;
+	private int shutdownDelay;
 
 	private Executor executor;
 
@@ -107,8 +107,8 @@ class SimpleHttpServerFactoryBean implements FactoryBean<HttpServer>, Initializi
 
 	@Override
 	public void afterPropertiesSet() throws IOException {
-		InetSocketAddress address = (this.hostname != null ? new InetSocketAddress(this.hostname, this.port)
-				: new InetSocketAddress(this.port));
+		InetSocketAddress address = this.hostname != null ? new InetSocketAddress(this.hostname, this.port)
+				: new InetSocketAddress(this.port);
 		this.server = HttpServer.create(address, this.backlog);
 		if (this.executor != null) {
 			this.server.setExecutor(this.executor);
@@ -137,7 +137,7 @@ class SimpleHttpServerFactoryBean implements FactoryBean<HttpServer>, Initializi
 
 	@Override
 	public Class<? extends HttpServer> getObjectType() {
-		return (this.server != null ? this.server.getClass() : HttpServer.class);
+		return this.server != null ? this.server.getClass() : HttpServer.class;
 	}
 
 	@Override
diff --git a/spring-ws-test/src/main/java/org/springframework/ws/test/client/MockWebServiceMessageSender.java b/spring-ws-test/src/main/java/org/springframework/ws/test/client/MockWebServiceMessageSender.java
index 5da9b623..038bb88b 100644
--- a/spring-ws-test/src/main/java/org/springframework/ws/test/client/MockWebServiceMessageSender.java
+++ b/spring-ws-test/src/main/java/org/springframework/ws/test/client/MockWebServiceMessageSender.java
@@ -36,7 +36,7 @@ import org.springframework.ws.transport.WebServiceMessageSender;
  */
 public class MockWebServiceMessageSender implements WebServiceMessageSender {
 
-	private final List<MockSenderConnection> expectedConnections = new LinkedList<MockSenderConnection>();
+	private final List<MockSenderConnection> expectedConnections = new LinkedList<>();
 
 	private Iterator<MockSenderConnection> connectionIterator;
 
diff --git a/spring-ws-test/src/main/java/org/springframework/ws/test/client/ResponseCreators.java b/spring-ws-test/src/main/java/org/springframework/ws/test/client/ResponseCreators.java
index a08dbcd6..20406994 100644
--- a/spring-ws-test/src/main/java/org/springframework/ws/test/client/ResponseCreators.java
+++ b/spring-ws-test/src/main/java/org/springframework/ws/test/client/ResponseCreators.java
@@ -201,7 +201,7 @@ public abstract class ResponseCreators {
 	/**
 	 * Adapts a {@link WebServiceMessageCreator} to the {@link ResponseCreator} contract.
 	 */
-	private static class WebServiceMessageCreatorAdapter implements ResponseCreator {
+	private static final class WebServiceMessageCreatorAdapter implements ResponseCreator {
 
 		private final WebServiceMessageCreator adaptee;
 
diff --git a/spring-ws-test/src/main/java/org/springframework/ws/test/server/MockWebServiceClient.java b/spring-ws-test/src/main/java/org/springframework/ws/test/server/MockWebServiceClient.java
index 4715e3ab..0fe2549a 100644
--- a/spring-ws-test/src/main/java/org/springframework/ws/test/server/MockWebServiceClient.java
+++ b/spring-ws-test/src/main/java/org/springframework/ws/test/server/MockWebServiceClient.java
@@ -104,7 +104,7 @@ import org.springframework.ws.transport.WebServiceMessageReceiver;
  * @author Lukas Krecan
  * @since 2.0
  */
-public class MockWebServiceClient {
+public final class MockWebServiceClient {
 
 	private static final Log logger = LogFactory.getLog(MockWebServiceClient.class);
 
@@ -190,7 +190,7 @@ public class MockWebServiceClient {
 
 	// ResponseActions
 
-	private static class MockWebServiceClientResponseActions implements ResponseActions {
+	private static final class MockWebServiceClientResponseActions implements ResponseActions {
 
 		private final MessageContext messageContext;
 
diff --git a/spring-ws-test/src/main/java/org/springframework/ws/test/server/RequestCreators.java b/spring-ws-test/src/main/java/org/springframework/ws/test/server/RequestCreators.java
index eab52895..007a8b20 100644
--- a/spring-ws-test/src/main/java/org/springframework/ws/test/server/RequestCreators.java
+++ b/spring-ws-test/src/main/java/org/springframework/ws/test/server/RequestCreators.java
@@ -93,7 +93,7 @@ public abstract class RequestCreators {
 	/**
 	 * Adapts a {@link WebServiceMessageCreator} to the {@link RequestCreator} contract.
 	 */
-	private static class WebServiceMessageCreatorAdapter implements RequestCreator {
+	private static final class WebServiceMessageCreatorAdapter implements RequestCreator {
 
 		private final WebServiceMessageCreator adaptee;
 
diff --git a/spring-ws-test/src/main/java/org/springframework/ws/test/support/creator/PayloadMessageCreator.java b/spring-ws-test/src/main/java/org/springframework/ws/test/support/creator/PayloadMessageCreator.java
index ce32a39a..c43e255e 100644
--- a/spring-ws-test/src/main/java/org/springframework/ws/test/support/creator/PayloadMessageCreator.java
+++ b/spring-ws-test/src/main/java/org/springframework/ws/test/support/creator/PayloadMessageCreator.java
@@ -37,7 +37,7 @@ public class PayloadMessageCreator extends AbstractMessageCreator {
 
 	private final Source payload;
 
-	private TransformerHelper transformerHelper = new TransformerHelper();
+	private final TransformerHelper transformerHelper = new TransformerHelper();
 
 	/**
 	 * Creates a new instance of the {@code PayloadMessageCreator} with the given payload source.
diff --git a/spring-xml/src/main/java/org/springframework/xml/dom/DomContentHandler.java b/spring-xml/src/main/java/org/springframework/xml/dom/DomContentHandler.java
index 6251fc67..420cafcb 100644
--- a/spring-xml/src/main/java/org/springframework/xml/dom/DomContentHandler.java
+++ b/spring-xml/src/main/java/org/springframework/xml/dom/DomContentHandler.java
@@ -41,7 +41,7 @@ public class DomContentHandler implements ContentHandler {
 
 	private final Document document;
 
-	private final List<Element> elements = new ArrayList<Element>();
+	private final List<Element> elements = new ArrayList<>();
 
 	private final Node node;
 
@@ -91,7 +91,7 @@ public class DomContentHandler implements ContentHandler {
 	}
 
 	@Override
-	public void characters(char ch[], int start, int length) throws SAXException {
+	public void characters(char[] ch, int start, int length) throws SAXException {
 		String data = new String(ch, start, length);
 		Node parent = getParent();
 		Node lastChild = parent.getLastChild();
@@ -130,7 +130,7 @@ public class DomContentHandler implements ContentHandler {
 	public void endPrefixMapping(String prefix) throws SAXException {}
 
 	@Override
-	public void ignorableWhitespace(char ch[], int start, int length) throws SAXException {}
+	public void ignorableWhitespace(char[] ch, int start, int length) throws SAXException {}
 
 	@Override
 	public void skippedEntity(String name) throws SAXException {}
diff --git a/spring-xml/src/main/java/org/springframework/xml/transform/TransformerObjectSupport.java b/spring-xml/src/main/java/org/springframework/xml/transform/TransformerObjectSupport.java
index 4b6b46f7..6cdcb75e 100644
--- a/spring-xml/src/main/java/org/springframework/xml/transform/TransformerObjectSupport.java
+++ b/spring-xml/src/main/java/org/springframework/xml/transform/TransformerObjectSupport.java
@@ -42,7 +42,7 @@ public abstract class TransformerObjectSupport {
 	 */
 	protected final Log logger = LogFactory.getLog(getClass());
 
-	private TransformerHelper transformerHelper = new TransformerHelper();
+	private final TransformerHelper transformerHelper = new TransformerHelper();
 
 	/**
 	 * Specify the {@code TransformerFactory} class to use.
diff --git a/spring-xml/src/main/java/org/springframework/xml/validation/Jaxp13ValidatorFactory.java b/spring-xml/src/main/java/org/springframework/xml/validation/Jaxp13ValidatorFactory.java
index 9e1d5a7e..6d737025 100644
--- a/spring-xml/src/main/java/org/springframework/xml/validation/Jaxp13ValidatorFactory.java
+++ b/spring-xml/src/main/java/org/springframework/xml/validation/Jaxp13ValidatorFactory.java
@@ -78,7 +78,7 @@ abstract class Jaxp13ValidatorFactory {
 	/** {@code ErrorHandler} implementation that stores errors and fatal errors in a list. */
 	private static class DefaultValidationErrorHandler implements ValidationErrorHandler {
 
-		private List<SAXParseException> errors = new ArrayList<SAXParseException>();
+		private List<SAXParseException> errors = new ArrayList<>();
 
 		@Override
 		public SAXParseException[] getErrors() {
diff --git a/spring-xml/src/main/java/org/springframework/xml/validation/Jaxp15ValidatorFactory.java b/spring-xml/src/main/java/org/springframework/xml/validation/Jaxp15ValidatorFactory.java
index 4549169a..13218ee2 100644
--- a/spring-xml/src/main/java/org/springframework/xml/validation/Jaxp15ValidatorFactory.java
+++ b/spring-xml/src/main/java/org/springframework/xml/validation/Jaxp15ValidatorFactory.java
@@ -105,7 +105,7 @@ abstract class Jaxp15ValidatorFactory {
 	/** {@code ErrorHandler} implementation that stores errors and fatal errors in a list. */
 	private static class DefaultValidationErrorHandler implements ValidationErrorHandler {
 
-		private List<SAXParseException> errors = new ArrayList<SAXParseException>();
+		private List<SAXParseException> errors = new ArrayList<>();
 
 		@Override
 		public SAXParseException[] getErrors() {
diff --git a/spring-xml/src/main/java/org/springframework/xml/xpath/JaxenXPathExpressionFactory.java b/spring-xml/src/main/java/org/springframework/xml/xpath/JaxenXPathExpressionFactory.java
index acd1f820..4818b455 100644
--- a/spring-xml/src/main/java/org/springframework/xml/xpath/JaxenXPathExpressionFactory.java
+++ b/spring-xml/src/main/java/org/springframework/xml/xpath/JaxenXPathExpressionFactory.java
@@ -74,7 +74,7 @@ abstract class JaxenXPathExpressionFactory {
 	}
 
 	/** Jaxen implementation of the {@code XPathExpression} interface. */
-	private static class JaxenXpathExpression implements XPathExpression {
+	private static final class JaxenXpathExpression implements XPathExpression {
 
 		private XPath xpath;
 		private final String expression;
@@ -157,7 +157,7 @@ abstract class JaxenXPathExpressionFactory {
 		public <T> List<T> evaluate(Node context, NodeMapper<T> nodeMapper) throws XPathException {
 			try {
 				List<?> nodes = xpath.selectNodes(context);
-				List<T> results = new ArrayList<T>(nodes.size());
+				List<T> results = new ArrayList<>(nodes.size());
 				for (int i = 0; i < nodes.size(); i++) {
 					Node node = (Node) nodes.get(i);
 					try {
diff --git a/spring-xml/src/main/java/org/springframework/xml/xpath/JaxenXPathTemplate.java b/spring-xml/src/main/java/org/springframework/xml/xpath/JaxenXPathTemplate.java
index 8f4d45a8..38036017 100644
--- a/spring-xml/src/main/java/org/springframework/xml/xpath/JaxenXPathTemplate.java
+++ b/spring-xml/src/main/java/org/springframework/xml/xpath/JaxenXPathTemplate.java
@@ -136,7 +136,7 @@ public class JaxenXPathTemplate extends AbstractXPathTemplate {
 			XPath xpath = createXPath(expression);
 			Element element = getRootElement(context);
 			List<?> nodes = xpath.selectNodes(element);
-			List<T> results = new ArrayList<T>(nodes.size());
+			List<T> results = new ArrayList<>(nodes.size());
 			for (int i = 0; i < nodes.size(); i++) {
 				Node node = (Node) nodes.get(i);
 				try {
diff --git a/spring-xml/src/main/java/org/springframework/xml/xpath/Jaxp13XPathExpressionFactory.java b/spring-xml/src/main/java/org/springframework/xml/xpath/Jaxp13XPathExpressionFactory.java
index e93f41bc..dabff910 100644
--- a/spring-xml/src/main/java/org/springframework/xml/xpath/Jaxp13XPathExpressionFactory.java
+++ b/spring-xml/src/main/java/org/springframework/xml/xpath/Jaxp13XPathExpressionFactory.java
@@ -41,7 +41,7 @@ import org.w3c.dom.NodeList;
  */
 abstract class Jaxp13XPathExpressionFactory {
 
-	private static XPathFactory xpathFactory = XPathFactory.newInstance();
+	private static final XPathFactory xpathFactory = XPathFactory.newInstance();
 
 	/**
 	 * Creates a JAXP 1.3 {@code XPathExpression} from the given string expression.
@@ -88,7 +88,7 @@ abstract class Jaxp13XPathExpressionFactory {
 	}
 
 	/** JAXP 1.3 implementation of the {@code XPathExpression} interface. */
-	private static class Jaxp13XPathExpression implements XPathExpression {
+	private static final class Jaxp13XPathExpression implements XPathExpression {
 
 		private final javax.xml.xpath.XPathExpression xpathExpression;
 		private final String expression;
@@ -126,7 +126,7 @@ abstract class Jaxp13XPathExpressionFactory {
 		}
 
 		private List<Node> toNodeList(NodeList nodeList) {
-			List<Node> result = new ArrayList<Node>(nodeList.getLength());
+			List<Node> result = new ArrayList<>(nodeList.getLength());
 			for (int i = 0; i < nodeList.getLength(); i++) {
 				result.add(nodeList.item(i));
 			}
@@ -165,7 +165,7 @@ abstract class Jaxp13XPathExpressionFactory {
 		@Override
 		public <T> List<T> evaluate(Node node, NodeMapper<T> nodeMapper) throws XPathException {
 			NodeList nodes = (NodeList) evaluate(node, XPathConstants.NODESET);
-			List<T> results = new ArrayList<T>(nodes.getLength());
+			List<T> results = new ArrayList<>(nodes.getLength());
 			for (int i = 0; i < nodes.getLength(); i++) {
 				try {
 					results.add(nodeMapper.mapNode(nodes.item(i), i));
diff --git a/spring-xml/src/main/java/org/springframework/xml/xpath/Jaxp13XPathTemplate.java b/spring-xml/src/main/java/org/springframework/xml/xpath/Jaxp13XPathTemplate.java
index e253369a..dad66cee 100644
--- a/spring-xml/src/main/java/org/springframework/xml/xpath/Jaxp13XPathTemplate.java
+++ b/spring-xml/src/main/java/org/springframework/xml/xpath/Jaxp13XPathTemplate.java
@@ -85,7 +85,7 @@ public class Jaxp13XPathTemplate extends AbstractXPathTemplate {
 	@Override
 	public List<Node> evaluateAsNodeList(String expression, Source context) throws XPathException {
 		NodeList result = (NodeList) evaluate(expression, context, XPathConstants.NODESET);
-		List<Node> nodes = new ArrayList<Node>(result.getLength());
+		List<Node> nodes = new ArrayList<>(result.getLength());
 		for (int i = 0; i < result.getLength(); i++) {
 			nodes.add(result.item(i));
 		}
@@ -120,7 +120,7 @@ public class Jaxp13XPathTemplate extends AbstractXPathTemplate {
 	@Override
 	public <T> List<T> evaluate(String expression, Source context, NodeMapper<T> nodeMapper) throws XPathException {
 		NodeList nodes = (NodeList) evaluate(expression, context, XPathConstants.NODESET);
-		List<T> results = new ArrayList<T>(nodes.getLength());
+		List<T> results = new ArrayList<>(nodes.getLength());
 		for (int i = 0; i < nodes.getLength(); i++) {
 			try {
 				results.add(nodeMapper.mapNode(nodes.item(i), i));
@@ -155,7 +155,7 @@ public class Jaxp13XPathTemplate extends AbstractXPathTemplate {
 		return xpathFactory.newXPath();
 	}
 
-	private static class EvaluationCallback implements TraxUtils.SourceCallback {
+	private static final class EvaluationCallback implements TraxUtils.SourceCallback {
 
 		private final XPath xpath;
 
diff --git a/spring-xml/src/main/java/org/springframework/xml/xpath/XPathExpressionFactory.java b/spring-xml/src/main/java/org/springframework/xml/xpath/XPathExpressionFactory.java
index ee074e4d..13529c58 100644
--- a/spring-xml/src/main/java/org/springframework/xml/xpath/XPathExpressionFactory.java
+++ b/spring-xml/src/main/java/org/springframework/xml/xpath/XPathExpressionFactory.java
@@ -67,12 +67,8 @@ public abstract class XPathExpressionFactory {
 		if (namespaces == null) {
 			namespaces = Collections.emptyMap();
 		}
-		try {
-			logger.trace("Creating [javax.xml.xpath.XPathExpression]");
-			return Jaxp13XPathExpressionFactory.createXPathExpression(expression, namespaces);
-		} catch (XPathException e) {
-			throw e;
-		}
+		logger.trace("Creating [javax.xml.xpath.XPathExpression]");
+		return Jaxp13XPathExpressionFactory.createXPathExpression(expression, namespaces);
 	}
 
 }
diff --git a/spring-xml/src/main/java/org/springframework/xml/xsd/commons/CommonsXsdSchema.java b/spring-xml/src/main/java/org/springframework/xml/xsd/commons/CommonsXsdSchema.java
index c268c38c..68666f1a 100644
--- a/spring-xml/src/main/java/org/springframework/xml/xsd/commons/CommonsXsdSchema.java
+++ b/spring-xml/src/main/java/org/springframework/xml/xsd/commons/CommonsXsdSchema.java
@@ -84,7 +84,7 @@ public class CommonsXsdSchema implements XsdSchema {
 	}
 
 	public QName[] getElementNames() {
-		List<QName> result = new ArrayList<QName>(schema.getElements().keySet());
+		List<QName> result = new ArrayList<>(schema.getElements().keySet());
 		return result.toArray(new QName[result.size()]);
 	}
 
diff --git a/spring-xml/src/main/java/org/springframework/xml/xsd/commons/CommonsXsdSchemaCollection.java b/spring-xml/src/main/java/org/springframework/xml/xsd/commons/CommonsXsdSchemaCollection.java
index 6f974917..3c737c98 100644
--- a/spring-xml/src/main/java/org/springframework/xml/xsd/commons/CommonsXsdSchemaCollection.java
+++ b/spring-xml/src/main/java/org/springframework/xml/xsd/commons/CommonsXsdSchemaCollection.java
@@ -63,11 +63,11 @@ public class CommonsXsdSchemaCollection implements XsdSchemaCollection, Initiali
 
 	private final XmlSchemaCollection schemaCollection = new XmlSchemaCollection();
 
-	private final List<XmlSchema> xmlSchemas = new ArrayList<XmlSchema>();
+	private final List<XmlSchema> xmlSchemas = new ArrayList<>();
 
 	private Resource[] xsdResources;
 
-	private boolean inline = false;
+	private boolean inline;
 
 	private URIResolver uriResolver = new ClasspathUriResolver();
 
@@ -128,8 +128,8 @@ public class CommonsXsdSchemaCollection implements XsdSchemaCollection, Initiali
 
 		schemaCollection.setSchemaResolver(uriResolver);
 
-		Set<XmlSchema> processedIncludes = new HashSet<XmlSchema>();
-		Set<XmlSchema> processedImports = new HashSet<XmlSchema>();
+		Set<XmlSchema> processedIncludes = new HashSet<>();
+		Set<XmlSchema> processedImports = new HashSet<>();
 
 		for (Resource xsdResource : xsdResources) {
 			Assert.isTrue(xsdResource.exists(), xsdResource + " does not exist");
diff --git a/spring-xml/src/test/java/org/springframework/xml/namespace/SimpleNamespaceContextTest.java b/spring-xml/src/test/java/org/springframework/xml/namespace/SimpleNamespaceContextTest.java
index 07de11c5..5ce2075e 100644
--- a/spring-xml/src/test/java/org/springframework/xml/namespace/SimpleNamespaceContextTest.java
+++ b/spring-xml/src/test/java/org/springframework/xml/namespace/SimpleNamespaceContextTest.java
@@ -101,13 +101,13 @@ class SimpleNamespaceContextTest {
 		String result = iterator.next();
 
 		assertThat(result)
-				.has(new Condition<>(value -> value.equals("prefix1") || value.equals("prefix2"), "verify prefix"));
+				.has(new Condition<>(value -> "prefix1".equals(value) || "prefix2".equals(value), "verify prefix"));
 		assertThat(iterator.hasNext()).isTrue();
 
 		result = iterator.next();
 
 		assertThat(result)
-				.has(new Condition<>(value -> value.equals("prefix1") || value.equals("prefix2"), "verify prefix"));
+				.has(new Condition<>(value -> "prefix1".equals(value) || "prefix2".equals(value), "verify prefix"));
 		assertThat(iterator).isEmpty();
 	}
 
@@ -202,14 +202,14 @@ class SimpleNamespaceContextTest {
 		String result = iterator.next();
 
 		assertThat(result).has(new Condition<>(
-				value -> value.equals(XMLConstants.DEFAULT_NS_PREFIX) || value.equals("prefix"), "Verify prefix"));
+				value -> value.equals(XMLConstants.DEFAULT_NS_PREFIX) || "prefix".equals(value), "Verify prefix"));
 		assertThat(iterator).isNotNull();
 		assertThat(iterator.hasNext()).isTrue();
 
 		result = iterator.next();
 
 		assertThat(result).has(new Condition<>(
-				value -> value.equals(XMLConstants.DEFAULT_NS_PREFIX) || value.equals("prefix"), "Verify prefix"));
+				value -> value.equals(XMLConstants.DEFAULT_NS_PREFIX) || "prefix".equals(value), "Verify prefix"));
 		assertThat(iterator).isEmpty();
 	}
 
diff --git a/spring-xml/src/test/java/org/springframework/xml/validation/AbstractValidatorFactoryTestCase.java b/spring-xml/src/test/java/org/springframework/xml/validation/AbstractValidatorFactoryTestCase.java
index a74c6d71..5dfb7d69 100644
--- a/spring-xml/src/test/java/org/springframework/xml/validation/AbstractValidatorFactoryTestCase.java
+++ b/spring-xml/src/test/java/org/springframework/xml/validation/AbstractValidatorFactoryTestCase.java
@@ -114,7 +114,6 @@ public abstract class AbstractValidatorFactoryTestCase {
 		SAXParseException[] errors = validator.validate(new DOMSource(document));
 
 		assertThat(errors).isEmpty();
-		;
 	}
 
 	@Test
@@ -148,7 +147,6 @@ public abstract class AbstractValidatorFactoryTestCase {
 		errors = validator.validate(document);
 
 		assertThat(errors).isEmpty();
-		;
 	}
 
 	@Test
diff --git a/spring-xml/src/test/java/org/springframework/xml/xpath/AbstractXPathExpressionFactoryTestCase.java b/spring-xml/src/test/java/org/springframework/xml/xpath/AbstractXPathExpressionFactoryTestCase.java
index b86b5774..0de03f0c 100644
--- a/spring-xml/src/test/java/org/springframework/xml/xpath/AbstractXPathExpressionFactoryTestCase.java
+++ b/spring-xml/src/test/java/org/springframework/xml/xpath/AbstractXPathExpressionFactoryTestCase.java
@@ -41,7 +41,7 @@ public abstract class AbstractXPathExpressionFactoryTestCase {
 
 	private Document namespacesDocument;
 
-	private Map<String, String> namespaces = new HashMap<String, String>();
+	private final Map<String, String> namespaces = new HashMap<>();
 
 	@BeforeEach
 	public void setUp() throws Exception {
diff --git a/spring-xml/src/test/java/org/springframework/xml/xpath/JaxenXPathTemplateTest.java b/spring-xml/src/test/java/org/springframework/xml/xpath/JaxenXPathTemplateTest.java
index 9bd2ab66..992dbb38 100644
--- a/spring-xml/src/test/java/org/springframework/xml/xpath/JaxenXPathTemplateTest.java
+++ b/spring-xml/src/test/java/org/springframework/xml/xpath/JaxenXPathTemplateTest.java
@@ -25,7 +25,7 @@ public class JaxenXPathTemplateTest extends AbstractXPathTemplateTestCase {
 	protected XPathOperations createTemplate() {
 
 		JaxenXPathTemplate template = new JaxenXPathTemplate();
-		Map<String, String> namespaces = new HashMap<String, String>();
+		Map<String, String> namespaces = new HashMap<>();
 		namespaces.put("prefix1", "namespace1");
 		namespaces.put("prefix2", "namespace2");
 		template.setNamespaces(namespaces);
diff --git a/spring-xml/src/test/java/org/springframework/xml/xsd/commons/CommonsXsdSchemaCollectionTest.java b/spring-xml/src/test/java/org/springframework/xml/xsd/commons/CommonsXsdSchemaCollectionTest.java
index e3c96988..5d5ed6fd 100644
--- a/spring-xml/src/test/java/org/springframework/xml/xsd/commons/CommonsXsdSchemaCollectionTest.java
+++ b/spring-xml/src/test/java/org/springframework/xml/xsd/commons/CommonsXsdSchemaCollectionTest.java
@@ -157,8 +157,8 @@ public class CommonsXsdSchemaCollectionTest {
 		assertThat(schemas).hasSize(2);
 		assertThat(schemas[0].getTargetNamespace()).isEqualTo("http://mycompany.com/hr/schemas");
 
-		Resource hr_employee = new ClassPathResource("hr_employee.xsd", getClass());
-		Document expected = documentBuilder.parse(SaxUtils.createInputSource(hr_employee));
+		Resource hrEmployee = new ClassPathResource("hr_employee.xsd", getClass());
+		Document expected = documentBuilder.parse(SaxUtils.createInputSource(hrEmployee));
 		DOMResult domResult = new DOMResult();
 		transformer.transform(schemas[0].getSource(), domResult);
```

</details>

7. Verify the project after the changes were made:

```bash
./mvnw verify
```

You can probably imagine that this recipe resolves a lot of technical debt when run at scale throughout an organization.
