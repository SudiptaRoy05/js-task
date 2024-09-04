let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

var c = 0;
for (const key in student) {
    c++;
}
console.log(c);
// .........................................Another way....................
var count = Object.keys(student).length
console.log(count)