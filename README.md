# Unit2.Froyo

This project contains a JavaScript functions designed to count occurrences of froyo flavors entered by a user which works. I initially had issues leading to incorrect behavior with te function below. This document explains the problems and how they were fixed.

function counterFlavors() {
    const input = prompt("Enter a list of comma-separated froyo flavors:");
    if (!input) return;
    
    const flavors = input.split(",");
    const flavorCounts = {};
    
    flavors.forEach(flavor => {
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    });
    
    console.table(flavorCounts);
}

counterFlavors();


This function was not handling input properly, which led to inconsistent results. The key issues were:

Issues 

The prompt worked correctly but console table did not show. I created 3-4 files to try to fix, running into different issues. 

Fixes Applied

-Trimmed and standardized case (trim().toLowerCase()) to ensure consistency.

-Converted the object into an array of structured objects so console.table() displays the results correctly.

-Ensured empty or invalid inputs are not counted by checking if trimmedFlavor is non-empty.


