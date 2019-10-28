import "./styles.css";
import {
  dateTime,
  dateFormat,
  findArea,
  rotateString,
  getKeys
} from "./functions";

// 1
document.getElementById("today").innerHTML = dateTime();

// 2
document.getElementById(
  "print"
).outerHTML = `<button onclick="print()">print</button>`;

// 3
const today = new Date();
document.getElementById("date-format").innerHTML = dateFormat(today);

// 4
document.getElementById("triangle").innerHTML = findArea(5, 6, 7);

//5
document.getElementById("rotate").innerHTML = rotateString("w3resource");

//1
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
document.getElementById("ob-1").innerHTML = getKeys(student);
