function generateArray() {
    const array: number[] = [];
    for(let i = 0; i < 100; i++) {
        array.push(Number((Math.random() * 100).toFixed(2)));
    }

    return array;
}

let arrayToSort = generateArray();

console.log('array to sort: ' + arrayToSort);

const worker1 = new Worker('worker.js');
const worker2 = new Worker('worker.js');

worker1.postMessage(arrayToSort);
worker2.postMessage(arrayToSort);
