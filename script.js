var c = document.querySelector('.canvas');
var r = document.querySelector(".rocket");
var k = true;
var t = 1;
var pos = 100 + "px";

r.style.transform = "translate(" + pos + ")";


function move() {
    moveUp();
    moveDown();
}

function moveDown() {
    r.style.transform = "translateY(1px)";
    setTimeout(moveDown, 100);
}

function moveUp() {
    r.style.transform = "translateY(-1px)";
    setTimeout(moveUp, 130);
}

function animateStars(k) {
    let j = 1;
    let v = 10;
    setInterval(() => {
        k.style.transform = "translateY(" + j + "px)";
        j += v;
    }, 100);
}

function stars() {
    var n = 50;
    for (let i = 1; i <= n; i++) {
        let z = document.createElement('i');
        z.style.position = "absolute";
        z.style.top = Math.random() * window.innerHeight + "px";
        z.style.left = Math.random() * window.innerWidth + "px";
        z.style.height = 4 + "px";
        z.style.width = 1 + "px";
        z.style.backgroundColor = "white";
        z.style.transform = "translateY(-10px)";
        animateStars(z);
        c.appendChild(z);
    }
}
setInterval(stars, 2000);
setTimeout(move, 1000);