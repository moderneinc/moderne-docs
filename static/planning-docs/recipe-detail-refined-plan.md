# Recipe detail redesign — refined plan (v1 preview page)

Decisions locked: v1 = frame/UI only (no backend, no generator). Defer two-panel sticky layout to phase 2.
Build a real preview page in-repo on this branch. Reuse existing components. Keep close to today's layout.
Optimize for: human readability · AI parsing · structured semantic formatting · developer understanding · product conversion.

## 1. Reusable patterns that ALREADY EXIST (compose, don't rebuild)

| Existing thing | What it gives us | Use in v1 |
| --- | --- | --- |
| `NeoButton` (variant primary/secondary/outline/text, sizes, icon, button-or-link) | All buttons + menu trigger + menu items | Primary CTA, "Copy page" menu, copy-id |
| `NeoCard` (title/desc/icon/gem/up-to-2 buttons, link or button) | Card with actions | "At a glance" summary card; related-recipe cards (phase 2 data) |
| `ModerneLink`/`RecipeCallout` | Existing "run on app.moderne.io" CTA | Re-skin as primary "Try in Platform" |
| `RunRecipe` | CLI run/install block | Keep (the "Run this recipe" path) |
| `VersionBanner` | Light full-width band pattern | Reference for the header zone treatment (restraint, not a heavy card) |
| `NeoMegaMenu` (+ .module.css) | Existing dropdown/menu interaction + styling | Pattern to mirror for the "Copy page" dropdown |
| Swizzled `DocCard` (gemIcon), `Admonition`, breadcrumbs, right-side TOC | Cards, callouts, on-page nav | Reuse as-is |
| Docusaurus `CodeBlock` | Built-in copy button on code | Keep for code/examples |

NOT found (so these are net-new but small): any clipboard/copy-to-clipboard util, any page-level dropdown
component. "Copy as Markdown" = `navigator.clipboard.writeText(...)`, trivial and pure front-end.

## 2. "Copy page" menu — yes, BOTH copy and open-in-LLM (answer to Q3)

A `NeoButton` trigger ("Copy page" ▾) opening a small menu (mirroring NeoMegaMenu styling):
* **Copy as Markdown** — clipboard. Fully functional in the mockup with the hardcoded recipe markdown.
* **Open in Claude** — link to `claude.ai/new?q=<prompt + page URL>`. Pure front-end (a link).
* **Open in ChatGPT** — link to `chatgpt.com/?q=<prompt + page URL>`. Pure front-end (a link).

Honest nuance: "Open in Claude/ChatGPT" work as links today by passing the page URL. For the LLM to ingest the
*clean markdown* (not the rendered HTML), the robust version wants a per-page `.md` endpoint / `llms.txt` — that
is phase-2 build work. v1 mockup demonstrates the full menu; Copy-as-Markdown is genuinely functional.

## 3. v1 preview page scope (frame only)

Build `src/pages/recipe-frame-preview` (standalone, unlinked, hardcoded CommonStaticAnalysis content):
1. **Header zone** (light band, à la VersionBanner restraint — NOT a heavy card):
   * Title + fully-qualified recipe id with a **copy-id** button.
   * Compact metadata row: license, source links, recipe type, language(s) — styled as labeled chips/def-list.
   * **Primary CTA "Try in Platform"** (re-skinned ModerneLink/NeoButton).
   * **"Copy page" menu** (Copy as Markdown / Open in Claude / Open in ChatGPT).
2. **Readability polish**: stronger heading hierarchy; de-italicize the description into clean lead prose;
   tidy Options + Data Tables for scanning; make the long composite recipe-list **collapsible**.
3. **Body unchanged in order**: Definition → Examples (lightly elevated) → Usage (RunRecipe) → Data Tables.
4. Keep `yarn lint:markdown` + `yarn build` green; route stays out of the sidebar/nav.

## 4. Final uplift analysis — everything else, mapped to the 5 goals

Legend: ✅ = v1 frame (this preview) · 🔶 = phase 2 (generator/build) · conf = confidence it's accurate/feasible.

| Idea | Goals served | Where | Conf |
| --- | --- | --- | --- |
| Header zone (metadata + CTA + actions) | readability, conversion | ✅ v1 | high |
| "Copy page" menu (MD + Open in Claude/ChatGPT) | AI parsing | ✅ v1 (links); 🔶 .md endpoint for clean ingest | high / med |
| Copy recipe ID button | dev understanding | ✅ v1 | high |
| Typographic hierarchy + de-italic description | readability | ✅ v1 | high |
| Collapsible long recipe lists (composites) | readability | ✅ v1 | high |
| "At a glance" summary chips (type, languages, #recipes, est. time saved) | readability, dev understanding, conversion | 🔶 needs accurate data from generator (some derivable) | med |
| Elevated/sticky primary CTA | conversion | ✅ v1 | high |
| Secondary CTAs: "Learn how automation works", "View in DevCenter" (static links) | conversion | ✅ v1 | high |
| Secondary CTAs: "Explore related recipes", "See automated results" | conversion | 🔶 needs related/results data | med |
| Surface Preconditions/prerequisites more clearly | dev understanding | ✅ v1 (restyle existing) | high |
| "Transformation intent" (what changes & why) one-liner | dev understanding, AI parsing | 🔶 new generator field | high it helps / low it's v1 |
| JSON-LD (SoftwareApplication/HowTo) in <head> | AI parsing, semantic | 🔶 swizzle + data (basic version possible) | med |
| Rich/structured frontmatter (description, tags, type) | AI parsing, semantic | 🔶 generator frontmatter | high |
| `llms.txt` / `llms-full.txt` + per-page `.md` | AI parsing | 🔶 site/build | high it helps |
| Estimated time-savings as a headline stat | conversion | 🔶 data exists in RecipeRunStats | med |
| Full two-panel sticky examples (Stripe/GitHub) | readability | 🔶 phase 2 (too jarring for v1) | high |

Takeaway: v1 frame delivers the readability lift + the visible AI-readiness (copy/open-in-LLM) + conversion lift.
The deeper AI/semantic wins (frontmatter, JSON-LD, llms.txt, intent line, related-recipes) are real but live in
the generator/build = phase 2. The preview page can show *placeholders* for the data-dependent ideas so the
front-end + OpenRewrite teams can see the target.
