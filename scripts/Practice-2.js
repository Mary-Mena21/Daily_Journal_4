/*
    Define a variable named `notes` and assign a value of an empty array
*/

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * date (string)
        * concept (string)
        * entry (array of strings)
        * mood (string)
*/

/*    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const dataEntry = [];
let notes1 = {
    id: 1,
    date: "07/24/2022",
    topics: "Welcome GitHub",
    concept: ["strategy", "GitHub"],
    entry: "Finally, I make my first pull request on GitHub.",
    mood: "Passion",
};
const notes2 = {
    id: 2,
    date: "07/26/2025",
    concept: ["Complex Flexbox"],
    entry: "I tried to have an element in my Flexbox layout. It hurt my brain.",
    mood: "Sad",
};
const notes3 = {
    id: 3,
    date: "08/01/2025",
    concept: ["Iteration", "help", "for of", "Loop", "for", "for in"],
    topics: "loop through objects in array javascript",
    entry: "I iterate through an array of objects in JavaScript with Lynn and it works",
    mood: "Happy",
};
/* push the notes to the dataEntry*/
dataEntry.push(notes1, notes2, notes3);
//console.log(dataEntry);

/* Iterate the array to display only the entry */
for (const text of dataEntry) {
    //console.log(text.entry);
}
dataEntry[1].concept.push("GitHub", "MMM");
//console.log(dataEntry[1]);

//notes2.concept.push("GitHub","help")
//console.log(notes2);

/* for (const conceptData of dataEntry) {
    //console.log(conceptData.concept);
    for (const item of conceptData.concept) {
    console.log(item);
    }
} */

for (const notes of dataEntry) {
    // console.log(notes);
    if (notes.id % 2 !== 0) {
        //console.log(notes.id);
    }
}

/* for (let i = 0; i <= 5; i++) {
    console.log(i);
} */
/* concept length` */
//console.log(dataEntry[2].concept.length);

/* all concept length */
//const totalConcepts = 0;
for (const conceptData of dataEntry) {
    //console.log(conceptData.concept.length);
    let totalConcepts = conceptData.concept.length;
    totalConcepts =+
    console.log(totalConcepts);
}
