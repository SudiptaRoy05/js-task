const sumAll = (arr) =>{
    var sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sumAll([3,5,8,9,6,100]));