export const storageKey = 'wcag-workshop';

export function storageSet(key: string, value: Record<string, string> | string | string[]): void {
  const existingObject = localStorage.getItem(storageKey);
  if (existingObject !== null) {
    const updatedObject = JSON.parse(existingObject);
    updatedObject[key] = value;
    localStorage.setItem(storageKey, JSON.stringify(updatedObject));
  } else {
    const newObject = { key: value };
    localStorage.setItem(storageKey, JSON.stringify(newObject));
  }
}

export function storageGet(key: string): string | Record<string, string> | null {
  const itemValue = localStorage.getItem(key);
  if (itemValue !== null) {
    return JSON.parse(itemValue);
  }
  return itemValue;
}

export function storageDelete(key: string): void {
  localStorage.removeItem(key);
}

export function storageClear(): void {
  localStorage.removeItem(storageKey);
}
