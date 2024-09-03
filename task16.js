// for (let i = 55; i<= 85; i++){
//     if(i%5 === 0){
//         continue;
//     }
//     console.log(i);
// }
/////////////////////////////////////////////////extra/////////////////////////////
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
fetchData().then(data => {
    if (data) {
      console.log("Data received:", data);
    } else {
      console.log("Failed to fetch data.");
    }
  });

//   console.log(fetchData()); 

