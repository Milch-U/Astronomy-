function changeThemeClicked() {
  console.log("Lets go deeper");
  let backgroundDiv = document.getElementById("background-container");
  let isDark = backgroundDiv.classList.contains("container-background-dark");

  if (isDark) {
    backgroundDiv.classList.remove("container-background-dark");
    backgroundDiv.classList.add("container-background-light");
  } else {
    backgroundDiv.classList.remove("container-background-light");
    backgroundDiv.classList.add("container-background-dark");
  }
}

//   backgroundDiv.classList.remove("container-background-light");
//   backgroundDiv.classList.add("container-background-dark");

function reveal(id) {
  console.log("Magic");
  let hiddenDiv = document.getElementById(id);

  hiddenDiv.classList.remove("hidden");
}

function addfive(n, e) {
  console.log(n);
  return n + 5 + e;
}

let x = addfive(7, 4);
console.log(x);
let y = addfive(6, 98);

function sayHello(name) {
  return "hello" + name;
}
