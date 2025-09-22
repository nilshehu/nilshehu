for(i=0; i<10; i++){
    console.log(i);
}


console.log("----------------------------");

var x=0;
do{
        x++;
    console.log(x);
} while(x<=10);

console.log("----------------------------");

var j=0;

while(j<10){
    j = j + 1;
    console.log(j);
}

let n=0;
let m=0;
while(n<10){
    n++;        
    m += n;
    console.log(n);
    console.log(m);
}

console.log("----------------------------");

var person = {
    firstname: "Nils",
    lastname: "Hehu",
    age: 20
};

var text = "";
var z;
for (z in person) {
  text += person[z] + " ";
}
console.log(text + '');

console.log("----------------------------");

var name = ["Nils, ledion,lum"];
var y;
for(y of name){
    console.log(y);
}
console.log("----------------------------");

var students = ["Nils", "Ledion",];
for (i=0; i<students.length; i++) {
    document.write(students[i] + "<br>");
};

console.log("----------------------------");


