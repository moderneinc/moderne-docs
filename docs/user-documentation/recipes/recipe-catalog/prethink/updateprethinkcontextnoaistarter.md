---
sidebar_label: "Update Prethink context (no AI)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Update Prethink context (no AI)

**io.moderne.prethink.UpdatePrethinkContextNoAiStarter**

_Generate Moderne Prethink context files with architectural discovery, test coverage mapping, dependency inventory, and FINOS CALM architecture diagrams. This recipe does not require an LLM provider - use UpdatePrethinkContextStarter if you want AI-generated code comprehension and test summaries._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | targetConfigFile | *Optional*. Which agent config file to update. If not specified, updates all found files. | `CLAUDE.md` |


## Usage

<RunRecipe
  recipeName="io.moderne.prethink.UpdatePrethinkContextNoAiStarter"
  displayName="Update Prethink context (no AI)"
  groupId="io.moderne.recipe"
  artifactId="rewrite-prethink"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.prethink.UpdatePrethinkContextNoAiStarter" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.prethink.table.ProjectMetadata" label="ProjectMetadata">

### Project metadata
**org.openrewrite.prethink.table.ProjectMetadata**

_Project-level identity and structure for each build module. Includes Maven GAV coordinates, display name, description, parent project lineage, and submodule count. Use this to understand what the project is, how it relates to parent projects, and whether it is a multi-module aggregator._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the build file (pom.xml or build.gradle). |
| Artifact ID | The project's artifact ID (Maven) or project name (Gradle). |
| Group ID | The project's group ID. |
| Name | The project's display name. |
| Description | The project's description. |
| Version | The project's version. |
| Parent project | The parent project coordinates (e.g., groupId:artifactId:version for Maven). |
| Module count | The number of declared submodules for aggregator projects. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.ServiceEndpoints" label="ServiceEndpoints">

### Service endpoints
**org.openrewrite.prethink.table.ServiceEndpoints**

_REST/HTTP endpoints exposed by the application._

