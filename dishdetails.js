// Let's say the dish data is stored in LocalStorage under the key 'currentDish'
const dish = JSON.parse(localStorage.getItem('currentDish'));

// Populate the page with the dish data
document.getElementById('dish-name').textContent = dish.name;
document.getElementById('dish-image').src = dish.image;
document.getElementById('dish-description').textContent = dish.description;

const ingredientsList = document.getElementById('dish-ingredients');
dish.ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
});
