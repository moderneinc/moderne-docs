---
sidebar_label: Set up organizational hierarchy
description: How to set up your organizational hierarchy in Moderne.
---

# Set up your organizational hierarchy

For the purpose of this document and your administration of Moderne, an **organization** is a grouping of repositories. An **organizational hierarchy** is how you structure and nest those organizations.

**Decide how you want to structure your organizational hierarchy.** Large companies/enterprises will often want to map out their entire organizational hierarchy, from VP, Director, Manager, Team, and technology. 

Smaller companies may be okay just grouping repositories by technology.

Some companies may not want to centrally manage their organizational hierarchy at all and just want to use the default "ALL" organization that contains all repositories, letting users create custom organizations for their own purposes.

However you plan to structure your organizational hierarchy, the rest of this document outlines how to provide that information to Moderne.

**Build your `repos.csv`.** When setting up Mass Ingest (TODO add link), you generated a `repos.csv` file that contained the repositories to ingest. That same `repos.csv` file can be extended with organizational information.

For instance, if you have the following organizational tree:

```
ALL
├── VP
    └── Director
        └── Manager
           ├── Team 1
           └── Team 2
```

You would structure your repos.csv as follows:

```csv
cloneUrl,branch,org1,org2,org3,org4,org5,org6,org7,org8,org9,org10
https://github.com/apache/maven-doxia,master,Team1,Manager,Director,VP,ALL
https://github.com/aws/amazon-documentdb-jdbc-driver,develop,Team1,Manager,Director,VP,ALL
https://github.com/awslabs/aws-saas-boost,main,Team1,Manager,Director,VP,ALL
https://github.com/finos/messageml-utils,main,Team1,Manager,Director,VP,ALL
https://github.com/finos/spring-bot,spring-bot-master,Team2,Manager,Director,VP,ALL
https://github.com/finos/symphony-bdk-java,main,Team2,Manager,Director,VP,ALL
https://github.com/finos/symphony-wdk,master,Team2,Manager,Director,VP,ALL
https://github.com/Netflix/photon,master,Team2,Manager,Director,VP,ALL
https://github.com/Netflix/ribbon,master,Team2,Manager,Director,VP,ALL
https://github.com/openrewrite/rewrite-recipe-bom,main,Team2,Manager,Director,VP,ALL
```

**Determine how you want to serve this repos.csv to the agent.**
