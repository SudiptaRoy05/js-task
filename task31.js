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