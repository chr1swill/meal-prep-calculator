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
export const setInnerHTML = (elementId, html) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = html;
    }
};
