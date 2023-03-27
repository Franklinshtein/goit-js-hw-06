const controlEl = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

controlEl.addEventListener("input", onControl);

function onControl(evt) {
  spanText.style.fontSize = `${evt.currentTarget.valueAsNumber}px`;
}
