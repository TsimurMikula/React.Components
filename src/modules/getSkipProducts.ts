export const getSkipProducts = (page: number, limit: string): number => {
  const skip = +limit * (page - 1);
  return skip;
}