/** Turn a title into an anchor id, e.g. "What's new: v4.12" -> "whats-new-v412" */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['’.]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
