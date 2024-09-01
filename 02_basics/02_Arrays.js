const marvel_hero = [ "thor", "ironman", "spiderman"]
const dc_hero = [ "superman", "flash", "batman"]

//marvel_hero.push(dc_hero);

//console.log(marvel_hero)
//console.log(marvel_hero[3][2]);

//const all_hero = marvel_hero.concat(dc_hero)  //concat merges all array 
//console.log(all_hero);

//const all_hero = [...marvel_hero,...dc_hero] // spread also merges all array
//console.log(all_hero);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]] ]
//console.log(another_array);

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);


console.log(Array.isArray("sunny"))   // to check wheather is array or not
console.log(Array.from("sunny"))     // to convert into any function to array
console.log(Array.from({name:"sunny"}))    // intersting 



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
