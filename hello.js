// Create a new div element
var widgetDiv = document.createElement("div"); 

// Create a new button element
var button = document.createElement("button");
button.innerHTML = "Display Date and Time";
console.log("hello")
console.log("hello again")
console.log("hello")
console.log(window.myDynamicVariable)

// Append the button to the div
widgetDiv.appendChild(button);

// Add an event listener to the button
button.addEventListener("click", function() {
  var date = new Date();
  var timeString = date.toLocaleTimeString();
  var dateString = date.toLocaleDateString();
  
  // Display the date and time
  alert("Current Date: " + dateString + "\nCurrent Time: " + timeString);
});

// Append the div to the body of the document
document.body.appendChild(widgetDiv);
