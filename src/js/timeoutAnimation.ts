setTimeout(() => {
    
const c1 = document.getElementById('c1');
let position = 0;
let flag = true;

setInterval(() => {
    Math.random() < 0.5 ? position += 50 : position -= 50;
	
    if(position < 0) {
        position = 50;
    } 
    if(position > 550) {
        position = 500;
    }

    if(c1) {
        c1.style.transform = `translateX(${position}px) translateY(${Number(flag) * -10}px)`;
    }
    
    flag = !flag;

}, 200);
}, 100);
