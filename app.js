function nextWord() {
  const words = ["apple", "cat", "book", "happy", "run"];
  document.getElementById("word").textContent =
    words[Math.floor(Math.random() * words.length)];
}

function checkGrammar(answer) {
  if (answer === "went") {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Try again!";
  }
}
