var x=5

if(x>2){
    console.log("x is greater than 2");
}
else{
    console.log("x is less than 2");
}


var input=document.getElementById("input_id");
var button=document.getElementById("button_id");
var text=document.getElementById("text_id");


button.oneclick = function(){
    text.innerhtml=input.value;
}