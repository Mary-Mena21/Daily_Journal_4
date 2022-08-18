
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

export const getNotes = () => {
        const notesCopy = notes.map((note) => ({ ...note }));
        return notesCopy;
    };