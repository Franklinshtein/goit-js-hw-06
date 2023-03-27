const categoriesItems = Array.from(document.querySelectorAll(".item"));
console.log(`Number of categories:${categoriesItems.length}`); // довжина масиву (кількість елементів)
categoriesItems.forEach(function (category) {
  const categoriesName = category.querySelector("h2").textContent; // текст заголовку
  const categoriesElements = category.querySelectorAll("li").length; // кількість елементів

  console.log(`Category: ${categoriesName}`);
  console.log(`Elements: ${categoriesElements}`);
});
