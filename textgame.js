// Function used to begin game, triggers opening alerts
function beginGame() {
  alert("It is the 15th of March, 44 B.C.. You are a Roman Senator of the Populares party, the party of the people. Your leader and the current dictator of Rome, Juilius Caesar, has been making waves in the current political landscape. There are rumors that your rival political party, the Optimates, are planning to take drastic measures to regain political power. You enter the Senatorial Curia with the intention of finding and stopping any conspirators. When you're ready to begin, click 'OK'.");
  alert("You enter the Curia in the morning, as senators begin arriving to meet their obligations for the day. As you look about the main hall of the Curia, you see three prominent senators already arrived and in the midst of preparing for the day: Longinus, Cicero, and Atticus. Given these mens' prominent status in the Senate, and the rumors of potential danger for your leader, you decide to descretely investigate them...");
  
  playingGame();
}

// Based on the user inputs in the game while loop, this function uses switch to determine the appropriate message from the game
function speakToSenator(choice) {
  switch (choice) {
    case "Longinus":
      alert("You approach Longinus and greet him. He returns your greeting plainly, and speaks efficiently yet boastfully about his service in the Roman army. Longinus continues, speaking of the prestige of the Roman Senate, and how it came about after the Roman people ousted their last king hundreds of years earlier. You note that Longinus served as a general in the Roman army.");
      break;
    case "Cicero":
      alert("You approach Cicero and bid him a good morning. He greets you, displaying his legendary eloquency and skill with the spoken word. With his usual wit, Cicero wastes no time begining to mock Caesar for his prolonged stay at the king of Bithynia, Nicomedes, court. You note Cicero's loyalty to the Optimates, and his infamous mocking of Caesar in the past.");
      break;
    case "Atticus":
      alert("You approach Atticus with a greeting. He returns your greeting. Atticus speaks briefly yet seemingly genuinely about the glory of the Roman Senate, and of Caesar's recent conquests in Gaul to the north and Pontus in the east. You note Atticus' relative young career as a senator.");
      break;
    default:
      alert("Sorry, I didn't understand that. Please enter a valid senator name to speak with.");
  }
}

// Based on user input, shows additional clues in user chooses to 'press' a senator
function pressSenator(press) {
// Gets user input for which character they want to interact with
  press =  prompt("Which senator would you like to press? Longinus, Cicero, or Atticus?");
  switch (press) {
    case "Longinus":
      alert("You tactfully press Longinus on his thoughts on Caesar and the rumors of danger. Longinus calmly but sternly compliments Caesar's abilities as a military commander and statesman. He note's Caesar's power as a dictator, like Sulla and Cincinnatus before him. He coldly notes the laurel wreath that Caesar wears is similar to the crown of a king.");
      break;
    case "Cicero":
      alert("You carefully press Cicero on his thoughts about the new dictator, Caesar, and the rumors of danger surrounding him. Cicero cynically scoffs at Caesar's pompous attitude, and laments the relatively recent trend in Roman politics of consistly appointing dictators for life. He ends by admitting the importance of the Senate as an instiution and order in Roman society.");
      break;
    case "Atticus":
      alert("You cautiously press Atticus on his thoughts of Caesar and the current state of Roman politics. Given his newcomer status in the Senate, Atticus refrains from espousing radical support for either party in the Senate, and dismisses your advances.");
      break;
    default:
      alert("Sorry, I didn't understand that. Please enter a valid senator name to press.");
  }
}

// Based on user input, allows user to accuse which character they think is guilty
function accuseSenator(accusation) {
// Gets user input for which character to be accused
  accusation = prompt("Which senator would you like to accuse? Longinus, Cicero, or Atticus?");
  switch (accusation) {
    case "Longinus":
      document.write("You correctly confront Longinus on his treason and conspiracy. He is arrested and his co-conspirators fail to enact their plan due to his loss. Congratulations, you win!");
      break;
    case "Cicero":
      document.write("You confront Cicero and accuse him of treason. Due to your lack of evidence, his high status, and most important, his innocence, he is not arrested and you are thrown out of the Senate. You lose.");
      break;
    case "Atticus":
      document.write("You confront Atticus and accuse him of conspiracy and treason. Due to your lack of evidence and his lack of motives, he is not arrested and you are thrown out of the Senate. You lose.");
      break;
    default:
      alert("Sorry, I didn't understand that. Please enter a valid senator name to accuse.");
  }
}

// Function that determines game status. Where user interacts with game
function playingGame() {
// Initializes array of characters
  var suspects = ["Longinus", "Cicero", "Atticus"];
// Used for while loop to keep game running as long as player needs
  var gaming = true;
// Initialized variables for user's input as they play
  var choice = "";
  var press = "";
  var accusation = "";
  
// While the user is gaming, prompts them with options to interact
  while (gaming) {
    choice = prompt('Which senator would you like to speak with? "Longinus", "Cicero", or "Atticus". If you would like to press a suspect for more information, type "press". When you are ready to accuse a senator or treason and conspiracy, type "accuse". If you would like to exit the game, type "quit".');
// Depending on user input, calls relevant function
    if (suspects.includes(choice)) {
      speakToSenator(choice);
    } else if (choice === "press") {
      pressSenator(press);
    } else if (choice === "accuse") {
      accuseSenator(accusation);
      gaming = false;
    } else if (choice === "quit") {
      gaming = false;
      alert("You have quit. Thank you for playing!");
    }
  }
}
// Calls overall game function into play
beginGame();