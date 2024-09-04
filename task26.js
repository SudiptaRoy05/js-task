let myObj = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (const key in myObj) {
    console.log( key, ":", typeof(myObj[key]));
}