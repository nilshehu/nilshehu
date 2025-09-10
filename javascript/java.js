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
function computer(name, cpu, ram, gpu) {
    this.name = name;
    this.cpu = cpu;
    this.ram = ram;
    this.gpu = gpu;
}

var computer1 = new computer("macbook", "intel core8", "8gb", "rtx5090");
 window.onload = function() {
    var button1 = document.getElementById("btn1");
    var button2 = document.getElementById("btn2");
    var button3 = document.getElementById("btn3");
    var button4 = document.getElementById("btn4");
    
    button1.onclick = function() {
        alert("hello<3");
    };
    button2.onclick = function() {
        alert("You clicked button 2!");
    };
    button3.onclick = function() {
        alert("This is button 3!");
    };
    button4.onclick = function() {
        alert("Button 4 pressed!");
    };
};