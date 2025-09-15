window.onload = function() {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var square = document.getElementById("square");
    var circle = document.getElementById("circle");
    var triangle = document.getElementById("triangle");

    function showall() {
        square.style.display = "square";
        circle.style.display = "cricle";
        triangle.style.display = "triangle";
    }

    btn1.onclick = function() {
        square.style.display = "block";
        square.style.color = "red";
        square.style.fontSize = "30px";
        square.style.backgroundColor = "black";
        square.style.textAlign = "center";
    };

    btn2.onclick = function() {
        circle.style.display = "block";
        circle.style.color = "blue";
        circle.style.fontSize = "40px";
        circle.style.backgroundColor = "yellow";
        circle.style.textAlign = "right";
    };


    btn3.onclick = function() {
v_setatribute
        triangle.style.display = "block";
        triangle.style.color = "green";
        triangle.style.fontSize = "50px";
        triangle.style.backgroundColor = "pink";
        triangle.style.textAlign = "left";
    };
};