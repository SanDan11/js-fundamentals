const bassInventory = [
  { brand: "Ibanez", model: "GSRN2", tuning: "D standard" },
  { brand: "Jackson", model: "JS3QV", tuning: "C standard" },
  { brand: "Fender", model: "American Professional", tuning: "Standard" },
  { brand: "Aria", model: "SB-1000", tuning: " Eb Standard" },
];

// const guitars = ["Ibanez", "Jackson", "Fender"];

// const AllInstruments = [...guitars, ...basses];
// console.log(AllInstruments)

// const bass = { brand: "Ibanez", model: "GSRN2", tuning: "D standard" };

// const updatedBass = {...bass, strings: "Ernie ball" };

// console.log(bass);
// console.log(updatedBass);

// const [first, second, ...rest] = ["Ibanez" , "Jackson" , "Fender" , "Aria", "BC Rich" ];
// console.log(first);
// console.log(second);
// console.log(rest);

const [ first ] = bassInventory;

const { brand, model } = first;
console.log(`First bass: ${brand} ${model}`);