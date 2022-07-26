export function path<T extends Record<string, any>>(keyPath: string, item: T) {
  return keyPath
    .split('.')
    .reduce((previous, current) => previous[current], item);
}
