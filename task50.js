
function lowestNumber(array){
    let lowest = array[0];
    for (const num of array) {
        if(lowest > num){
            lowest = num;
        }
    }
    return lowest;
}


const heights = [167, 190, 120, 165, 137];
console.log(lowestNumber(heights));