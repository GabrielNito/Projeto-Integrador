export function parseDbAttributes(attributes: { [key: string]: string }) {
  const newData: { [key: string]: string } = {};
  for (let att in attributes) {
    newData[att] = JSON.parse(attributes[att]);
  }
  return newData;
}
