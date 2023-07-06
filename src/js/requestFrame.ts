let width = 0;
let height = 0;
let speed = 3;
let hop = 1;

const c2 = document.getElementById('c2');

function move() {
    width += speed;
    height += hop;

    if(width > 550 || width < 0) {
        speed *= -1;
    }
    if(height > 20 || height < 0) {
        hop *= -1;
    }

    if(c2) {
        c2.style.transform = `translateX(${width}px) translateY(${-height}px)`;
    }

    window.requestAnimationFrame(move);
}

window.requestAnimationFrame(move);