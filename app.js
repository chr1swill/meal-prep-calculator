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

const getSplitString = (stringList) => stringList.split(/[,\s]+/);
const getStringToArray = (stringList) =>
  getSplitString(stringList).map(parseFloat);
const getArrayTotal = (array) => array.reduce((a, b) => a + b);

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log(`${text} has been copied`);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};

document.getElementById("result-button").addEventListener("click", (event) => {
  event.preventDefault();

  const chickenGramsString = document.getElementById(
    "chicken-per-day-result"
  ).innerText;
  const copyChickenGrams = () => copyToClipboard(chickenGramsString);

  copyChickenGrams();
});

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const totalGramsOfChickenAsString = document.getElementById(
    "total-grams-of-chicken"
  ).value;
  const totalDaysAsString = document.getElementById("total-days").value;

  const totalGramsOfChickenAsArray = getStringToArray(
    totalGramsOfChickenAsString
  );
  const totalGramsOfChickenAsNumber = getArrayTotal(totalGramsOfChickenAsArray);
  const totalDaysAsNumber = parseFloat(totalDaysAsString);

  if (isNaN(totalGramsOfChickenAsNumber) || isNaN(totalDaysAsNumber)) {
    alert("Please enter a valid number");
    return;
  }

  const gramsOfChickenPerDayAsResult = calculateGramsOfChickenPerDay(
    totalGramsOfChickenAsNumber,
    totalDaysAsNumber
  ).toFixed(2);
  const proteinPerDayAsResult = calculateProteinPerDay(
    totalGramsOfChickenAsNumber,
    totalDaysAsNumber
  ).toFixed(2);
  const totalProteinAsResult = calculateTotalProtein(
    totalGramsOfChickenAsNumber
  ).toFixed(2);

  document.getElementById(
    "total-protein-result"
  ).innerHTML = `<strong>${totalProteinAsResult}</strong>`;
  document.getElementById(
    "chicken-per-day-result"
  ).innerHTML = `<strong>${gramsOfChickenPerDayAsResult}</strong>`;
  document.getElementById(
    "protein-per-day-result"
  ).innerHTML = `<strong>${proteinPerDayAsResult}</strong>`;
});
