const fs = require('fs');



// Function to read words from a text file and fill a 2D array
function fillArrayFromFile(filePath) {
  // Read the content of the file synchronously
  try {
    const data = fs.readFileSync(filePath, 'utf8');

    // Split the content into words
    const words = data.split(/\s+/);

    // Calculate the number of rows and columns for the 2D array
    const numRows = Math.ceil(Math.sqrt(words.length));
    const numCols = Math.ceil(words.length / numRows);

    // Initialize the 2D array with empty strings
    const array2D = new Array(numRows).fill(null).map(() => new Array(numCols).fill(''));

    // Fill in the array with words
    let index = 0;
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (index < words.length) {
          array2D[i][j] = words[index];
          index++;
        } else {
          break; // Break if we have filled all words
        }
      }
    }

    return array2D;
  } catch (error) {
    console.error('Error reading the file:', error.message);
    return null;
  }
}

// Example usage
const filePath = '/Users/mahzaztajwar/Desktop/Wordle 3.0/words.txt';
const resultArray = fillArrayFromFile(filePath);

if (resultArray) {
  console.log('2D Array filled with words:', resultArray);
}
