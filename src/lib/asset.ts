const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a public-folder path with the deployment base path.
 * `next/image` applies the base path itself, so this is only for raw links.
 */
export function asset(path?: string) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
}
