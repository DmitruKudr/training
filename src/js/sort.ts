function generateArray() {
    const array: number[] = [];
    for(let i = 0; i < 100000; i++) {
        array.push(Number((Math.random() * 100).toFixed(2)));
    }

    console.log(array);
    return array;
}

const worker1 = new Worker('worker.js');
const worker2 = new Worker('worker.js');

worker1.postMessage(generateArray());
worker2.postMessage(generateArray());