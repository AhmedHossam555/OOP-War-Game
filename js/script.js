// StartGame class handles the initial game UI and countdown 
function StartGame(){
  this.gameDom = document.querySelector(".game"); // Main game container
  this.startBtn = document.querySelector(".game-start"); // Start button
  this.counterDom = document.querySelector(".game-counter"); // Countdown display
}

// Removes the game start screen 
StartGame.prototype.start = function() {
  this.gameDom.remove();
}

// Shows a countdown before the game starts
StartGame.prototype.counter = function(){
  this.counterDom.style.display = "block";
  let counter = 3;
  this.counterDom.innerHTML = counter;
  let interval = setInterval(() => {
    counter--;
    this.counterDom.innerHTML = counter;
    if(counter < 0) {
      clearInterval(interval);
      this.counterDom.remove();
      document.querySelector(".layer").remove(); // Remove overlay layer
    }
  }, 1000);

}

// Instantiate StartGame and set up start button event
let startGame = new StartGame();
startGame.startBtn.addEventListener("click", function() {
  startGame.start();
  startGame.counter();
});

// UiElement class manages UI elements for each player
function UiElement(name){
  this.healthBtn = document.getElementById(`${name.toLowerCase()}_health`); // Health button
  this.attackBtn = document.getElementById(`${name.toLowerCase()}_attack`); // Attack button
  this.progress = document.querySelector(`.${name.toLowerCase()}-progress span`); // Health bar
  this.level = document.querySelector(`.${name.toLowerCase()}-level`); // Health text
  this.died = document.querySelector(`.${name.toLowerCase()}-died`); // Death message
}

// Person class represents a player or character
function Person(name, health, attackPower) {
  this.name = name;
  this.health = health;
  this.attackPower = attackPower;
  this.ui = new UiElement(name);
  this.attackAudio = new Audio("../sounds/bass-clarinet-attack-4-41962.mp3"); // Attack sound
  this.healthAudio = new Audio("../sounds/one_beep-99630.mp3"); // Health sound

}

// Attack method: reduces opponent's health and updates UI
Person.prototype.attack = function(opponent) {
  this.attackAudio.play();
  opponent.health -= this.attackPower;
  if(opponent.health <= 0) {
    opponent.health = 0;
    opponent.ui.attackBtn.remove(); // Remove attack button if dead
    opponent.ui.healthBtn.remove(); // Remove health button if dead
    opponent.ui.died.innerHTML = `${opponent.name} has died!`; // Show death message
  }

  opponent.ui.level.innerHTML = `${opponent.health}%`; // Update health text
  opponent.ui.progress.style.width = `${opponent.health}%`; // Update health bar
}

// Logs the status of the person to the console
Person.prototype.status = function() {
  console.log(`name: ${this.name}`);
  console.log(`health: ${this.health}`);
  console.log(`attackPower: ${this.attackPower}`);
}

// Increases health by 10 (max 100) and updates UI (MakeHealth function)
Person.prototype.makeHealth = function() {
  if(this.health < 100) {
    this.health += 10;
    this.healthAudio.play();
    this.ui.progress.style.width = `${this.health}%`;
    this.ui.level.innerHTML = `${this.health}%`;
  }

  if(this.health > 100) {
    this.health = 100;
  }
}

// Create two players: Habib and Boyka
let habib = new Person("Habib", 100, 10);
let boyka = new Person("Boyka", 100, 10);

// Set up attack button events
habib.ui.attackBtn.addEventListener("click", function() {
  habib.attack(boyka);
});

boyka.ui.attackBtn.addEventListener("click", function() {
  boyka.attack(habib);
});

// Set up health button events
habib.ui.healthBtn.addEventListener("click", function() {
  habib.makeHealth();
});

boyka.ui.healthBtn.addEventListener("click", function() {
  boyka.makeHealth();
});