var map = function(arr, fn) {
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i)); 
        }
    return result; 
};
const arr = [1,2,3]
const fn = (value, index) => value * 2 + index;




const transformedArray = map(arr, fn);
console.log(transformedArray)



// output [ 2, 5, 8 ]

// expected [ 2, 4, 6 ]