/* --------------------------------------Import----------------------------------     */

import { getQuotes } from "./quotes";
import { getNotes } from "./notes";
/* --------------------------------------Mood-----------------------------------     */
const displayMoods = () => {
    const moodOptions = ["Happy", "Ok", "Sad", "Curious", "Unhappy"];
    let Options = "";
    for (let mood of moodOptions) {
        Options += `
    <option value="${mood}">${mood}</option>`;
    }
    document.getElementById("mood").innerHTML = Options;
};
displayMoods();

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
/* ---------------------------------------Daily _Journal_3-------click--------------------------------------------- */

console.log("Hello world!");
