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

const text = "Ethics form the bedrock upon which both personal fulfilment and professional success flourish. They provide the valid code that steers our decisions towards integrity and empathy, shaping not only our individual journeys but also influencing the communities we inhabit. By embracing ethical responsibility and moral principles, individuals and organisations alike pave the way for a more compassionate world, where every interaction fosters understanding and growth.";
console.log(Lword(text));

