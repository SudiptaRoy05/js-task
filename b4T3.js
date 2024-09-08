function deleteInvalid(arr){
    if(!Array.isArray(arr)){
        return "Invalid";
    }
    
    let newarr = [];
    for (const value of arr) {
        if(Number(value)){
            newarr.push(value);
        }
    }
    return newarr;
}

const num = [1,9,"u",NaN, -2, undefined, null];
const num1 = [null, NaN, undefined, "i"];
const num2 = {
    name: "roy",
}

console.log(deleteInvalid(num))
console.log(deleteInvalid(num1))
console.log(deleteInvalid(num2))