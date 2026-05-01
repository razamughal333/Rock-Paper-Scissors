# Rock Paper Scissors

A clean, browser-based Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript.

## Preview

The game features a bold orange and teal color scheme, circular icon buttons, and a live scoreboard that tracks wins, losses, and draws across rounds.

## Features

- **Three choices** — Rock, Paper, and Scissors, each with a distinct color and Font Awesome icon
- **Randomized computer opponent** — the computer picks a move at random each round
- **Live scoreboard** — tracks your score, the computer's score, and draws separately
- **Color-coded result messages** — green for a win, red for a loss, orange for a draw
- **No page reloads** — everything runs in the browser, scores persist until the tab is closed

## Project Structure

```
rock-paper-scissors/
├── index.html   # Game layout and structure
├── style.css    # Styling and color theme
└── app.js       # Game logic and event handling
```

## How to Run

No build tools or dependencies needed.

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. Click a button to play

## How It Works

**`getComputerChoice()`** picks a random element from `["rock", "paper", "scissors"]` using `Math.random()`.

**`getResult(player, computer)`** compares the two choices and returns `"win"`, `"lose"`, or `"draw"` based on the standard rules:

| Player        | Computer | Result |
| ------------- | -------- | ------ |
| Rock          | Scissors | Win    |
| Paper         | Rock     | Win    |
| Scissors      | Paper    | Win    |
| Any           | Same     | Draw   |
| Anything else | —        | Lose   |

Event listeners are attached to all three buttons. On each click, the game grabs the button's `id` as the player's choice, gets the computer's choice, evaluates the result, updates the score, and displays a message.

## Dependencies

- [Font Awesome 7](https://fontawesome.com/) — loaded via CDN for the hand icons
