export function contacts() {
    const div = document.createElement('div');
    const list = document.createElement('div');
    const header = document.createElement('h1');
    const contactsImg = document.createElement('img');
    const contactsInfo = document.createElement('p');
    const contactsFooter = document.createElement('h3');

    document.querySelector("#content").appendChild(div);
    div.appendChild(list);
    list.appendChild(header);
    list.appendChild(contactsImg);
    list.appendChild(contactsInfo);
    list.appendChild(contactsFooter);

    header.textContent = "Our contacts!";

    contactsImg.src = "/./contacts.jpg"
    contactsImg.style.width = "300px";


    contactsInfo.setAttribute('style', 'white-space: pre;');
    contactsInfo.style.fontWeight = '600';
    contactsInfo.textContent = `
    +34000000000
    \n
    info@boringmail.com
    `;
    contactsFooter.textContent = "Hope you give us a most forgetable call!";
}