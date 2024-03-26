# Moderne CLI license

In order to **run recipes against private** repositories you will need to receive and configure a license. If you are using the CLI to run recipes against public repositories, you do not need to worry about a license.

In this doc, we will walk through everything you need to know about the Moderne CLI license – from how to get one to how to configure one to what the technical flow is like for using one.

## How to receive a license key

If you wish to use the CLI to run recipes on your private repositories and you have a contract with Moderne, please reach out and we will provide you with a license key.&#x20;

If you don't have a contract with Moderne, but want to get started with a free trial and learn more about our products, please fill out [our try Moderne form](https://www.moderne.io/try-moderne).

## How to configure the CLI with a license key

Please run the following command:

```bash
mod config license edit <license-you-were-provided>
```

## License check flow

The following diagram shows the flow of what checks will happen when you attempt to run a recipe with the CLI.

<figure><img src="../../../.gitbook/assets/license-flow (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
If you have configured a license key, no network calls will ever be made to GitHub to check to see if the repository is public.
{% endhint %}

## License details

We use [elliptic-curve cryptography ](https://en.wikipedia.org/wiki/Elliptic-curve\_cryptography)to create the license key. A license is composed of two pieces that are encoded together:

1. Data (base 64 encoded customer name + expiration date)
2. A signature

The following diagram demonstrates how this license is created and used. Note that because the public key is bundled with the CLI, no external calls need to be made to verify the integrity of the license key.

<figure><img src="../../../.gitbook/assets/cli-license-check.png" alt=""><figcaption></figcaption></figure>
