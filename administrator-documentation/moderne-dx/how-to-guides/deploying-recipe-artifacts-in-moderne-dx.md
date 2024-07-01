# Deploying recipe artifacts in Moderne DX

To deploy recipe artifacts into Moderne DX, you must first install the recipe artifacts into the local CLI recipe marketplace. The following command downloads OpenRewrite's rewrite-spring recipes artifact from a pre-configured list of aritifact repositories such as https://repo.maven.apache.org/maven2.

```
mod config recipes jar install org.openrewrite.recipe.rewrite-spring.LATEST
```

Next, upload all recipe artifacts from the local CLI marketplace to Moderne DX using the command:

```
mod config recipes moderne push
```
