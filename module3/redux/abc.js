let playerDetails = {
    name:"Rohit",
    jerseyNo:45,
    age:34,
    team:"India",
}

// let playerDetailsIPL = {...playerDetails};
// playerDetailsIPL.team = "Mumbai"

//short hand for the above two lines
let playerDetailsIPL = {...playerDetails, team:"Mumbai"}

console.log(playerDetails);
console.log(playerDetailsIPL);