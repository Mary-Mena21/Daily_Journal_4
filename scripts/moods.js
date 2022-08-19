
const moodOptions = ["Happy", "Ok", "Sad", "Curious", "Unhappy"];

export const getMoods = () => {
        const moodsCopy = [...moodOptions];
        //copy the array Deep clone
        return moodsCopy;
    }; 