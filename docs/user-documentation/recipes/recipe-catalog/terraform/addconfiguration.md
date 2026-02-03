---
sidebar_label: "Add Terraform configuration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add Terraform configuration

**org.openrewrite.terraform.AddConfiguration**

_If the configuration has a different value, leave it alone. If it is missing, add it._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | resourceName | A Terraform resource name, without the quotes. | `aws_ebs_volume` |
| `String` | content | Terraform to insert if an attribute with the same name or block with the same 'type' is not found. | `encrypted = true` |


## Used by

This recipe is used as part of the following composite recipes:

* [Disable Instance Metadata Service version 1](/user-documentation/recipes/recipe-catalog/terraform/aws/disableinstancemetadataservicev1.md)
* [Disable Kubernetes dashboard](/user-documentation/recipes/recipe-catalog/terraform/azure/disablekubernetesdashboard.md)
* [Enable API gateway caching](/user-documentation/recipes/recipe-catalog/terraform/aws/enableapigatewaycaching.md)
* [Enable Azure Storage Account Trusted Microsoft Services access](/user-documentation/recipes/recipe-catalog/terraform/azure/enableazurestorageaccounttrustedmicrosoftservicesaccess.md)
* [Enable Azure Storage secure transfer required](/user-documentation/recipes/recipe-catalog/terraform/azure/enableazurestoragesecuretransferrequired.md)
* [Enable VPC Flow Logs for subnetworks](/user-documentation/recipes/recipe-catalog/terraform/gcp/enablevpcflowlogsforsubnetworks.md)
* [Enable VPC flow logs and intranode visibility](/user-documentation/recipes/recipe-catalog/terraform/gcp/enablevpcflowlogsandintranodevisibility.md)
* [Enable `PodSecurityPolicy` controller on Google Kubernetes Engine (GKE) clusters](/user-documentation/recipes/recipe-catalog/terraform/gcp/enablepodsecuritypolicycontrollerongkeclusters.md)
* [Enable geo-redundant backups on PostgreSQL server](/user-documentation/recipes/recipe-catalog/terraform/azure/enablegeoredundantbackupsonpostgresqlserver.md)
* [Enable point-in-time recovery for DynamoDB](/user-documentation/recipes/recipe-catalog/terraform/aws/enabledynamodbpitr.md)
* [Encrypt Aurora clusters](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptauroraclusters.md)
* [Encrypt Azure VM data disk with ADE/CMK](/user-documentation/recipes/recipe-catalog/terraform/azure/encryptazurevmdatadiskwithadecmk.md)
* [Encrypt CodeBuild projects](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptcodebuild.md)
* [Encrypt DAX storage at rest](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptdaxstorage.md)
* [Encrypt DocumentDB storage](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptdocumentdb.md)
* [Encrypt EBS snapshots](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptebssnapshots.md)
* [Encrypt EBS volume launch configurations](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptebsvolumelaunchconfiguration.md)
* [Encrypt EBS volumes](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptebsvolumes.md)
* [Encrypt EFS Volumes in ECS Task Definitions in transit](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptefsvolumesinecstaskdefinitionsintransit.md)
* [Encrypt ElastiCache Redis at rest](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptelasticacheredisatrest.md)
* [Encrypt ElastiCache Redis in transit](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptelasticacheredisintransit.md)
* [Encrypt Neptune storage](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptneptunestorage.md)
* [Encrypt RDS clusters](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptrdsclusters.md)
* [Encrypt Redshift storage at rest](/user-documentation/recipes/recipe-catalog/terraform/aws/encryptredshift.md)
* [Ensure AKS policies add-on](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureakspoliciesaddon.md)
* [Ensure AKV secrets have an expiration date set](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureakvsecretshaveanexpirationdateset.md)
* [Ensure AWS CMK rotation is enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawscmkrotationisenabled.md)
* [Ensure AWS EFS with encryption for data at rest is enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawsefswithencryptionfordataatrestisenabled.md)
* [Ensure AWS EKS cluster endpoint access is publicly disabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawseksclusterendpointaccessispubliclydisabled.md)
* [Ensure AWS Elasticsearch domain encryption for data at rest is enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawselasticsearchdomainencryptionfordataatrestisenabled.md)
* [Ensure AWS Elasticsearch domains have `EnforceHTTPS` enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawselasticsearchdomainshaveenforcehttpsenabled.md)
* [Ensure AWS Elasticsearch has node-to-node encryption enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawselasticsearchhasnodetonodeencryptionenabled.md)
* [Ensure AWS IAM password policy has a minimum of 14 characters](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawsiampasswordpolicyhasaminimumof14characters.md)
* [Ensure AWS Lambda function is configured for function-level concurrent execution limit](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawslambdafunctionisconfiguredforfunctionlevelconcurrentexecutionlimit.md)
* [Ensure AWS Lambda functions have tracing enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawslambdafunctionshavetracingenabled.md)
* [Ensure AWS RDS database instance is not publicly accessible](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawsrdsdatabaseinstanceisnotpubliclyaccessible.md)
* [Ensure AWS S3 object versioning is enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawss3objectversioningisenabled.md)
* [Ensure Amazon EKS control plane logging enabled for all log types](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureamazonekscontrolplaneloggingenabledforalllogtypes.md)
* [Ensure Azure App Service Web app redirects HTTP to HTTPS](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazureappservicewebappredirectshttptohttps.md)
* [Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazurenetworkwatchernsgflowlogsretentionisgreaterthan90days.md)
* [Ensure Azure PostgreSQL database server with SSL connection is enabled](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazurepostgresqldatabaseserverwithsslconnectionisenabled.md)
* [Ensure Azure SQL Server threat detection alerts are enabled for all threat types](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazuresqlserverthreatdetectionalertsareenabledforallthreattypes.md)
* [Ensure Azure SQL server audit log retention is greater than 90 days](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazuresqlserverauditlogretentionisgreaterthan90days.md)
* [Ensure Azure SQL server send alerts to field value is set](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazuresqlserversendalertstofieldvalueisset.md)
* [Ensure Azure application gateway has WAF enabled](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazureapplicationgatewayhaswafenabled.md)
* [Ensure Azure key vault is recoverable](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazurekeyvaultisrecoverable.md)
* [Ensure CloudTrail log file validation is enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensurecloudtraillogfilevalidationisenabled.md)
* [Ensure EC2 is EBS optimized](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureec2isebsoptimized.md)
* [Ensure ECR repositories are encrypted](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureecrrepositoriesareencrypted.md)
* [Ensure FTP Deployments are disabled](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureftpdeploymentsaredisabled.md)
* [Ensure GCP Kubernetes cluster node auto-repair configuration is enabled](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpkubernetesclusternodeautorepairconfigurationisenabled.md)
* [Ensure GCP Kubernetes engine clusters have legacy compute engine metadata endpoints disabled](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpkubernetesengineclustershavelegacycomputeenginemetadataendpointsdisabled.md)
* [Ensure GCP VM instances have block project-wide SSH keys feature enabled](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpvminstanceshaveblockprojectwidesshkeysfeatureenabled.md)
* [Ensure GCP cloud storage bucket with uniform bucket-level access are enabled](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpcloudstoragebucketwithuniformbucketlevelaccessareenabled.md)
* [Ensure IAM password policy expires passwords within 90 days or less](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicyexpirespasswordswithin90daysorless.md)
* [Ensure IAM password policy prevents password reuse](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicypreventspasswordreuse.md)
* [Ensure IAM password policy requires at least one lowercase letter](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicyrequiresatleastonelowercaseletter.md)
* [Ensure IAM password policy requires at least one number](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicyrequiresatleastonenumber.md)
* [Ensure IAM password policy requires at least one symbol](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicyrequiresatleastonesymbol.md)
* [Ensure IAM password policy requires at least one uppercase letter](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicyrequiresatleastoneuppercaseletter.md)
* [Ensure IP forwarding on instances is disabled](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensureipforwardingoninstancesisdisabled.md)
* [Ensure Kinesis Stream is securely encrypted](/user-documentation/recipes/recipe-catalog/terraform/aws/ensurekinesisstreamissecurelyencrypted.md)
* [Ensure MSSQL servers have email service and co-administrators enabled](/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremssqlservershaveemailserviceandcoadministratorsenabled.md)
* [Ensure MySQL is using the latest version of TLS encryption](/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremysqlisusingthelatestversionoftlsencryption.md)
* [Ensure MySQL server databases have Enforce SSL connection enabled](/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremysqlserverdatabaseshaveenforcesslconnectionenabled.md)
* [Ensure MySQL server disables public network access](/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremysqlserverdisablespublicnetworkaccess.md)
* [Ensure MySQL server enables Threat Detection policy](/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremysqlserverenablesthreatdetectionpolicy.md)
* [Ensure MySQL server enables geo-redundant backups](/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremysqlserverenablesgeoredundantbackups.md)
* [Ensure PostgreSQL server disables public network access](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurepostgresqlserverdisablespublicnetworkaccess.md)
* [Ensure PostgreSQL server enables Threat Detection policy](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurepostgresqlserverenablesthreatdetectionpolicy.md)
* [Ensure PostgreSQL server enables infrastructure encryption](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurepostgresqlserverenablesinfrastructureencryption.md)
* [Ensure RDS database has IAM authentication enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensurerdsdatabasehasiamauthenticationenabled.md)
* [Ensure RDS instances have Multi-AZ enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensurerdsinstanceshavemultiazenabled.md)
* [Ensure Send email notification for high severity alerts is enabled](/user-documentation/recipes/recipe-catalog/terraform/azure/ensuresendemailnotificationforhighseverityalertsisenabled.md)
* [Ensure Send email notification for high severity alerts to admins is enabled](/user-documentation/recipes/recipe-catalog/terraform/azure/ensuresendemailnotificationforhighseverityalertstoadminsisenabled.md)
* [Ensure VPC subnets do not assign public IP by default](/user-documentation/recipes/recipe-catalog/terraform/aws/ensurevpcsubnetsdonotassignpublicipbydefault.md)
* [Ensure Web App has incoming client certificates enabled](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurewebapphasincomingclientcertificatesenabled.md)
* [Ensure Web App uses the latest version of HTTP](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurewebappusesthelatestversionofhttp.md)
* [Ensure Web App uses the latest version of TLS encryption](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurewebappusesthelatestversionoftlsencryption.md)
* [Ensure a security contact phone number is present](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureasecuritycontactphonenumberispresent.md)
* [Ensure activity log retention is set to 365 days or greater](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureactivitylogretentionissetto365daysorgreater.md)
* [Ensure all keys have an expiration date](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureallkeyshaveanexpirationdate.md)
* [Ensure app service enables HTTP logging](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureappserviceenableshttplogging.md)
* [Ensure app service enables detailed error messages](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureappserviceenablesdetailederrormessages.md)
* [Ensure app service enables failed request tracing](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureappserviceenablesfailedrequesttracing.md)
* [Ensure app services use Azure files](/user-documentation/recipes/recipe-catalog/terraform/azure/ensureappservicesuseazurefiles.md)
* [Ensure binary authorization is used](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensurebinaryauthorizationisused.md)
* [Ensure compute instances launch with shielded VM enabled](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensurecomputeinstanceslaunchwithshieldedvmenabled.md)
* [Ensure data stored in an S3 bucket is securely encrypted at rest](/user-documentation/recipes/recipe-catalog/terraform/aws/ensuredatastoredinans3bucketissecurelyencryptedatrest.md)
* [Ensure detailed monitoring for EC2 instances is enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensuredetailedmonitoringforec2instancesisenabled.md)
* [Ensure enhanced monitoring for Amazon RDS instances is enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensureenhancedmonitoringforamazonrdsinstancesisenabled.md)
* [Ensure key vault allows firewall rules settings](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurekeyvaultallowsfirewallrulessettings.md)
* [Ensure key vault enables purge protection](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurekeyvaultenablespurgeprotection.md)
* [Ensure key vault key is backed by HSM](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurekeyvaultkeyisbackedbyhsm.md)
* [Ensure key vault secrets have `content_type` set](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurekeyvaultsecretshavecontenttypeset.md)
* [Ensure log profile is configured to capture all activities](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurelogprofileisconfiguredtocaptureallactivities.md)
* [Ensure managed identity provider is enabled for app services](/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremanagedidentityproviderisenabledforappservices.md)
* [Ensure private cluster is enabled when creating Kubernetes clusters](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensureprivateclusterisenabledwhencreatingkubernetesclusters.md)
* [Ensure public network access enabled is set to False for mySQL servers](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurepublicnetworkaccessenabledissettofalseformysqlservers.md)
* [Ensure respective logs of Amazon RDS are enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensurerespectivelogsofamazonrdsareenabled.md)
* [Ensure secure boot for shielded GKE nodes is enabled](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuresecurebootforshieldedgkenodesisenabled.md)
* [Ensure shielded GKE nodes are enabled](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensureshieldedgkenodesareenabled.md)
* [Ensure standard pricing tier is selected](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurestandardpricingtierisselected.md)
* [Ensure storage account uses latest TLS version](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurestorageaccountuseslatesttlsversion.md)
* [Ensure the GKE metadata server is enabled](/user-documentation/recipes/recipe-catalog/terraform/gcp/ensurethegkemetadataserverisenabled.md)
* [Ensure the S3 bucket has access logging enabled](/user-documentation/recipes/recipe-catalog/terraform/aws/ensurethes3buckethasaccessloggingenabled.md)
* [Ensure the storage container storing activity logs is not publicly accessible](/user-documentation/recipes/recipe-catalog/terraform/azure/ensurethestoragecontainerstoringactivitylogsisnotpubliclyaccessible.md)
* [Make ECR tags immutable](/user-documentation/recipes/recipe-catalog/terraform/aws/immutableecrtags.md)
* [Scan images pushed to ECR](/user-documentation/recipes/recipe-catalog/terraform/aws/enableecrscanonpush.md)
* [Set Azure Storage Account default network access to deny](/user-documentation/recipes/recipe-catalog/terraform/azure/setazurestorageaccountdefaultnetworkaccesstodeny.md)
* [Use HTTPS for Cloudfront distribution](/user-documentation/recipes/recipe-catalog/terraform/aws/usehttpsforcloudfrontdistribution.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|resourceName|`aws_ebs_volume`|
|content|`encrypted = true`|


<Tabs groupId="beforeAfter">
<TabItem value="hcl" label="hcl">


###### Before
```hcl
resource "aws_ebs_volume" {
  size = 1
}

resource "aws_ebs_volume" {
  # leave this one alone
  encrypted = false
}
```

###### After
```hcl
resource "aws_ebs_volume" {
  size      = 1
  encrypted = true
}

resource "aws_ebs_volume" {
  # leave this one alone
  encrypted = false
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,2 @@
resource "aws_ebs_volume" {
- size = 1
+ size      = 1
+ encrypted = true
}
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddConfigurationExample
displayName: Add Terraform configuration example
recipeList:
  - org.openrewrite.terraform.AddConfiguration: 
      resourceName: aws_ebs_volume
      content: encrypted = true
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe AddConfiguration --recipe-option "resourceName=aws_ebs_volume" --recipe-option "content=encrypted = true"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-terraform:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TERRAFORM}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.terraform.AddConfiguration" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
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
