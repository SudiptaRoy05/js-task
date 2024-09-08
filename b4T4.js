const password = (obj) => {
  if (obj.bYear.toString().length !== 4) {
    return "Invalid";
  } else if (
    obj.name === undefined ||
    obj.bYear === undefined ||
    obj.site === undefined
  ) {
    return "Invalid";
  }
  let cap = obj.site[0].toUpperCase() + obj.site.slice(1);
  let pass = cap + "#" + obj.name + "@" + obj.bYear;
  return pass;
};

const person = {
  name: "sudipta",
  bYear: 2000,
  site: "facebook",
};
const person1 = {
  name: "roy",
  bYear: 800,
  site: "google",
};

const person2 = {
  bYear: 800,
  site: "google",
};
const person3 = {
  name: "royis",
  bYear: 8090,
  site: "freeCodeCamp",
};
console.log(password(person));
console.log(password(person1));
console.log(password(person2));
console.log(password(person3));
