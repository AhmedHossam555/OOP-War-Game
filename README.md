# ⚔️OOP War Game  

The **War Game** is a simple **two-player battle game** built with **HTML, CSS, and JavaScript**.  
It features a countdown start screen, interactive buttons, health bars, and sound effects to create an engaging **player-vs-player** experience.  

---

## 🎮 Gameplay Flow  

### ▶️ Start Screen  
- The game begins with a **Start** button.  
- A **countdown (3 → 2 → 1)** is displayed before the fight begins.  
- Once the countdown ends, the overlay disappears and the battle starts.  

### 🧑‍🤝‍🧑 Players  
- Two fighters: **Habib** and **Boyka**.  
- Each player starts with **100% health**.  
- Each has unique **attack** and **healing** controls.  

### ⚡ Actions  
- **Attack Button ⚔️** → Reduces the opponent’s health based on attack power.  
- **Health Button ❤️** → Restores **+10 health** (up to a maximum of 100).  

### 📊 UI Updates  
- Each player has a **progress bar** showing health visually.  
- A **text indicator** displays the current health percentage.  
- When a player’s health reaches **0%**:  
  - Their attack & health buttons are removed.  
  - A death message appears (e.g., `"Boyka has died!"`).  

### 🔊 Audio Effects  
- **Attack sound** when attacking.  
- **Beep sound** when healing.  

---

## ✨ Features  
- Countdown start mechanism.  
- Dynamic health bars with real-time updates.  
- Player-specific attack & heal buttons.  
- Death handling with UI feedback.  
- Audio integration for immersive experience.  

---

## 🛠️ Technologies Used  
- **HTML** – Game structure.  
- **CSS** – Styling and layout.  
- **JavaScript** – Game logic, interactions, and event handling.  

---

## 🚀 How to Run  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/war-game.git
