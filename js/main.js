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

// Create an array variable to contain all team member
const team = [
    {
        name: 'John',
        role: 'CEO',
        pic: './img/pic1.jfif'
    },
    {
        name: 'Jane',
        role: 'CMO',
        pic: './img/pic2.jfif'
    },
    {
        name: 'Joseph',
        role: 'CFO',
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

// Create loop to print all memebers in console
for (let i = 0; i < team.length; i++) {

    console.log(team[i]);

}