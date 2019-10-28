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

export function getKeys(object) {
  return Object.keys(object);
}

export function geyKeysDel(object) {
  return getKeys(object).filter(k => k !== "rollno");
}
