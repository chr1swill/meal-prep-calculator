export const PROTEIN_PER_GRAM_OF_CHICKEN: number = 0.23;

export const calculateGramsOfChickenPerDay = (
  totalGramsOfChicken: number,
  totalDays: number
): number => {
  return totalGramsOfChicken / totalDays;
};
export const calculateTotalProtein = (gramsOfChicken: number): number => {
  return gramsOfChicken * PROTEIN_PER_GRAM_OF_CHICKEN;
};
export const calculateProteinPerDay = (
  totalGramsOfChicken: number,
  totalDays: number
): number => {
  const gramsOfChickenPerDay = calculateGramsOfChickenPerDay(
    totalGramsOfChicken,
    totalDays
  );
  return calculateTotalProtein(gramsOfChickenPerDay);
};

export const getSplitString = (stringList: string): string[] =>
  stringList.split(/[,\s]+/);
export const getStringToArray = (stringList: string): number[] => {
  return getSplitString(stringList).map(parseFloat);
};
export const getArrayTotal = (array: number[]): number => {
  return array.reduce((a, b) => a + b);
};
