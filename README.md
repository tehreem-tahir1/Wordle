# Wordle
Word Search Puzzle using HTML,CSS, JS, Vanilla JS
Sure, here is a comprehensive README file for your word search puzzle project.


## Overview

This project is a web-based Word Search Puzzle created using HTML, CSS, and Vanilla JavaScript. The application consists of two main modules:
1. **Puzzle Generator Module**: This module generates a word search puzzle based on the list of words provided by the user.
2. **Puzzle Solver Module**: This module presents the generated puzzle to the user, allowing them to solve it. It includes soothing backgrounds and a timer to create a competitive yet relaxing environment.

## Features

- **Puzzle Generator**: Create a custom word search puzzle with a list of words.
- **Puzzle Solver**: Solve the generated puzzle with an interactive interface.
- **Timer**: A countdown timer to add a competitive element.
- **Backgrounds**: Soothing backgrounds to enhance the user experience.

## Getting Started

### Prerequisites

To run this project, you need a web browser that supports HTML5, CSS3, and JavaScript (Vanilla JS).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/word-search-puzzle.git
   ```
2. Navigate to the project directory:
   ```sh
   cd word-search-puzzle
   ```

## Project Structure

```
word-search-puzzle/
│
├── index.html         # Main HTML file
├── style.css          # CSS file for styling
├── script.js          # Main JavaScript file
├── README.md          # Project README file
└── assets/            # Directory for images, if any
```

### index.html

This is the main HTML file that contains the structure of the web page. It includes the puzzle generator and solver sections.

### style.css

This CSS file is responsible for the styling of the application, including the layout, colors, and backgrounds.

### script.js

This JavaScript file contains the logic for generating the puzzle, handling user interactions, and managing the timer.

## Usage

1. **Open the Application**: Open `index.html` in your web browser.
2. **Generate Puzzle**: Enter the list of words and click the "Generate Puzzle" button to create a new puzzle.
3. **Solve Puzzle**: Use your mouse to highlight the words in the puzzle grid. The timer will start counting down once you begin solving.

## Customization

You can customize various aspects of the puzzle, such as the word list, background images, and timer settings, by modifying the corresponding sections in `script.js` and `style.css`.

### Adding New Words

To add new words, modify the `wordList` array in `script.js`:

```javascript
const wordList = ['example', 'word', 'list'];
```

### Changing Backgrounds

To change the background, update the CSS rules in `style.css`:

```css
body {
    background-image: url('assets/background.jpg');
    background-size: cover;
}
```

### Adjusting Timer

To adjust the timer duration, change the `timerDuration` variable in `script.js`:

```javascript
const timerDuration = 300; // Time in seconds
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to suggest.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions or feedback, feel free to reach out to the project maintainer at your-email@example.com.

---

Enjoy solving your custom Word Search Puzzles!
