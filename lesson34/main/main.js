// function printnames(){
//     document.write("john")
//     document.write("<br>")
//     setTimeout(function(){document.write("peter")},3000)
//     document.write("bob")
// }

// printnames();



var colors = ["red","blue","green","yellow"];

function printcolors(){
    document.querySelector('body').style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}

var names = ["john","peter","bob","mark"];

function printnames(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)];
}

setInterval(printcolors,1000);
setInterval(printnames,2000);