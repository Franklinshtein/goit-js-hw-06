let textInput = document.querySelector("#validation-input");
const dataLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  if (textInput.value.length === Number(dataLength)) {
    // якщо не привести до числа не проходить перевірку
    textInput.classList.add("valid"); // додаємо клас зі стилями якщо валідне
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
