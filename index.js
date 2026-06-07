const bassInventory = [
    {brand: "Ibanez", model: "GSRN2", tuning: "D standard"},
    {brand: "Jackson", model: "JS3QV", tuning: "C standard"},
    {brand: "Fender", model: "American Professional", tuning: "Standard"},
    {brand: "Aria", model: "SB-1000", tuning: " Eb Standard"}
]

bassInventory.push({brand: "BC Rich", model: "Warlock", tuning: "Dropped C"});

bassInventory[0].tuning = "A standard";

bassInventory.splice(2, 1);
// bassInventory.splice(2, 2);
// bassInventory.splice(2, 0);

for (const bass of bassInventory) {
    console.log(`${bass.brand} ${bass.model} - ${bass.tuning}`)
}