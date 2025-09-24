// var input = document.getelementbyid('input_id');
// var button = document.getelementbyid('btn_id');
// var text = document.getelementbyid('text_id');



var input = document.querySelector('#input_id');
var button = document.querySelector('#btn_id');
var text = document.querySelector('#text_id');


var text = "Hello World";
var resualt = text.search("World");
document.getElementById("resualt").innerHTML = resualt;

var text = "Hello World";
var resualt = text.search(/World/,"JavaScript");
document.getElementById("resualt2").innerHTML = resualt;

var text = "Hello World, welcome to the universe.";
var resualt = text.replace(/world1/,"HTML");
document.getElementById("resualt3").innerHTML = resualt;

var text = "abcdef";
var regex = new RegExp("abc");
document.getElementById("resualt4").innerHTML = resualt;

var text = "my school is good";
var regex = /school/g;
document.getElementById("resualt5").innerHTML = resualt;

var text = "my school is good";
var regex = /i/g;
document.getElementById("resualt6").innerHTML = resualt;

var text = "my school is good";
var regex = /(good|top|super)/g
document.getElementById("resualt7").innerHTML = resualt;

var text = "100 prcent";
var regex = /\d/g;
document.getElementById("resualt8").innerHTML = resualt;

var text = "my school is good";
var regex = /\s/g;
document.getElementById("resualt9").innerHTML = resualt;

var text = " hey how are you";
var regex = /\e+/g;
document.getElementById("resualt10").innerHTML = resualt;

var text = " SO HOPE TO SEE YOU AGAIN ";
var regex = /\S+/g;
document.getElementById("resualt11").innerHTML = resualt;







button.onclick = function(){
    text.innerhtml = input.value;
}