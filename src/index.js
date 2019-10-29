import "./styles.css";
import {
  dateTime,
  dateFormat,
  findArea,
  rotateString,
  getKeys,
  geyKeysDel,
  find1stJan,
  filterBooks,
  numberMatching,
  nextChristmas,
  leapYear,
  calculate
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

// 5

// 6
document.getElementById("leapYear").innerHTML = leapYear(today.getFullYear());

// 7
document.getElementById("find1stJan").innerHTML = find1stJan();

// 8
document.getElementById("numberMatching").innerHTML = numberMatching(5);

// 9
document.getElementById("nextChristmas").innerHTML = nextChristmas();

// 10
const first = parseInt.getElementById("first-input").value;
const sec = parseInt.getElementById("second-input").value;

document.getElementById(
  "multiButton"
).outerHTML = `<button onclick="multi()">Multi</button>`;
document.getElementById(
  "divButton"
).outerHTML = `<button onclick="divide()">Div</button>`;

document.getElementById("summary").innerHTML = first / sec;

console.log(first * sec);
export function divide() {
  console.log("div");
  // document.getElementById("summary").innerHTML = first / sec;
}

export function multi() {
  console.log("mult");
  // document.getElementById("summary").innerHTML = first * sec;
}

// object //

//1
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
document.getElementById("ob-1").innerHTML = getKeys(student);

//2
document.getElementById("ob-2").innerHTML = geyKeysDel(student);

//3
document.getElementById("ob-3").innerHTML = Array(student).length;

//4
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  }
];
// document.getElementById("ob-4").innerHTML = filterBooks(library);
