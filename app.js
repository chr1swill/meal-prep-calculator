// ask for total grams of chicken and days
// multiply total grams of chicken by 0.23 to get total grams of protein
// display total grams of protein on screen
// divide total grams of chicken by days to get grams of chicken per day
// display total grams og chicken per a day on screen
// divide total grams of protein by days to get grams of protein per day
// display total grams protein per a day on screen

const PROTEIN_PER_GRAM_OF_CHICKEN = 0.23;
const totalGramsOfChicken = parseFloat(
  document.getElementById("total-grams-of-chicken").value
);
const totalDays = parseFloat(document.getElementById("total-days").value);

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (isNaN(totalGramsOfChicken) || isNaN(totalDays)) {
    alert("Please enter a valid number");
    return;
  }

  const gramsOfChickenPerDay = calculateGramsOfChickenPerDay(
    totalGramsOfChicken,
    totalDays
  ).toFixed(2);
  const proteinPerDay = calculateProteinPerDay(
    totalGramsOfChicken,
    totalDays
  ).toFixed(2);
  const totalProtein = calculateTotalProtein(totalGramsOfChicken).toFixed(2);

  document.getElementById(
    "total-protein-result"
  ).innerHTML = `${totalProtein}g of protein total`;
  document.getElementById(
    "chicken-per-day-result"
  ).innerHTML = `${gramsOfChickenPerDay}g of chicken per day`;
  document.getElementById(
    "protein-per-day-result"
  ).innerHTML = `${proteinPerDay}g of protein per day`;
});

const calculateGramsOfChickenPerDay = (totalGramsOfChicken, totalDays) => {
  return totalGramsOfChicken / totalDays;
};

const calculateProteinPerDay = (totalGramsOfChicken, totalDays) => {
  const gramsOfChickenPerDay = calculateGramsOfChickenPerDay(
    totalGramsOfChicken,
    totalDays
  );
  return calculateTotalProtein(gramsOfChickenPerDay);
};

const calculateTotalProtein = (gramsOfChicken) => {
  return gramsOfChicken * PROTEIN_PER_GRAM_OF_CHICKEN;
};
