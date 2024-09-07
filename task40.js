function Lword(sentence){
    let words = sentence.split(" ");
    let lLength ="";
    for (const word of words) {
        if(word.length > lLength.length){
            lLength = word;
        }
    }
    return lLength;
}

const text = "I am learning Programming to become a programmer";
console.log(Lword(text));

