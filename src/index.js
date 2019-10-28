import "./styles.css";
import {
  dateTime,
  dateFormat,
  findArea,
  rotateString,
  getKeys,
  geyKeysDel,
  find1stJan
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

//6

//7
document.getElementById("find1stJan").innerHTML = find1stJan();

//1
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
document.getElementById("ob-1").innerHTML = getKeys(student);

////2
document.getElementById("ob-2").innerHTML = geyKeysDel(student);
