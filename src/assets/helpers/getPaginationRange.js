export const getPaginationRange = (currentPage, totalPages, delta) => {
  //   const delta = 2;
  const range = [];

  //   if (currentPage - delta > 1) {
  //     range.push("...");
  //   }

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    range.push(i);
  }

  if (currentPage - delta > 2) {
    range.unshift("...");
  }

  if (currentPage + delta < totalPages - 1) {
    range.push("...");
  }

  console.log(range);
  console.log(currentPage, totalPages);
  return [1, ...range, totalPages];
};
