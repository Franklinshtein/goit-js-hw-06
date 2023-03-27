const input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");

input.addEventListener("input", handleSubmit);
function handleSubmit() {
  if (input.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = input.value;
  }
}
