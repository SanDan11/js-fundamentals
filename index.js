const bassInventory = [
    {brand: "Ibanez", model: "GSRN2", tuning: "D standard"},
    {brand: "Jackson", model: "JS3QV", tuning: "C standard"},
    {brand: "Fender", model: "American Professional", tuning: "Standard"},
    {brand: "Aria", model: "SB-1000", tuning: " Eb Standard"}
]

for (const bass of bassInventory) {
    console.log(`${bass.brand} ${bass.model} - ${bass.tuning}`)
}