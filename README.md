
# Daily_Journal_4

![Daily_Journal_4](https://user-images.githubusercontent.com/85176043/189435757-691c5156-d3bd-4fea-8cbe-3dba4108678a.jpg)


# **Daily Journal Part 4**

In this section of Daily Journal, we’ll finally start collecting data from our form!  

Here’s the Steps:

1. Add the Event Listener
2. Capture the data from the form
3. Add the new entry to the array of objects
4. Display the new entry on the page

### Add the Event Listener

First things first, let’s add an event listener to our JavaScript and make it specific to the button click.

1. Make sure there is an id on the button element in the html
2. Create an event listener specific to your button id.  For now, just add a console.log to test that your event is only firing when you click the button.  Be sure to test clicking on the page outside of the button.
3. Don’t forget to add `e.preventDefault()` as the first line inside the event listener to prevent any browser action that may happen on this event.

### Capture the data from the form

In this step, we’ll be grabbing the data from the form and creating an object that has the same data structure as your journal entries.  

- Use `document.getElementById('<id in index.html element>').value` to grab the value of your input boxes.  Make sure the index.html has an id!
- Look at the key/value pairs in a single journal entry object and create an object from your form that has the same keys EXCEPT the id (we’ll add that later).
- At this step, console log the new object and confirm that it is what you expect.

### Add the new entry to the array of objects

- Create a setter in the `entries.js` file
- Call the setter from the event listener

### Display the new entry on the page

To finish off this part of Daily journal, make sure you:

- Create and Dispatch a custom event that is triggered after you added the new entry to the page.
- Add an event listener for this custom event.  When activated, the event listener should invoke the function that adds the journal entries to the page.

Note: At this stage in the application, your new entries will not persist when you refresh the page.

### Think Deeper

Once you have your code in place and working try to answer these questions.

1. If the custom event re-invokes the functions and calls all entries again, why do you not see duplicates on the screen?
2. What is the step-by-step process happening in the code that allows the user to add and entry and see it displayed on the screen?
