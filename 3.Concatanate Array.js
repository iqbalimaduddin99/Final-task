function CArray () {
let array = document.getElementById("array").value;
let result1 = [...new Set(array)];
let result = result1.join("")

document.getElementById("result").innerHTML = result;
    }

CArray();
  
