#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Categories mapped to CSS files
const CATEGORIES = {
  colors: 'colors.css',
  buttons: 'semantic-colors.css',
  icons: 'semantic-colors.css',
  surfaces: 'semantic-colors.css',
  status: 'semantic-colors.css',
  borders: 'semantic-colors.css',
  typography: 'typography.css',
  spacing: 'spacing.css',
  shadows: 'shadows.css',
  'border-radius': 'border-radius.css'
};

// Parse CSS file and extract variables with their values
function parseVariables(cssContent, category) {
  const variables = [];
  const lines = cssContent.split('\n');

  for (const line of lines) {
    // Match CSS variable definition: --variable-name: value;
    const match = line.match(/(--[\w-]+):\s*([^;]+);/);
    if (match) {
      variables.push({
        name: match[1],
        value: match[2].trim(),
        category
      });
    }
  }

  return variables;
}

// Get all Neo Design variables
function getAllVariables() {
  const neoDesignPath = path.join(process.cwd(), 'node_modules/@moderneinc/neo-design/dist');
  const allVariables = [];

  // Read all CSS files
  const cssFiles = [
    { file: 'colors.css', category: 'colors' },
    { file: 'semantic-colors.css', category: 'semantic' },
    { file: 'typography.css', category: 'typography' },
    { file: 'spacing.css', category: 'spacing' },
    { file: 'shadows.css', category: 'shadows' },
    { file: 'border-radius.css', category: 'border-radius' }
  ];

  cssFiles.forEach(({ file, category }) => {
    const filePath = path.join(neoDesignPath, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const variables = parseVariables(content, category);
      allVariables.push(...variables);
    }
  });

  return allVariables;
}

// Infer more specific category from variable name
function inferCategory(varName) {
  if (varName.includes('-buttons-')) return 'buttons';
  if (varName.includes('-icons-')) return 'icons';
  if (varName.includes('-surfaces-')) return 'surfaces';
  if (varName.includes('-status-')) return 'status';
  if (varName.includes('-border-')) return 'borders';
  if (varName.includes('-typography-')) return 'typography';
  if (varName.includes('-spacing')) return 'spacing';
  if (varName.includes('-shadow-')) return 'shadows';
  if (varName.includes('-border-radius')) return 'border-radius';
  if (varName.includes('-font-')) return 'typography';
  if (varName.includes('-line-height')) return 'typography';
  if (varName.match(/-(?:blue|green|gold|grey|orange|red|teal|violet|white)-/)) return 'colors';
  return null;
}

// Search for variables by keyword
function searchVariables(keyword) {
  const allVars = getAllVariables();
  const lowerKeyword = keyword.toLowerCase();

  const matches = allVars.filter(v =>
    v.name.toLowerCase().includes(lowerKeyword)
  );

  // Infer more specific categories
  matches.forEach(v => {
    const specific = inferCategory(v.name);
    if (specific) v.category = specific;
  });

  return matches;
}

// List all variables in a category
function listByCategory(category) {
  const allVars = getAllVariables();

  // Infer specific categories for all variables
  allVars.forEach(v => {
    const specific = inferCategory(v.name);
    if (specific) v.category = specific;
  });

  const matches = allVars.filter(v => v.category === category);
  return matches;
}

// Format and display results
function displayResults(results, title, jsonOutput = false) {
  if (jsonOutput) {
    console.log(JSON.stringify(results, null, 2));
    return;
  }

  if (results.length === 0) {
    console.log(`\n❌ No variables found\n`);
    return;
  }

  console.log(`\n${title}\n`);
  console.log('='.repeat(80));
  console.log('');

  // Find max lengths for alignment
  const maxNameLen = Math.max(...results.map(v => v.name.length), 20);
  const maxValueLen = Math.max(...results.map(v => v.value.length), 15);

  results.forEach(v => {
    const name = v.name.padEnd(maxNameLen);
    const value = v.value.padEnd(maxValueLen);
    const category = `[${v.category}]`;
    console.log(`  ${name}  ${value}  ${category}`);
  });

  console.log('');
  console.log('='.repeat(80));
  console.log(`\n✓ Found ${results.length} variable${results.length === 1 ? '' : 's'}\n`);
}

// Show available categories
function showCategories() {
  console.log('\n📚 Available Categories:\n');
  console.log('='.repeat(50));
  console.log('');
  Object.keys(CATEGORIES).forEach(cat => {
    console.log(`  • ${cat}`);
  });
  console.log('');
  console.log('Usage:');
  console.log('  yarn neo:list <category>');
  console.log('  yarn neo:search <keyword>');
  console.log('');
  console.log('Examples:');
  console.log('  yarn neo:list spacing');
  console.log('  yarn neo:list buttons');
  console.log('  yarn neo:search primary');
  console.log('  yarn neo:search spacing_1');
  console.log('');
  console.log('='.repeat(50) + '\n');
}

// Main CLI logic
function main() {
  const args = process.argv.slice(2);

  // Check for --json flag
  const jsonOutput = args.includes('--json');
  const filteredArgs = args.filter(arg => arg !== '--json');

  const command = filteredArgs[0];
  const param = filteredArgs[1];

  if (!command || command === 'help' || command === '--help') {
    showCategories();
    return;
  }

  if (command === 'search') {
    if (!param) {
      if (jsonOutput) {
        console.log(JSON.stringify({ error: 'Please provide a search keyword' }));
      } else {
        console.log('\n❌ Please provide a search keyword\n');
        console.log('Usage: yarn neo:search <keyword> [--json]\n');
        console.log('Example: yarn neo:search spacing\n');
        console.log('Example: yarn neo:search spacing --json\n');
      }
      return;
    }

    const results = searchVariables(param);
    displayResults(results, `🔍 Search results for "${param}"`, jsonOutput);
  }
  else if (command === 'list') {
    if (!param) {
      if (!jsonOutput) {
        showCategories();
      } else {
        console.log(JSON.stringify({ categories: Object.keys(CATEGORIES) }));
      }
      return;
    }

    if (!Object.keys(CATEGORIES).includes(param)) {
      if (jsonOutput) {
        console.log(JSON.stringify({
          error: `Unknown category: ${param}`,
          availableCategories: Object.keys(CATEGORIES)
        }));
      } else {
        console.log(`\n❌ Unknown category: ${param}\n`);
        showCategories();
      }
      return;
    }

    const results = listByCategory(param);
    displayResults(results, `📋 All ${param} variables`, jsonOutput);
  }
  else {
    if (jsonOutput) {
      console.log(JSON.stringify({ error: `Unknown command: ${command}` }));
    } else {
      console.log(`\n❌ Unknown command: ${command}\n`);
      showCategories();
    }
  }
}

main();
