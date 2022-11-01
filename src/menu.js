export function menu() {
    const div = document.createElement('div');
    const list = document.createElement('div');
    const pizza = document.createElement('div');
    const pizzaImg = document.createElement('img');
    const pizzaHeadline = document.createElement('h1');
    const pizzaDescription = document.createElement('p');
    const lasagna = document.createElement('div');
    const lasagnaImg = document.createElement('img');
    const lasagnaHeadline = document.createElement('h1');
    const lasagnaDescription = document.createElement('p');
    const spaghetti = document.createElement('div');
    const spaghettiImg = document.createElement('img');
    const spaghettiHeadline = document.createElement('h1');
    const spaghettiDescription = document.createElement('p');

    document.querySelector("#content").appendChild(div);
    div.appendChild(list);
    list.appendChild(pizza);
    list.appendChild(lasagna);
    list.appendChild(spaghetti);

    pizza.appendChild(pizzaImg);
    pizza.appendChild(pizzaHeadline);
    pizza.appendChild(pizzaDescription);

    lasagna.appendChild(lasagnaImg);
    lasagna.appendChild(lasagnaHeadline);
    lasagna.appendChild(lasagnaDescription);

    spaghetti.appendChild(spaghettiImg);
    spaghetti.appendChild(spaghettiHeadline);
    spaghetti.appendChild(spaghettiDescription);


    pizzaImg.src = "/./pizza.jpg"
    pizzaImg.style.width = "300px";
    lasagnaImg.src = "/./lasagna.jpg"
    lasagnaImg.style.width = "300px";
    spaghettiImg.src = "/./spaghetti.jpg"
    spaghettiImg.style.width = "300px";

    pizzaHeadline.textContent = "Bland pizza";
    lasagnaHeadline.textContent = "Cardboard lasagna";
    spaghettiHeadline.textContent = "Grey spaghetti";

    pizzaDescription.textContent = "The most average pizza in this part of town!";
    lasagnaDescription.textContent = "You have never tasted a lasagna this unexceptional!";
    spaghettiDescription.textContent = "Close your eyes and you will feel like you're inside your own dining room! Satisfaction guaranteed!";
}