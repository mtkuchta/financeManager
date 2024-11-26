export function getValueFromTable(table, name) {
  const values = [];

  table.forEach((item) => {
    if (!values.includes(item[name])) {
      values.push(item[name]);
    }
  });
  return values;
}
