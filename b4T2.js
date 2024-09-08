const checkName =(name)=>{
    if(typeof name !== "string"){
        return "Not valid"
    }
    let lastWord = name.slice(-1);
    lastWord = lastWord.toLowerCase();
    if(lastWord === 'a' || lastWord === 'y' || lastWord === 'i' || lastWord === 'e' || lastWord === 'o' || lastWord === 'u' || lastWord === 'w'){
        return "good name";
    }
    return "Bad Name";
}


console.log(checkName("Sudipta"));


// another way 

const checkName2 =(name)=>{
    if(typeof name !== "string"){
        return "Not valid"
    }
    let lastWord = name.slice(-1).toLowerCase();
    const arr = ["a","y","i","e","o","u","w"];
    for (const value of arr) {
        if(value === lastWord){
            return "Good Name";
        }
        else{
            return "Bad name";
        }
    }
   
}

console.log(checkName2("sudip"));



// another way 

const checkName3 =(name)=>{
    if(typeof name !== "string"){
        return "Not valid"
    }
    let lastWord = name.slice(-1).toLowerCase();
    const arr = ["a","y","i","e","o","u","w"];
    const result = arr.includes(lastWord);

    return result ? "Good Name" : "Bad Name";
   
}

console.log(checkName3("bilai"));
