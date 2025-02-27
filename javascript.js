function counterFlavors() {
    const input = prompt("Enter a list of comma-separated froyo flavors:");
    if (!input) return;
    
    const flavors = input.split(",");
    const flavorCounts = {};

    flavors.forEach(flavor => {
        const trimmedFlavor = flavor.trim().toLowerCase();
        if (trimmedFlavor) {
            flavorCounts[trimmedFlavor] = (flavorCounts[trimmedFlavor] || 0) + 1;
        }
    });

    // Convert object into an array of structured objects for console.table
    console.table(Object.entries(flavorCounts).map(([flavor, count]) => ({ flavor, count })));
}

counterFlavors();
function counterFlavors() {
    const input = prompt("Enter a list of comma-separated froyo flavors:");
    if (!input) return;
    
    const flavors = input.split(",");
    const flavorCounts = {};

    flavors.forEach(flavor => {
        const trimmedFlavor = flavor.trim().toLowerCase();
        if (trimmedFlavor) {
            flavorCounts[trimmedFlavor] = (flavorCounts[trimmedFlavor] || 0) + 1;
        }
    });

    // Log only the key-value pairs in a table format
    console.table(Object.keys(flavorCounts).reduce((acc, flavor) => {
        acc[flavor] = { count: flavorCounts[flavor] };
        return acc;
    }, {}));
}

counterFlavors();