| Column Name | Description |
| ----------- | ----------- |
| Entity ID | Unique identifier for this endpoint entity (format: endpoint:\{className\}#\{methodSignature\}). |
| Source path | The path to the source file containing the endpoint. |
| Service class | The fully qualified name of the controller or resource class. |
| Method name | The name of the endpoint method. |
| HTTP method | The HTTP method (GET, POST, PUT, DELETE, PATCH, etc.). |
| Path | The URL path pattern for the endpoint. |
| Produces | Content types the endpoint produces (e.g., application/json). |
| Consumes | Content types the endpoint consumes (e.g., application/json). |
| Framework | The web framework used (Spring, JAX-RS, Micronaut, Quarkus). |
| Method signature | The full method signature for linking to method descriptions. |

</TabItem>

<TabItem value="io.moderne.prethink.table.EndpointSchemas" label="EndpointSchemas">

### Endpoint request/response schemas
**io.moderne.prethink.table.EndpointSchemas**

_Per-endpoint request body and response body bindings, one row per (endpoint, status code) pair. Supports OpenAPI 3.0.3 generation by giving the LLM a full mapping from handler to body DTO FQNs._

| Column Name | Description |
| ----------- | ----------- |
| Endpoint ID | Join key matching the 'Entity ID' column of service-endpoints.csv. |
| Source path | The path to the source file containing the handler. |
| Service class | The fully qualified name of the controller/resource class. |
| Method name | The handler method name. |
| HTTP method | The HTTP method (GET, POST, etc.). |
| Path | The full request path including class-level prefix. |
| Request body FQN | Fully qualified name of the request body DTO class, or null when the handler takes no body. |
| Request body resolution | How the request body type was resolved: 'resolved' (FQN known), 'simple-name' (only the class simple name could be recovered), 'unresolved' (could not be determined), or 'none' (no request body). |
| Request body required | Whether the request body is required (false only when @RequestBody(required=false)). |
| Response status | HTTP status code for this response row (e.g. 200, 201, 400). |
| Response body FQN | Fully qualified name of the response body DTO for this status, after unwrapping ResponseEntity/Mono/Optional/collection wrappers. |
| Response body resolution | How the response body type was resolved: 'resolved' (FQN known), 'simple-name', 'unresolved', or 'none' (void return / no body). |
| Response is collection | True when the response body is a collection type (List/Set/Page/Slice/array). |
| Response source | Where this response row was derived: 'return-type', '@ResponseStatus', or '@ApiResponse'. |
| Framework | The framework hosting the endpoint (Spring, JAX-RS, Micronaut). |

</TabItem>

<TabItem value="io.moderne.prethink.table.EndpointParameters" label="EndpointParameters">

### Endpoint parameters
**io.moderne.prethink.table.EndpointParameters**

_Per-parameter detail for REST endpoint handlers - path, query, header, form. Join to service-endpoints.csv via endpointId._

| Column Name | Description |
| ----------- | ----------- |
| Endpoint ID | Join key matching the 'Entity ID' column of service-endpoints.csv. |
| Parameter name | The wire-level parameter name (from @PathVariable(name=...), @RequestParam(name=...), etc.). |
| Parameter kind | Where the parameter comes from: 'path', 'query', 'header', or 'form'. |
| Type FQN | Fully qualified name of the parameter's Java type. |
| Type resolution | How the parameter type was resolved: 'resolved' (FQN known), 'simple-name', or 'unresolved'. |
| Format | OpenAPI 3.0.3 format (int32, int64, date-time, uuid, etc.) or null. |
| Required | Whether the parameter is required. |
| Default value | Default value if declared (e.g. @RequestParam(defaultValue = &quot;0&quot;)), else null. |
| Java parameter name | The original Java parameter name (may differ from wire name). |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.DatabaseConnections" label="DatabaseConnections">

### Database connections
**org.openrewrite.prethink.table.DatabaseConnections**

_Database connections and data access patterns in the application._

| Column Name | Description |
| ----------- | ----------- |
| Entity ID | Unique identifier for this database entity (format: repository:\{className\} or entity:\{className\}). |
| Source path | The path to the source file containing the database access. |
| Entity/Table name | The name of the entity or table being accessed. |
| Entity class | The fully qualified name of the entity class (if applicable). |
| Repository class | The fully qualified name of the repository or DAO class (if applicable). |
| Connection type | The type of database connection (JPA, JDBC, Spring Data, MyBatis). |
| Database type | The type of database if detectable (PostgreSQL, MySQL, MongoDB, etc.). |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.ExternalServiceCalls" label="ExternalServiceCalls">

### External service calls
**org.openrewrite.prethink.table.ExternalServiceCalls**

_Outbound HTTP/REST calls to external services._

| Column Name | Description |
| ----------- | ----------- |
| Entity ID | Unique identifier for this external service entity (format: external:\{className\}). |
| Source path | The path to the source file containing the external service call. |
| Client class | The fully qualified name of the class making the external call. |
| Target service | The name or URL of the target external service. |
| Client type | The type of HTTP client used (RestTemplate, WebClient, Feign, etc.). |
| Protocol | The protocol used (HTTP, HTTPS). |
| Base URL | The base URL for the external service if configured. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.MessagingConnections" label="MessagingConnections">

### Messaging connections
**org.openrewrite.prethink.table.MessagingConnections**

_Message queue producers and consumers in the application._

| Column Name | Description |
| ----------- | ----------- |
| Entity ID | Unique identifier for this messaging entity (format: messaging:\{className\}#\{methodName\}:\{role\}). |
| Source path | The path to the source file containing the messaging component. |
| Class name | The fully qualified name of the class containing the listener/producer. |
| Method name | The name of the method that handles or sends messages. |
| Destination | The topic or queue name. |
| Role | Whether this is a producer, consumer, or both. |
| Messaging type | The messaging system (Kafka, RabbitMQ, JMS, etc.). |
| Method signature | The full method signature for linking to method descriptions. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.ServerConfiguration" label="ServerConfiguration">

### Server configuration
**org.openrewrite.prethink.table.ServerConfiguration**

_Server configuration properties extracted from application.properties/yml._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the configuration file. |
| Server port | The server port (default: 8080). |
| SSL enabled | Whether SSL/TLS is enabled. |
| Context path | The servlet context path. |
| Protocol | The protocol (HTTP or HTTPS) based on SSL configuration. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.DataAssets" label="DataAssets">

### Data assets
**org.openrewrite.prethink.table.DataAssets**

_Data entities, DTOs, and records that represent the application's data model._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the data asset. |
| Class name | The fully qualified name of the data asset class. |
| Simple name | The simple class name for display. |
| Asset type | The type of data asset (Entity, Record, DTO, Document, etc.). |
| Description | A description of the data asset based on its fields. |
| Fields | Comma-separated list of field names. |

</TabItem>

<TabItem value="io.moderne.prethink.table.DtoFieldSchemas" label="DtoFieldSchemas">

### DTO field schemas
**io.moderne.prethink.table.DtoFieldSchemas**

_Per-field schema detail for request/response DTOs: wire name, type, required flag, OpenAPI format, validation constraints, and any @Schema(example=) example values._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the DTO class. |
| Owner class FQN | Fully qualified name of the DTO class owning this field. Joins to data-assets.csv via 'Class name'. |
| Field name | The Java field name. |
| Serialized name | The JSON name on the wire, after applying @JsonProperty overrides and class-level @JsonNaming. |
| Serialized name source | How the serialized name was derived: 'java-name' (no override), 'json-property' (@JsonProperty value), 'jackson-strategy' (recognized @JsonNaming applied), or 'unknown-strategy' (@JsonNaming present but strategy class isn't a known one - the Java field name is used as a best-effort fallback). |
| Type FQN | Fully qualified name of the field's type (after unwrapping Optional/Collection wrappers). |
| Type resolution | How confidently the type was resolved: 'resolved' (FQN known), 'simple-name' (only the class simple name could be recovered, may not uniquely identify the DTO), or 'unresolved' (the type could not be determined at all). |
| Is collection | True when the declared type is a collection (List/Set/array/etc.) - the type FQN is then the element type. |
| Is map | True when the declared type is a Map - the type FQN is then the value type. |
| Is optional | True when the declared type is java.util.Optional. |
| Format | OpenAPI 3.0.3 format (int32, int64, date-time, uuid, email, binary, ...) or null. |
| Required | Whether the field is required. Set true for @NotNull/@NotBlank/@NotEmpty, primitives, and @JsonProperty(required=true). |
| Validations JSON | JSON map of validation constraint simple name to argument map. Example: \{&quot;NotNull&quot;:\{\},&quot;Size&quot;:\{&quot;min&quot;:1,&quot;max&quot;:100\}\}. |
| Example value | Example value from @Schema(example = &quot;...&quot;) if declared on the field, else null. |

</TabItem>

<TabItem value="io.moderne.prethink.table.FieldExamples" label="FieldExamples">

### Field example values
**io.moderne.prethink.table.FieldExamples**

_Raw (fixturePath, jsonPath, value, valueType) rows mined from JSON fixture files. Supply realistic example payloads for contract test generation. LLM correlates jsonPath to DTO fields at spec/contract generation time._

| Column Name | Description |
| ----------- | ----------- |
| Fixture path | Relative path to the fixture file. |
| JSON path | Dotted path to the leaf inside the fixture (e.g. 'user.address.street'). |
| Value | The literal value at that path, rendered as a string. |
| Value type | JSON type: 'string', 'number', 'boolean', 'null', 'array', or 'object'. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.DeploymentArtifacts" label="DeploymentArtifacts">

### Deployment artifacts
**org.openrewrite.prethink.table.DeploymentArtifacts**

_Deployment configuration files (Dockerfile, Kubernetes manifests, docker-compose)._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the deployment artifact file. |
| Artifact type | The type of deployment artifact (Dockerfile, Kubernetes, docker-compose). |
| Container image | The base container image if detected. |
| Exposed port | Port exposed by the container. |
| Description | Description of the deployment artifact. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.SecurityConfiguration" label="SecurityConfiguration">

### Security configuration
**org.openrewrite.prethink.table.SecurityConfiguration**

_Security configuration including authentication methods, CORS settings, and OAuth2 configuration._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the security configuration. |
| Configuration type | The type of security configuration (WebSecurity, OAuth2, CORS, etc.). |
| Auth method | Authentication method if detected (Basic, OAuth2, JWT, etc.). |
| Allowed origins | CORS allowed origins if configured. |
| Description | Description of the security configuration. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.ServiceComponents" label="ServiceComponents">

### Service components
**org.openrewrite.prethink.table.ServiceComponents**

_Service layer components (@Service, @Component, @Named) in the application._

| Column Name | Description |
| ----------- | ----------- |
| Entity ID | Unique identifier for this service component (format: service:\{className\}). |
| Source path | The path to the source file containing the service component. |
| Class name | The fully qualified name of the service component class. |
| Simple name | The simple class name without package. |
| Component type | The type of component annotation (Service, Component, Repository, Named). |
| Framework | The framework providing the annotation (Spring, Jakarta CDI, etc.). |
| Description | Description from class-level documentation if available. |

</TabItem>

<TabItem value="io.moderne.prethink.table.ScheduledTasks" label="ScheduledTasks">

### Scheduled tasks
**io.moderne.prethink.table.ScheduledTasks**

_Scheduled tasks, cron jobs, and background processing detected in the application._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the scheduled task. |
| Class name | The fully qualified name of the class containing the task. |
| Method name | The name of the scheduled method. |
| Method signature | The full method signature. |
| Framework | The framework providing scheduling support (Spring, Quartz, etc.). |
| Schedule type | The type of schedule: cron, fixedRate, fixedDelay, or trigger. |
| Expression | The scheduling expression (cron pattern, rate in ms, etc.). |
| Initial delay | Initial delay before first execution, if specified. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.CodingConventions" label="CodingConventions">

### Coding conventions
**org.openrewrite.prethink.table.CodingConventions**

_Coding conventions and patterns detected in the codebase._

| Column Name | Description |
| ----------- | ----------- |
| Convention type | The type of convention (naming, comments, imports, formatting). |
| Pattern | Description of the detected pattern. |
| Example | An example from the codebase. |
| Frequency | How often this pattern occurs. |
| Scope | Where this convention applies (project-wide, package, class). |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.ErrorHandlingPatterns" label="ErrorHandlingPatterns">

### Error handling patterns
**org.openrewrite.prethink.table.ErrorHandlingPatterns**

_Error and exception handling patterns detected in the codebase._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file. |
| Class name | The class containing the error handling. |
| Method name | The method containing the error handling. |
| Pattern type | The type of error handling pattern (try-catch, throws, global-handler, exception-handler-method). |
| Exception types | The exception types being handled or thrown. |
| Handling strategy | How the error is handled (log, rethrow, wrap, suppress, propagate, handle, ignore). |
| Logging framework | The logging framework used, if detected. |
| Log level | The log level used for error logging. |

</TabItem>

<TabItem value="io.moderne.prethink.table.ExceptionHandlers" label="ExceptionHandlers">

### Exception handlers
**io.moderne.prethink.table.ExceptionHandlers**

_Spring @ExceptionHandler and @ControllerAdvice bindings: exception type -&gt; HTTP status -&gt; response body FQN. Used to complete the 'responses' section of an OpenAPI spec with non-2xx branches._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the handler. |
| Scope class FQN | Fully qualified name of the @ControllerAdvice class OR the controller class hosting the local handler. |
| Scope kind | 'advice' when the handler lives on a @ControllerAdvice class, 'controller' for controller-local handlers. |
| Base packages | Comma-separated basePackages from @ControllerAdvice narrowing scope, else null. |
| Exception FQN | Fully qualified name of the exception type handled by this method. |
| Handler method | The handler method name. |
| Status | HTTP status code returned (e.g. 400, 500), or null when it could not be resolved. |
| Status source | Where the status came from: '@ResponseStatus', 'ResponseEntity.status', or 'unresolved'. |
| Response body FQN | Fully qualified name of the response body DTO for this handler, or null if no body. |

</TabItem>

<TabItem value="io.moderne.prethink.table.EndpointSecurity" label="EndpointSecurity">

### Endpoint security
**io.moderne.prethink.table.EndpointSecurity**

_Per-endpoint security requirements: roles, scopes, and the raw SpEL/permission expressions from @PreAuthorize/@Secured/@RolesAllowed at method or class level._

| Column Name | Description |
| ----------- | ----------- |
| Endpoint ID | Join key matching the 'Entity ID' column of service-endpoints.csv. |
| Scope kind | Where the security rule was declared: 'method' (on the handler) or 'class' (on the controller). |
| Scheme type | Detected scheme: 'role' (hasRole/RolesAllowed/Secured), 'authority/scope' (hasAuthority/hasAnyAuthority - typically OAuth2 scopes), 'permitted' (PermitAll), 'denied' (DenyAll), 'expression' (other SpEL). |
| Roles | Comma-separated role literals extracted from the expression, else null. |
| Scopes | Comma-separated scope/authority literals extracted from the expression, else null. |
| Expression | Raw SpEL or annotation argument value. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.DependencyUsage" label="DependencyUsage">

### Dependency usage
**org.openrewrite.prethink.table.DependencyUsage**

_External library dependencies and how they are used in the codebase._

| Column Name | Description |
| ----------- | ----------- |
| Library | The GAV coordinates of the library. |
| Top-level package | The top-level package of the library. |
| Usage pattern | How the library is typically used. |
| Common classes | Commonly used classes from this library. |
| Import count | Number of files that use this library. |
| Example usage | An example of how this library is used. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.CalmRelationships" label="CalmRelationships">

### CALM relationships
**org.openrewrite.prethink.table.CalmRelationships**

_Method call graph for discovering relationships between architectural entities. Records all method calls within the repository with entity markers for graph traversal._

| Column Name | Description |
| ----------- | ----------- |
| From class | Fully qualified name of the calling class (enables hash lookup). |
| From method signature | Full signature of the calling method. |
| To class | Fully qualified name of the called class (enables hash lookup). |
| To method signature | Full signature of the called method. |
| Caller entity ID | Entity ID if the calling class is a known entity, null otherwise. |
| Called entity ID | Entity ID if the called class is a known entity, null otherwise. |
| Source path | The source file where the method call was found. |

</TabItem>

<TabItem value="io.moderne.prethink.table.MethodQualityMetrics" label="MethodQualityMetrics">

### Method quality metrics
**io.moderne.prethink.table.MethodQualityMetrics**

_Per-method code quality metrics including cyclomatic complexity, cognitive complexity, nesting depth, Halstead measures, and ABC metric._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the method. |
| Class name | The fully qualified name of the containing class. |
| Method name | The simple name of the method. |
| Method signature | The full method signature including parameter types. |
| Cyclomatic complexity | Number of linearly independent paths through the method. 1-10 low, 11-20 moderate, 21-50 high, 50+ very high. |
| Cognitive complexity | Weighted complexity penalizing nesting depth and flow-breaking structures. |
| Max nesting depth | Maximum depth of nested control structures. |
| Line count | Number of lines in the method body. |
| Parameter count | Number of parameters the method accepts. |
| ABC score | ABC metric magnitude: sqrt(A^2 + B^2 + C^2) where A=assignments, B=branches (calls), C=conditions. |
| Assignments | Number of assignment operations (the A in ABC metric). |
| Branches | Number of method/function calls (the B in ABC metric). |
| Conditions | Number of boolean conditions (the C in ABC metric). |
| Halstead volume | Information content of the method: N * log2(n) where N=total operators+operands, n=distinct operators+operands. |
| Halstead difficulty | Error proneness: (n1/2) * (N2/n2) where n1=distinct operators, N2=total operands, n2=distinct operands. |
| Halstead estimated bugs | Estimated number of delivered bugs: E^(2/3) / 3000 where E = difficulty * volume. |

</TabItem>

<TabItem value="io.moderne.prethink.table.ClassQualityMetrics" label="ClassQualityMetrics">

### Class quality metrics
**io.moderne.prethink.table.ClassQualityMetrics**

_Per-class code quality metrics including WMC, LCOM4, TCC, CBO, and maintainability index._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the class. |
| Class name | The fully qualified name of the class. |
| Line count | Number of lines in the class. |
| Method count | Number of methods defined in the class. |
| Field count | Number of fields defined in the class. |
| WMC | Weighted Methods per Class: sum of cyclomatic complexities of all methods. |
| LCOM4 | Lack of Cohesion of Methods (Hitz-Montazeri): number of connected components in the method-field access graph. 1 = cohesive, &gt;1 = should be split. |
| TCC | Tight Class Cohesion: proportion of directly connected method pairs (sharing field access). 0.0-1.0, higher is more cohesive. |
| CBO | Coupling Between Objects: number of distinct classes this class is coupled to. |
| Maintainability index | Composite score (0-100) combining Halstead Volume, cyclomatic complexity, and LOC. Higher is more maintainable. |

</TabItem>

<TabItem value="io.moderne.prethink.table.PackageQualityMetrics" label="PackageQualityMetrics">

### Package quality metrics
**io.moderne.prethink.table.PackageQualityMetrics**

_Per-package architectural metrics including afferent/efferent coupling, instability, abstractness, distance from main sequence, and dependency cycle membership._

| Column Name | Description |
| ----------- | ----------- |
| Package name | The fully qualified package name. |
| Afferent coupling (Ca) | Number of external packages that depend on this package. |
| Efferent coupling (Ce) | Number of external packages this package depends on. |
| Instability | Ce / (Ce + Ca). 0.0 = maximally stable, 1.0 = maximally unstable. |
| Abstractness | Ratio of abstract classes + interfaces to total classes in the package. |
| Distance from main sequence | |A + I - 1|. 0.0 = ideal balance, high = Zone of Pain or Zone of Uselessness. |
| In cycle | Whether this package is part of a dependency cycle. |
| Cycle members | Comma-separated list of packages in the same dependency cycle, or null if not in a cycle. |

</TabItem>

<TabItem value="io.moderne.prethink.table.CodeSmells" label="CodeSmells">

### Code smells
**io.moderne.prethink.table.CodeSmells**

_Detected code smells including God Class, Feature Envy, and Data Class with severity ratings and the metric evidence that triggered detection._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the smell. |
| Class name | The fully qualified name of the class. |
| Method name | The method name, if the smell is method-level (e.g., Feature Envy). Null for class-level smells. |
| Smell type | The type of code smell: GOD_CLASS, FEATURE_ENVY, or DATA_CLASS. |
| Severity | Severity based on how far metrics exceed thresholds: LOW, MEDIUM, HIGH, or CRITICAL. |
| Evidence | The metric values that triggered detection, e.g., 'WMC=52, TCC=0.21, ATFD=8'. |

</TabItem>

<TabItem value="io.moderne.prethink.table.MethodDescriptions" label="MethodDescriptions">

### Method descriptions
**io.moderne.prethink.table.MethodDescriptions**

_AI-generated descriptions of methods in the codebase with inference time and token usage metrics._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the method. |
| Class name | The fully qualified name of the class containing the method. |
| Signature | The method signature including parameter types. |
| Checksum | SHA-256 checksum of the method source code for cache validation. |
| Description | AI-generated description of what the method does. |
| Return value description | AI-generated description of what the method returns. |
| Technique 1 | First programming technique or pattern used in the method. |
| Technique 2 | Second programming technique or pattern used in the method. |
| Technique 3 | Third programming technique or pattern used in the method. |
| Inference time (ms) | Time taken for the LLM to generate the description, in milliseconds. |
| Input tokens | Number of tokens in the input prompt sent to the LLM. |
| Output tokens | Number of tokens in the response generated by the LLM. |

</TabItem>

<TabItem value="io.moderne.prethink.table.TestMapping" label="TestMapping">

### Test mapping
**io.moderne.prethink.table.TestMapping**

_Maps test methods to implementation methods with optional AI-generated summaries and inference metrics._

| Column Name | Description |
| ----------- | ----------- |
| Test source path | The path to the source file containing the test. |
| Test class | The fully qualified name of the test class. |
| Test method | The signature of the test method. |
| Implementation source path | The path to the source file containing the implementation. |
| Implementation class | The fully qualified name of the implementation class. |
| Implementation method | The signature of the implementation method being tested. |
| Test summary | AI-generated summary of what the test is verifying. |
| Test checksum | SHA-256 checksum of the test method source code for cache validation. |
| Inference time (ms) | Time taken for the LLM to generate the summary, in milliseconds. |
| Input tokens | Number of tokens in the input prompt sent to the LLM. |
| Output tokens | Number of tokens in the response generated by the LLM. |

</TabItem>

<TabItem value="io.moderne.prethink.table.TestGaps" label="TestGaps">

### Test gaps
**io.moderne.prethink.table.TestGaps**

_Public non-trivial methods that have no test coverage, ranked by risk score._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the untested method. |
| Class name | The fully qualified name of the class. |
| Method name | The simple name of the untested method. |
| Method signature | The full method signature. |
| Cyclomatic complexity | The cyclomatic complexity of the untested method. |
| Risk score | Risk score combining complexity and architectural centrality (call count). Higher = more critical gap. |
| Gap reason | Why this gap matters, e.g., 'complexity 15, called by 8 methods, no test coverage'. |
| Suggested test class | Suggested fully qualified name for the test class. |

</TabItem>

<TabItem value="io.moderne.prethink.table.TestQualityIssues" label="TestQualityIssues">

### Test quality issues
**io.moderne.prethink.table.TestQualityIssues**

_Issues found in test code that may cause flakiness, silent failures, or maintenance burden. Each row includes a rich evidence message with what was found, why it matters, and how to fix it._

| Column Name | Description |
| ----------- | ----------- |
| Source path | Path to the test source file. |
| Class name | Fully qualified class name of the test class. |
| Method name | Test method name, if the issue is method-level. Null for class-level issues. |
| Issue type | Category of the issue: static wait, shared mutable state, unmocked http, unmocked db, unmocked network, java assert in test, swallowed exception, missing assertion, hardcoded date, timing assertion, hardcoded port/path, missing annotation, skipped without reason, broad matcher, ignored error, deprecated test api, magic number, poor test name, prototype mutation, empty catch. |
| Severity | Issue severity: high, medium, or low. |
| Language | Source language: java, javascript, or python. |
| Evidence | What was found, why it matters, and how to fix it. |

</TabItem>

<TabItem value="org.openrewrite.java.dependencies.table.DependencyListReport" label="DependencyListReport">

### Dependency report
**org.openrewrite.java.dependencies.table.DependencyListReport**

_Lists all Gradle and Maven dependencies_

| Column Name | Description |
| ----------- | ----------- |
| Build tool | The build tool used to manage dependencies (Gradle or Maven). |
| Group id | The Group ID of the Gradle project or Maven module requesting the dependency. |
| Artifact id | The Artifact ID of the Gradle project or Maven module requesting the dependency. |
| Version | The version of Gradle project or Maven module requesting the dependency. |
| Dependency group id | The Group ID of the dependency. |
| Dependency artifact id | The Artifact ID of the dependency. |
| Dependency version | The version of the dependency. |
| Direct Dependency | When `true` the project directly depends on the dependency. When `false` the project depends on the dependency transitively through at least one direct dependency. |
| Resolution failure | The reason why the dependency could not be resolved. Blank when resolution was not attempted. |

</TabItem>

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

<TabItem value="org.openrewrite.javascript.table.NodeDependenciesInUse" label="NodeDependenciesInUse">

### Node.js dependencies in use
**org.openrewrite.javascript.table.NodeDependenciesInUse**

_Direct and transitive dependencies in use in Node.js projects._

| Column Name | Description |
| ----------- | ----------- |
| Project name | The name of the project that contains the dependency (from package.json). |
| Project path | The path to the project. |
| Package name | The name of the npm package. |
| Version | The resolved version of the package. |
| Version constraint | The version constraint as declared in package.json. |
| Scope | Dependency scope: dependencies, devDependencies, peerDependencies, optionalDependencies, or bundledDependencies. |
| Direct | Whether this is a direct dependency (true) or transitive dependency (false). |
| Count | How many times this dependency appears in the dependency tree. |
| License | The SPDX license identifier of the package, if available. |

</TabItem>

<TabItem value="org.openrewrite.prethink.table.ContextRegistry" label="ContextRegistry">

### Context registry
**org.openrewrite.prethink.table.ContextRegistry**

_Registry of available context files for coding agents._

| Column Name | Description |
| ----------- | ----------- |
| Display name | The display name of the context. |
| Short description | A brief description of what context this provides. |
| Context file | Path to the markdown file describing this context. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
