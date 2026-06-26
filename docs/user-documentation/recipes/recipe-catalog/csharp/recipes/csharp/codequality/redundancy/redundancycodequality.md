---
title: "Redundancy code quality"
sidebar_label: "Redundancy code quality"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Redundancy code quality"}
  description={"Remove redundant code from C# sources."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RedundancyCodeQuality"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Redundancy code quality"}
  description={"Remove redundant code from C# sources."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","redundancy","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RedundancyCodeQuality"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RedundancyCodeQuality"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/redundancycodequality.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Remove redundant ToString() call","href":"csharp/recipes/csharp/codequality/redundancy/removeredundanttostringcall"},{"name":"Use rethrow instead of throw ex","href":"csharp/recipes/csharp/codequality/redundancy/userethrow"},{"name":"Remove empty finally clause","href":"csharp/recipes/csharp/codequality/redundancy/removeemptyfinallyclause"},{"name":"Remove unnecessary else clause","href":"csharp/recipes/csharp/codequality/redundancy/removeunnecessaryelse"},{"name":"Remove redundant ToCharArray() call","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantstringtochararraycall"},{"name":"Remove redundant parentheses","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantparentheses"},{"name":"Remove redundant cast","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantcast"},{"name":"Remove redundant default field initialization","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantdefaultfieldinitialization"},{"name":"Remove redundant base constructor call","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantbaseconstructorcall"},{"name":"Remove redundant sealed modifier","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantsealedmodifier"},{"name":"Find empty catch clause","href":"csharp/recipes/csharp/codequality/redundancy/removeemptycatchclause"},{"name":"Remove empty foreach body","href":"csharp/recipes/csharp/codequality/redundancy/removeemptyforeachbody"},{"name":"Remove empty while body","href":"csharp/recipes/csharp/codequality/redundancy/removeemptywhilebody"},{"name":"Remove redundant async/await","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantasyncawait"},{"name":"Remove unused member declaration","href":"csharp/recipes/csharp/codequality/redundancy/removeunusedmemberdeclaration"},{"name":"Remove redundant overriding member","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantoverridingmember"},{"name":"Remove redundant Dispose/Close call","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantdisposeorclose"},{"name":"Remove redundant region","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantregion"},{"name":"Flag empty for loop body","href":"csharp/recipes/csharp/codequality/redundancy/removeemptyforbody"},{"name":"Remove empty destructor","href":"csharp/recipes/csharp/codequality/redundancy/removeemptydestructor"},{"name":"Remove redundant auto-property initialization","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantautopropertyinitialization"},{"name":"Remove redundant statement","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantstatement"},{"name":"Remove redundant delegate creation","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantdelegatecreation"},{"name":"Remove redundant assignment","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantassignment"},{"name":"Remove unnecessary interpolated string","href":"csharp/recipes/csharp/codequality/redundancy/unnecessaryinterpolatedstring"},{"name":"Remove redundant catch block","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantcatchblock"},{"name":"Remove unnecessary case label","href":"csharp/recipes/csharp/codequality/redundancy/removeunnecessarycaselabel"},{"name":"Remove redundant default switch section","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantdefaultswitchsection"},{"name":"Remove redundant base interface","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantbaseinterface"},{"name":"Remove unnecessary unsafe context","href":"csharp/recipes/csharp/codequality/redundancy/unnecessaryunsafecontext"},{"name":"Remove unnecessary null-forgiving operator","href":"csharp/recipes/csharp/codequality/redundancy/unnecessarynullforgivingoperator"},{"name":"Find empty syntax","href":"csharp/recipes/csharp/codequality/redundancy/removeemptysyntax"},{"name":"Remove partial modifier from single-part type","href":"csharp/recipes/csharp/codequality/redundancy/removepartialmodifierfromsinglepart"},{"name":"Remove enum default underlying type","href":"csharp/recipes/csharp/codequality/redundancy/removeenumdefaultunderlyingtype"},{"name":"Remove argument list from attribute","href":"csharp/recipes/csharp/codequality/redundancy/removeargumentlistfromattribute"},{"name":"Remove redundant as operator","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantasoperator"},{"name":"Remove unnecessary verbatim string literal","href":"csharp/recipes/csharp/codequality/redundancy/unnecessaryverbatimstringliteral"},{"name":"Remove unnecessary null check","href":"csharp/recipes/csharp/codequality/redundancy/unnecessarynullcheck"},{"name":"Remove unnecessary raw string literal","href":"csharp/recipes/csharp/codequality/redundancy/unnecessaryrawstringliteral"},{"name":"Remove redundant constructor","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantautopropertyinit"},{"name":"Unused 'this' parameter","href":"csharp/recipes/csharp/codequality/redundancy/removeunusedthisparameter"},{"name":"Unused element in documentation comment","href":"csharp/recipes/csharp/codequality/redundancy/removeunuseddoccommentelement"},{"name":"Unnecessary enum flag","href":"csharp/recipes/csharp/codequality/redundancy/unnecessaryenumflag"},{"name":"Remove redundant 'sealed' modifier from override","href":"csharp/recipes/csharp/codequality/redundancy/removeredundantsealedmodifierfromoverride"},{"name":"Remove unnecessary semicolon at end of declaration","href":"csharp/recipes/csharp/codequality/redundancy/removeunnecessarysemicolon"},{"name":"File contains no code","href":"csharp/recipes/csharp/codequality/redundancy/filecontainsnocode"},{"name":"Unnecessary interpolation","href":"csharp/recipes/csharp/codequality/redundancy/unnecessaryinterpolation"},{"name":"Resource can be disposed asynchronously","href":"csharp/recipes/csharp/codequality/redundancy/resourcecanbedisposedasynchronously"},{"name":"Remove explicit 'class' from record","href":"csharp/recipes/csharp/codequality/redundancy/removeexplicitclassfromrecord"},{"name":"Find internal types that may be unused","href":"csharp/recipes/csharp/codequality/redundancy/findunusedinternaltype"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RedundancyCodeQuality","displayName":"Redundancy code quality","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

