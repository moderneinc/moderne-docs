---
sidebar_label: Card Gem Icons
description: How to use gem icons with DocCards
---

# Using gem icons with DocCards

DocCards automatically display gem icons when configured via sidebar customProps.

## Available gem colors

* `blue`
* `gray`
* `green`
* `orange`
* `pink` (default)
* `red`
* `yellow`

## Usage

### In sidebars configuration

Gem icons can be specified using the `customProps` field in sidebar items:

```javascript
{
  type: 'category',
  label: 'My Category',
  customProps: {
    gemIcon: 'blue'
  },
  items: [...]
}
```

For individual document links in the sidebar:

```javascript
{
  type: 'link',
  label: 'My Document',
  href: '/path/to/doc',
  customProps: {
    gemIcon: 'orange'
  }
}
```

## Default behavior

If no `gemIcon` is specified, cards will display the pink gem icon by default.

## Examples

See cards in action on category index pages throughout the documentation.

## Implementation notes

Gem icons are stored in `/static/img/gems/` as PNG files. The component automatically constructs the path as `/img/gems/{color}.png`.

Note: Frontmatter-based gem icon configuration is not currently supported due to TypeScript type constraints in the DocCard component.
