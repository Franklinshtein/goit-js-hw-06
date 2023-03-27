const inputNum = document.querySelector("#controls>input");
const box = document.querySelector("div#boxes");

const createBtn = document
  .querySelector("[data-create]")
  .addEventListener("click", () => {
    const amount = Number(inputNum.value);
    createBoxes(amount);
  });

const destroyBtn = document
  .querySelector("[data-destroy]")
  .addEventListener("click", deleteBoxes);

function createBoxes(amount) {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    elementsToAdd.push(div);
  }
  return elementsToAdd;
}

function deleteBoxes() {
  destroyBtn.currentTarget = box.removeChild(box.firstChild);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const createBoxes = amount => {
// 	const elementsToAdd = []
// 	for (let i = 0; i < amount; i++) {
// 		const div = document.createElement('div')
// 		div.style.height = `${30 + 10 * i}px`
// 		div.style.width = `${30 + 10 * i}px`
// 		div.style.background = getRandomHexColor()
// 		elementsToAdd.push(div)
// 	}
// 	return elementsToAdd
// }

// const destroyBoxes = () => {
// 	boxes.innerHTML = ''
// }

// btnCreate.addEventListener('click', () => {
// 	let boxesToAdd = createBoxes(inputNum.value)
// 	boxes.append(...boxesToAdd)
// })

// console.log(inputNum.value)

// btnDestroy.addEventListener('click', () => {
// 	destroyBoxes.call()
// })
