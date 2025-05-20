export const dateSpanElement = document.querySelector('.date');
export const currentDate = new Date();
dateSpanElement.textContent = currentDate.getFullYear();