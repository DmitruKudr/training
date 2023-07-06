self.onmessage = function(event) {
    const array = event.data;
    const sortedArray = sort(array);
    self.postMessage(sortedArray);
};
  

function sort(arr: number[]): number[] {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    console.log('hi ' + arr);
    return arr;
}
