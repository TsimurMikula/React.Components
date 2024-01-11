export const getCountPages = (totalCount: number, limit: string): number => {
  return Math.ceil(totalCount/Number(limit));
}

export const getArrayPages = (totalPages: number) => {
  const result = [];

  for(let i = 0; i < totalPages; i++) {
    result.push(i+1)  
  }

  return result;
}