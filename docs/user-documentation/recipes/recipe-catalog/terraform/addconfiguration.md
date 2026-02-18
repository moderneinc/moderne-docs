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

* [Disable Instance Metadata Service version 1](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/disableinstancemetadataservicev1)
* [Disable Kubernetes dashboard](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/disablekubernetesdashboard)
* [Enable API gateway caching](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/enableapigatewaycaching)
* [Enable Azure Storage Account Trusted Microsoft Services access](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/enableazurestorageaccounttrustedmicrosoftservicesaccess)
* [Enable Azure Storage secure transfer required](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/enableazurestoragesecuretransferrequired)
* [Enable VPC Flow Logs for subnetworks](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/enablevpcflowlogsforsubnetworks)
* [Enable VPC flow logs and intranode visibility](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/enablevpcflowlogsandintranodevisibility)
* [Enable `PodSecurityPolicy` controller on Google Kubernetes Engine (GKE) clusters](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/enablepodsecuritypolicycontrollerongkeclusters)
* [Enable geo-redundant backups on PostgreSQL server](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/enablegeoredundantbackupsonpostgresqlserver)
* [Enable point-in-time recovery for DynamoDB](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/enabledynamodbpitr)
* [Encrypt Aurora clusters](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptauroraclusters)
* [Encrypt Azure VM data disk with ADE/CMK](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/encryptazurevmdatadiskwithadecmk)
* [Encrypt CodeBuild projects](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptcodebuild)
* [Encrypt DAX storage at rest](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptdaxstorage)
* [Encrypt DocumentDB storage](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptdocumentdb)
* [Encrypt EBS snapshots](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptebssnapshots)
* [Encrypt EBS volume launch configurations](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptebsvolumelaunchconfiguration)
* [Encrypt EBS volumes](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptebsvolumes)
* [Encrypt EFS Volumes in ECS Task Definitions in transit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptefsvolumesinecstaskdefinitionsintransit)
* [Encrypt ElastiCache Redis at rest](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptelasticacheredisatrest)
* [Encrypt ElastiCache Redis in transit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptelasticacheredisintransit)
* [Encrypt Neptune storage](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptneptunestorage)
* [Encrypt RDS clusters](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptrdsclusters)
* [Encrypt Redshift storage at rest](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/encryptredshift)
* [Ensure AKS policies add-on](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureakspoliciesaddon)
* [Ensure AKV secrets have an expiration date set](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureakvsecretshaveanexpirationdateset)
* [Ensure AWS CMK rotation is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawscmkrotationisenabled)
* [Ensure AWS EFS with encryption for data at rest is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawsefswithencryptionfordataatrestisenabled)
* [Ensure AWS EKS cluster endpoint access is publicly disabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawseksclusterendpointaccessispubliclydisabled)
* [Ensure AWS Elasticsearch domain encryption for data at rest is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawselasticsearchdomainencryptionfordataatrestisenabled)
* [Ensure AWS Elasticsearch domains have `EnforceHTTPS` enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawselasticsearchdomainshaveenforcehttpsenabled)
* [Ensure AWS Elasticsearch has node-to-node encryption enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawselasticsearchhasnodetonodeencryptionenabled)
* [Ensure AWS IAM password policy has a minimum of 14 characters](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawsiampasswordpolicyhasaminimumof14characters)
* [Ensure AWS Lambda function is configured for function-level concurrent execution limit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawslambdafunctionisconfiguredforfunctionlevelconcurrentexecutionlimit)
* [Ensure AWS Lambda functions have tracing enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawslambdafunctionshavetracingenabled)
* [Ensure AWS RDS database instance is not publicly accessible](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawsrdsdatabaseinstanceisnotpubliclyaccessible)
* [Ensure AWS S3 object versioning is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureawss3objectversioningisenabled)
* [Ensure Amazon EKS control plane logging enabled for all log types](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureamazonekscontrolplaneloggingenabledforalllogtypes)
* [Ensure Azure App Service Web app redirects HTTP to HTTPS](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazureappservicewebappredirectshttptohttps)
* [Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazurenetworkwatchernsgflowlogsretentionisgreaterthan90days)
* [Ensure Azure PostgreSQL database server with SSL connection is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazurepostgresqldatabaseserverwithsslconnectionisenabled)
* [Ensure Azure SQL Server threat detection alerts are enabled for all threat types](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazuresqlserverthreatdetectionalertsareenabledforallthreattypes)
* [Ensure Azure SQL server audit log retention is greater than 90 days](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazuresqlserverauditlogretentionisgreaterthan90days)
* [Ensure Azure SQL server send alerts to field value is set](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazuresqlserversendalertstofieldvalueisset)
* [Ensure Azure application gateway has WAF enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazureapplicationgatewayhaswafenabled)
* [Ensure Azure key vault is recoverable](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureazurekeyvaultisrecoverable)
* [Ensure CloudTrail log file validation is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensurecloudtraillogfilevalidationisenabled)
* [Ensure EC2 is EBS optimized](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureec2isebsoptimized)
* [Ensure ECR repositories are encrypted](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureecrrepositoriesareencrypted)
* [Ensure FTP Deployments are disabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureftpdeploymentsaredisabled)
* [Ensure GCP Kubernetes cluster node auto-repair configuration is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpkubernetesclusternodeautorepairconfigurationisenabled)
* [Ensure GCP Kubernetes engine clusters have legacy compute engine metadata endpoints disabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpkubernetesengineclustershavelegacycomputeenginemetadataendpointsdisabled)
* [Ensure GCP VM instances have block project-wide SSH keys feature enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpvminstanceshaveblockprojectwidesshkeysfeatureenabled)
* [Ensure GCP cloud storage bucket with uniform bucket-level access are enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuregcpcloudstoragebucketwithuniformbucketlevelaccessareenabled)
* [Ensure IAM password policy expires passwords within 90 days or less](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicyexpirespasswordswithin90daysorless)
* [Ensure IAM password policy prevents password reuse](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicypreventspasswordreuse)
* [Ensure IAM password policy requires at least one lowercase letter](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicyrequiresatleastonelowercaseletter)
* [Ensure IAM password policy requires at least one number](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicyrequiresatleastonenumber)
* [Ensure IAM password policy requires at least one symbol](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicyrequiresatleastonesymbol)
* [Ensure IAM password policy requires at least one uppercase letter](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureiampasswordpolicyrequiresatleastoneuppercaseletter)
* [Ensure IP forwarding on instances is disabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensureipforwardingoninstancesisdisabled)
* [Ensure Kinesis Stream is securely encrypted](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensurekinesisstreamissecurelyencrypted)
* [Ensure MSSQL servers have email service and co-administrators enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremssqlservershaveemailserviceandcoadministratorsenabled)
* [Ensure MySQL is using the latest version of TLS encryption](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremysqlisusingthelatestversionoftlsencryption)
* [Ensure MySQL server databases have Enforce SSL connection enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremysqlserverdatabaseshaveenforcesslconnectionenabled)
* [Ensure MySQL server disables public network access](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremysqlserverdisablespublicnetworkaccess)
* [Ensure MySQL server enables Threat Detection policy](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremysqlserverenablesthreatdetectionpolicy)
* [Ensure MySQL server enables geo-redundant backups](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremysqlserverenablesgeoredundantbackups)
* [Ensure PostgreSQL server disables public network access](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurepostgresqlserverdisablespublicnetworkaccess)
* [Ensure PostgreSQL server enables Threat Detection policy](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurepostgresqlserverenablesthreatdetectionpolicy)
* [Ensure PostgreSQL server enables infrastructure encryption](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurepostgresqlserverenablesinfrastructureencryption)
* [Ensure RDS database has IAM authentication enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensurerdsdatabasehasiamauthenticationenabled)
* [Ensure RDS instances have Multi-AZ enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensurerdsinstanceshavemultiazenabled)
* [Ensure Send email notification for high severity alerts is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensuresendemailnotificationforhighseverityalertsisenabled)
* [Ensure Send email notification for high severity alerts to admins is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensuresendemailnotificationforhighseverityalertstoadminsisenabled)
* [Ensure VPC subnets do not assign public IP by default](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensurevpcsubnetsdonotassignpublicipbydefault)
* [Ensure Web App has incoming client certificates enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurewebapphasincomingclientcertificatesenabled)
* [Ensure Web App uses the latest version of HTTP](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurewebappusesthelatestversionofhttp)
* [Ensure Web App uses the latest version of TLS encryption](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurewebappusesthelatestversionoftlsencryption)
* [Ensure a security contact phone number is present](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureasecuritycontactphonenumberispresent)
* [Ensure activity log retention is set to 365 days or greater](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureactivitylogretentionissetto365daysorgreater)
* [Ensure all keys have an expiration date](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureallkeyshaveanexpirationdate)
* [Ensure app service enables HTTP logging](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureappserviceenableshttplogging)
* [Ensure app service enables detailed error messages](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureappserviceenablesdetailederrormessages)
* [Ensure app service enables failed request tracing](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureappserviceenablesfailedrequesttracing)
* [Ensure app services use Azure files](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensureappservicesuseazurefiles)
* [Ensure binary authorization is used](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensurebinaryauthorizationisused)
* [Ensure compute instances launch with shielded VM enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensurecomputeinstanceslaunchwithshieldedvmenabled)
* [Ensure data stored in an S3 bucket is securely encrypted at rest](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensuredatastoredinans3bucketissecurelyencryptedatrest)
* [Ensure detailed monitoring for EC2 instances is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensuredetailedmonitoringforec2instancesisenabled)
* [Ensure enhanced monitoring for Amazon RDS instances is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensureenhancedmonitoringforamazonrdsinstancesisenabled)
* [Ensure key vault allows firewall rules settings](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurekeyvaultallowsfirewallrulessettings)
* [Ensure key vault enables purge protection](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurekeyvaultenablespurgeprotection)
* [Ensure key vault key is backed by HSM](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurekeyvaultkeyisbackedbyhsm)
* [Ensure key vault secrets have `content_type` set](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurekeyvaultsecretshavecontenttypeset)
* [Ensure log profile is configured to capture all activities](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurelogprofileisconfiguredtocaptureallactivities)
* [Ensure managed identity provider is enabled for app services](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensuremanagedidentityproviderisenabledforappservices)
* [Ensure private cluster is enabled when creating Kubernetes clusters](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensureprivateclusterisenabledwhencreatingkubernetesclusters)
* [Ensure public network access enabled is set to False for mySQL servers](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurepublicnetworkaccessenabledissettofalseformysqlservers)
* [Ensure respective logs of Amazon RDS are enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensurerespectivelogsofamazonrdsareenabled)
* [Ensure secure boot for shielded GKE nodes is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensuresecurebootforshieldedgkenodesisenabled)
* [Ensure shielded GKE nodes are enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensureshieldedgkenodesareenabled)
* [Ensure standard pricing tier is selected](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurestandardpricingtierisselected)
* [Ensure storage account uses latest TLS version](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurestorageaccountuseslatesttlsversion)
* [Ensure the GKE metadata server is enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/gcp/ensurethegkemetadataserverisenabled)
* [Ensure the S3 bucket has access logging enabled](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/ensurethes3buckethasaccessloggingenabled)
* [Ensure the storage container storing activity logs is not publicly accessible](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/ensurethestoragecontainerstoringactivitylogsisnotpubliclyaccessible)
* [Make ECR tags immutable](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/immutableecrtags)
* [Scan images pushed to ECR](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/enableecrscanonpush)
* [Set Azure Storage Account default network access to deny](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/azure/setazurestorageaccountdefaultnetworkaccesstodeny)
* [Upgrade AWS Aurora MySQL to version 3 (MySQL 8.0)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsauroramysqltov3)
* [Upgrade AWS Aurora PostgreSQL to 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsaurorapostgrestov17)
* [Upgrade AWS RDS MySQL to 8.4](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsrdsmysqltov8_4)
* [Upgrade AWS RDS PostgreSQL to 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsrdspostgrestov17)
* [Use HTTPS for Cloudfront distribution](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/usehttpsforcloudfrontdistribution)

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
