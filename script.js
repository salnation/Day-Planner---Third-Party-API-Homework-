// We have to create a function that displays date and time at the top of the page.
// First Step - create a variable that displays current time using moment().format - information gathered from http://zetcode.com/javascript/momentjs/
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
console.log(currentTime);

// We must create a function that performs the task of retreiving the current day and current time

function displayTime(){
    document.getElementById("currentDay").innerHTML = currentTime;
};

// We must create a button with event listener to save to local storage 
$(".save-button").on("click", function(){
    // attr() method - returns attributes and values of the selected parent element
    var hour = $(this).parent().attr("id")
    console.log(hour)
    // $(this) wrapping around that element
    // .val method in javascript referenced from https://www.w3schools.com/jquery/html_val.asp
    // Create reference for every .task class and change the innerHTML
    var userInput = $(this).parent().siblings(".task").val();
    console.log(userInput)
}
// When this button is clicked, this will trigger the function that stores input in local storage
// Must create a loop 
// Must add events to the submit button to save what is in the input field to local storage
// Store data in localstorage as an object where the key is the hour of the day 
// Create an array 
