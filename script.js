
// Prompt the visitor for their list of comma-separated froyo flavors
const input = prompt("Enter a list of comma-separated froyo flavors:");

// Split the input into an array of flavors
const flavors = input.split(",");

// Create an object to store the count of each flavor
const flavorCount = {};

// Count the occurrences of each flavor
flavors.forEach(flavor => {
    flavor = flavor.trim(); // Remove leading/trailing spaces
    if (flavorCount[flavor]) {
        flavorCount[flavor] += 1;
    } else {
        flavorCount[flavor] = 1;
    }
});

// Display the count of each flavor in the browser console
console.log("Flavor Count:");
console.table(flavorCount);
