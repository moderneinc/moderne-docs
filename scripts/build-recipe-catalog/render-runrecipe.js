// Port of src/components/RunRecipe/index.tsx to a plain function that returns
// HTML, used by the static recipe page renderer. Branch logic mirrors the
// React component; output is hand-written HTML so no React SSR runtime is
// needed in the build pipeline.
//
// IMPORTANT: keep this in sync with the React component. Any visual or
// behavioural change should be mirrored here (and ideally captured as a test).

const latestVersions = require('../../src/plugins/latest-versions');

const MOD_CLI_LINK = 'https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro';
const MOD_JS_CONFIG_LINK = 'https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript';

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function codeBlock(language, title, content) {
  // Minimal stand-in for @theme/CodeBlock. Production should hook up Prism
  // highlighting; the POC just renders a styled pre/code.
  const titleHtml = title ? `<div class="recipe-code-title">${escapeHtml(title)}</div>` : '';
  return `${titleHtml}<pre class="recipe-code language-${escapeHtml(language)}"><code>${escapeHtml(content)}</code></pre>`;
}

function resolveVersions(text) {
  return text.replace(/\{\{\w+\}\}/g, (token) => latestVersions[token] || token);
}

function renderRunRecipe(props) {
  const {
    recipeName,
    displayName,
    groupId,
    artifactId,
    versionKey,
    requiresConfiguration = false,
    cliOptions = '',
    useFullyQualifiedCliName = false,
    npmPackage,
    pipPackage,
    nugetPackage,
  } = props;

  const hasDependency = !!(groupId && artifactId);
  const cliRecipeName = useFullyQualifiedCliName
    ? recipeName
    : recipeName.substring(recipeName.lastIndexOf('.') + 1);
  const version = versionKey ? resolveVersions(`{{${versionKey}}}`) : '';

  // Non-JVM language recipes (JavaScript, Python, C#) share the same structure.
  const nonJvmPackage =
    npmPackage ? { manager: 'npm', pkg: npmPackage, lang: 'JavaScript' } :
    pipPackage ? { manager: 'pip', pkg: pipPackage, lang: 'Python' } :
    nugetPackage ? { manager: 'nuget', pkg: nugetPackage, lang: 'C#' } :
    null;

  if (nonJvmPackage) {
    const { manager, pkg, lang } = nonJvmPackage;
    const jsExtra = lang === 'JavaScript'
      ? ` For JavaScript specific configuration instructions, please see our <a href="${MOD_JS_CONFIG_LINK}">configuring JavaScript guide</a>.`
      : '';
    return [
      `<p>In order to run ${lang} recipes, you will need to use the <a href="${MOD_CLI_LINK}">Moderne CLI</a>.${jsExtra}</p>`,
      `<p>Once the CLI is installed, you can install this ${lang} recipe package by running the following command:</p>`,
      codeBlock('shell', 'Install the recipe package', `mod config recipes ${manager} install ${pkg}`),
      `<p>Then, you can run the recipe via:</p>`,
      codeBlock('shell', 'Run the recipe', `mod run . --recipe ${recipeName}`),
    ].join('\n');
  }

  // Default (Java/JVM)
  const out = [];
  if (!requiresConfiguration) {
    out.push(`<p>This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI.</p>`);
  }
  out.push(`<p>You will need to have configured the <a href="${MOD_CLI_LINK}">Moderne CLI</a> on your machine before you can run the following command.</p>`);
  out.push(codeBlock('shell', 'shell', `mod run . --recipe ${cliRecipeName}${cliOptions}`));
  if (hasDependency) {
    out.push(`<p>If the recipe is not available locally, then you can install it using:</p>`);
    out.push(codeBlock('shell', null, `mod config recipes jar install ${groupId}:${artifactId}:${version}`));
  }
  return out.join('\n');
}

module.exports = { renderRunRecipe };
