---
description: How to run OpenRewrite Terraform recipes on every Terraform Cloud run.
---

# Terraform Cloud integration

Terraform Run Task enables your organization to integrate third-party tools within a Terraform run, specifically between the plan and apply stages of the Terraform Cloud workflow. Anything from security checks to cost estimation to code scanning can be integrated into your Terraform workflow with run tasks.

A run task works by sending run-related information to an external third-party system. At that point, the external system evaluates the information and returns a passed or failed response back to Terraform Cloud. The status response, combined with the task’s enforcement setting, determines whether a run should proceed to the next stage of the workflow.

[![](<../.gitbook/assets/Terraform Cloud Run Demo Thumbnail.png>)](https://www.youtube.com/watch?v=2DUQMMUyyGU)

{% hint style="info" %}
Partners participating in the beta can add their feedback [here](https://hashi.co/run-tasks-feedback).
{% endhint %}

## Getting started with run task

### Prerequisites:

● Run tasks can only be created on workspaces using a Terraform version v0.12+. Downgrading a workspace with existing run tasks to use a Terraform version v0.12 or prior will not result in an error, but the configured tasks will not execute.

● You must be an organization owner to create a new task event hook. You must be at least a workspace administrator in order to connect a task event hook to a given workspace.

● Since this feature is behind a private beta feature flag on our end, you will have to sign up for access at [http://hashi.co/tfc-beta](http://hashi.co/tfc-beta)[.](http://hashi.co/tfc-beta)

## Moderne integration with Terraform Cloud

Moderne's integration with Terraform Cloud runs [OpenRewrite Terraform](https://github.com/openrewrite/rewrite-terraform) recipes on Terraform HCL after the plan stage but before the apply stage. One or more recipes can be configured to check the security posture of the HCL, ensure it meets stylistic best practices, etc.

If the recipe would result in changes to the HCL, the Terraform Cloud run fails and your engineers are provided a link in the failed Terraform Cloud run to the corresponding run on the Moderne platform where they can commit the change necessary. A subsequent run of the changed HCL would then pass.

Think of this like a static analyzer but with auto-remediation!

**Setting up the integration between Moderne and Terraform Cloud**

1\. Sign up for the Moderne platform using the request form at [Moderne.io](https://moderne.io). To test the integration without connecting any of your own code to the Moderne platform, you can create a copy of the [terraform-random](https://github.com/moderneinc/terraform-random) project using the "Use this template" button in Github:

![](<../.gitbook/assets/image (2) (1) (1).png>)

2\. Login to Terraform Cloud and go into the organization global settings.

3\. Navigate to Settings>Task Event Hooks

![](<../.gitbook/assets/image (3) (1) (1) (1).png>)

3\. Create a new Task Event Hook for Moderne, pointing the URL to https://api.moderne.io/terraform-cloud.

![](<../.gitbook/assets/image (4) (1).png>)

The `requestedRecipe` query parameter allows you to control which recipe will run. The recipe id for this query parameter can be copied from the recipe detail of any Terraform recipe on the Moderne platform.

![](<../.gitbook/assets/image (5) (1) (1) (1).png>)

4\. To connect this Task Event Hook to your workspace in Terraform Cloud, navigate to the

workspace of choice.

![](<../.gitbook/assets/image (6) (1) (1).png>)

4\. Choose Tasks.

![](<../.gitbook/assets/image (7) (2).png>)

4\. Choose an enforcement level.

o **Advisory**: tasks can not block a run from completing. If the task fails, a warning will be displayed on the run but it will proceed.

o **Mandatory**: tasks can block a run from completing. If the task fails (including a timeout or unexpected remote error condition), a warning will be displayed on the run and the run will transition to an Errored state.

![](<../.gitbook/assets/image (8).png>)

Congratulations, your workspace is now set-up with your \<Partner> Integration!\\

## Runs

You should be able to complete the next scenarios as your org admin user or as a combination of your org admin user and your workspace admin user.

When all tasks pass, a run should be applyable. Whether a task passes or fails, you will be provided with a details link that links to the Moderne platform to display the result of the recipe that the task ran.

![Two Moderne recipes ran as part of the Run Task run](<../.gitbook/assets/image (9) (2).png>)

When a task fails, you can expect to see a diff in the Moderne platform along with commit and PR links that help you immediately fix the underlying issue.

![](<../.gitbook/assets/image (10) (1).png>)
