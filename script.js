// We have to create a function that displays date and time at the top of the page.
// First Step - create a variable that displays current time using moment().format - information gathered from http://zetcode.com/javascript/momentjs/
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
console.log(currentTime);


// We must create a button with event listener to save to local storage 
//When this button is clicked, this will trigger the function that stores input in local storage
// Must create a loop 
// Must add events to the submit button to save what is in the input field to local storage
// Store data in localstorage as an object where the key is the hour of the day 
// Create an array 
// Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed