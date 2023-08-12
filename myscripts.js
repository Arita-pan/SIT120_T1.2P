function upperCase() {
  let text = document.getElementById("text1").innerHTML;
  document.getElementById("text1").innerHTML = text.toUpperCase();
}

function lowerCase() {
  let text = document.getElementById("text1").innerHTML;
  document.getElementById("text1").innerHTML = text.toLowerCase();
}

function greeting() {
  let name = prompt("Hello! What is your name?");
  if (name != null) {
    document.getElementById("greeting").innerHTML = "Hello, " + name + "!";
  }
}

function search() {
  let word = prompt("Please enter your search word");
  let paragraph = document.getElementById("text1").innerHTML;
  let matched = paragraph.match(word);
  if (word != null) {
    document.getElementById("match").innerHTML = "Total of " + matched.length + " " + word;
  }
}

function calculate() {
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;

  let multiplication = x * y;
  document.getElementById("multiplication").innerHTML = "The multiplication is " + multiplication;

  let exponential = multiplication.toExponential(2);
  document.getElementById("exponential").innerHTML = "The exponential of " + multiplication + " is " + exponential;
}

function precision() {
  let x = 2.2365;
  document.getElementById("precision").innerHTML = 
  x.toPrecision() + "<br>" +
  x.toPrecision(1) + "<br>" +
  x.toPrecision(2) + "<br>" +
  x.toPrecision(3);
}

function count() {
  const color = ["Red","Blue","Green","Purple","Black","Gray","Pink","Orange","Brown"];
  let x = color.length;
  document.getElementById("count").innerHTML = "Total Count is " + x;
}

function removeLast() {
  const color = ["Red","Blue","Green","Purple","Black","Gray","Pink","Orange","Brown"];
  let x = color.pop()
  document.getElementById("remove").innerHTML = x;
  document.getElementById("remove").innerHTML = color;
}

function removeFirst() {
  const color = ["Red","Blue","Green","Purple","Black","Gray","Pink","Orange","Brown"];
  let x = color.shift()
  document.getElementById("remove2").innerHTML = x;
  document.getElementById("remove2").innerHTML = color;
}

function add() {
  const color = ["Red","Blue","Green","Purple","Black","Gray","Pink","Orange","Brown"];
  let x = color.push("Yellow");
  document.getElementById("add").innerHTML = color;
}

function concat() {
  const color = ["Red","Blue","Green","Purple","Black","Gray","Pink","Orange","Brown"];
  const colors = ["Aquamarine", "Amber", "Azure", "Beige"];
  const allColor= color.concat(colors);
  document.getElementById("merges").innerHTML = allColor;
}

const t = new Date();
document.getElementById("time").innerHTML = "The current date and time is " + t;

const f = new Date("2023-07-10");
document.getElementById("firstDay").innerHTML = f;

const u = new Date();
document.getElementById("UTC").innerHTML = u.toUTCString();

const i = new Date();
document.getElementById("ISO").innerHTML = u.toISOString();

const h = new Date();
h.setDate(h.getDate() + 100);
document.getElementById("100").innerHTML = h;
