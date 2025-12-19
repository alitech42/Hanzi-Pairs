# Hanzi Pairs 🀄

[![Hanzi Pairs gameplay](https://github.com/user-attachments/assets/445f31da-3931-4c55-93f1-8d6e1a0d0fd2)](https://hanzipairs.netlify.app/)


Hanzi Pairs is a memory-matching game built with React that helps users practice matching **Chinese Hanzi characters with their Pinyin equivalents**.  
The game focuses on logic, state management, and clean UI interactions.

---

## 🎮 Features

- Match **Hanzi ↔ Pinyin** card pairs
- Multiple **difficulty levels**
- **Dynamic score** tracking
- Randomized card order each round
- Correctly matched pairs are removed
- Cards reset after incorrect matches
- Responsive layout for smaller screens
- Visual feedback for selected and matched cards
- Smooth UI animations

---

## 🛠 Tech Stack

- **React (JavaScript)**
- **CSS**
- **Vite**

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/your-username/hanzi-pairs.git
cd hanzi-pairs
npm install
```

Then run the project locally

```bash
npm run dev
```

Open your browser at "https/localhost:5173"

---

## 🧠 How the Game Works

1. A random set of Hanzi–Pinyin pairs is selected from the data.
2. Cards are shuffled and displayed.
3. The player selects two cards:
   * ✅ If they match, the cards are removed and the score increases
   * ❌ If they don’t match, the cards reset
4. When all pairs are matched, a new round begins. 

---

## 📚 What I Learned

* Managing state and game logic in React

* Handling user interactions and conditional rendering

* Structuring a React project for readability

* Implementing randomization and matching logic

* Incremental development using Git commits
