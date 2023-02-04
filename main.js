const button = document.querySelector(".generate");
const result = document.querySelector(".result");
const container = document.querySelector(".container");

const randomPasswordGenerator = () => {
  let pass = [];
  let passwordArr = [];

  const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
  const lower = "abcdefghijklmnoprstuvwxyz";
  const upper = lower.toUpperCase();
  const numbers = "1234567890";

  // RANDOM SYMBOL

  for (let i = 0; i < 2; i++) {
    let randSym = Math.round(Math.random() * (symbols.length - 1));
    pass.push(symbols[randSym]);
  }

  // RANDOM UPPERCASE

  for (let i = 0; i < 1; i++) {
    let randUpper = Math.round(Math.random() * (upper.length - 1));
    pass.push(upper[randUpper]);
  }

  // RANDOM LOWERCASE

  for (let i = 0; i < 4; i++) {
    let randLower = Math.round(Math.random() * (lower.length - 1));
    pass.push(lower[randLower]);
  }

  // RANDOM NUMBER

  for (let i = 0; i < 3; i++) {
    let randNumber = Math.round(Math.random() * (numbers.length - 1));
    pass.push(numbers[randNumber]);
  }

  // MIX THE ARRAY
  let randomKeeper = new Set();

  while (randomKeeper.size < 10) {
    randomKeeper.add(Math.round(Math.random() * 9));
  }
  let arrRandomKeeper = [...randomKeeper];
  for (let i = 0; i < randomKeeper.size; i++) {
    let passIndex = arrRandomKeeper[i];
    passwordArr.push(pass[passIndex]);
  }

  let password = passwordArr.join("");
  return password;
};
const passwordEl = document.createElement("p");

button.addEventListener("click", () => {
  let password = randomPasswordGenerator();
  passwordEl.innerHTML = "";
  const passwordText = document.createTextNode(password);
  passwordEl.append(passwordText);
  result.appendChild(passwordEl);
});

container.addEventListener("mouseover", () => {
  result.classList.remove("checked");
});

container.addEventListener("mouseout", () => {
  result.classList.add("checked");
});

console.log(randomPasswordGenerator());
