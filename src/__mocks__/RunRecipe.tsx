/** Mock of @site/src/components/RunRecipe for Storybook (the real one pulls Docusaurus runtime). */
import React from 'react';

export default function RunRecipe({
  recipeName,
  displayName,
}: {
  recipeName?: string;
  displayName?: string;
  [key: string]: unknown;
}): React.ReactElement {
  return (
    <pre>
      <code>mod run . --recipe {recipeName ?? displayName ?? '<recipe>'}</code>
    </pre>
  );
}
