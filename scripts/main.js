/* --------------------------------------Import----------------------------------     */

import { getQuotes } from "./quotes.js";
import { getNotes } from "./notes.js";
import { getMoods } from "./moods.js";

/* --------------------------------------Entries----------------------------------     */

/* ---------------------------------Entries----entryDate-------------------------------*/
const displayDate = () => {
    const entryDate = `<label for="entryDate">Date</label>
            <input class ="inputStyle" type="date" name="entryDate" class="entryForm__date" />`;

    document.getElementById("entryDate").innerHTML = entryDate;
};
displayDate();

/* ---------------------------------Entries----entryConcept-------------------------------*/
const displayConcept = () => {
    const entryConcept = `<label for="entryConcept">Concept Covered</label>
<input class ="inputStyle" type="text" name="entryConcept" class="entryForm__concept" />`;
    document.getElementById("entryConcept").innerHTML = entryConcept;
};
displayConcept();

/* ---------------------------------Entries----entryLearn-------------------------------*/
const displayLearn = () => {
    const entryLearn = `<label   for="entryLearn">Journal Entry Learn</label>
<textarea class ="inputStyle" type="text" name="entryLearn" rows="10" >
</textarea>`;
    document.getElementById("entryLearn").innerHTML = entryLearn;
};
displayLearn();


import {getJournalEntries} from './entries.js';
const entries = getJournalEntries();

let entriesHTML = '';

/* const returnEntries = (array) => {
    for (const entry of array) {
        entriesHTML += `
        <p class="entry">
        <span class="entryNumber">Entry #${entry.id}</span>
        <span class="date">Date: ${entry.date}</span>
        <span class="mood">Mood: ${entry.mood}</span>
        <span class="concespant">Concepts: ${entry.concept}</span>
        <span class="entryText">Entry: ${entry.entry}</span>
        </p>`
    }
}
returnEntries(entries);

document.getElementById('entries').innerHTML = entriesHTML; */
/* --------------------------------------Mood---entryMood--------------------------------     */

const displayMoods = () => {

    const moodOptions = getMoods();
    let Options = ` `;
    for (let mood of moodOptions) {
        Options += `<option value="${mood}">${mood}</option>`;
    }
    document.getElementById("mood").innerHTML = Options;
};
displayMoods();
/* --------------------------------------Mood---entryMood--Test------------------------------     */

// const displayMoods = () => {
//     `<label for="entryMood">Mood of the day</label>`
//         `<select class ="inputStyle" name="entryMood" id="mood">`;
//     const moodOptions = getMoods();
//     let Options = ` `;
//     for (let mood of moodOptions) {
//         Options += `<option value="${mood}">${mood}</option>`;
//     }
//     `</select>`;

//     const display = displayMoods();
//     document.getElementById("entryMood").innerHTML = display;
// };
// displayMoods();

/* --------------------------------------listComponent-----------------------------------     */
const displayQuotes = () => {
    const dataList = getQuotes();

    let dataList_container = ` `;
    for (const list of dataList) {
        dataList_container += `<fieldset> <section>`;
        for (const item in list) {
            dataList_container += `<p>${list[item]}</p>`;
        }
        dataList_container += `</section></fieldset>`;
    }
    document.getElementById("listComponent").innerHTML = dataList_container;
};

displayQuotes();

/* --------------------------------------------Entries------------------------------------------------ */

const displayEntries = () => {
    const notes = getNotes();

    let notes_tables = ` `;
    for (const note of notes) {
        notes_tables += `<fieldset><ul>`;
        for (const entry in note) {
            notes_tables += `<li> ${note[entry]} </li>`;
        }
        notes_tables += `</ul> </fieldset>`;
    }

    document.getElementById("content").innerHTML = notes_tables;
};
displayEntries();

/* ---------------------------------------Daily _Journal_3---------------------------------------------------- */
