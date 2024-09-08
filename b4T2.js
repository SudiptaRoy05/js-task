const checkName =(name)=>{
    if(typeof name !== "string"){
        return "Not valid"
    }
    let word = name.slice(-1);
    word = word.toLowerCase();
    if(word === 'a' || word === 'y' || word === 'i' || word === 'e' || word === 'o' || word === 'u' || word === 'w'){
        return "good name";
    }
    return "Bad Name";
}


console.log(checkName("Sudipta"));