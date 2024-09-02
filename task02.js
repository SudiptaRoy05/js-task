
function bmiCalculator(height, weight) {
  var bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log(parseFloat(bmi.toFixed(2)))
    console.log("you are underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(parseFloat(bmi.toFixed(2)))
    console.log("You are normal");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(parseFloat(bmi.toFixed(2)))
    console.log("over weight");
  } else {
    console.log(parseFloat(bmi.toFixed(2)))
    console.log("Obese");
  }
}

bmiCalculator(1.8, 80);