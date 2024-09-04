const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};

var physicsMarks = student.physics.marks;
var physics_Marks = student['physics'].marks;

console.log(physicsMarks);
console.log(physics_Marks);