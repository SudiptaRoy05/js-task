function smallestName(array){
    let smallest = array[0];
    for (const name of array) {
        if(smallest.length > name.length){
            smallest = name;
        }
    }
    return smallest;
}

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallestName(names));