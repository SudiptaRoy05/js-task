function oddEven(a){
    var result ;
    if( a%2 !== 0){
        result = a*2;
    }
    else{
        result = a/2;
    }
    return result;
}

console.log(oddEven(90));