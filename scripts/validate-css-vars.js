#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Extract all CSS variables from a CSS file
function extractVariables(cssContent) {
  const regex = /--[\w-]+/g;
  return [...new Set((cssContent.match(regex) || []))];
}

// Get all defined CSS variables
function getAllDefinedVariables() {
  const sources = [
    // Custom variables
    'src/css/custom.css',
    // Neo Design variables
    'node_modules/@moderneinc/neo-design/dist/colors.css',
    'node_modules/@moderneinc/neo-design/dist/semantic-colors.css',
    'node_modules/@moderneinc/neo-design/dist/typography.css',
    'node_modules/@moderneinc/neo-design/dist/spacing.css',
    'node_modules/@moderneinc/neo-design/dist/shadows.css',
    'node_modules/@moderneinc/neo-design/dist/border-radius.css'
  ];

  const allVariables = new Set();

  sources.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const variables = extractVariables(content);
      variables.forEach(v => allVariables.add(v));
    }
  });

  // Add Infima variables (Docusaurus framework)
  const infimaPrefixes = ['--ifm-'];
  infimaPrefixes.forEach(prefix => {
    // Add common Infima variables pattern
    allVariables.add(`${prefix}*`); // Wildcard for any --ifm- variable
  });

  return allVariables;
}

// Extract var() usage from CSS content
function extractVarUsage(cssContent) {
  const regex = /var\((--[\w-]+)/g;
  const matches = [];
  let match;
  while ((match = regex.exec(cssContent)) !== null) {
    matches.push({
      variable: match[1],
      fullMatch: match[0]
    });
  }
  return matches;
}

// Main validation
async function validateCSSVariables() {
  console.log('\n🔍 CSS Variable Validation Report\n');
  console.log('='.repeat(50));

  // Get all defined variables
  const definedVars = getAllDefinedVariables();
  console.log(`\n✓ Found ${definedVars.size} defined CSS variables\n`);

  // Find all CSS module files
  const cssFiles = await glob('src/**/*.css', {
    ignore: ['**/node_modules/**', '**/.docusaurus/**']
  });

  let totalVarUsages = 0;
  let undefinedVars = [];

  // Check each CSS file
  for (const file of cssFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const usages = extractVarUsage(content);
    totalVarUsages += usages.length;

    usages.forEach(({ variable, fullMatch }) => {
      const isInfimaVar = variable.startsWith('--ifm-');
      const isDefined = definedVars.has(variable) || isInfimaVar;

      if (!isDefined) {
        undefinedVars.push({ file, variable, fullMatch });
      }
    });
  }

  // Report results
  if (undefinedVars.length === 0) {
    console.log('✅ No undefined CSS variables found!\n');
    console.log(`Scanned ${cssFiles.length} CSS files`);
    console.log(`Validated ${totalVarUsages} var() usages`);
    console.log('\n' + '='.repeat(50) + '\n');
    return 0;
  }

  console.log(`\n❌ Found ${undefinedVars.length} undefined CSS variables:\n`);

  // Group by file
  const byFile = {};
  undefinedVars.forEach(({ file, variable }) => {
    if (!byFile[file]) byFile[file] = new Set();
    byFile[file].add(variable);
  });

  Object.entries(byFile).forEach(([file, variables]) => {
    console.log(`\n${file}:`);
    variables.forEach(variable => {
      console.log(`  ❌ ${variable}`);

      // Suggest similar variables
      const similar = findSimilar(variable, definedVars);
      if (similar.length > 0) {
        console.log(`     💡 Did you mean: ${similar.slice(0, 3).join(', ')}?`);
      }
    });
  });

  console.log(`\n${'='.repeat(50)}`);
  console.log(`\nSummary:`);
  console.log(`  Total CSS files scanned: ${cssFiles.length}`);
  console.log(`  Total var() usages: ${totalVarUsages}`);
  console.log(`  Undefined variables: ${undefinedVars.length}`);
  console.log(`  Success rate: ${((1 - undefinedVars.length / totalVarUsages) * 100).toFixed(1)}%`);
  console.log('\n' + '='.repeat(50) + '\n');

  return undefinedVars.length > 0 ? 1 : 0;
}

// Find similar variable names (simple Levenshtein distance)
function findSimilar(target, variables) {
  const scores = [];
  variables.forEach(v => {
    if (v === '--ifm-*') return; // Skip wildcards
    const distance = levenshteinDistance(target, v);
    if (distance < 5) {
      scores.push({ variable: v, distance });
    }
  });
  scores.sort((a, b) => a.distance - b.distance);
  return scores.map(s => s.variable);
}

// Calculate Levenshtein distance
function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// Run validation
validateCSSVariables()
  .then(exitCode => {
    process.exit(exitCode);
  })
  .catch(error => {
    console.error('Error during validation:', error);
    process.exit(1);
  });
