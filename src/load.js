export function createHtml() {
    const img = document.createElement('img');
    const header = document.createElement('h1');
    const paragraph = document.createElement('p');
    const content = document.querySelector('#content');

    content.appendChild(img);
    content.appendChild(header);
    content.appendChild(paragraph);

    img.src = "/./restaurant.jpg";
    img.style.width = "300px";

    header.textContent = "Welcome to the average food restaurant!";

    paragraph.textContent = "The restaurant is wonderfully average. Averagely wonderful";
};


