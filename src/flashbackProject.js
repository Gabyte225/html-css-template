let content = document.querySelector(".result");

document.querySelector(".triangle").addEventListener("click", () => {
  let n = 6;
  let triangle = "";
  for (let i = 1; i <= n; i++) {
    for (let k = 0; k < i; k++) {
      triangle += "*";
    }
    triangle += "</br>";
  }
  content.innerHTML = triangle;
});

document.querySelector(".pyramid").addEventListener("click", () => {
  let n = 8;
  let pyramid = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      pyramid += "&nbsp";
      }
    for (let k = 0; k < i - 1; k++) {
      pyramid += "* ";
    }
    pyramid += "</br>";
  }
  content.innerHTML = pyramid;
});

document.querySelector(".reverse").addEventListener("click", () => {
  let n = 8;
  let reverse = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      reverse += "&nbsp";
      }
    for (let k = 0; k < (n - i) - 1; k++) {
      reverse += "* ";
    }
    reverse += "</br>";
  }
  content.innerHTML = reverse;
});

document.querySelector(".diamond").addEventListener("click", () => {
  let n = 6;
  let diamond = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
        diamond += "&nbsp";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        diamond += "*";
    }
    diamond += "</br>";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
        diamond += "&nbsp";
    }
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
        diamond += "*";
    }
    diamond += "</br>";
  }
  content.innerHTML = diamond;
});

document.querySelector(".clear").addEventListener("click", () => {
  content.innerHTML = null;
});
