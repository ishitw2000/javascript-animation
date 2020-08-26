var c = document.querySelector('.canvas');
var r = document.querySelector(".rocket");


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
    const r = setInterval(() => {
        k.style.transform = "translateY(" + j + "px)";
        j += v;
        if (j > window.innerHeight) {
            clearInterval(r);
        }
    }, 50);
}

function stars() {
    var n = 25;
    for (let i = 1; i <= n; i++) {
        let z = document.createElement('i');
        z.style.position = "absolute";
        z.style.top = Math.random() * window.innerHeight + "px";
        z.style.left = Math.random() * window.innerWidth + "px";
        z.style.height = 3 + "px";
        z.style.width = 1 + "px";
        z.style.backgroundColor = "white";
        z.style.transform = "translateY(-10px)";
        animateStars(z);
        c.appendChild(z);
    }
}

setInterval(stars, window.innerHeight);
setTimeout(move, 1000);