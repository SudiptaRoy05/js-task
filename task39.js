const nOv =(str)=>{
    const letters = str.split("");
    var count = 0;
    for (const letter of letters) {
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ){
            count++
        }
    }
    return count;
    
}


const text = "I Am a Good boy and a good student too ";
console.log(nOv(text.toLowerCase()))