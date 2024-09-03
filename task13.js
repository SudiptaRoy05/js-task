var num = 1;
var sum = 0;

while(true ){
    sum = sum+num;
    console.log(num);
    if(num === 100){
        break;
    }
    
    num++;
}

console.log(sum);