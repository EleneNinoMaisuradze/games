let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
  let guess = parseInt(prompt("გამოიცანით რიცხვი 1-დან 100-მდე:"));

  if (isNaN(guess)) {
    alert("გთხოვთ, შეიყვანოთ რიცხვი!");
    guessNumber();
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    alert(`გილოცავთ! თქვენ გამოიცანით რიცხვი ${randomNumber} ${attempts} მცდელობაში.`);
  } else if (guess > randomNumber) {
    alert("ჩაფიქრებული რიცხვი უფრო პატარაა. სცადეთ კიდევ ერთხელ.");
    guessNumber();
  } else {
    alert("ჩაფიქრებული რიცხვი უფრო დიდია. სცადეთ კიდევ ერთხელ.");
    guessNumber();
  }
}

guessNumber();