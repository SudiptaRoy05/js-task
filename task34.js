
const evenNum =(nums)=>{
    const evens=[];
    var sum = 0;
    for (const num of nums) {
        if (num % 2 === 0){
            evens.push(num);
            sum += num;        }
    }
    return `${evens} : ${sum}`;
}

var a =[2,8,9,6,7,3,5,2];
console.log(evenNum(a));