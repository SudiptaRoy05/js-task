const makeAvg = (arr)=>{
    if(arr.length === 0){
        return 0;
    }

    let sum = 0;
    for(let i =0; i<arr.length;i++){
        sum += arr[i];
    }
    const average = sum/arr.length
    return average;
}

const numbers = [109, 220, 340, 940, 150];
const avg = makeAvg(numbers);
console.log("Average:", avg);