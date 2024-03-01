// Select all elements whose ID contains the substring "per"
var elementsWithPercentage = document.querySelectorAll('[id*="per"]');
// Select all elements whose ID contains the substring "worth"
var worthelements = document.querySelectorAll('[id*="worth"]');

// Store the original elements in arrays
var originalContent = Array.from(elementsWithPercentage);
var originalWorth = Array.from(worthelements);


// Loop through the selected elements
function updateElements() {
    elementsWithPercentage.forEach(function(element, index) {
        // Get the original innerHTML value and remove any non-numeric characters
        var originalValue = parseFloat(originalContent[index].textContent.replace('%', '').replace('+','').replace('-','').trim());
        // Calculate the new value with random change

        let oldworth = parseFloat(originalWorth[index].textContent);
        let newworth = Math.round(oldworth*random()*100)/100;

        let result = Math.round(oldworth+newworth*100)/100

        let newValue = Math.round((((newworth/oldworth)-1)*100)*100)/100


        // Determine color based on the sign of newValue
        if ((newValue) > 0) {
            // Set the color of the element to green
            element.style.color = '#2c9100';
        } else if ((newValue) < 0) {
            // Set the color of the element to red
            element.style.color = 'red';
        } else {
            // Set default color for zero value
            element.style.color = 'black';
        }

        // Update worth element
        worthelements[index].textContent = result;
        // Set the text content
        element.textContent = (newValue >= 0 ? '+' : '') + newValue + ' %'; // Set text content instead of innerHTML
    });
}

function random() {
    // Generate a random number between 0 and 1
    let randomNum = Math.random();
    // Scale and shift the random number to be between 0.975 and 1.03
    randomNum = (randomNum * 0.055) + 0.975;
    return randomNum;
}

// Run the function initially
updateElements();

// Run the function every 10 seconds
setInterval(updateElements, 10000); // 10000 milliseconds = 10 seconds

function openmenu(){
    var menubutton = document.getElementById('menu1');
    var menu = document.getElementById('menu');
    menubutton.style.visibility = 'hidden';
    menu.style.display = 'flex';
    console.log("Menu open");
}

function closemenu(){
    var menubutton = document.getElementById('menu1');
    var menu = document.getElementById('menu');
    menubutton.style.visibility = 'visible';
    menu.style.display = 'none';
    console.log("Menu closed");
}
