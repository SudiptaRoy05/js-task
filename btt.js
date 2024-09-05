function binaryToText(binaryStr) {
    // Split the binary string into an array of 8-bit chunks
    let binaryArr = binaryStr.split(" ");
    console.log(binaryArr)
    
    // Convert each 8-bit binary chunk to its corresponding character
    let text = binaryArr.map(bin => String.fromCharCode(parseInt(bin, 2))).join("");
    
    return text;
  }
  
  // Example usage
  let binaryString = "01001111 01001000 01001000 01001000 00100000 01011001 01000101 01010011 00100000 01000100 01000001 01000100 01011001";
  let text = binaryToText(binaryString);
  console.log(text);  // Outputs: Hello
  