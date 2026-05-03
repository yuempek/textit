# textit

`textit` is an experimental and interactive text navigation tool that reimagines how we input characters. Instead of traditional typing, it uses a hierarchical decision tree logic where users "navigate" to their desired characters by narrowing down character sets through a series of binary selections.

## 🚀 The Concept

Unlike a standard keyboard where each key represents a single character, `textit` treats the entire alphabet (and more) as a searchable map. By splitting character groups in half at each step, you can reach any character through a path of decisions. It’s not just a writing tool; it's a character discovery experience.

## ✨ Key Features

- **Hierarchical Navigation:** Seamlessly narrow down character sets into smaller, more specific subsets.
- **Interactive Visual Feedback:** Dynamic UI that updates instantly as you make selections.
- **Modern & Responsive UI:** A centered, clean interface optimized for both desktop and mobile (touch-friendly).
- **Keyboard & Mouse Control:** 
  - Use **Left/Right Arrows** (or click the boxes) to select groups.
  - Use **Up Arrow** to go back one step in the tree or delete the last character.
  - Use **Down Arrow** to autocomplete suggested words or add a space.
- **Intelligent Word Suggestions:** Real-time suggestions from a built-in dictionary that can be completed with a single keypress.
- **Animated Guidance:** An interactive "textit" header that simulates the actual key combinations required to type the project name, serving as a live tutorial.

## 🛠 How It Works

1. **Start:** The app begins with the full set of characters (Letters, Numbers, Symbols).
2. **Binary Splitting:** The current set is split into two visual boxes.
3. **Selection:** Choose the box containing your desired character.
4. **Completion:** Once a group is narrowed down to a single character, it's automatically added to your text and the tree resets to the root.
5. **Smart Shortcuts:**
   - **Back/Undo:** Press `▲` (Up Arrow) to climb back up the decision tree if you make a wrong turn.
   - **Autocomplete:** Press `▼` (Down Arrow) when a suggested word appears (in gray) to complete it instantly.
   - **Full Reset:** Press the Down Arrow 6 times rapidly to clear the entire text and restart the introduction animation.

## 💻 Technical Details

- **Stack:** Pure HTML5, CSS3, and Vanilla JavaScript. Zero dependencies.
- **Data Structure:** Nested arrays forming a binary search tree of characters.
- **Pathfinding Algorithm:** Includes a built-in `getPath()` function that dynamically calculates the binary path (L/R) for any given character in the hierarchy.
- **System Verification:** Includes a `runSystemTest()` function in the console to verify that every supported character can be reached correctly through the navigation logic.

## 🚦 Installation and Usage

No installation or build process is required.
1. Clone the repository: `git clone https://github.com/yuempek/textit.git`
2. Open `index.html` in any modern web browser.
3. Start navigating your way through the alphabet!

---
*Created with ❤️ as an exploration of non-traditional human-computer interaction.*
