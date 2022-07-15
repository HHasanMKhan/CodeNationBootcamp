favDrinks = ["Coca Cola", "Fanta", "Orange Juice"];
console.log(favDrinks);

favSongs = ["Song 1", "Song 2", "Song 3"];
console.log(favSongs);

favSongs.push("Song 4", "Song 5");
console.log(favSongs);

favSongs.pop();
console.log(favSongs);

favSongs.unshift("Song 6");
console.log(favSongs);

favMovies = ["Harry Potter", "Law Abiding Citizen", "Inception", "Grown Ups", "Interstellar"];
favMovies.push("Lord of The Rings","Dr Strange");
console.log(favMovies);
for(let i = 0; i < favMovies.length; i++) {
    console.log(favMovies + " in a for loop");
}

for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random()*50)
    console.log(num);
}

for (let i = 9; i >= 0; i--) {
    console.log(i);
}

 favMovies.pop();
 favMovies.pop();
 favMovies.pop();

console.log(favMovies);

for (let i = 0; i < favMovies.length; i++) {
    if(favMovies === "Ghostbusters") {
        console.log("Yay it’s Ghostbusters")
    } else {
        console.log("Boo! We want Ghostbusters!")
    }
    console.log(favMovies[i]);
}

for (let i = 0; i <= 6; i++) {
    let num = Math.floor(Math.random()*30);
    if (num % 7 === 0) {
        console.log(`${num} is divisible by 7`);
    } else {
        console.log(`${num} is NOT divisible by 7`);
    }
}

bobsFollowers = ["Michael", "Jackson", "Whitney", "Houston"];
hannahsFollowers = ["Michael", "Paul", "Adam", "Whitney"];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
        if (bobsFollowers[i] === hannahsFollowers[j]) {
            console.log(hannahsFollowers[j]);
        }
    }
}