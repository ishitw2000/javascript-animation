var c = document.querySelector('.canvas');
var r = document.querySelector(".rocket");
var k = true;
var t = 1;
var pos = 100 + "px";

r.style.transform = "translate(" + pos + ")";

const moving = setInterval(() => {
    r.style.transform = "translateY(" + -t + "px)";
    t++;
}, 100);


function move() {
    clearInterval(moving);
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



setTimeout(move, 1000);