const dishes = [
    {
        name: "Eggplant Parmesan",
        vegetarian: true
    },
    {
        name: "Spaghetti & Meatball",
        vegetarian: false
    },
    {
        name: "Pizza Margarita",
        vegetarian: true
    },
    {
        name: "Pizza",
        vegetarian: false
    },
];

vegetarianDishes = dishes.filter(dish => dish.vegetarian === true);

const dishList = document.querySelector("ul[id=menu]");
dishList.style.fontSize = "2em";

for (let dish of vegetarianDishes) {
    const newDish = document.createElement("li");
    newDish.textContent = dish.name;
    dishList.append(newDish);
    document.body.append(dishList);
};