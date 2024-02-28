// Select all elements containing "%" using an attribute containing "per" in its ID
var elementsWithPercentage = document.querySelectorAll('[id*="per"]');

// Loop through the selected elements
elementsWithPercentage.forEach(function(element) {
    // Get the innerHTML value and remove any non-numeric characters
    var value = parseFloat(element.textContent.replace(',', '.').replace('%', '').trim()); // Convert ',' to '.' to parse floats correctly, and remove '%' sign

    // Check if the value is positive or negative
    if (value > 0) {
        // Set the color of the element to green
        element.style.color = '#49f200';
    } else if (value < 0) {
        // Set the color of the element to red
        element.style.color = 'red';
    }
});
