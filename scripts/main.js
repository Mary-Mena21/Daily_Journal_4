console.log("I'm a JS");

const dataEntry = [];
const notes = [
    {
        id: 1,
        date: "07/24/2022",
        topics: "Welcome GitHub",
        concept: ["strategy", "GitHub"],
        entry: "Finally, I make my first pull request on GitHub.",
        mood: "Passion",
    },
    {
        id: 2,
        date: "07/26/2025",
        concept: ["Complex Flexbox"],
        entry: "I tried to have an element in my Flexbox layout. It hurt my brain.",
        mood: "Sad",
    },
    {
        id: 3,
        date: "08/01/2025",
        concept: ["Iteration", "help", "for of", "Loop", "for", "for in"],
        topics: "loop through objects in array javascript",
        entry: "I iterate through an array of objects in JavaScript with Lynn and it works",
        mood: "Happy",
    },
];

let mood = ` `;
for (const note of notes) {
    //console.log(note);
    mood += `<fieldset><ul>`;
    for (const moods in note) {
        //console.log(`${moods} : ${note[moods]}`);
        mood += `<li> ${moods} : ${note[moods]} </li>`;
    }
    mood += `</ul> </fieldset>`;
}
//console.log(mood);

//const htmlString = `<h5>I am from JS</h5>`;
//document.getElementById("content").innerHTML = htmlString;
document.getElementById("content").innerHTML = mood;


/* -----------------------------------------------------Daily _Journal_3---------------------------------------------------------------------------------- */