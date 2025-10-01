


const circle = document.getElementById('circle-container');
const showtime = document.getElementById('time');


function createCircle() {
circle.style.display = 'block';
circle.style.top = Math.random() *  900 + 'px';
circle.style.left = Math.random() * 500 + 'px';
circle.style.backgroundColor = randomcolor();
timestart = Date.now().gettime();
}
 circle.onclicklick =function() {
    circle.style.display = 'none';
    setTimeout(createCircle, 2000);
    const timeEnd = Date.now().getTime();
    const timeDiff = (timeEnd - timestart) / 1000;
    showtime.innerHTML = 'Your time: ' + time + ' seconds';
}

function randomcolor() {
 var s = '0123456789ABCDEF';
 var color = '#';
    for (var i = 0; i < 6; i++) {
        color += s[Math.floor(Math.random() * 16)];
    }
    return color;
}


