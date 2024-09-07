function countReapet(arr, value){
    let count = 0;
    for (const item of arr) {
        if(item === value){
            count++;
        }
    }
    return count;
}

const arr = [2,3,1,4,4,3,5,6,3,4,2,1,3]

console.log(countReapet(arr,3));