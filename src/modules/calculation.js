export const PROTEIN_PER_GRAM_OF_CHICKEN = 0.23;
export const calculateGramsOfChickenPerDay = (totalGramsOfChicken, totalDays) => {
    return totalGramsOfChicken / totalDays;
};
export const calculateTotalProtein = (gramsOfChicken) => {
    return gramsOfChicken * PROTEIN_PER_GRAM_OF_CHICKEN;
};
export const calculateProteinPerDay = (totalGramsOfChicken, totalDays) => {
    const gramsOfChickenPerDay = calculateGramsOfChickenPerDay(totalGramsOfChicken, totalDays);
    return calculateTotalProtein(gramsOfChickenPerDay);
};
export const getSplitString = (stringList) => stringList.split(/[,\s]+/);
export const getStringToArray = (stringList) => {
    return getSplitString(stringList).map(parseFloat);
};
export const getArrayTotal = (array) => {
    return array.reduce((a, b) => a + b);
};
