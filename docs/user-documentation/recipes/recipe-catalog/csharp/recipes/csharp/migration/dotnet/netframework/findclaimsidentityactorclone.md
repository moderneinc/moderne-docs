---
title: "Find `ClaimsIdentity` Actor clone-on-copy change"
sidebar_label: "Find `ClaimsIdentity` Actor clone-on-copy change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `ClaimsIdentity` Actor clone-on-copy change"}
  description={"Finds `ClaimsIdentity(IIdentity, ...)` constructions, which clone the `Actor` instead of attaching it by reference when retargeting to .NET Framework 4.6.2 (`Switch.System.Security.ClaimsIdentity.SetActorAsReferenceWhenCopyingClaimsIdentity` to revert)."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindClaimsIdentityActorClone"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","security","dotnet","net-framework"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindClaimsIdentityActorClone"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindClaimsIdentityActorClone"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findclaimsidentityactorclone.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `ClaimsIdentity` Actor clone-on-copy change</RecipeHeader.Title>

<RecipeHeader.Description>Finds `ClaimsIdentity(IIdentity, ...)` constructions, which clone the `Actor` instead of attaching it by reference when retargeting to .NET Framework 4.6.2 (`Switch.System.Security.ClaimsIdentity.SetActorAsReferenceWhenCopyingClaimsIdentity` to revert).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindClaimsIdentityActorClone","displayName":"Find `ClaimsIdentity` Actor clone-on-copy change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

