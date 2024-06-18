export * from "./types";

/**
 * Chunks an array into subsets.
 */
export function collate<T>(array: T[], size: number): T[][] {
  const collation: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    collation.push(array.slice(i, i + size));
  }
  return collation;
}
