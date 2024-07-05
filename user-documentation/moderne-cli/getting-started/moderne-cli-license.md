# Moderne CLI license

In order to **run recipes against private** repositories you will need to ensure that the Moderne CLI is configured with a license. If you are using the CLI to run recipes against _public_ repositories, you do not need to worry about a license. The only thing you will need to do in that instance is authenticate with [app.moderne.io](https://app.moderne.io) and create a [Moderne token](../../moderne-platform/references/moderne-tokens.md).

In this doc, we will walk through everything you need to know about the Moderne CLI license – from how to get one to how to configure one to all the details about how data flows through the systems.

## How to receive a license key

If you are a single-tenant Moderne customer or you're paying for Moderne DX, please jump to the [configure the CLI with a license key section](#how-to-configure-the-cli-with-a-license-key) as you do not need a special license key.

If you are a multi-tenant Moderne customer or a CLI only customer, please reach out and we will provide you with a license key.

If you want to take advantage of the free trial of the CLI, please fill out our [try the Moderne IDE plugin signup form](https://www.moderne.io/moderne-ide-plugin-signup) and we will send you a license.

## How to configure the CLI with a license key

### Single-tenant Moderne customers

You do not need to configure a license directly in your CLI. The license will be automatically configured when you run the `mod config moderne edit --token ...` command and provide a token created in your tenant. 

### Moderne DX customers

To configure the license, please run the following command:

```bash
mod config license moderne sync
```

### Everyone else (including multi-tenant Moderne customers)

Please run the following command:

```bash
mod config license edit <license-you-were-provided>
```

## License check flow

The following diagram shows the flow of what checks will happen when you attempt to run a recipe with the CLI:

<figure><img src="../../../.gitbook/assets/license-flow (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Some important details about the license check:

* The license **check does NOT make any call home requests to Moderne** (the public key packaged inside of the CLI is enough to verify the integrity of the signature).
* Verification of the Moderne tenant configuration only makes a call to the Moderne tenant. If you are using DX, this is a call to inside of your private network. If you are using the Moderne Platform, this is a call to your isolated tenant (and not Moderne as a whole).
* If you have configured a license key, no network calls will ever be made to GitHub to check to see if a repository is public.
{% endhint %}

## License details

We use [elliptic-curve cryptography ](https://en.wikipedia.org/wiki/Elliptic-curve\_cryptography)to create the license key. A license is composed of two pieces that are encoded together:

1. Data (base 64 encoded customer name + expiration date)
2. A signature

The following diagram demonstrates how this license is created and used. Note that because the public key is bundled with the CLI, _no external calls need to be made to verify the integrity of the license key_:

<figure><img src="../../../.gitbook/assets/cli-license-check.png" alt=""><figcaption></figcaption></figure>
