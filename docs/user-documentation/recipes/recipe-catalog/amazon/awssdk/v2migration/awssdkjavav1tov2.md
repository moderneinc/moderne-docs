---
title: "Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2"
sidebar_label: "Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/amazon/awssdk/v2migration/awssdkjavav1tov2" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2"}
  description={"This recipe will apply changes required for migrating from the AWS SDK for Java v1 to the AWS SDK for Java v2."}
  fqName={"software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["sdk","aws"]}
  license={"Apache License Version 2.0"}
  fqName={"software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/awssdkjavav1tov2.md"}
>

<RecipeHeader.Title>Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2</RecipeHeader.Title>

<RecipeHeader.Description>This recipe will apply changes required for migrating from the AWS SDK for Java v1 to the AWS SDK for Java v2.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Add AWS SDK for Java v2 S3 Transfer Manager dependency if needed","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/addtransfermanagerdependency/"},{"name":"Add AWS SDK for Java v2 S3 Event Notification dependency if needed","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/adds3eventnotificationdependency/"},{"name":"Change v1 Maven/Gradle dependencies to v2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/upgradesdkdependencies/"},{"name":"Add imports and comments to unsupported S3 transforms.","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3addimportsandcomments/"},{"name":"S3 Event Notification method to v2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3eventnotificationmethodtov2/"},{"name":"Change S3 types to v2.","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3typestov2/"},{"name":"V1 S3Object to V2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3streamingresponsetov2/"},{"name":"V1 S3 streaming requests to V2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3streamingrequesttov2/"},{"name":"V1 S3 non-streaming requests to V2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3nonstreamingrequesttov2/"},{"name":"Change S3 methods to v2.","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3methodstov2/"},{"name":"Change S3EventNotification methods to v2.","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3eventnotificationmethodstov2/"},{"name":"S3 POJOs to V2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3pojotov2/"},{"name":"Change S3 method constructors to fluent builder calls","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3methodsconstructortofluent/"},{"name":"Convert v1 AmazonS3URI to v2 S3Uri","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3uritov2/"},{"name":"Change v1 enum getters to v2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/enumgetterstov2/"},{"name":"Change SDK TransferManager types from v1 to v2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/changetransfermanagertypes/"},{"name":"Change SDK S3EventNotification types from v1 to v2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/changes3eventnotificationtypes/"},{"name":"Change AWS SDK for Java v1 types to v2 equivalents","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/changesdktype/"},{"name":"SDK Exceptions Methods to V2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/sdkexceptiontov2/"},{"name":"Change SDK core types from v1 to v2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/changesdkcoretypes/"},{"name":"V1 client builder variations to builder()","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/v1buildervariationstov2builder/"},{"name":"Change new objects creation to Builder pattern","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/newclasstobuilderpattern/"},{"name":"Transform 'new' expressions to static factory methods","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/newclasstostaticfactory/"},{"name":"V1 Getter to V2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/v1gettertov2/"},{"name":"Move HTTP settings from the ClientOverrideConfiguration to ApacheHttpClient for sync and NettyNioAsyncHttpClient for async","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/httpsettingstohttpclient/"},{"name":"Wrap the region string provided on the SDK client builder with Region.of","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/wrapsdkclientbuilderregionstr/"},{"name":"V1 Enum Casing to V2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/enumcasingtov2/"},{"name":"Convert SdkBytes to ByteBuffer","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/sdkbytestobytebuffer/"},{"name":"Convert ByteBuffer to SdkBytes","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/bytebuffertosdkbytes/"},{"name":"Convert Date to Instant","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/datetoinstant/"},{"name":"V1 S3 non-streaming requests to V2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3nonstreamingrequesttov2complex/"},{"name":"V1 S3 PutObjectRequest, AmazonS3.putObject(PutObjectRequest), and TransferManager.upload(PutObjectRequest) to V2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3putobjectrequesttov2/"},{"name":"Convert V1 setters to V2 toBuilder setters","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/setterstobuilderv2/"},{"name":"Add imports and comments to unsupported S3 transfer manager transforms.","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/s3tmaddcomments/"},{"name":"Change TransferManager simple methods to v2.","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/changetransfermanagersimplemethods/"},{"name":"Transfer Manager Methods to V2","href":"/user-documentation/recipes/recipe-catalog/amazon/awssdk/v2migration/transfermanagermethodstov2/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2","displayName":"Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

