
const evenNum =(nums)=>{
    const evens=[];
    for (const num of nums) {
        console.log(num);
        if (num % 2 === 0){
            evens.push(num);
        }
    }
    return evens
}

var a =[2,8,9,6,7,3,5,2];
console.log(evenNum(a));