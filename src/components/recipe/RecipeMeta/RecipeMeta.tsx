import React, { type FunctionComponent } from 'react';
import Head from '@docusaurus/Head';
import { buildRecipeJsonLd, type RecipeJsonLdInput } from './buildRecipeJsonLd';

/** Injects deterministic SoftwareSourceCode JSON-LD into the page <head>. */
export const RecipeMeta: FunctionComponent<RecipeJsonLdInput> = (props) => (
  <Head>
    <script type="application/ld+json">{JSON.stringify(buildRecipeJsonLd(props))}</script>
  </Head>
);
