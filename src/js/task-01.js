const categoriesItemsRef = document.querySelectorAll('li.item');

const consoleQuantityCategory = categoriesItemsRef.length;
console.log(consoleQuantityCategory);

const consoleCategoryDetails = () => {
    categoriesItemsRef.forEach((category) => {
      console.log(
        `Category: ${category.querySelector('h2').textContent}\nElements: ${
          category.querySelectorAll('ul li').length
        }\n\n`
      )
    })
  }
  consoleCategoryDetails();