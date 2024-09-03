var num = [1, 3, 2, 5, 4];
var age = 24;
var person = {
    name: "Sudip",
    age: 25,
}
var colors = ["red", "green", "blue"];
var isAlive = true;

var variables = {num, age, person, colors, isAlive}

for (const key in variables) {
    console.log(key)
    if(Array.isArray(variables[key])){
        console.log("an array");
    }
    else{
        console.log("Not an array")
    }
}
