export const copyToClipboard = (text) => {
    navigator.clipboard
        .writeText(text)
        .then(() => {
            console.log(`${text} has been copied`);
        })
        .catch((err) => {
            console.error("Failed to copy: ", err);
        });
};

export const setInputValue = (inputId, inputValue) => {
    const selectedInput = document.getElementById(inputId);
    selectedInput.value = inputValue;
}

export const submitForm = () => {
    const formSubmitButton = document.getElementById("form-submit-button");
    formSubmitButton.click();
}