export function changeDateFormat(dateStr) {
  const date = new Date(dateStr);

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  return date.toLocaleDateString("en-GB", options);
}
