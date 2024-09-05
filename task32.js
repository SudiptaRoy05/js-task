const sumAll = (arr) =>{
    var sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sumAll([3,5,8,9,6,100]));


// Another way 

const sumAll2 = (arr) =>{
    var sum = 0;
    for (const num of arr) {
        sum += num
    }
    return sum;
}

console.log(sumAll2([3,5,9,6,100]));
