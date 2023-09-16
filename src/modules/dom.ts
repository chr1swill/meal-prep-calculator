export const copyToClipboard = (text: string): void => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log(`${text} has been copied`);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};
