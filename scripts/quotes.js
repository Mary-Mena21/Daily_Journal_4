/* --------------------------------------Export----------------------------------     */

/* export  */ const dataList = [
    {
        quote: "Code can't lie comments can.",
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
/* 
const getQuotes = () => {
    const copyDataList = dataList.map((quote) => ({ ...quote }));
    return copyDataList;
};

export default getQuotes; */

 export const getQuotes = () => {
     const copyDataList = dataList.map((quote) => ({ ...quote }));
     console.log("copyDataList : ", copyDataList);
    return copyDataList;
}; 
