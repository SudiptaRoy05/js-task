for(let i = 1; i<= 100; i++){
    let num = Math.sqrt(i);

    if(Number.isInteger(num) && num > 1){
        console.log(`the first square number is ${i}`);
        break;
    }
}