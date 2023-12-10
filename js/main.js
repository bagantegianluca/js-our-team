/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */

// Create an objects array and set it into a variable to contain all team members
const team = [
    {
        name: 'John',
        role: 'CEO',
        pic: './img/pic1.jfif'
    },
    {
        name: 'Joseph',
        role: 'CFO',
        pic: './img/pic2.jfif'
    },
    {
        name: 'Jane',
        role: 'CMO',
        pic: './img/pic3.jfif'
    },
    {
        name: 'Jessica',
        role: 'CSO',
        pic: './img/pic4.jfif'
    },
    {
        name: 'Philiph',
        role: 'CTO',
        pic: './img/pic5.jfif'
    }
];

// Select row node
const rowElement = document.querySelector('.row');

// Create loop to print all memebers info in console
for (let i = 0; i < team.length; i++) {

    const member = team[i];
    console.log(member.name, member.role, member.pic);

    // Create column element
    const colElement = document.createElement('div');

    // Add column class list
    colElement.className = 'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3';

    // Create card element
    const cardElement = document.createElement('div');

    // Add card class list
    cardElement.className = 'card p-3';

    cardChildrenElements = `
    <img src="${member.pic}" class="card-img-top img_rounded" alt="${member.name}-pic">
    <div class="card-body p-0">
        <h5 class="card-title text-center">${member.name}</h5>
        <p class="card-text">${member.name} is the <strong>${member.role}</strong> of the company</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    // Add cardChildrenElements to cardElement
    cardElement.innerHTML = cardChildrenElements;

    // Insert cardElement into colElement
    colElement.appendChild(cardElement);

    // Insert colElement into rowElement
    rowElement.appendChild(colElement);

}

