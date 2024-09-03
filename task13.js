var num = 1;
var sum = 0;

while(num <= 1000 ){
    if(num === 101){
        break;
    }
    sum = sum+num;
    console.log(num);
    num++;
}

console.log(sum);