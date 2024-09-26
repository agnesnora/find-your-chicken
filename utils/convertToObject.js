export function convertToSerializableObject(leanDocument) {
  return JSON.parse(JSON.stringify(leanDocument));
}
