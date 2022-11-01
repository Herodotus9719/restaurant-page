import { createHtml } from '/./src/load.js';
import { menu } from '/./src/menu.js';
import { contacts } from '/./src/contact.js';

// menu();

function init() {
    document.querySelector('#content').innerHTML = "";
    btnInit();
}

function btnInit() {
    const btnBundle = document.createElement('div');
    document.querySelector("#content").appendChild(btnBundle);
    const homeBtn = document.createElement('button');
    btnBundle.appendChild(homeBtn);
    const menuBtn = document.createElement('button');
    btnBundle.appendChild(menuBtn);
    const contactsBtn = document.createElement('button');
    btnBundle.appendChild(contactsBtn);

    btnBundle.style.marginBottom = "50px";


    homeBtn.textContent = 'HOME';
    menuBtn.textContent = 'MENU';
    contactsBtn.textContent = 'CONTACTS';

    homeBtn.addEventListener('click', () => {
        homeInit();
    });

    menuBtn.addEventListener('click', () => {
        menuInit();
    });

    contactsBtn.addEventListener('click', () => {
        contactsInit();
    });
}

function homeInit() {
    init();
    createHtml();
}
function menuInit() {
    init();
    menu();
}
function contactsInit() {
    init();
    contacts();
}

btnInit();
createHtml();
