import * as calculation from "./modules/calculation.js";
import * as dom from "./modules/dom.js";
const resultButton = document.getElementById("result-button");
resultButton === null || resultButton === void 0 ? void 0 : resultButton.addEventListener("click", (event) => {
    var _a;
    event.preventDefault();
    const chickenGramsString = (_a = document.getElementById("chicken-per-day-result")) === null || _a === void 0 ? void 0 : _a.innerText;
    const copyChickenGrams = () => {
        if (chickenGramsString) {
            dom.copyToClipboard(chickenGramsString);
        }
    };
    copyChickenGrams();
});
const myForm = document.getElementById("myForm");
myForm === null || myForm === void 0 ? void 0 : myForm.addEventListener("submit", (event) => {
    var _a, _b;
    event.preventDefault();
    const totalGramsOfChickenAsString = (_a = document.getElementById("total-grams-of-chicken")) === null || _a === void 0 ? void 0 : _a.value;
    const totalDaysAsString = (_b = document.getElementById("total-days")) === null || _b === void 0 ? void 0 : _b.value;
    const totalGramsOfChickenAsArray = calculation.getStringToArray(totalGramsOfChickenAsString);
    const totalGramsOfChickenAsNumber = calculation.getArrayTotal(totalGramsOfChickenAsArray);
    const totalDaysAsNumber = parseFloat(totalDaysAsString);
    if (isNaN(totalGramsOfChickenAsNumber) || isNaN(totalDaysAsNumber)) {
        alert("Please enter a valid number");
        return;
    }
    const gramsOfChickenPerDayAsResult = calculation
        .calculateGramsOfChickenPerDay(totalGramsOfChickenAsNumber, totalDaysAsNumber)
        .toFixed(2);
    const proteinPerDayAsResult = calculation
        .calculateProteinPerDay(totalGramsOfChickenAsNumber, totalDaysAsNumber)
        .toFixed(2);
    const totalProteinAsResult = calculation
        .calculateTotalProtein(totalGramsOfChickenAsNumber)
        .toFixed(2);
    dom.setInnerHTML("total-protein-result", `<strong>${totalProteinAsResult}</strong>`);
    dom.setInnerHTML("chicken-per-day-result", `<strong>${gramsOfChickenPerDayAsResult}</strong>`);
    dom.setInnerHTML("protein-per-day-result", `<strong>${proteinPerDayAsResult}</strong>`);
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
