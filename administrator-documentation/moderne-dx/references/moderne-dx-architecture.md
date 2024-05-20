# Moderne DX architecture

Moderne DX includes a centralized, internal service you install to manage Moderne CLI instances, enabling you to share and improve recipes, coordinate across teams, and access reporting. You operate the Moderne DX edition using your own security controls, and all of your code and data stays on-premises.

## Architecture diagram

<figure><img src="../../../.gitbook/assets/ModerneDX-Arch2.png" alt=""><figcaption></figcaption></figure>

## Comparison with Moderne Enterprise

### Capabilities

|                                      |      Moderne DX      | Moderne platform Enterprise |
| ------------------------------------ | :------------------: | :-------------------------: |
| SCA - auto search and remediation    | :white\_check\_mark: |     :white\_check\_mark:    |
| SAST - auto search and remediation   | :white\_check\_mark: |     :white\_check\_mark:    |
| OWASP Top 10 auto-remediation        | :white\_check\_mark: |     :white\_check\_mark:    |
| Framework and library auto-migration | :white\_check\_mark: |     :white\_check\_mark:    |
| Global code intelligence             |                      |     :white\_check\_mark:    |
| Custom recipe development assistance | :white\_check\_mark: |     :white\_check\_mark:    |

### Features

|                                |      Moderne DX      | Moderne platform Enterprise |
| ------------------------------ | :------------------: | :-------------------------: |
| Moderne CLI – multi-repo DevEx | :white\_check\_mark: |     :white\_check\_mark:    |
| IDE plugin                     | :white\_check\_mark: |     :white\_check\_mark:    |
| Recipe marketplace             | :white\_check\_mark: |     :white\_check\_mark:    |
| Data tables (impact analysis)  | :white\_check\_mark: |     :white\_check\_mark:    |
| Data visualizations            |                      |     :white\_check\_mark:    |
| Code intel dashboards          |                      |     :white\_check\_mark:    |
| AI integrations                |                      |     :white\_check\_mark:    |
| Scheduled recipe execution     |                      |     :white\_check\_mark:    |
| Change campaigns               |                      |     :white\_check\_mark:    |
| Organizational hierarchy       | :white\_check\_mark: |     :white\_check\_mark:    |
| Reporting                      | :white\_check\_mark: |     :white\_check\_mark:    |
| Centralized LST management     | :white\_check\_mark: |     :white\_check\_mark:    |

### Implementation

|                                                      |      Moderne DX      | Moderne platform Enterprise |
| ---------------------------------------------------- | :------------------: | :-------------------------: |
| SSO integration for login                            | :white\_check\_mark: |     :white\_check\_mark:    |
| VCS (GitHub, GitLab, Bitbucket) integration          | :white\_check\_mark: |     :white\_check\_mark:    |
| Artifact repository (Artifactory, Nexus) integration | :white\_check\_mark: |     :white\_check\_mark:    |
| IdP integration                                      | :white\_check\_mark: |     :white\_check\_mark:    |
| Single, private tenant SaaS                          |                      |     :white\_check\_mark:    |
| Fully on premises                                    | :white\_check\_mark: |                             |
