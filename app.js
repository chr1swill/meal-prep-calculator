// ask for total grams of chicken and days
// multiply total grams of chicken by 0.23 to get total grams of protein
// display total grams of protein on screen
// divide total grams of chicken by days to get grams of chicken per day
// display total grams og chicken per a day on screen
// divide total grams of protein by days to get grams of protein per day
// display total grams protein per a day on screen

const PROTEIN_PER_GRAM_OF_CHICKEN = 0.23;

const calculateGramsOfChickenPerDay = (totalGramsOfChicken, totalDays) => {
  return totalGramsOfChicken / totalDays;
};
const calculateTotalProtein = (gramsOfChicken) => {
  return gramsOfChicken * PROTEIN_PER_GRAM_OF_CHICKEN;
};
const calculateProteinPerDay = (totalGramsOfChicken, totalDays) => {
  const gramsOfChickenPerDay = calculateGramsOfChickenPerDay(
    totalGramsOfChicken,
    totalDays
  );
  return calculateTotalProtein(gramsOfChickenPerDay);
};

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const totalGramsOfChicken = parseFloat(
    document.getElementById("total-grams-of-chicken").value
  );
  const totalDays = parseFloat(document.getElementById("total-days").value);

  if (isNaN(totalGramsOfChicken) || isNaN(totalDays)) {
    alert("Please enter a valid number");
    return;
  }

  const gramsOfChickenPerDayAsResult = calculateGramsOfChickenPerDay(
    totalGramsOfChicken,
    totalDays
  ).toFixed(2);
  const proteinPerDayAsResult = calculateProteinPerDay(
    totalGramsOfChicken,
    totalDays
  ).toFixed(2);
  const totalProteinAsResult =
    calculateTotalProtein(totalGramsOfChicken).toFixed(2);

  document.getElementById(
    "total-protein-result"
  ).innerHTML = `${totalProteinAsResult}g of protein total`;
  document.getElementById(
    "chicken-per-day-result"
  ).innerHTML = `${gramsOfChickenPerDayAsResult}g of chicken per day`;
  document.getElementById(
    "protein-per-day-result"
  ).innerHTML = `${proteinPerDayAsResult}g of protein per day`;
});
