---
title: "Add `override` to `DbParameter.Precision`/`Scale`"
sidebar_label: "Add `override` to `DbParameter.Precision`/`Scale`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `override` to `DbParameter.Precision`/`Scale`"}
  description={"As of .NET Framework 4.5.1, `DbParameter.Precision` and `DbParameter.Scale` are public virtual properties. Adds the `override` modifier to `Precision`/`Scale` properties declared on a `DbParameter` subclass so the provider compiles against the new target."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.AddOverrideToDbParameterPrecisionScale"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration","ado-net"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.AddOverrideToDbParameterPrecisionScale"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.AddOverrideToDbParameterPrecisionScale"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/addoverridetodbparameterprecisionscale.md"}
  moderneOnly
>

<RecipeHeader.Title>Add `override` to `DbParameter.Precision`/`Scale`</RecipeHeader.Title>

<RecipeHeader.Description>As of .NET Framework 4.5.1, `DbParameter.Precision` and `DbParameter.Scale` are public virtual properties. Adds the `override` modifier to `Precision`/`Scale` properties declared on a `DbParameter` subclass so the provider compiles against the new target.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.AddOverrideToDbParameterPrecisionScale","displayName":"Add `override` to `DbParameter.Precision`/`Scale`","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

