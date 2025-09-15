var langueges=["java","c++","python"];

console.log(langueges[0]);
console.log(langueges[1]); 
console.log(langueges[2]);

function push() {
    langueges.push("javascript");
    console.log(langueges);
}

function pop() {
    langueges.pop();
    console.log(langueges);
}

function shift() {
    langueges.shift();
    console.log(langueges);
}       

function splice() {
    langueges.splice(1,1);
    console.log(langueges);
}   

function unshift() {
    langueges.unshift("ruby");
    console.log(langueges);
}