# Moderne CLI exercise

In this exercise, you will use the [Moderne CLI](../../getting-started/cli-intro.md), a free tool that allows developer to run OpenRewrite recipes without configuring any build plugin, to migrate a repository from Spring Boot 2 to Spring Boot 3.

### Prepare your environment

#### Download and configure the Moderne CLI

1. Go to the [Moderne platform](https://app.moderne.io) and sign in. If you don't have an account, you can sign up for free.
2. Download the CLI for your operating system:

{% tabs %}
{% tab title="Mac" %}
[moderne-cli-v1.6.16](https://pkgs.dev.azure.com/moderneinc/moderne\_public/\_packaging/staging/maven/v1/io/moderne/moderne-cli-macos/v1.6.16/moderne-cli-macos-v1.6.16)

{% hint style="success" %}
You can also use homebrew:

<pre class="language-bash"><code class="lang-bash"><strong>brew install moderneinc/moderne/mod
</strong></code></pre>

and skip step 3.
{% endhint %}
{% endtab %}

{% tab title="Linux" %}
[moderne-cli-v1.6.16](https://pkgs.dev.azure.com/moderneinc/moderne\_public/\_packaging/staging/maven/v1/io/moderne/moderne-cli-linux/v1.6.16/moderne-cli-linux-v1.6.16)
{% endtab %}

{% tab title="Windows" %}
[moderne-cli-v1.6.16](https://pkgs.dev.azure.com/moderneinc/moderne\_public/\_packaging/staging/maven/v1/io/moderne/moderne-cli-windows/v1.6.16/moderne-cli-windows-v1.6.16)
{% endtab %}
{% endtabs %}

3. Once you have it downloaded, save it somewhere that your terminal can access. If you want it available in each of your terminal windows, consider updating your `PATH` to point ot this location or aliasing `mod` to the location of the CLI. You could also save the file to a directory that's already on your `PATH` such as a `/usr/bin` directory.
4. Ensure you can run the CLI by typing `mod`.

<details>

<summary>If everything is set up correctly, you should see output similar to the following:</summary>

```
➜  moderne-cli git:(main) mod
  ▛▀▀▚▖  ▗▄▟▜
  ▌   ▜▄▟▀  ▐
  ▛▀▀█▀▛▀▀▀▀▜
  ▌▟▀  ▛▀▀▀▀▜
  ▀▀▀▀▀▀▀▀▀▀▀
  Moderne CLI v1.6.16
  Running in a local developer environment

  Usage:

  mod [-h] [COMMAND]

  Description:

  Automated code remediation.

  Options:

  -h, --help   Display this help message.

  Commands:

  build                  Generates LST artifacts for one or more repositories.
  clean                  Clean build and run artifacts produced by the CLI.
  config                 Global configuration options that are required by some
                            CLI commands.
  run                    Runs an OpenRewrite recipe locally.
  list                   Lists the repository roots that can be built and
                            published.
  publish                Publishes the LST artifacts for a specific project.
  study                  Produces studies from OpenRewrite recipe data tables
                            locally.
  add                    Performs the equivalent of git add on multiple
                            repositories.
  apply                  Performs the equivalent of git apply on multiple
                            repositories.
  checkout               Performs the equivalent of git checkout on multiple
                            repositories.
  clone                  Performs the equivalent of git clone on multiple
                            repositories.
  commit                 Performs the equivalent of git commit on multiple
                            repositories.
  exec                   Execute an arbitrary shell command recursively on
                            selected repository roots.
  pull                   Performs the equivalent of git pull on multiple
                            repositories.
  push                   Performs the equivalent of git push on multiple
                            repositories.
  reset                  Performs the equivalent of git reset on multiple
                            repositories.
  rev-parse              Performs the equivalent of git rev-parse on multiple
                            repositories.
  stashset, atomicstash  Performs the equivalent of git stash on multiple
                            repositories.
  generate-completion    Generate bash/zsh completion script for mod.

  MOD SUCCEEDED in (0.02s)
```

</details>

{% hint style="success" %}
Run `mod generate-completion --help` and follow the instructions to enable tab completion for the CLI.
{% endhint %}

5. Before you can run any commands, you'll need to create a Moderne access token. Go to [https://app.moderne.io/settings/access-token](https://app.moderne.io/settings/access-token), enter a name for your token, and press `generate`.
6. Once created, copy the token and use it in the following command so that the CLI can communicate with Moderne:

```bash
mod config moderne edit https://app.moderne.io --token mat-YOUR_TOKEN_HERE
```

7. With the Moderne connection established, install the Spring Boot recipe on your machine:

```bash
mod config recipes moderne install UpgradeSpringBoot_3_1
```

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
Moderne CLI v1.6.16

> Selecting repositories

> spring-projects/spring-petclinic@main
Selected 1 repositories
(0.54s)
> Building LST(s)

> spring-projects/spring-petclinic@main
   Build output will be written to file:///Users/mikesol/Desktop/code/spring-petclinic/.moderne/build/20230921094850-s8Qfa/build.log
   📶 Step 1 - build with Maven
       Selected a Java 8 JDK
   📶 Step 2 - build resources using the native CLI
   📈 Reported build metrics to Moderne
   ✅ Built LST file:///Users/mikesol/Desktop/code/spring-petclinic/.moderne/build/20230921094850-s8Qfa/spring-petclinic-20230921094920-ast.jar
   🧹 Cleaned 0 older builds.
Built 1 repositories (30s)

* What to do next
   > Run mod run . --recipe <RecipeName>

MOD SUCCEEDED in (30s)
```

</details>

2. Kick off the migration recipe by running the following command from the `spring-petclinic` repository:

```bash
mod run . --recipe UpgradeSpringBoot_3_1
```

<details>

<summary>You should see output similar to the following.</summary>

```
    ▛▀▀▚▖  ▗▄▟▜
    ▌   ▜▄▟▀  ▐
    ▛▀▀█▀▛▀▀▀▀▜
    ▌▟▀  ▛▀▀▀▀▜
    ▀▀▀▀▀▀▀▀▀▀▀
 Moderne CLI v1.6.16

 > Selecting repositories

 > spring-projects/spring-petclinic@main
 Selected 1 repositories (0.48s)

 > Running recipe org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1

 > spring-projects/spring-petclinic@main
     ✅ Fix results at file:///Users/mikesol/Desktop/code/spring-petclinic/.moderne/run/20230925102039-NVf33/fix.patch
     ✅ Search results at file:///Users/mikesol/Desktop/code/spring-petclinic/.moderne/run/20230925102039-NVf33/search.patch
 Found results on 1 repositories (9m 37s)

 * What to do next
     > Click on one of the patch links above to view the changes on a particular repository
     > Run mod study . --last-recipe-run --data-table <DATA-TABLE>  to examine data tables produced by this recipe
     > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
     > Run mod apply . --last-recipe-run  to apply the changes
     > Run mod apply . --recipe-run 20230925102039-NVf33 to apply the changes

 MOD SUCCEEDED in (9m 38s)
```

</details>

3. The previous command will generate a patch file (`fix.patch`) that contains the changes the recipe would make to your repository. You can examine the file with your favorite editor, or you can apply the changes to the code and use `git diff` to check out the changes. It's important to always double-check that the changes made match your expectations:

```bash
mod apply . --last-recipe-run
git diff
```

<details>

<summary>You should see output similar to the following.</summary>

```diff
 diff --git a/pom.xml b/pom.xml
 index 0b8f9c2..56693d7 100644
 --- a/pom.xml
 +++ b/pom.xml
 @@ -10,14 +10,14 @@
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
 -    <version>2.0.0.RELEASE</version>
 +    <version>3.1.4</version>
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
 index 7fccb3b..1f1db70 100644
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
 +    void testInitCreationForm() throws Exception {
         mockMvc.perform(get("/owners/new"))
             .andExpect(status().isOk())
             .andExpect(model().attributeExists("owner"))
 @@ -62,7 +59,7 @@ public class OwnerControllerTests {
     }
 
     @Test
 -    public void testProcessCreationFormSuccess() throws Exception {
 +    void testProcessCreationFormSuccess() throws Exception {
         mockMvc.perform(post("/owners/new")
             .param("firstName", "Joe")
             .param("lastName", "Bloggs")
 @@ -74,7 +71,7 @@ public class OwnerControllerTests {
     }
 
     @Test
 -    public void testProcessCreationFormHasErrors() throws Exception {
 +    void testProcessCreationFormHasErrors() throws Exception {
         mockMvc.perform(post("/owners/new")
             .param("firstName", "Joe")
             .param("lastName", "Bloggs")
 @@ -88,7 +85,7 @@ public class OwnerControllerTests {
     }
 
     @Test
 -    public void testInitFindForm() throws Exception {
 +    void testInitFindForm() throws Exception {
         mockMvc.perform(get("/owners/find"))
             .andExpect(status().isOk())
             .andExpect(model().attributeExists("owner"))
 @@ -96,7 +93,7 @@ public class OwnerControllerTests {
     }
 
     @Test
 -    public void testProcessFindFormSuccess() throws Exception {
 +    void testProcessFindFormSuccess() throws Exception {
         given(this.owners.findByLastName("")).willReturn(Lists.newArrayList(george, new Owner()));
         mockMvc.perform(get("/owners"))
             .andExpect(status().isOk())
 @@ -104,7 +101,7 @@ public class OwnerControllerTests {
     }
 
     @Test
 -    public void testProcessFindFormByLastName() throws Exception {
 +    void testProcessFindFormByLastName() throws Exception {
         given(this.owners.findByLastName(george.getLastName())).willReturn(Lists.newArrayList(george));
         mockMvc.perform(get("/owners")
             .param("lastName", "Franklin")
 @@ -114,7 +111,7 @@ public class OwnerControllerTests {
     }
 
     @Test
 -    public void testProcessFindFormNoOwnersFound() throws Exception {
 +    void testProcessFindFormNoOwnersFound() throws Exception {
         mockMvc.perform(get("/owners")
             .param("lastName", "Unknown Surname")
         )
 @@ -125,7 +122,7 @@ public class OwnerControllerTests {
     }
 
     @Test
 -    public void testInitUpdateOwnerForm() throws Exception {
 +    void testInitUpdateOwnerForm() throws Exception {
         mockMvc.perform(get("/owners/{ownerId}/edit", TEST_OWNER_ID))
             .andExpect(status().isOk())
             .andExpect(model().attributeExists("owner"))
 @@ -138,7 +135,7 @@ public class OwnerControllerTests {
     }
 
     @Test
 -    public void testProcessUpdateOwnerFormSuccess() throws Exception {
 +    void testProcessUpdateOwnerFormSuccess() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/edit", TEST_OWNER_ID)
             .param("firstName", "Joe")
             .param("lastName", "Bloggs")
 @@ -151,7 +148,7 @@ public class OwnerControllerTests {
     }
 
     @Test
 -    public void testProcessUpdateOwnerFormHasErrors() throws Exception {
 +    void testProcessUpdateOwnerFormHasErrors() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/edit", TEST_OWNER_ID)
             .param("firstName", "Joe")
             .param("lastName", "Bloggs")
 @@ -165,7 +162,7 @@ public class OwnerControllerTests {
     }
 
     @Test
 -    public void testShowOwner() throws Exception {
 +    void testShowOwner() throws Exception {
         mockMvc.perform(get("/owners/{ownerId}", TEST_OWNER_ID))
             .andExpect(status().isOk())
             .andExpect(model().attribute("owner", hasProperty("lastName", is("Franklin"))))
 diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java
 index f95d7c8..1d33b39 100755
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
 +    void testInitCreationForm() throws Exception {
         mockMvc.perform(get("/owners/{ownerId}/pets/new", TEST_OWNER_ID))
             .andExpect(status().isOk())
             .andExpect(view().name("pets/createOrUpdatePetForm"))
 @@ -71,7 +68,7 @@ public class PetControllerTests {
     }
 
     @Test
 -    public void testProcessCreationFormSuccess() throws Exception {
 +    void testProcessCreationFormSuccess() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/pets/new", TEST_OWNER_ID)
             .param("name", "Betty")
             .param("type", "hamster")
 @@ -82,7 +79,7 @@ public class PetControllerTests {
     }
 
     @Test
 -    public void testProcessCreationFormHasErrors() throws Exception {
 +    void testProcessCreationFormHasErrors() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/pets/new", TEST_OWNER_ID)
             .param("name", "Betty")
             .param("birthDate", "2015-02-12")
 @@ -96,7 +93,7 @@ public class PetControllerTests {
     }
 
     @Test
 -    public void testInitUpdateForm() throws Exception {
 +    void testInitUpdateForm() throws Exception {
         mockMvc.perform(get("/owners/{ownerId}/pets/{petId}/edit", TEST_OWNER_ID, TEST_PET_ID))
             .andExpect(status().isOk())
             .andExpect(model().attributeExists("pet"))
 @@ -104,7 +101,7 @@ public class PetControllerTests {
     }
 
     @Test
 -    public void testProcessUpdateFormSuccess() throws Exception {
 +    void testProcessUpdateFormSuccess() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/pets/{petId}/edit", TEST_OWNER_ID, TEST_PET_ID)
             .param("name", "Betty")
             .param("type", "hamster")
 @@ -115,7 +112,7 @@ public class PetControllerTests {
     }
 
     @Test
 -    public void testProcessUpdateFormHasErrors() throws Exception {
 +    void testProcessUpdateFormHasErrors() throws Exception {
         mockMvc.perform(post("/owners/{ownerId}/pets/{petId}/edit", TEST_OWNER_ID, TEST_PET_ID)
             .param("name", "Betty")
             .param("birthDate", "2015/02/12")
 diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
 index 4e8e36c..2c9f2b9 100644
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
 +    void testPrint() {
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
 index 08d6136..3331750 100644
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
 +    void testInitNewVisitForm() throws Exception {
         mockMvc.perform(get("/owners/*/pets/{petId}/visits/new", TEST_PET_ID))
             .andExpect(status().isOk())
             .andExpect(view().name("pets/createOrUpdateVisitForm"));
     }
 
     @Test
 -    public void testProcessNewVisitFormSuccess() throws Exception {
 +    void testProcessNewVisitFormSuccess() throws Exception {
         mockMvc.perform(post("/owners/*/pets/{petId}/visits/new", TEST_PET_ID)
             .param("name", "George")
             .param("description", "Visit Description")
 @@ -63,7 +60,7 @@ public class VisitControllerTests {
     }
 
     @Test
 -    public void testProcessNewVisitFormHasErrors() throws Exception {
 +    void testProcessNewVisitFormHasErrors() throws Exception {
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
 index 3f108bf..0da16c5 100644
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
 +    void testTriggerException() throws Exception {
         mockMvc.perform(get("/oups")).andExpect(view().name("exception"))
                 .andExpect(model().attributeExists("exception"))
                 .andExpect(forwardedUrl("exception")).andExpect(status().isOk());
 diff --git a/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java b/src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java
 index 9636e36..1f7ac94 100644
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
 +    void testFindAll() throws Exception {
         vets.findAll();
         vets.findAll(); // served from cache
     }
 diff --git a/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java b/src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java
 index ce6adf8..fd7490a 100644
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
 +    void testShowVetListHtml() throws Exception {
         mockMvc.perform(get("/vets.html"))
             .andExpect(status().isOk())
             .andExpect(model().attributeExists("vets"))
 @@ -64,7 +61,7 @@ public class VetControllerTests {
     }
 
     @Test
 -    public void testShowResourcesVetList() throws Exception {
 +    void testShowResourcesVetList() throws Exception {
         ResultActions actions = mockMvc.perform(get("/vets.json").accept(MediaType.APPLICATION_JSON))
             .andExpect(status().isOk());
         actions.andExpect(content().contentType("application/json;charset=UTF-8"))
 @@ -72,7 +69,7 @@ public class VetControllerTests {
     }
 
     @Test
 -    public void testShowVetListXml() throws Exception {
 +    void testShowVetListXml() throws Exception {
         mockMvc.perform(get("/vets.xml").accept(MediaType.APPLICATION_XML))
             .andExpect(status().isOk())
             .andExpect(content().contentType(MediaType.APPLICATION_XML_VALUE))
 diff --git a/src/test/java/org/springframework/samples/petclinic/vet/VetTests.java b/src/test/java/org/springframework/samples/petclinic/vet/VetTests.java
 index de3a7b9..a2dacda 100644
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
 +    void testSerialization() {
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
mod clone $HOME/workshop --moderne-organization "Spring Projects 2.x"
```

If you look in the `$HOME/workshop/spring-projects` directory, you should see 3 different repositories:

```bash
ls -ltr $HOME/workshop/spring-projects/
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
total 0
drwxr-xr-x  13 mikesol  staff  416 Sep 21 10:22 spring-data-release
drwxr-xr-x  21 mikesol  staff  672 Sep 21 10:22 spring-hateoas-examples
drwxr-xr-x  14 mikesol  staff  448 Sep 21 10:22 spring-session-data-mongodb-examples
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
  Moderne CLI v1.6.16
  Running in a local developer environment

  > Selecting repositories

  > spring-projects/spring-data-release@main
  > spring-projects/spring-hateoas-examples@main
  > spring-projects/spring-session-data-mongodb-examples@main
  Selected 3 repositories (0.36s)

  > Building LST(s)

  > spring-projects/spring-data-release@main
      Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-projects/spring-data-release/.moderne/build/20230921102317-1wuaH/build.log
      📶 Step 1 - download from Moderne
      ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-projects/spring-data-release/.moderne/build/20230921102317-1wuaH/0-spring-data-release-20230921034129-ast.jar
      Cleaned 0 older builds.
  > spring-projects/spring-hateoas-examples@main
      Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-projects/spring-hateoas-examples/.moderne/build/20230921102319-BBHxN/build.log
      📶 Step 1 - download from Moderne
      ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-projects/spring-hateoas-examples/.moderne/build/20230921102319-BBHxN/0-spring-hateoas-examples-20230921093801-ast.jar
      Cleaned 0 older builds.
  > spring-projects/spring-session-data-mongodb-examples@main
      Build output will be written to file:///Users/mikesol/Desktop/code/workshop/spring-projects/spring-session-data-mongodb-examples/.moderne/build/20230921102320-A1sUV/build.log
      📶 Step 1 - download from Moderne
      ✅ Downloaded LST file:///Users/mikesol/Desktop/code/workshop/spring-projects/spring-session-data-mongodb-examples/.moderne/build/20230921102320-A1sUV/0-spring-session-data-mongodb-examples-20230921125257-ast.jar
      Cleaned 0 older builds.
  Built 3 repositories (3s)

  * What to do next
      > Run mod run . --recipe <RecipeName>

  MOD SUCCEEDED in (4s)
```

</details>

You can apply the changes to all of these repositories at once with the following command:

```bash
mod apply $HOME/workshop --last-recipe-run
```

You can preview the changes with git by going to each repository and running `git diff`:

```bash
cd $HOME/workshop/spring-projects/spring-data-release
git diff
```

Finally, you can commit the changes to all the repositories at once with the following command:

```bash
mod commit $HOME/workshop -m "Migrate to spring boot 3" --last-recipe-run
```

If you'd rather make a branch for each repository and make changes in that, you can use the `mod checkout` command before running `mod commit` to commit the changes. This might be useful if you want to create a pull request for each repository.

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
mod apply . --last-recipe-run
```

6. Check out all of the changes that were made by running:

```bash
git diff
```

7. Verify the project after the changes were made:

```bash
./mvnw verify
```

You can probably imagine that this recipe resolves a lot of technical debt when run at scale throughout an organization.