let content = document.querySelector(".result");

document.querySelector(".triangle").addEventListener("click", () => {
  let n = 6;
  let triangle = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      triangle += " ";
    }
    for (let k = 0; k < i; k++) {
      triangle += "*";
    }
    triangle += "</br>";
  }
  content.innerHTML = triangle;
});

document.querySelector(".pyramid").addEventListener("click", () => {
  let n = 6;
  let pyramid = "<center>";
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      pyramid += " ";

    }
    for (let k = 0; k < 2 * i - 1; k++) {
      pyramid += "*";
    }
    pyramid += "</br>";
  }
  pyramid += "<center>";
  content.innerHTML = pyramid;
});

document.querySelector(".reverse").addEventListener("click", () => {
  let n = 6;
  let reverse = "<center>";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
        reverse += " ";
    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        reverse += "*";
    }
    reverse += "</br>";
  }
  reverse += "<center>";
  content.innerHTML = reverse;
});


document.querySelector(".clear").addEventListener("click", () => {
    content.innerHTML = null;
  });