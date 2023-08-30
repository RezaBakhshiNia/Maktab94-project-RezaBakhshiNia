export function filterAndKeepLatestObjects(array) {
  const latestObjects = {};
  for (const obj of array) {
    if (Object.values(obj).includes(undefined)) continue;
    const key =
      Object.keys(obj)
        .filter((k) => k !== "id")
        .sort()
        .join("-") +
      "-" +
      obj.id;
    latestObjects[key] = obj;
  }
  const output = Object.values(latestObjects);
  return output;
}
