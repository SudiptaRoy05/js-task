var countZero = (binaryStr)=>{
    var count = 0;
    for(let i = 0 ; i<binaryStr.length; i++){
        if(binaryStr[i] === "0"){
            count++;
        }
    }
    return count;
}

console.log(countZero("10101000111001"));
