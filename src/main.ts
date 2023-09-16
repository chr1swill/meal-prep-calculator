import * as calculation from "./modules/calculation.js";
import * as dom from "./modules/dom.js";

document.getElementById("result-button").addEventListener("click", (event) => {
  event.preventDefault();

  const chickenGramsString = document.getElementById(
    "chicken-per-day-result"
  ).innerText;
  const copyChickenGrams = () => dom.copyToClipboard(chickenGramsString);

  copyChickenGrams();
});

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const totalGramsOfChickenAsString = document.getElementById(
    "total-grams-of-chicken"
  ).value;
  const totalDaysAsString = document.getElementById("total-days").value;

  const totalGramsOfChickenAsArray = calculation.getStringToArray(
    totalGramsOfChickenAsString
  );
  const totalGramsOfChickenAsNumber = calculation.getArrayTotal(totalGramsOfChickenAsArray);
  const totalDaysAsNumber = parseFloat(totalDaysAsString);

  if (isNaN(totalGramsOfChickenAsNumber) || isNaN(totalDaysAsNumber)) {
    alert("Please enter a valid number");
    return;
  }

  const gramsOfChickenPerDayAsResult = calculation.calculateGramsOfChickenPerDay(
    totalGramsOfChickenAsNumber,
    totalDaysAsNumber
  ).toFixed(2);
  const proteinPerDayAsResult = calculation.calculateProteinPerDay(
    totalGramsOfChickenAsNumber,
    totalDaysAsNumber
  ).toFixed(2);
  const totalProteinAsResult = calculation.calculateTotalProtein(
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
