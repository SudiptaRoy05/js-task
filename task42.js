const getMax = (arr)=>{
    let MaxValue = arr[0];
    for (const value of arr) {
        if(value > MaxValue){
            MaxValue = value;
        }        
    }
    return MaxValue;
}

const height = [12,43,53,24,64,37,65,74,48];
console.log(getMax(height));