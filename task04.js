const result = (mScore, fScore) => {
  var category;
  if (mScore > 100 || fScore > 100) {
    category = "Vag vsdk";
  } else if (mScore >= 80 && fScore >= 80) {
    category = "Go for a lunch";
  } else if (mScore >= 80) {
    if (fScore >= 60) {
      category = "Better luck next time";
    } else if (fScore >= 40) {
      category = "Message unseen";
    } else {
      category = "Block";
    }
  } else if (mScore < 80) {
    category = "Sad";
  }
  return category;
};

console.log(result(85, 85)); 
console.log(result(85, 70)); 
console.log(result(85, 50)); 
console.log(result(85, 30)); 
console.log(result(75, 85)); 