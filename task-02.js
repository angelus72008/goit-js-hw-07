const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.getElementsByClassName.liststyle = "none";
ingredients.forEach(elem => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = elem;
    ingredientsList.append(ingredientItem);
    console.log(ingredientItem);
})