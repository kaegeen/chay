// chatbot.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "You> "
});

console.log("🤖 Simple Chatbot is ready! Type 'exit' to quit.");
rl.prompt();

rl.on("line", (line) => {
  const input = line.trim().toLowerCase();

  if (input === "exit") {
    console.log("🤖 Goodbye!");
    rl.close();
    return;
  }

  let response;
  if (input.includes("hello") || input.includes("hi")) {
    response = "Hello there! 👋";
  } else if (input.includes("how are you")) {
    response = "I’m just code, but I’m running fine 😎";
  } else if (input.includes("time")) {
    response = `The current time is ${new Date().toLocaleTimeString()}`;
  } else if (input.includes("date")) {
    response = `Today's date is ${new Date().toLocaleDateString()}`;
  } else {
    response = "Hmm, I don’t know what to say 🤔";
  }

  console.log(`Bot> ${response}`);
  rl.prompt();
});
