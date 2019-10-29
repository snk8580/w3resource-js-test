export function dateTime() {
  const today = new Date();
  return `Today is : ${printDay(today)}, Current time is : ${printTime(today)}`;
}

function printDay(day) {
  const weeks = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  return weeks[day.getDay() - 1];
}

function printTime(time) {
  return `${time.getHours()} PM : ${time.getMinutes()} : ${time.getSeconds()}`;
}

export function dateFormat(day) {
  return `${fillZero(day.getMonth() + 1)}-${fillZero(
    day.getDate()
  )}-${day.getFullYear()}`;
}

function fillZero(num) {
  return num < 10 ? "0".concat(num) : num;
}

export function findArea(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

export function rotateString(string) {
  return string;
}

export function find1stJan() {
  const firstJan = [];
  for (let i = 2014; i <= 2050; i++) {
    const res = new Date(i.toString());
    if (
      res.getDate() === 1 &&
      res.getMonth() + 1 === 1 &&
      res.getDay() + 1 === 1
    ) {
      firstJan.push(res);
    }
  }

  return firstJan;
}

export function numberMatching(guess) {
  const randomNumber = Math.round(Math.random() * 10 + 1);
  return guess === randomNumber ? "Good Work" : "Not matched";
}

export function nextChristmas() {
  const today = new Date();
  const christmasDay = new Date(`12/25/${today.getFullYear()}`);
  if (today.getMonth() === christmasDay.getMonth()) {
    if (today.getDate() === christmasDay.getDate()) {
      return "today is Christmas!!";
    } else {
      return Math.abs(today.getDate() - christmasDay.getDate()) + " Days";
    }
  } else if (today.getMonth() < christmasDay.getMonth()) {
    return (
      Math.abs(today.getMonth() - christmasDay.getMonth()) * 30 -
      (today.getDate() - christmasDay.getDate()) +
      " Days"
    );
  } else {
    return (
      Math.abs(today.getMonth() - christmasDay.getMonth()) * 30 +
      (today.getDate() - christmasDay.getDate()) +
      " Days"
    );
  }
}

export function leapYear(year) {
  return (year % 4 === 0 && year % 100 === 0) || year % 400 === 0;
}

export function calculate(a, b, action) {}

// object //

export function getKeys(object) {
  return Object.keys(object);
}

export function geyKeysDel(object) {
  return getKeys(object).filter(k => k !== "rollno");
}

export function filterBooks(library) {
  const books = library.filter(book => book.readingStatus);
  console.log(books);
  return books;
}
