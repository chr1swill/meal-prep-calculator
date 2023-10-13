import * as calculation from "./modules/calculation.js";
import * as dom from "./modules/dom.js";

const resultButton = document.getElementById("result-button");
resultButton?.addEventListener("click", (event: Event) => {
  event.preventDefault();

  const chickenGramsString = document.getElementById(
    "chicken-per-day-result"
  )?.innerText;
  const copyChickenGrams = () => {
    if (chickenGramsString) {
      dom.copyToClipboard(chickenGramsString);
    }
  };

  copyChickenGrams();
});

const myForm = document.getElementById("myForm");
myForm?.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const totalGramsOfChickenAsString: string = (
    document.getElementById("total-grams-of-chicken") as HTMLInputElement
  )?.value;
  const totalDaysAsString: string = (
    document.getElementById("total-days") as HTMLInputElement
  )?.value;

  const totalGramsOfChickenAsArray = calculation.getStringToArray(
    totalGramsOfChickenAsString
  );
  const totalGramsOfChickenAsNumber = calculation.getArrayTotal(
    totalGramsOfChickenAsArray
  );
  const totalDaysAsNumber = parseFloat(totalDaysAsString);

  if (isNaN(totalGramsOfChickenAsNumber) || isNaN(totalDaysAsNumber)) {
    alert("Please enter a valid number");
    return;
  }

  const gramsOfChickenPerDayAsResult = calculation
    .calculateGramsOfChickenPerDay(
      totalGramsOfChickenAsNumber,
      totalDaysAsNumber
    )
    .toFixed(2);
  const proteinPerDayAsResult = calculation
    .calculateProteinPerDay(totalGramsOfChickenAsNumber, totalDaysAsNumber)
    .toFixed(2);
  const totalProteinAsResult = calculation
    .calculateTotalProtein(totalGramsOfChickenAsNumber)
    .toFixed(2);

  dom.setInnerHTML(
    "total-protein-result",
    `<strong>${totalProteinAsResult}</strong>`
  );
  dom.setInnerHTML(
    "chicken-per-day-result",
    `<strong>${gramsOfChickenPerDayAsResult}</strong>`
  );
  dom.setInnerHTML(
    "protein-per-day-result",
    `<strong>${proteinPerDayAsResult}</strong>`
  );

  // document.getElementById(
  //   "total-protein-result"
  // ).innerHTML = `<strong>${totalProteinAsResult}</strong>`;
  // document.getElementById(
  //   "chicken-per-day-result"
  // ).innerHTML = `<strong>${gramsOfChickenPerDayAsResult}</strong>`;
  // document.getElementById(
  //   "protein-per-day-result"
  // ).innerHTML = `<strong>${proteinPerDayAsResult}</strong>`;
});
