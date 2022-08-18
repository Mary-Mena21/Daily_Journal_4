/* const buttons = [
    (Edit = {
        id: 1,
    }),
    (Delete = {
        id: 2,
    }),
]; */
/* --------------------------------------mood-----------------------------------     */

const moodOptions = ["Happy", "Ok", "Sad", "Curious", "Unhappy"];
let Options = "";
for (let mood of moodOptions) {
    Options += `
    <option value="${mood}">${mood}</option>`;
}
document.getElementById("mood").innerHTML = Options;
/* --------------------------------------listComponent-----------------------------------     */
const dataList = [
    {
        quote: "code can't lie comments can.",
    },
    {
        quote: "It's harder to read code than to write it.",
    },
    {
        quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
    },
    {
        quote: "Programming is thinking not typing.",
    },
];
let dataList_container = ` `;
for (const list of dataList) {
    dataList_container += `<fieldset> <section>`;
    for (const item in list) {
        dataList_container += `<p>${list[item]}</p>`;
    }
    dataList_container += `</section></fieldset>`;
}
//console.log(dataList_container);
document.getElementById("listComponent").innerHTML = dataList_container;

/* --------------------------------------------Entries------------------------------------------------ */
// const dataEntry = [];
const notes = [
    {
        date: "07/24/2022",
        topics: "Welcome GitHub",
        concept: [" strategy ", " GitHub "],
        entry: "Finally, I make my first pull request on GitHub.",
        mood: "Passion",
    },
    {
        date: "07/26/2022",
        concept: ["Complex Flexbox"],
        entry: "I tried to have an element in my Flexbox layout. It hurt my brain.",
        mood: "Sad",
    },
    {
        date: "08/01/2022",
        concept: [
            " Iteration ",
            " help ",
            " for of ",
            " Loop ",
            " for ",
            " for in",
        ],
        topics: "loop through objects in array javascript",
        entry: "I iterate through an array of objects in JavaScript with Lynn and it works",
        mood: "Happy",
    },
];

let notes_tables = ` `;
for (const note of notes) {
    //console.log(note);
    notes_tables += `<fieldset><ul>`;
    for (const moods in note) {
        //console.log(`${moods} : ${note[moods]}`);
        notes_tables += `<li> ${note[moods]} </li>`;
    }
    notes_tables += `</ul> </fieldset>`;
}
//console.log(mood);

//const htmlString = `<h5>I am from JS</h5>`;
//document.getElementById("content").innerHTML = htmlString;
document.getElementById("content").innerHTML = notes_tables;

/* ---------------------------------------Daily _Journal_3-------click--------------------------------------------- */
/* $(document).ready(function(){

    $(".add").click(function(){
        const NewEntry = $(".new-entry").val()

        const ENTRY_DIV = `<div class="entry flex f-ac"><p>${NewEntry}</p></div>`

        if(NewEntry != ""){
            $(".old-entires").append(ENTRY_DIV)
            $(".new-entry").val("")   
        }

    })
}) */