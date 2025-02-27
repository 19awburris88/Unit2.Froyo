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

    // Convert object into an array 
    console.table(Object.entries(flavorCounts).map(([flavor, count]) => ({ flavor, count })));
}