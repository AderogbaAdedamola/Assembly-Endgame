# Assembly: Endgame

**Assembly: Endgame** is a modern, interactive Hangman-style word guessing game built with React. Players guess letters to uncover a hidden word while tracking their progress through a series of language-themed “lives.” The game features dynamic word selection, visual feedback for correct and incorrect guesses, and celebratory confetti for victories.

## Features

* Dynamic word selection for each new game.
* Visual representation of incorrect guesses via a language-themed life system.
* On-screen clickable keyboard for letter selection.
* Confetti animation when the player wins.
* Status messages indicating game progress, win, or loss.
* Reset functionality to start a new game.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AderogbaAdedamola/Assembly-Endgame.git
   cd Endgame
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The game will be accessible at `http://localhost:5173`.

## Usage

* Click letters on the on-screen keyboard to guess them.
* Correct guesses will reveal letters in the hidden word.
* Incorrect guesses consume one of your available language lives.
* The game ends when either all letters are guessed (win) or all lives are lost (loss).
* Use the **Reset** button to start a new game.

## Components

* **Hangman** – Displays the hangman figure or visual indicators for wrong guesses.
* **GameStatus** – Shows messages about the current game state, including farewell text.
* **Word** – Displays the word with correctly guessed letters and blanks for remaining letters.
* **Keyboard** – Renders clickable letters with feedback on correctness.
* **LanguageChips** – Visualizes the number of incorrect guesses through “language lives.”
* **Confetti** – Celebratory animation triggered upon winning.

## Utilities

* `getCurrentWord()` – Returns a new word for each game session.
* `getFarewellText(language)` – Returns farewell text based on the language lost.

## Technologies Used

* React (functional components with Hooks)
* `clsx` for dynamic class management
* `react-confetti` for win animations
* JavaScript ES6+

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork the repository and submit a pull request.


If you want, I can also make a **slightly more “fun, game-themed” version** of the README that emphasizes the playful elements for players instead of devs. It would make it feel more like a game landing page. Do you want me to do that?
