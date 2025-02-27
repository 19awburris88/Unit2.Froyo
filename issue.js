// Function to countfunction countFroyoFlavors() {
    function numFroyoFlavors() {

// Prompt user for a list of froyo flavors
const input = prompt("Enter a list of comma-separated froyo flavors:");

if (!input) {
    console.log("No input provided.");
    return;
}

 // Split input into an array and initialize an object to store counts
 const flavors = input.split(",");
 const flavorCounts = {};

 // Iterate over the flavors and count occurrences
 for (const flavor of flavors) {

  // Log the results as a table
  console.table(Object.values(flavorCounts));

  // Call the function
  numFroyoFlavors();