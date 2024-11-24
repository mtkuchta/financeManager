export const getPaginationRange = (
  currentPage,
  totalPages,
  delta,
  isMobile
) => {
  const range = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      range.push(i);
    }
    return range;
  }

  if ((currentPage + 1 < 5) & isMobile) {
    return [1, 2, 3, 4, "...", totalPages];
  }

  for (
    let i = Math.max(2, currentPage + 1 - delta);
    i <= Math.min(totalPages - 1, currentPage + 1 + delta);
    i++
  ) {
    range.push(i);
  }

  if (currentPage + 1 - delta > delta + 1) {
    range.unshift("...");
  }

  if (currentPage + 2 + delta < totalPages) {
    range.push("...");
  }

  return [1, ...range, totalPages];
};
