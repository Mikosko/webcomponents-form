export function buildValueString(id: string | null, value: any) {
  if (id == null) {
    return `${value}`;
  }

  if (value && typeof value === 'string') {
    value = `'${value}'`;
  }

  if (value && typeof value === 'object') {
    value = 'Object';
  }

  return `${id}: ${value}`.slice(0, 50);
}
