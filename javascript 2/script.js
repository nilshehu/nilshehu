window.onload = function() {
    var button1 = document.getElementById("btn1");
    var button2 = document.getElementById("btn2");
    var v_text_style = document.getElementById("text_style");

    button1.onclick = function() {
        v_text_style.style.color = "red";
        v_text_style.style.fontSize = "30px";
        v_text_style.style.backgroundColor = "black";
        v_text_style.style.textAlign = "center";
    };

    button2.onclick = function() {
        v_text_style.style.color = "blue";
        v_text_style.style.fontSize = "40px";
        v_text_style.style.backgroundColor = "yellow";
        v_text_style.style.textAlign = "right";
    };

    Test.onclick = function() {
        v_text_style.classList.add("test");
    }
};