//your JS code here. If required.
// Get the element by its id
const element = document.getElementById("level");

// Initialize the level counter
let level = 0;

// Traverse up the DOM tree until reaching the root (html element)
let current = element;
while (current != null) {
    level++;
    current = current.parentElement;
}

// Display the result
alert("The level of the element is: " + level);
