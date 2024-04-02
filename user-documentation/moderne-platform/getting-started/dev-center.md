# Getting started with the Moderne DevCenter

The Moderne DevCenter is the mission-control dashboard of the Moderne Platform. It provides you with high-level details about the state of all of your repositories. Using it, you can track the progress of upgrades, migrations, and security vulnerabilities. You can also use it to view [key visualizations](/user-documentation/moderne-platform/getting-started/visualizations.md) you care about – such as a dependency graph or a SQL operation usage chart.

In this getting started guide, we will walk you through each component of the Moderne DevCenter and explain how you might use that knowledge.

{% embed url="https://www.youtube.com/watch?v=KRXDMGt7DRE" %}

## Navigating to the DevCenter

DevCenters are created for specific organizations. Not all organizations will have a DevCenter. You can check if a specific organization has a DevCenter by selecting the organization you want to use and then clicking on the `DevCenter` link in the left navigation bar.

![DevCenter navigation link](/.gitbook/assets/devcenter-nav.png)

If the organization has a DevCenter, you should see something like this appear:

![Example DevCenter](/.gitbook/assets/large-devcenter.png)

{% hint style="info" %}
The security issues present in the above example are tests we've created for demonstration purposes and do not actually reflect the security of the organization.
{% endhint %}

## Components of the DevCenter

### Organizational ownership

The organization ownership section gives you a high-level view of your organization. It tells you how many repositories the organization is composed of, how many developers have contributed any amount of code to those repositories in the last 90 days, and how many lines of code have been ingested into the Moderne platform.

![Example organizational ownership section](/.gitbook/assets/organizational-ownership.png)

### Frameworks and migrations

The frameworks and migration section is useful for tracking how your organization is doing at keeping your code up-to-date with the latest versions. These cards are [configured by the organizational administrator](/administrator-documentation/moderne-platform/how-to-guides/dev-center.md#step-3-create-and-configure-the-devcenter) and specifically chosen to align with that organization's needs.

Each card can be configured with three [measures](/administrator-documentation/moderne-platform/how-to-guides/dev-center.md#measures) that demonstrate how the code is divided.

You can press the `Upgrade` button on each card to be taken to a recipe that can be run to update your repositories to the latest version. If the recipe has been recently run and the results are still valid, you will be taken to the latest results rather than needing to wait for the recipe to run again.

![Example framework and migration cards](/.gitbook/assets/framework-and-migration.png)

### Visualizations

The visualizations section allows you to perform real-time impact analysis. For instance, if your company uses Jackson and you wanted to see if the library versions lined up across all of your repositories, you could want to run the Jackson usage visualization to get that information within minutes.

Similar to the framework and migration cards, these cards are [configured by the organizational administrator](/administrator-documentation/moderne-platform/how-to-guides/dev-center.md#visualization-cards).

You can press `view` on each visualization card to run a recipe and generate the associated visualization.

![Example visualization cards](/.gitbook/assets/vis-cards.png)

![Example visualization](/.gitbook/assets/jackson-vis.png)

### Security

The security section lets you quickly see what security issues your company has or hasn't resolved. It also allows you to quickly run security recipes against your repositories to either try and fix the issues or gather more data about them.

As with the other components, the [security issues are configured by the organizational administrator](/administrator-documentation/moderne-platform/how-to-guides/dev-center.md#security-cards).

![Example security card](/.gitbook/assets/security-card.png)

{% hint style="info" %}
The security issues present in the above example are tests we've created for demonstration purposes and do not actually reflect the security of the organization.
{% endhint %}