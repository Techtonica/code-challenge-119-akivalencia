// # Different Robot Map
//
// You are working on the Robot from Chapter 7 of Eloquent JavaScript.
// After you have already written the `buildGraph` function,
// someone gives you an input file for a different town
// and they didn't follow the same format as the `const roads` array
// of strings in the book. So you need to write new code to process this different format.


function addRoad(startName, endingName) {
  console.log(`called addRoad, start: '${startName}' end: '${endingName}'`);
  /* the rest is the same as the book
   you DON'T need to implement this */
}

const otherRoads = [
  "Osito's Treehouse <=> Oscuro's Lair",
  "Zorro's Den <=> Bella's Casa",
  "Bella's Casa <=> Rayo's Mansion",
  "Oscuro's Lair <=> Bella's Casa",
  "Osito's Treehouse <=> Zorro's Den"
];

/*
  Process the "otherRoads" array of strings so you can call addRoad for each pair of locations.
*/
//splitting the strings with arrow 
// otherRoads[0].split('<=>');
// 0,0, 0[1]; index 0 and index 1 of each subarrara/elemnt are sn and en 
//e startname endingname 

console.log(otherRoads[0].split(' <=> ' ));
console.log(otherRoads[0].split('<=>'));

// //result of the variable 
for (let i=0; i < otherRoads.length; i++){
   let pair = otherRoads[i].split(" <=> ");
   let a = pair[0];
  let b= pair[1];
    addRoad(a,b);
}


// //stays in one array element separated by the 

// console.log(otherRoads[0].split('<=>'));
// // module.exports = addRoad;
