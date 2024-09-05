const size = (str) =>{
    var count = 0;
    for(let i = 0; i<str.length; i++){
        count++
    }
    if(count % 2 === 0){
        return "Even";
    }
    else{
        return "ODD";
    }
}
var v = "sdfghjrgwhjk";
console.log(size(v));
console.log("----------------------------------")

// another simple way

const sized =(str)=>{
    var size = str.length;
    return (size % 2 === 0)?  "even" : "odd"; 
}
var s = "fbhgbhbznjfhbgb"
console.log(sized(s));