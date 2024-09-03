var books = ["Bangla", "Math", "Biology", "Physics", "Chemistry","Javascript"];

var available = books.includes("Javascript")
console.log(available);
if (!available) {
  console.log("Boi nai");
} else {
  console.log("Boi ache");
}
