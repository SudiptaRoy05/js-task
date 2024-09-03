const statement = 'I am a hard working person'

var reversed = "";
var j = statement.split(" ")
for(let i=j.length-1; i>=0 ; i--){
    reversed += j[i];
    reversed += " ";
}
console.log(j);
console.log(reversed);