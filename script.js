// We have to create a function that displays date and time at the top of the page.
// First Step - create a variable that displays current time using moment().format - information gathered from http://zetcode.com/javascript/momentjs/
let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentTime);

// We must create a function that performs the task of retreiving the current day and current time

function displayTime(){
    document.getElementById("currentDay").innerHTML = currentTime;
};

// calls a function or evaluates an expression at specified intervals - 1000 milliseconds
setInterval(displayTime, 1000);
displayTime()

// $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
// A $( document ).ready() block
$(document).ready(function() {

// We must create a button with event listener to save to local storage 
$(".save-button").on("click", function(){
    // attr() method - returns attributes and values of the selected parent element
    const hour = $(this).parent().attr("id")
    console.log(hour)
    // $(this) wrapping around that element
    // .val method in javascript referenced from https://www.w3schools.com/jquery/html_val.asp
    // Create reference for every .task class and change the innerHTML
    const input = $(this).parent().siblings(".task").val();
    console.log(input)
    // localStorage.setItem is being utilized - the hour-9 value from localStorage should go in the appropriate input field
    localStorage.setItem(hour, input);
  })

});

// Application is complete!
