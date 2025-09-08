function sum(number1, number2) {
    return number1 + number2;
}
console.log(sum(3,4));

var name = "digital school";

function dsfunction() {
    console.log(name);
}

function dsfunction (){
var localvar = "digital school"; 
    console.log(localvar);
}

dsfunction();

    function triangle (gjatsia,lartesia){
        return 0.5*lartesia*gjatsia;
    }
console.log(triangle(5,4));

var car = {
    name:"BMW",
    year:"2020",
    color:"black",


    startengine: function(){
        alert("engine started");
    },
    get getname() {
        return this.name;
    },
    set getname(name) {
        this.name = name;
    },
};

console.log(car.color);
console.log(car.name);
car.startengine();

car.name="Audi";

console.log(car.name);

var person = {
    name: "John",
    age: 30,
    race: "white",
    talk: function() {
        alert("Hello");
    },
    get getname() {
        return this.name;
    },
    set getname(name) {
        this.name = name;
    }
};