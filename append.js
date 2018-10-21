// Create a new element and store it in a variable.

var newEl = document.createElement('li');
var newEl2 = document.createElement('li');


// Create a text node and store it in a variable.

var newText = document.createTextNode('quinoa');
var newText2 = document.createTextNode('this is a new text node, a li');


// Attach the new text node to the new element.

newEl.appendChild(newText);
newEl2.appendChild(newText2);

// Find the position where the new element should be added.

var position = document.getElementsByTagName('ul')[0];

var position2 = document.getElementsByTagName('ul')[0];


// Insert the new element into its position.

position.appendChild(newEl);
position2.appendChild(newEl2);


var removeEl1 = document.getElementsByTagName('li')[4];

var containerEl = removeEl1.parentNode;

containerEl.removeChild(removeEl1);
