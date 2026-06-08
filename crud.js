const bassInventory = [
  { brand: "Ibanez", model: "GSRN2", tuning: "D standard" },
  { brand: "Jackson", model: "JS3QV", tuning: "C standard" },
  { brand: "Fender", model: "American Professional", tuning: "Standard" },
  { brand: "Aria", model: "SB-1000", tuning: " Eb Standard" },
];

function createBassList(basses, bass) {
  if (basses.indexOf(bass) === -1) {
    basses.push(bass);
    console.log(`New guitar added to collection is: ${basses}`);
  } else {
    console.log(`${basses} already exist in the list.`);
  }
}

function readBassList(basses, bass) {
  for (const bass of basses) {
    console.log(bass);
  }
}

function updateBass(basses, index, newBass) {
  basses[index] = newBass;
}

function deleteBass(bass, index) {
  bass.splice(index, 1);
}


// // save for later
// const model = bassInventory.map(({ brand, model }) => ({ [brand]: model}));

// console.log(bassInventory)

// const fullNames = bassInventory.map(bass => `${bass.brand} ${bass.model}`);
// console.log(fullNames);

// const dStand = bassInventory.filter(bass => bass.tuning === "D standard");
// console.log(dStand);

