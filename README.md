# textit

`texit` is an experimental and interactive text writing tool that allows you to create characters through a hierarchical selection process (by narrowing down character groups) instead of typing them directly.

## About the Project

Unlike traditional keyboard input, this project offers a character selection mechanism based on decision tree logic. Users reach their final characters by splitting large character sets into smaller groups and selecting a group at each step. This method provides a "character navigation" experience rather than standard keyboard usage.

## Key Features

- **Hierarchical Character Selection:** Character sets are split into two at each step into more specific subsets.
- **Interactive User Experience:** A click-based, visual selection process.
- **Wide Character Range:** Supports the Latin alphabet (lowercase/uppercase), numbers, and various special symbols.
- **Dynamic Refresh:** Character groups are updated instantly as selections are made, and the selected character is added to the main text area.
- **Reset Mechanism:** The ability to return the selection process to the very beginning with a single touch.

## How It Works?

The system holds characters in nested arrays. The workflow consists of the following steps:

1. **Start:** The application begins with the widest character set.
2. **Splitting:** Users use the `<` or `>` buttons or click on the character groups on the screen to split the current character set in half.
3. **Deepening:** Each selection directs the user to a smaller and more specific character group.
4. **Character Completion:** If a selection results in only one character remaining, this character is automatically added to the "text area" (`possible_text`) and the system returns to the initial state for the next character.
5. **Reset:** The selection process can be completely reset via the `-` button or by clicking on the text area.

## Technical Details

- **Tech Stack:** Pure HTML5 and JavaScript (Vanilla JS). No external library dependencies.
- **Algorithm:** Uses dynamic array splitting logic via the `div_active_texit` function to split character groups.
- **Structure:** The data structure consists of nested arrays where characters are hierarchically grouped.

## Installation and Usage

No installation is required. You can start using the application immediately by opening the `index.html` file in any modern web browser.
