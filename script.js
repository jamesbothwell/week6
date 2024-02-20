console.log(`JS loaded.`);

let myname = "John";
myname = 'john with single quotes';
myname = `john was here using template literals`;

myname = myname.toUpperCase();
console.log(myname);

// console.log(myname.toUpperCase());

let myhtml = document.getElementById("message");

mysecond = 100;

if (typeof mysecond != "undefined") {

    myfirst = 'changed in if statement';

    myhtml.innerHTML += `${myname} display ${typeof mysecond}`;

} else {

    myhtml.innerHTML += `${myname}`;

}

// console.log(myfirst);

// console.log(typeof myname);

// console.log(typeof mysecond);

let mythings = [];

mythings.push("john");
mythings.push(50);
mythings.push("jbusch@ajdfahkjsda.com");

console.table(mythings);

let myplayer = document.getElementById("myplayer");

mythings[2] = "j.a.busch@qub.ac.uk"

console.table(mythings);

myplayer.innerHTML = mythings[2];

let myobject = {
    name: "j busch",
    email: "j.a.tyrbtevgbr@bteverv.com",
    score: 100
}

let myobject2 = {
    name: "j black",
    email: "jjtyrbtevgbr@bteverv.com",
    score: 100
}

let myobject3 = {
    name: "j blue",
    email: "j.a.vessv@bteverv.com",
    score: 100
}

let players = [myobject];
players.push(myobject2);
players.push(myobject3);

console.table(players);

myplayer.innerHTML += players[0].name; // !!!!!!!!!!!!!!!

players.forEach(element => {
    console.log(element.score);
    myplayer.innerHTML += `<p>player score: ${element.score}</p>`;
});