/**
 * Asserts that a value is an instance of a given type.
 *
 * @param value The value to test.
 * @param type The type of which value must be an instance.
 */
export function assertType<T>(value: any, type: new (...args: any) => T): T {
  if (value instanceof type) {
    return value as T;
  }
  throw new TypeError(
    `Expected value of type: ${type} but got ${typeof value}`
  );
}

/**
 * Locates an instance of a given type within an array.
 *
 * @param container The array to search.
 * @param type The type of which value must be an instance.
 * @return The located value
 * @throws {TypeError} if the value was not found or not of
 */
export function findInstanceOf<A, T extends A>(
  container: A[],
  type: new (...args: any) => T
) {
  const value = container.find((v) => v instanceof type);
  if (value !== undefined) {
    return value as T;
  }
  throw new TypeError(`Array does not contain a value of type: ${type}`);
}
