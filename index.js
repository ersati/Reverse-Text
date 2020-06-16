const textInput = document.querySelector(".text-input");
const mirror = document.querySelector(".mirror");
const clear = document.querySelector(".clear");

function reverseText({ target: { value } }) {
  let text = value;
  let result = text.split("").reverse().join("");
  console.log(value);
  mirror.textContent = result;
  console.log(result);
}
function clearText({ target: { value } }) {
  textInput.value = "";
  mirror.textContent = "";
}
textInput.addEventListener("keyup", reverseText);
clear.addEventListener("click", clearText);
