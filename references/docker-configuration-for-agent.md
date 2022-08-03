# Docker configuration for agent

### Running Moderne Agent Docker container

```
docker run --env-file sample-agent.env moderne-dev/moderne/moderne-agent:0.65.0
```

### Example `sample-agent.env` file

```
# Required
MODERNE_AGENT_TOKEN=token_provided_by_moderne
MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.YOUR_TENANT_NAME.moderne.io/rsocket
MODERNE_AGENT_CRYPTO_SYMMETRICKEY=some_key

# Optional
MODERNE_AGENT_NICKNAME=prod-1

# Bitbucket Server
MODERNE_AGENT_BITBUCKET_0_URL=https://mybitbucket.your-domain.com
MODERNE_AGENT_BITBUCKET_0_PRIVATE_KEY=REALLY_LONG_PRIVATE_KEY_AS_ONE_LINE

# GitHub Configuration with GitHub OAuth Client
MODERNE_AGENT_GITHUB_0_URL=https://github.com # https://github.on-prem.your-domain.com
MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=your_provided_github_client_id
MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=your_provided_github_client_secret
MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true # false

# Artifactory 
MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.your-domain.com
MODERNE_AGENT_ARTIFACTORY_0_USERNAME=myartifactory
MODERNE_AGENT_ARTIFACTORY_0_PASSWORD==myartifactory_password
MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}'
MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}'

# (Optional) Artifactory Recipes
MODERNE_AGENT_ARTIFACTORY_0_RECIPEREPOSITORIES_0=custom_recipes
```
