// AUTO-EXTRACTED from docs/user-documentation/recipes/recipe-catalog/staticanalysis/commonstaticanalysis.md — real generated content for parity.
// Regenerate via scripts/.extract-preview-recipes.mjs if the source changes.

import type { ExtractedContent } from './recipeData';

export const commonStaticAnalysisContent: ExtractedContent = {
  "tags": [],
  "infoAdmonition": "This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.",
  "preconditions": [
    "Singleton"
  ],
  "subRecipes": [
    {
      "name": "Constructors of an `abstract` class should not be declared `public`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/abstractclasspublicconstructor"
    },
    {
      "name": "Atomic Boolean, Integer, and Long equality checks compare their values",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/atomicprimitiveequalsusesget"
    },
    {
      "name": "`new BigDecimal(double)` should not be used",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/bigdecimaldoubleconstructorrecipe"
    },
    {
      "name": "`BigDecimal` rounding constants to `RoundingMode` enums",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/bigdecimalroundingconstantstoenums"
    },
    {
      "name": "Boolean checks should not be inverted",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/booleanchecksnotinverted"
    },
    {
      "name": "CaseInsensitive comparisons do not alter case",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/caseinsensitivecomparisonsdonotchangecase"
    },
    {
      "name": "Catch clause should do more than just rethrow",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/catchclauseonlyrethrows"
    },
    {
      "name": "Chain `StringBuilder.append()` calls",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/chainstringbuilderappendcalls"
    },
    {
      "name": "'Collection.toArray()' should be passed an array of the proper type",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/collectiontoarrayshouldhavepropertype"
    },
    {
      "name": "Covariant equals",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/covariantequals"
    },
    {
      "name": "Default comes last",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/defaultcomeslast"
    },
    {
      "name": "Remove empty blocks",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/emptyblock"
    },
    {
      "name": "Equals avoids null",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/equalsavoidsnull"
    },
    {
      "name": "Explicit initialization",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/explicitinitialization"
    },
    {
      "name": "`Externalizable` classes have no-arguments constructor",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/externalizablehasnoargsconstructor"
    },
    {
      "name": "Finalize private fields",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/finalizeprivatefields"
    },
    {
      "name": "Fall through",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/fallthrough"
    },
    {
      "name": "Finalize classes with private constructors",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/finalclass"
    },
    {
      "name": "Fix `String#format` and `String#formatted` expressions",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/fixstringformatexpressions"
    },
    {
      "name": "`for` loop counters incremented in update",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/forloopincrementinupdate"
    },
    {
      "name": "Use `indexOf(String, int)`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/indexofchecksshoulduseastartposition"
    },
    {
      "name": "`indexOf()` replaceable by `contains()`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/indexofreplaceablebycontains"
    },
    {
      "name": "`indexOf` should not compare greater than zero",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/indexofshouldnotcomparegreaterthanzero"
    },
    {
      "name": "Inline variable",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/inlinevariable"
    },
    {
      "name": "Use `Collection#isEmpty()` instead of comparing `size()`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/isemptycalloncollections"
    },
    {
      "name": "Simplify lambda blocks to expressions",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/lambdablocktoexpression"
    },
    {
      "name": "Standardize method name casing",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/methodnamecasing"
    },
    {
      "name": "`switch` statements should have at least 3 `case` clauses",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/minimumswitchcases"
    },
    {
      "name": "Modifier order",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/modifierorder"
    },
    {
      "name": "No multiple variable declarations",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/multiplevariabledeclarations"
    },
    {
      "name": "Fix missing braces",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/needbraces"
    },
    {
      "name": "Nested enums are not static",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/nestedenumsarenotstatic"
    },
    {
      "name": "Change `StringBuilder` and `StringBuffer` character constructor argument to `String`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/newstringbuilderbufferwithcharargument"
    },
    {
      "name": "No double brace initialization",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/nodoublebraceinitialization"
    },
    {
      "name": "Use `Collections#emptyList()`, `emptyMap()`, and `emptySet()`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/noemptycollectionwithrawtype"
    },
    {
      "name": "Use comparison rather than equality checks in for conditions",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/noequalityinforcondition"
    },
    {
      "name": "Remove `finalize()` method",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/nofinalizer"
    },
    {
      "name": "No primitive wrappers for #toString() or #compareTo(..)",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/noprimitivewrappersfortostringorcompareto"
    },
    {
      "name": "Jump statements should not be redundant",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/noredundantjumpstatements"
    },
    {
      "name": "Unnecessary `String#toString`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/notostringonstringtype"
    },
    {
      "name": "Unnecessary `String#valueOf(..)`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/novalueofonstringtype"
    },
    {
      "name": "`finalize()` calls super",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/objectfinalizecallssuper"
    },
    {
      "name": "Prefer `System.getProperty(\"user.home\")` over `System.getenv(\"HOME\")`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/prefersystemgetpropertyovergetenv"
    },
    {
      "name": "Use primitive wrapper `valueOf` method",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/primitivewrapperclassconstructortovalueof"
    },
    {
      "name": "Redundant file creation",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/redundantfilecreation"
    },
    {
      "name": "Remove extra semicolons",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/removeextrasemicolons"
    },
    {
      "name": "Remove redundant null checks before instanceof",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/removeredundantnullcheckbeforeinstanceof"
    },
    {
      "name": "Remove redundant null checks before literal equals",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/removeredundantnullcheckbeforeliteralequals"
    },
    {
      "name": "Rename methods named `hashcode`, `equal`, or `tostring`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/renamemethodsnamedhashcodeequalortostring"
    },
    {
      "name": "Replace `A.class.isInstance(a)` with `a instanceof A`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/replaceclassisinstancewithinstanceof"
    },
    {
      "name": "Use method references in lambda",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/replacelambdawithmethodreference"
    },
    {
      "name": "Replace `StringBuilder#append` with `String`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/replacestringbuilderwithstring"
    },
    {
      "name": "Replace String concatenation with `String.valueOf()`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/replacestringconcatenationwithstringvalueof"
    },
    {
      "name": "Simplify `Arrays.asList(..)` with varargs",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/simplifyarraysaslist"
    },
    {
      "name": "Simplify boolean expression",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/simplifybooleanexpression"
    },
    {
      "name": "Simplify boolean return",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/simplifybooleanreturn"
    },
    {
      "name": "Static methods need not be final",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/staticmethodnotfinal"
    },
    {
      "name": "Use `String.equals()` on `String` literals",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/stringliteralequality"
    },
    {
      "name": "Unnecessary close in try-with-resources",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/unnecessarycloseintrywithresources"
    },
    {
      "name": "Unnecessary explicit type arguments",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/unnecessaryexplicittypearguments"
    },
    {
      "name": "Remove unnecessary parentheses",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/unnecessaryparentheses"
    },
    {
      "name": "Remove `@Nullable` and `@CheckForNull` annotations from primitives",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/unnecessaryprimitiveannotations"
    },
    {
      "name": "Unnecessary `return` as last statement in void method",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/unnecessaryreturnaslaststatement"
    },
    {
      "name": "Upper case literal suffixes",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/uppercaseliteralsuffixes"
    },
    {
      "name": "Use the diamond operator",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/usediamondoperator"
    },
    {
      "name": "No C-style array declarations",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/usejavastylearraydeclarations"
    },
    {
      "name": "Use %n instead of \\n in format strings",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/useportablenewlines"
    },
    {
      "name": "Prefer `while` over `for` loops",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/whileinsteadoffor"
    },
    {
      "name": "Write octal values as decimal",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/staticanalysis/writeoctalvaluesasdecimal"
    },
    {
      "name": "Structural equality tests should use `==` or `!=`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/kotlin/cleanup/equalsmethodusage"
    },
    {
      "name": "`it` shouldn't be used as a lambda parameter name",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/kotlin/cleanup/implicitparameterinlambda"
    },
    {
      "name": "Replace `Char#toInt()` with `Char#code`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/kotlin/cleanup/replacechartointwithcode"
    },
    {
      "name": "Order imports",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/orderimports"
    }
  ],
  "yaml": "---\ntype: specs.openrewrite.org/v1beta/recipe\nname: org.openrewrite.staticanalysis.CommonStaticAnalysis\ndisplayName: Common static analysis issues\ndescription: |\n  Resolve common static analysis issues (also known as SAST issues).\npreconditions:\n  - org.openrewrite.Singleton\nrecipeList:\n  - org.openrewrite.staticanalysis.AbstractClassPublicConstructor\n  - org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet\n  - org.openrewrite.staticanalysis.BigDecimalDoubleConstructorRecipe\n  - org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums\n  - org.openrewrite.staticanalysis.BooleanChecksNotInverted\n  - org.openrewrite.staticanalysis.CaseInsensitiveComparisonsDoNotChangeCase\n  - org.openrewrite.staticanalysis.CatchClauseOnlyRethrows\n  - org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls\n  - org.openrewrite.staticanalysis.CollectionToArrayShouldHaveProperType\n  - org.openrewrite.staticanalysis.CovariantEquals\n  - org.openrewrite.staticanalysis.DefaultComesLast\n  - org.openrewrite.staticanalysis.EmptyBlock\n  - org.openrewrite.staticanalysis.EqualsAvoidsNull\n  - org.openrewrite.staticanalysis.ExplicitInitialization\n  - org.openrewrite.staticanalysis.ExternalizableHasNoArgsConstructor\n  - org.openrewrite.staticanalysis.FinalizePrivateFields\n  - org.openrewrite.staticanalysis.FallThrough\n  - org.openrewrite.staticanalysis.FinalClass\n  - org.openrewrite.staticanalysis.FixStringFormatExpressions\n  - org.openrewrite.staticanalysis.ForLoopIncrementInUpdate\n  - org.openrewrite.staticanalysis.IndexOfChecksShouldUseAStartPosition\n  - org.openrewrite.staticanalysis.IndexOfReplaceableByContains\n  - org.openrewrite.staticanalysis.IndexOfShouldNotCompareGreaterThanZero\n  - org.openrewrite.staticanalysis.InlineVariable\n  - org.openrewrite.staticanalysis.IsEmptyCallOnCollections\n  - org.openrewrite.staticanalysis.LambdaBlockToExpression\n  - org.openrewrite.staticanalysis.MethodNameCasing\n  - org.openrewrite.staticanalysis.MinimumSwitchCases\n  - org.openrewrite.staticanalysis.ModifierOrder\n  - org.openrewrite.staticanalysis.MultipleVariableDeclarations\n  - org.openrewrite.staticanalysis.NeedBraces\n  - org.openrewrite.staticanalysis.NestedEnumsAreNotStatic\n  - org.openrewrite.staticanalysis.NewStringBuilderBufferWithCharArgument\n  - org.openrewrite.staticanalysis.NoDoubleBraceInitialization\n  - org.openrewrite.staticanalysis.NoEmptyCollectionWithRawType\n  - org.openrewrite.staticanalysis.NoEqualityInForCondition\n  - org.openrewrite.staticanalysis.NoFinalizer\n  - org.openrewrite.staticanalysis.NoPrimitiveWrappersForToStringOrCompareTo\n  - org.openrewrite.staticanalysis.NoRedundantJumpStatements\n  - org.openrewrite.staticanalysis.NoToStringOnStringType\n  - org.openrewrite.staticanalysis.NoValueOfOnStringType\n  - org.openrewrite.staticanalysis.ObjectFinalizeCallsSuper\n  - org.openrewrite.staticanalysis.PreferSystemGetPropertyOverGetenv\n  - org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf\n  - org.openrewrite.staticanalysis.RedundantFileCreation\n  - org.openrewrite.staticanalysis.RemoveExtraSemicolons\n  - org.openrewrite.staticanalysis.RemoveRedundantNullCheckBeforeInstanceof\n  - org.openrewrite.staticanalysis.RemoveRedundantNullCheckBeforeLiteralEquals\n  - org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrToString\n  - org.openrewrite.staticanalysis.ReplaceClassIsInstanceWithInstanceof\n  - org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference\n  - org.openrewrite.staticanalysis.ReplaceStringBuilderWithString\n  - org.openrewrite.staticanalysis.ReplaceStringConcatenationWithStringValueOf\n  - org.openrewrite.staticanalysis.SimplifyArraysAsList\n  - org.openrewrite.staticanalysis.SimplifyBooleanExpression\n  - org.openrewrite.staticanalysis.SimplifyBooleanReturn\n  - org.openrewrite.staticanalysis.StaticMethodNotFinal\n  - org.openrewrite.staticanalysis.StringLiteralEquality\n  - org.openrewrite.staticanalysis.UnnecessaryCloseInTryWithResources\n  - org.openrewrite.staticanalysis.UnnecessaryExplicitTypeArguments\n  - org.openrewrite.staticanalysis.UnnecessaryParentheses\n  - org.openrewrite.staticanalysis.UnnecessaryPrimitiveAnnotations\n  - org.openrewrite.staticanalysis.UnnecessaryReturnAsLastStatement\n  - org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes\n  - org.openrewrite.staticanalysis.UseDiamondOperator\n  - org.openrewrite.staticanalysis.UseJavaStyleArrayDeclarations\n  - org.openrewrite.staticanalysis.UsePortableNewlines\n  - org.openrewrite.staticanalysis.WhileInsteadOfFor\n  - org.openrewrite.staticanalysis.WriteOctalValuesAsDecimal\n  - org.openrewrite.kotlin.cleanup.EqualsMethodUsage\n  - org.openrewrite.kotlin.cleanup.ImplicitParameterInLambda\n  - org.openrewrite.kotlin.cleanup.ReplaceCharToIntWithCode\n  - org.openrewrite.java.OrderImports\n",
  "options": [],
  "usedBy": [],
  "examples": [
    {
      "name": "CommonStaticAnalysisIssuesPerformanceTest#indexOfOnList",
      "variants": [
        {
          "language": "java",
          "before": "import java.util.List;\n\nclass Test {\n    static boolean hasIndex(List<String> strList, String str) {\n        if (strList.indexOf(str) > 0) {\n        }\n        return strList.indexOf(str) > 0;\n    }\n}",
          "after": "import java.util.List;\n\nclass Test {\n    static boolean hasIndex(List<String> strList, String str) {\n        strList.indexOf(str);\n        return strList.indexOf(str) >= 1;\n    }\n}",
          "diff": "@@ -5,3 +5,2 @@\nclass Test {\n    static boolean hasIndex(List<String> strList, String str) {\n-       if (strList.indexOf(str) > 0) {\n-       }\n-       return strList.indexOf(str) > 0;\n+       strList.indexOf(str);\n+       return strList.indexOf(str) >= 1;\n    }"
        }
      ]
    },
    {
      "name": "CommonStaticAnalysisIssuesPerformanceTest#indexOfOnList",
      "variants": [
        {
          "language": "java",
          "before": "import java.util.List;\n\nclass Test {\n    static boolean hasIndex(List<String> strList, String str) {\n        if (strList.indexOf(str) > 0) {\n        }\n        return strList.indexOf(str) > 0;\n    }\n}",
          "after": "import java.util.List;\n\nclass Test {\n    static boolean hasIndex(List<String> strList, String str) {\n        strList.indexOf(str);\n        return strList.indexOf(str) >= 1;\n    }\n}",
          "diff": "@@ -5,3 +5,2 @@\nclass Test {\n    static boolean hasIndex(List<String> strList, String str) {\n-       if (strList.indexOf(str) > 0) {\n-       }\n-       return strList.indexOf(str) > 0;\n+       strList.indexOf(str);\n+       return strList.indexOf(str) >= 1;\n    }"
        }
      ]
    }
  ],
  "usage": {
    "recipeName": "org.openrewrite.staticanalysis.CommonStaticAnalysis",
    "displayName": "Common static analysis issues",
    "groupId": "org.openrewrite.recipe",
    "artifactId": "rewrite-static-analysis",
    "versionKey": "VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  },
  "dataTables": [
    {
      "name": "org.openrewrite.table.SourcesFileResults",
      "displayName": "Source files that had results",
      "description": "Source files that were modified by the recipe run.",
      "columns": [
        {
          "name": "Source path before the run",
          "description": "The source path of the file before the run. `null` when a source file was created during the run."
        },
        {
          "name": "Source path after the run",
          "description": "A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."
        },
        {
          "name": "Parent of the recipe that made changes",
          "description": "In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."
        },
        {
          "name": "Recipe that made changes",
          "description": "The specific recipe that made a change."
        },
        {
          "name": "Estimated time saving",
          "description": "An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."
        },
        {
          "name": "Cycle",
          "description": "The recipe cycle in which the change was made."
        }
      ]
    },
    {
      "name": "org.openrewrite.table.SearchResults",
      "displayName": "Source files that had search results",
      "description": "Search results that were found during the recipe run.",
      "columns": [
        {
          "name": "Source path of search result before the run",
          "description": "The source path of the file with the search result markers present."
        },
        {
          "name": "Source path of search result after run the run",
          "description": "A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."
        },
        {
          "name": "Result",
          "description": "The trimmed printed tree of the LST element that the marker is attached to."
        },
        {
          "name": "Description",
          "description": "The content of the description of the marker."
        },
        {
          "name": "Recipe that added the search marker",
          "description": "The specific recipe that added the Search marker."
        }
      ]
    },
    {
      "name": "org.openrewrite.table.SourcesFileErrors",
      "displayName": "Source files that errored on a recipe",
      "description": "The details of all errors produced by a recipe run.",
      "columns": [
        {
          "name": "Source path",
          "description": "The file that failed to parse."
        },
        {
          "name": "Recipe that made changes",
          "description": "The specific recipe that made a change."
        },
        {
          "name": "Stack trace",
          "description": "The stack trace of the failure."
        }
      ]
    },
    {
      "name": "org.openrewrite.table.RecipeRunStats",
      "displayName": "Recipe performance",
      "description": "Statistics used in analyzing the performance of recipes.",
      "columns": [
        {
          "name": "The recipe",
          "description": "The recipe whose stats are being measured both individually and cumulatively."
        },
        {
          "name": "Source file count",
          "description": "The number of source files the recipe ran over."
        },
        {
          "name": "Source file changed count",
          "description": "The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."
        },
        {
          "name": "Cumulative scanning time (ns)",
          "description": "The total time spent across the scanning phase of this recipe."
        },
        {
          "name": "Max scanning time (ns)",
          "description": "The max time scanning any one source file."
        },
        {
          "name": "Cumulative edit time (ns)",
          "description": "The total time spent across the editing phase of this recipe."
        },
        {
          "name": "Max edit time (ns)",
          "description": "The max time editing any one source file."
        }
      ]
    }
  ]
};
