---
sidebar_label: "Lint source code with ESLint"
canonical_url: "https://docs.openrewrite.org/recipes/codemods/eslint"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lint source code with ESLint

**org.openrewrite.codemods.ESLint**

_Run [ESLint](https://eslint.org/) across the code to fix common static analysis issues in the code.  This requires the code to have an existing ESLint configuration._

## Recipe source

[GitHub: ESLint.java](https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/java/org/openrewrite/codemods/ESLint.java),
[Issue Tracker](https://github.com/moderneinc/rewrite-codemods/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-codemods/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `List` | patterns | *Optional*. The lint target files. This can contain any of file paths, directory paths, and glob patterns. | `lib/**/*.js` |
| `String` | parser | *Optional*. Parser used by ESLint to parse the source files. Defaults to `@typescript-eslint/parser`. See [ESLint documentation](https://eslint.org/docs/latest/use/configure/parsers) for more details. | `esprima` |
| `List` | parserOptions | *Optional*. A list of parser options for ESLint. The format is `key: value`. Defaults to `ecmaVersion: "latest", ecmaFeatures: { jsx: true }, sourceType: "module"`. See [ESLint documentation](https://eslint.org/docs/latest/use/configure/language-options#specifying-parser-options) for more details. | `ecmaVersion: 6, ecmaFeatures: { jsx: true }` |
| `Boolean` | allowInlineConfig | *Optional*. Whether inline config comments are allowed. Defaults to `false`. See [ESLint documentation](https://eslint.org/docs/latest/use/configure/rules#disabling-inline-comments) for more details. | `true` |
| `List` | envs | *Optional*. A list of `env` mappings for ESLint. The format is `key: value`. | `browser: true` |
| `List` | globals | *Optional*. Define global variables for rules that require knowledge of these. | `var1, var2: writable` |
| `List` | plugins | *Optional*. A list of plugins for ESLint. | `@typescript-eslint, prettier` |
| `List` | extend | *Optional*. A list of extends for ESLint. | `eslint:recommended, prettier` |
| `List` | rules | *Optional*. List of rules to be checked by ESLint. Optionally, the severity and other rule options can also be specified as e.g. `off`, `warn` or `["error", "always"]`. The severity `off` is useful when the rule is declared by an extended [shareable config](https://eslint.org/docs/latest/extend/ways-to-extend#shareable-configs). For more information, see the [ESLint documentation](https://eslint.org/docs/latest/use/configure/rules) | `eqeqeq: warn, multiline-comment-style: ["error", "starred-block"], prettier/prettier` |
| `Boolean` | fix | *Optional*. Automatically fix violations when possible. Defaults to `true`. | `false` |
| `String` | configFile | *Optional*. Allows specifying the full ESLint configuration file contents as multiline JSON. See [ESLint documentation](https://eslint.org/docs/latest/use/configure/configuration-files) for more details.<br /><br />Note that this will override any other configuration options. | `{}` |


## Used by

This recipe is used as part of the following composite recipes:

* [A story should not have a redundant name property](/user-documentation/recipes/recipe-catalog/codemods/cleanup/storybook/noredundantstoryname.md)
* [Deprecated hierarchy separator in title property](/user-documentation/recipes/recipe-catalog/codemods/cleanup/storybook/hierarchyseparator.md)
* [Disallow Jasmine globals](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/nojasmineglobals.md)
* [Disallow `new Array()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nonewarray.md)
* [Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefernumericliterals.md)
* [Disallow alias methods](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/noaliasmethods.md)
* [Disallow arrow functions where they could be confused with comparisons](/user-documentation/recipes/recipe-catalog/codemods/format/noconfusingarrow.md)
* [Disallow awaiting non-promise values](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nounnecessaryawait.md)
* [Disallow classes that only have static members](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nostaticonlyclass.md)
* [Disallow comparing `undefined` using `typeof`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/notypeofundefined.md)
* [Disallow dynamic slot name](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/nodynamicslotname.md)
* [Disallow else blocks after return statements in if statements](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noelsereturn.md)
* [Disallow equal signs explicitly at the beginning of regular expressions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nodivregex.md)
* [Disallow extra closing tags for components without children](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/selfclosingcomp.md)
* [Disallow extra closing tags for components without children](/user-documentation/recipes/recipe-catalog/codemods/format/jsxselfclosingcomp.md)
* [Disallow if statements as the only statement in else blocks](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nolonelyif.md)
* [Disallow initializing variables to undefined](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noundefinit.md)
* [Disallow leading or trailing decimal points in numeric literals](/user-documentation/recipes/recipe-catalog/codemods/format/nofloatingdecimal.md)
* [Disallow member access from `await` expression](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noawaitexpressionmember.md)
* [Disallow missing parentheses around multiline JSX](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxwrapmultilines.md)
* [Disallow missing parentheses around multiline JSX](/user-documentation/recipes/recipe-catalog/codemods/format/jsxwrapmultilines.md)
* [Disallow multiple empty lines](/user-documentation/recipes/recipe-catalog/codemods/format/nomultipleemptylines.md)
* [Disallow multiple spaces between inline JSX props](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxpropsnomultispaces.md)
* [Disallow multiple spaces between inline JSX props](/user-documentation/recipes/recipe-catalog/codemods/format/jsxpropsnomultispaces.md)
* [Disallow multiple spaces](/user-documentation/recipes/recipe-catalog/codemods/format/nomultispaces.md)
* [Disallow negated conditions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nonegatedcondition.md)
* [Disallow nested ternary expressions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nonestedternary.md)
* [Disallow number literals with zero fractions or dangling dots](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nozerofractions.md)
* [Disallow or enforce spaces inside of blocks after opening block and before closing block in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/blockspacing.md)
* [Disallow or enforce spaces inside of blocks after opening block and before closing block](/user-documentation/recipes/recipe-catalog/codemods/format/blockspacing.md)
* [Disallow problematic leaked values from being rendered](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxnoleakedrender.md)
* [Disallow redundant return statements](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nouselessreturn.md)
* [Disallow renaming import, export, and destructured assignments to the same name](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nouselessrename.md)
* [Disallow returning/yielding `Promise.resolve()`/`reject()` in `async` functions or promise callbacks](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nouselesspromiseresolvereject.md)
* [Disallow shorthand type conversions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noimplicitcoercion.md)
* [Disallow spaces around equal signs in attribute](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/nospacesaroundequalsignsinattribute.md)
* [Disallow target=&quot;_blank&quot; attribute without rel=&quot;noreferrer&quot;](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxnotargetblank.md)
* [Disallow ternary operators when simpler alternatives exist](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nounneededternary.md)
* [Disallow the use of `Math.pow` in favor of the ** operator](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferexponentiationoperator.md)
* [Disallow the use of the `null` literal](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nonull.md)
* [Disallow to use of the store itself as an operand. Need to use $ prefix or get function](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/requirestorereactiveaccess.md)
* [Disallow trailing whitespace at the end of lines](/user-documentation/recipes/recipe-catalog/codemods/format/notrailingspaces.md)
* [Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxcurlybracepresence.md)
* [Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes](/user-documentation/recipes/recipe-catalog/codemods/format/jsxcurlybracepresence.md)
* [Disallow unnecessary calls to `.bind()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noextrabind.md)
* [Disallow unnecessary computed property keys in objects and classes](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nouselesscomputedkey.md)
* [Disallow unnecessary fragments](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxnouselessfragment.md)
* [Disallow unnecessary labels](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noextralabel.md)
* [Disallow unnecessary mustache interpolations](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/nouselessmustaches.md)
* [Disallow unnecessary mustache interpolations](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/nouselessmustaches.md)
* [Disallow unnecessary parentheses in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/noextraparens.md)
* [Disallow unnecessary parentheses](/user-documentation/recipes/recipe-catalog/codemods/format/noextraparens.md)
* [Disallow unnecessary semicolons](/user-documentation/recipes/recipe-catalog/codemods/format/noextrasemi.md)
* [Disallow unnecessary spread](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nouselessspread.md)
* [Disallow unnecessary v-bind directives](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/nouselessvbind.md)
* [Disallow unreadable array destructuring](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nounreadablearraydestructuring.md)
* [Disallow unsupported Vue.js syntax on the specified version](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/nounsupportedfeatures.md)
* [Disallow usage of this in template](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/thisintemplate.md)
* [Disallow usage of unknown DOM property](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/nounknownproperty.md)
* [Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn(`)](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferobjecthasown.md)
* [Disallow use of deprecated functions from before version 27](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/nodeprecatedfunctions27.md)
* [Disallow useless `undefined`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nouselessundefined.md)
* [Disallow useless array `length` check](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nouselesslengthcheck.md)
* [Disallow useless fallback when spreading in object literals](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nouselessfallbackinspread.md)
* [Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferobjectspread.md)
* [Disallow using jest.mock() factories without an explicit type parameter](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/nountypedmockfactory.md)
* [Disallow using the `this` argument in array methods](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noarraymethodthisargument.md)
* [Disallow whitespace before properties](/user-documentation/recipes/recipe-catalog/codemods/format/nowhitespacebeforeproperty.md)
* [Do not define a title in meta](/user-documentation/recipes/recipe-catalog/codemods/cleanup/storybook/notitlepropertyinmeta.md)
* [Do not use a `for` loop that can be replaced with a `for-of` loop](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noforloop.md)
* [Do not use leading/trailing space between `console.log` parameters](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noconsolespaces.md)
* [Do not use testing-library directly on stories](/user-documentation/recipes/recipe-catalog/codemods/cleanup/storybook/usestorybooktestinglibrary.md)
* [Enforce JSX indentation](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxindent.md)
* [Enforce JSX indentation](/user-documentation/recipes/recipe-catalog/codemods/format/jsxindent.md)
* [Enforce PascalCase for user-defined JSX components](/user-documentation/recipes/recipe-catalog/codemods/format/jsxpascalcase.md)
* [Enforce Promise or callback style in nextTick](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/nexttickstyle.md)
* [Enforce a convention in module import order](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/order.md)
* [Enforce a newline after import statements](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/newlineafterimport.md)
* [Enforce a particular style for multiline comments](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/multilinecommentstyle.md)
* [Enforce a specific function type for function components](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/functioncomponentdefinition.md)
* [Enforce a specific parameter name in catch clauses](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/catcherrorname.md)
* [Enforce better string content](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/stringcontent.md)
* [Enforce boolean attributes notation in JSX](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxbooleanvalue.md)
* [Enforce closing bracket location in JSX](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxclosingbracketlocation.md)
* [Enforce closing bracket location in JSX](/user-documentation/recipes/recipe-catalog/codemods/format/jsxclosingbracketlocation.md)
* [Enforce closing tag location for multiline JSX](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxclosingtaglocation.md)
* [Enforce closing tag location for multiline JSX](/user-documentation/recipes/recipe-catalog/codemods/format/jsxclosingtaglocation.md)
* [Enforce combining multiple `Array#push()` into one call](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noarraypushpush.md)
* [Enforce consistent brace style for all control statements](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/curly.md)
* [Enforce consistent brace style for blocks in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/bracestyle.md)
* [Enforce consistent brace style for blocks](/user-documentation/recipes/recipe-catalog/codemods/format/bracestyle.md)
* [Enforce consistent brace style for case clauses](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/switchcasebraces.md)
* [Enforce consistent case for text encoding identifiers](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/textencodingidentifiercase.md)
* [Enforce consistent comma style in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/commastyle.md)
* [Enforce consistent comma style](/user-documentation/recipes/recipe-catalog/codemods/format/commastyle.md)
* [Enforce consistent indentation in HTML comments](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/htmlcommentindent.md)
* [Enforce consistent indentation in `&lt;script&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/scriptindent.md)
* [Enforce consistent indentation](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/indent.md)
* [Enforce consistent indentation](/user-documentation/recipes/recipe-catalog/codemods/format/indent.md)
* [Enforce consistent line breaks after opening and before closing braces in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/objectcurlynewline.md)
* [Enforce consistent line breaks after opening and before closing braces](/user-documentation/recipes/recipe-catalog/codemods/format/objectcurlynewline.md)
* [Enforce consistent line breaks inside function parentheses](/user-documentation/recipes/recipe-catalog/codemods/format/functionparennewline.md)
* [Enforce consistent linebreak style for operators in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/operatorlinebreak.md)
* [Enforce consistent linebreak style for operators](/user-documentation/recipes/recipe-catalog/codemods/format/operatorlinebreak.md)
* [Enforce consistent linebreak style](/user-documentation/recipes/recipe-catalog/codemods/format/linebreakstyle.md)
* [Enforce consistent linebreaks in curly braces in JSX attributes and expressions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxcurlynewline.md)
* [Enforce consistent linebreaks in curly braces in JSX attributes and expressions](/user-documentation/recipes/recipe-catalog/codemods/format/jsxcurlynewline.md)
* [Enforce consistent newlines before and after dots in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/dotlocation.md)
* [Enforce consistent newlines before and after dots](/user-documentation/recipes/recipe-catalog/codemods/format/dotlocation.md)
* [Enforce consistent relative URL style](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/relativeurlstyle.md)
* [Enforce consistent spacing after the &amp;#x60;//&amp;#x60; or &amp;#x60;/*&amp;#x60; in a comment](/user-documentation/recipes/recipe-catalog/codemods/format/spacedcomment.md)
* [Enforce consistent spacing after the &lt;!-- and before the --&gt; in a HTML comment](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/spacedhtmlcomment.md)
* [Enforce consistent spacing around &amp;#x60;*&amp;#x60; operators in generator functions](/user-documentation/recipes/recipe-catalog/codemods/format/generatorstarspacing.md)
* [Enforce consistent spacing before &amp;#x60;function&amp;#x60; definition opening parenthesis](/user-documentation/recipes/recipe-catalog/codemods/format/spacebeforefunctionparen.md)
* [Enforce consistent spacing before and after commas in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/commaspacing.md)
* [Enforce consistent spacing before and after commas](/user-documentation/recipes/recipe-catalog/codemods/format/commaspacing.md)
* [Enforce consistent spacing before and after keywords in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/keywordspacing.md)
* [Enforce consistent spacing before and after keywords](/user-documentation/recipes/recipe-catalog/codemods/format/keywordspacing.md)
* [Enforce consistent spacing before and after semicolons](/user-documentation/recipes/recipe-catalog/codemods/format/semispacing.md)
* [Enforce consistent spacing before and after the arrow in arrow functions in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/arrowspacing.md)
* [Enforce consistent spacing before and after the arrow in arrow functions](/user-documentation/recipes/recipe-catalog/codemods/format/arrowspacing.md)
* [Enforce consistent spacing before blocks](/user-documentation/recipes/recipe-catalog/codemods/format/spacebeforeblocks.md)
* [Enforce consistent spacing before or after unary operators in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/spaceunaryops.md)
* [Enforce consistent spacing before or after unary operators](/user-documentation/recipes/recipe-catalog/codemods/format/spaceunaryops.md)
* [Enforce consistent spacing between keys and values in object literal properties in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/keyspacing.md)
* [Enforce consistent spacing between keys and values in object literal properties](/user-documentation/recipes/recipe-catalog/codemods/format/keyspacing.md)
* [Enforce consistent spacing inside array brackets in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/arraybracketspacing.md)
* [Enforce consistent spacing inside array brackets](/user-documentation/recipes/recipe-catalog/codemods/format/arraybracketspacing.md)
* [Enforce consistent spacing inside braces in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/objectcurlyspacing.md)
* [Enforce consistent spacing inside braces](/user-documentation/recipes/recipe-catalog/codemods/format/objectcurlyspacing.md)
* [Enforce consistent spacing inside computed property brackets](/user-documentation/recipes/recipe-catalog/codemods/format/computedpropertyspacing.md)
* [Enforce consistent spacing inside parentheses in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/spaceinparens.md)
* [Enforce consistent spacing inside parentheses](/user-documentation/recipes/recipe-catalog/codemods/format/spaceinparens.md)
* [Enforce consistent usage of destructuring assignment of props, state, and context](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/destructuringassignment.md)
* [Enforce correct `Error` subclassing](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/customerrordefinition.md)
* [Enforce dot notation whenever possible in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/dotnotation.md)
* [Enforce dot notation whenever possible](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/dotnotation.md)
* [Enforce explicitly comparing the length or size property of a value](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/explicitlengthcheck.md)
* [Enforce line breaks after each array element in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/arrayelementnewline.md)
* [Enforce line breaks after each array element](/user-documentation/recipes/recipe-catalog/codemods/format/arrayelementnewline.md)
* [Enforce line breaks after opening and before closing block-level tags](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/blocktagnewline.md)
* [Enforce line breaks between arguments of a function call](/user-documentation/recipes/recipe-catalog/codemods/format/functioncallargumentnewline.md)
* [Enforce linebreaks after opening and before closing array brackets in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/arraybracketnewline.md)
* [Enforce linebreaks after opening and before closing array brackets](/user-documentation/recipes/recipe-catalog/codemods/format/arraybracketnewline.md)
* [Enforce location of semicolons](/user-documentation/recipes/recipe-catalog/codemods/format/semistyle.md)
* [Enforce lowercase test names](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/preferlowercasetitle.md)
* [Enforce maximum of props on a single line in JSX](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxmaxpropsperline.md)
* [Enforce maximum of props on a single line in JSX](/user-documentation/recipes/recipe-catalog/codemods/format/jsxmaxpropsperline.md)
* [Enforce new lines between multi-line properties in Vue components](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/newlinebetweenmultilineproperty.md)
* [Enforce newlines between operands of ternary expressions in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/multilineternary.md)
* [Enforce newlines between operands of ternary expressions](/user-documentation/recipes/recipe-catalog/codemods/format/multilineternary.md)
* [Enforce no spaces between braces](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/emptybracespaces.md)
* [Enforce or ban the use of inline type-only markers for named imports](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/consistenttypespecifierstyle.md)
* [Enforce or disallow capitalization of the first letter of a comment](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/capitalizedcomments.md)
* [Enforce or disallow parentheses when invoking a constructor with no arguments](/user-documentation/recipes/recipe-catalog/codemods/format/newparens.md)
* [Enforce or disallow spaces around equal signs in JSX attributes](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxequalsspacing.md)
* [Enforce or disallow spaces around equal signs in JSX attributes](/user-documentation/recipes/recipe-catalog/codemods/format/jsxequalsspacing.md)
* [Enforce or disallow spaces inside of curly braces in JSX attributes and expressions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxcurlyspacing.md)
* [Enforce or disallow spaces inside of curly braces in JSX attributes and expressions](/user-documentation/recipes/recipe-catalog/codemods/format/jsxcurlyspacing.md)
* [Enforce order of attributes](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/sortattributes.md)
* [Enforce order of attributes](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/attributesorder.md)
* [Enforce order of component top-level elements](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/blockorder.md)
* [Enforce order of component top-level elements](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/componenttagsorder.md)
* [Enforce order of defineEmits and defineProps compiler macros](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/definemacrosorder.md)
* [Enforce order of properties in components](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/orderincomponents.md)
* [Enforce placing object properties on separate lines in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/objectpropertynewline.md)
* [Enforce placing object properties on separate lines](/user-documentation/recipes/recipe-catalog/codemods/format/objectpropertynewline.md)
* [Enforce propTypes declarations alphabetical sorting](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/sortproptypes.md)
* [Enforce proper case for numeric literals](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/numberliteralcase.md)
* [Enforce proper position of the first property in JSX](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxfirstpropnewline.md)
* [Enforce proper position of the first property in JSX](/user-documentation/recipes/recipe-catalog/codemods/format/jsxfirstpropnewline.md)
* [Enforce props alphabetical sorting](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxsortprops.md)
* [Enforce props alphabetical sorting](/user-documentation/recipes/recipe-catalog/codemods/format/jsxsortprops.md)
* [Enforce props indentation in JSX](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxindentprops.md)
* [Enforce props indentation in JSX](/user-documentation/recipes/recipe-catalog/codemods/format/jsxindentprops.md)
* [Enforce props with default values to be optional](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/norequiredpropwithdefault.md)
* [Enforce quotes style of HTML attributes](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/htmlquotes.md)
* [Enforce self-closing style](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/htmlselfclosing.md)
* [Enforce shorthand or standard form for React fragments](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxfragments.md)
* [Enforce sorted import declarations within modules](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/sortimports.md)
* [Enforce spacing around colons of switch statements](/user-documentation/recipes/recipe-catalog/codemods/format/switchcolonspacing.md)
* [Enforce spacing before closing bracket in JSX](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxspacebeforeclosing.md)
* [Enforce spacing between rest and spread operators and their expressions](/user-documentation/recipes/recipe-catalog/codemods/format/restspreadspacing.md)
* [Enforce specific casing for the component naming style in template](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/componentnameintemplatecasing.md)
* [Enforce static class names order](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/staticclassnamesorder.md)
* [Enforce test and it usage conventions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/consistenttestit.md)
* [Enforce that props are read-only](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/preferreadonlyprops.md)
* [Enforce the casing of component name in components options](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/componentoptionsnamecasing.md)
* [Enforce the consistent use of either backticks, double, or single quotes](/user-documentation/recipes/recipe-catalog/codemods/format/quotes.md)
* [Enforce the consistent use of either double or single quotes in JSX attributes](/user-documentation/recipes/recipe-catalog/codemods/format/jsxquotes.md)
* [Enforce the location of arrow function bodies](/user-documentation/recipes/recipe-catalog/codemods/format/implicitarrowlinebreak.md)
* [Enforce the location of first attribute](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/firstattributelinebreak.md)
* [Enforce the location of single-line statements](/user-documentation/recipes/recipe-catalog/codemods/format/nonblockstatementbodyposition.md)
* [Enforce the maximum number of attributes per line](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/maxattributesperline.md)
* [Enforce the style of numeric separators by correctly grouping digits](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/numericseparatorsstyle.md)
* [Enforce the use of Unicode escapes instead of hexadecimal escapes](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nohexescape.md)
* [Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nonewbuffer.md)
* [Enforce the use of `Math.trunc()` instead of bitwise operators](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefermathtrunc.md)
* [Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol`, and `BigInt`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/newforbuiltins.md)
* [Enforce throwing `TypeError` in type checking conditions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefertypeerror.md)
* [Enforce unified line brake in HTML comments](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/htmlcommentcontentnewline.md)
* [Enforce unified spacing in HTML comments](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/htmlcommentcontentspacing.md)
* [Enforce unified spacing in mustache](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/mustachespacing.md)
* [Enforce use of defineOptions instead of default export](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/preferdefineoptions.md)
* [Enforce use of shorthand syntax in attribute](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/shorthandattribute.md)
* [Enforce use of shorthand syntax in directives](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/shorthanddirective.md)
* [Enforce using the digits argument with `Number#toFixed()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/requirenumbertofixeddigitsargument.md)
* [Enforce using the separator argument with `Array#join()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/requirearrayjoinseparator.md)
* [Enforce v-for directive's delimiter style](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/vfordelimiterstyle.md)
* [Enforce valid titles](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/validtitle.md)
* [Enforce variables to be declared either together or separately in functions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/onevar.md)
* [Enforce whitespace in and around the JSX opening and closing brackets](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxtagspacing.md)
* [Enforce whitespace in and around the JSX opening and closing brackets](/user-documentation/recipes/recipe-catalog/codemods/format/jsxtagspacing.md)
* [Enforce writing style for handlers in v-on directives](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/vonhandlerstyle.md)
* [Enforces consistent spacing inside TypeScript type generics](/user-documentation/recipes/recipe-catalog/codemods/format/typegenericspacing.md)
* [Ensure all imports appear before other statements](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/first.md)
* [Expect space before the type declaration in the named tuple](/user-documentation/recipes/recipe-catalog/codemods/format/typenamedtuplespacing.md)
* [Fix whitespace-insensitive template indentation](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/templateindent.md)
* [Forbid empty named import](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noemptynamedblocks.md)
* [Forbid import of modules using absolute paths](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noabsolutepath.md)
* [Forbid import statements with CommonJS module.exports](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noimportmoduleexports.md)
* [Forbid importing packages through relative paths](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/norelativepackages.md)
* [Forbid namespace (a.k.a. &quot;wildcard&quot; `*`) imports](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nonamespace.md)
* [Forbid repeated import of the same module in multiple places](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noduplicates.md)
* [Forbid unnecessary path segments in import and require statements](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/nouselesspathsegments.md)
* [Format TypeScript using ESLint Prettier plugin](/user-documentation/recipes/recipe-catalog/codemods/ecmascript/eslinttypescriptprettier.md)
* [Improve regexes by making them shorter, consistent, and safer](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/betterregex.md)
* [Indentation for binary operators](/user-documentation/recipes/recipe-catalog/codemods/format/indentbinaryops.md)
* [Interactions should be awaited](/user-documentation/recipes/recipe-catalog/codemods/cleanup/storybook/awaitinteractions.md)
* [Lifecycle methods should be methods on the prototype, not class fields](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/noarrowfunctionlifecycle.md)
* [Lint TypeScript code using ESLint](/user-documentation/recipes/recipe-catalog/codemods/ecmascript/eslinttypescriptdefaults.md)
* [Prefer JavaScript modules (ESM) over CommonJS](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefermodule.md)
* [Prefer `.addEventListener()` and `.removeEventListener()` over on-functions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferaddeventlistener.md)
* [Prefer `.at()` method for index access and `String#charAt()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferat.md)
* [Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefermoderndomapis.md)
* [Prefer `.find()` and `.findLast()` over the first or last element from `.filter()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferarrayfind.md)
* [Prefer `.flatMap()` over `.map().flat()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferarrayflatmap.md)
* [Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferincludes.md)
* [Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferqueryselector.md)
* [Prefer `.some()` over `.filter().length` check and `.{find,findLast}()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferarraysome.md)
* [Prefer `Array#flat()` over legacy techniques to flatten arrays](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferarrayflat.md)
* [Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferarrayindexof.md)
* [Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferdatenow.md)
* [Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferkeyboardeventkey.md)
* [Prefer `Node#append()` over `Node#appendChild()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferdomnodeappend.md)
* [Prefer `Number` static properties over global ones](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefernumberproperties.md)
* [Prefer `Reflect.apply()` over `Function#apply()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferreflectapply.md)
* [Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferregexptest.md)
* [Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefersethas.md)
* [Prefer `String#replaceAll()` over regex searches with the global flag](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferstringreplaceall.md)
* [Prefer `String#slice()` over `String#substr()` and `String#substring()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferstringslice.md)
* [Prefer `String#startsWith()` &amp; `String#endsWith()` over `RegExp#test()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferstringstartsendswith.md)
* [Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferstringtrimstartend.md)
* [Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferdomnoderemove.md)
* [Prefer `export…from` when re-exporting](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferexportfrom.md)
* [Prefer `for…of` over the `forEach` method](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noarrayforeach.md)
* [Prefer `switch` over multiple `else-if`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferswitch.md)
* [Prefer await expect(...).resolves over expect(await ...) syntax](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/preferexpectresolves.md)
* [Prefer borrowing methods from the prototype instead of the instance](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferprototypemethods.md)
* [Prefer default parameters over reassignment](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferdefaultparameters.md)
* [Prefer mock resolved/rejected shorthands for promises](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/prefermockpromiseshorthand.md)
* [Prefer modern Math APIs over legacy patterns](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefermodernmathapis.md)
* [Prefer negative index over `.length - index` when possible](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefernegativeindex.md)
* [Prefer omitting the catch binding parameter](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferoptionalcatchbinding.md)
* [Prefer reading a JSON file as a buffer](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferjsonparsebuffer.md)
* [Prefer ternary expressions over simple `if-else` statements](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferternary.md)
* [Prefer the spread operator over `Array.from()`, `Array#concat()`, `Array#{slice,toSpliced}()` and `String#split('')`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferspread.md)
* [Prefer using `.dataset` on DOM elements over calling attribute methods](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferdomnodedataset.md)
* [Prefer using `Object.fromEntries()` to transform a list of key-value pairs into an object](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferobjectfromentries.md)
* [Prefer using `Set#size` instead of `Array#length`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefersetsize.md)
* [Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefernativecoercionfunctions.md)
* [Prefer using the `node:` protocol when importing Node.js builtin modules](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefernodeprotocol.md)
* [Prevent abbreviations](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preventabbreviations.md)
* [Recommended ESLint Styling](/user-documentation/recipes/recipe-catalog/codemods/format/recommendedeslintstyling.md)
* [Recommended Jest code cleanup](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/recommendedjestcodecleanup.md)
* [Recommended Storybook code cleanup](/user-documentation/recipes/recipe-catalog/codemods/cleanup/storybook/recommendedstorybookcodecleanup.md)
* [Recommended svelte code cleanup](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/recommendedsveltecodecleanup.md)
* [Recommended vue code cleanup](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/recommendedvuecodecleanup.md)
* [Require `Array.isArray()` instead of `instanceof Array`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/noinstanceofarray.md)
* [Require `let` or `const` instead of `var`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/novar.md)
* [Require `new` when throwing an error](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/thrownewerror.md)
* [Require a newline after each call in a method chain](/user-documentation/recipes/recipe-catalog/codemods/format/newlineperchainedcall.md)
* [Require a specific member delimiter style for interfaces and type literals](/user-documentation/recipes/recipe-catalog/codemods/format/memberdelimiterstyle.md)
* [Require braces around arrow function bodies](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/arrowbodystyle.md)
* [Require class directives instead of ternary expressions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/preferclassdirective.md)
* [Require consistent spacing around type annotations](/user-documentation/recipes/recipe-catalog/codemods/format/typeannotationspacing.md)
* [Require const declarations for variables that are never reassigned after declared](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferconst.md)
* [Require destructuring from arrays and/or objects](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferdestructuring.md)
* [Require empty lines around comments](/user-documentation/recipes/recipe-catalog/codemods/format/linesaroundcomment.md)
* [Require escape sequences to use uppercase values](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/escapecase.md)
* [Require key attribute for conditionally rendered repeated components](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/vifelsekey.md)
* [Require one JSX element per line](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxoneexpressionperline.md)
* [Require one JSX element per line](/user-documentation/recipes/recipe-catalog/codemods/format/jsxoneexpressionperline.md)
* [Require or disallow &quot;Yoda&quot; conditions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/yoda.md)
* [Require or disallow Unicode byte order mark (BOM)](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/unicodebom.md)
* [Require or disallow a space before tag's closing brackets](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/htmlclosingbracketspacing.md)
* [Require or disallow an empty line between class members](/user-documentation/recipes/recipe-catalog/codemods/format/linesbetweenclassmembers.md)
* [Require or disallow assignment operator shorthand where possible](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/operatorassignment.md)
* [Require or disallow logical assignment operator shorthand](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/logicalassignmentoperators.md)
* [Require or disallow method and property shorthand syntax for object literals in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/objectshorthand.md)
* [Require or disallow method and property shorthand syntax for object literals](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/objectshorthand.md)
* [Require or disallow newline at the end of files](/user-documentation/recipes/recipe-catalog/codemods/format/eollast.md)
* [Require or disallow newlines around variable declarations](/user-documentation/recipes/recipe-catalog/codemods/format/onevardeclarationperline.md)
* [Require or disallow newlines between sibling tags in template](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/paddinglinebetweentags.md)
* [Require or disallow padding lines between blocks](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/paddinglinebetweenblocks.md)
* [Require or disallow padding lines between statements](/user-documentation/recipes/recipe-catalog/codemods/format/paddinglinebetweenstatements.md)
* [Require or disallow padding lines in component definition](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/paddinglinesincomponentdefinition.md)
* [Require or disallow padding within blocks](/user-documentation/recipes/recipe-catalog/codemods/format/paddedblocks.md)
* [Require or disallow semicolons instead of ASI](/user-documentation/recipes/recipe-catalog/codemods/format/semi.md)
* [Require or disallow spacing around embedded expressions of template strings in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/templatecurlyspacing.md)
* [Require or disallow spacing around embedded expressions of template strings](/user-documentation/recipes/recipe-catalog/codemods/format/templatecurlyspacing.md)
* [Require or disallow spacing around the &amp;#x60;*&amp;#x60; in &amp;#x60;yield*&amp;#x60; expressions](/user-documentation/recipes/recipe-catalog/codemods/format/yieldstarspacing.md)
* [Require or disallow spacing between function identifiers and their invocations in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/funccallspacing.md)
* [Require or disallow spacing between function identifiers and their invocations. Alias of &amp;#x60;function-call-spacing&amp;#x60;](/user-documentation/recipes/recipe-catalog/codemods/format/funccallspacing.md)
* [Require or disallow spacing between function identifiers and their invocations](/user-documentation/recipes/recipe-catalog/codemods/format/functioncallspacing.md)
* [Require or disallow spacing between template tags and their literals](/user-documentation/recipes/recipe-catalog/codemods/format/templatetagspacing.md)
* [Require or disallow strict mode directives](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/strict.md)
* [Require or disallow trailing commas in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/commadangle.md)
* [Require or disallow trailing commas](/user-documentation/recipes/recipe-catalog/codemods/format/commadangle.md)
* [Require or prevent a new line after jsx elements and expressions](/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/jsxnewline.md)
* [Require or prevent a new line after jsx elements and expressions](/user-documentation/recipes/recipe-catalog/codemods/format/jsxnewline.md)
* [Require parentheses around arrow function arguments](/user-documentation/recipes/recipe-catalog/codemods/format/arrowparens.md)
* [Require parentheses around immediate &amp;#x60;function&amp;#x60; invocations](/user-documentation/recipes/recipe-catalog/codemods/format/wrapiife.md)
* [Require parenthesis around regex literals](/user-documentation/recipes/recipe-catalog/codemods/format/wrapregex.md)
* [Require quotes around object literal property names in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/quoteprops.md)
* [Require quotes around object literal property names](/user-documentation/recipes/recipe-catalog/codemods/format/quoteprops.md)
* [Require spacing around infix operators in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/spaceinfixops.md)
* [Require spacing around infix operators](/user-documentation/recipes/recipe-catalog/codemods/format/spaceinfixops.md)
* [Require static class names in template to be in a separate class attribute](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/preferseparatestaticclass.md)
* [Require style directives instead of style attribute](/user-documentation/recipes/recipe-catalog/codemods/cleanup/svelte/preferstyledirective.md)
* [Require template literals instead of string concatenation in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/prefertemplate.md)
* [Require template literals instead of string concatenation](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/prefertemplate.md)
* [Require the use of === and !== in `&lt;template&gt;`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/vue/eqeqeq.md)
* [Require the use of `===` and `!==`](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/eqeqeq.md)
* [Require using .only and .skip over f and x](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/notestprefixes.md)
* [Require using arrow functions for callbacks](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/preferarrowcallback.md)
* [Require variables within the same declaration block to be sorted](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/sortvars.md)
* [Stories should use PascalCase](/user-documentation/recipes/recipe-catalog/codemods/cleanup/storybook/preferpascalcase.md)
* [Story files should have a default export](/user-documentation/recipes/recipe-catalog/codemods/cleanup/storybook/defaultexports.md)
* [Suggest using jest.spyOn()](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/preferspyon.md)
* [Suggest using test.todo](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/prefertodo.md)
* [Suggest using the built-in comparison matchers](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/prefercomparisonmatcher.md)
* [Suggest using toBe() for primitive literals](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/prefertobe.md)
* [Suggest using toContain()](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/prefertocontain.md)
* [Suggest using toHaveLength()](/user-documentation/recipes/recipe-catalog/codemods/cleanup/jest/prefertohavelength.md)
* [Use destructured variables over properties](/user-documentation/recipes/recipe-catalog/codemods/cleanup/javascript/consistentdestructuring.md)
* [Use expect from @storybook/jest](/user-documentation/recipes/recipe-catalog/codemods/cleanup/storybook/usestorybookexpect.md)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-codemods` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.codemods.ESLint")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-codemods:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-codemods:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.codemods.ESLint")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.codemods.ESLint</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-codemods</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-codemods:RELEASE -Drewrite.activeRecipes=org.openrewrite.codemods.ESLint -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ESLint
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-codemods:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.codemods.ESLint" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.codemods.ESLintMessages" label="ESLintMessages">

### ESLint messages
**org.openrewrite.codemods.ESLintMessages**

_Errors and warnings as reported by ESLint._

| Column Name | Description |
| ----------- | ----------- |
| Source Path | The source path of the file. |
| Rule ID | ESLint Rule ID. |
| Severity | Either `Warning` or `Error`. |
| Fatal | Is this a fatal error (like a parse error). |
| Message | The message created by the rule. |
| Line | Line in source file this message pertains to. |
| Column | Column in source file this message pertains to. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
