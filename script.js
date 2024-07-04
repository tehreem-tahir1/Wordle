$(document).ready(function () {
    $('#generate-puzzle').click(function () {
        var str1 = $('#txt').val();

        checkFileExistence(str1, function (exists) {
            if (exists) {
                fetchWordsFromFile(str1, function (wordsArray) {
                    generatePuzzleAndRedirect(wordsArray);
                });
            } else {
                alert("File does not exist. Please enter a valid file name.");
            }
        });
    });
    
    function checkFileExistence(filePath, callback) {
        $.ajax({
            url: filePath,
            type: 'HEAD',
            success: function () {
                callback(true);
            },
            error: function () {
                callback(false);
            }
        });
    }

    function fetchWordsFromFile(filePath, callback) {
        $.get(filePath, function (data) {
            const wordsArray = data.split('\n').map(word => word.trim().toUpperCase());
            callback(wordsArray);
        });
    }

    function generatePuzzleAndRedirect(wordsArray) {
        const gridSize = 20;
        const grid = new Array(gridSize).fill(0).map(() => new Array(gridSize).fill(''));
    
        wordsArray = wordsArray || [];  // Ensure wordsArray is defined and not null
    
        wordsArray.forEach(word => {
            placeWordInGrid(word, grid);
        });
    
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (grid[i][j] === '') {
                    const randomLetter = getRandomLetter();
                    grid[i][j] = randomLetter;
                }
            }
        }
    
     // Write the content directly to the new window
     const newWindow = window.open();
     newWindow.document.write(`
     <html>
     <head>
         <title>Generated Puzzle</title>
         <style>
             body {
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 height: 100vh;
                 margin: 0;
             }
     
             #container {
                 display: flex;
                 flex-direction: row;
                 gap: 20px;
             }
     
             #word-list {
                 border: 2px solid #000;
                 padding: 10px;
                 width: 300px;
                 background-color: darkseagreen;
             }
         </style>
         <video autoplay muted loop playsinline>
             <source src="back.mp4" type="video/mp4">
         </video>
         <script src="https://code.jquery.com/jquery-3.6.4.min.js" crossorigin="anonymous"></script>
         <script src="script.js"></script>
         <link rel="stylesheet" href="wordGen.css">
     </head>
     <body>
         <div id="container">
             <div>
                 <table border="1" style="background-color: rgba(247, 109, 224, 0.785) ;">
                     ${generateGridContent(grid)}
                 </table>
             </div>
             <div id="word-list">
                 <h3>Word List:</h3>
                 <ul>
                     ${generateWordList(wordsArray)}
                 </ul>
             </div>
         </div>
     </body>
     </html>
     
     `);
     newWindow.document.close();
 }
    

    function placeWordInGrid(word, grid) {
        const gridSize = grid.length;
        const direction = Math.floor(Math.random() * 8);

        let dx = [0, 1, 1, 1, 0, -1, -1, -1];
        let dy = [1, 1, 0, -1, -1, -1, 0, 1];

        let placed = false;

        while (!placed) {
            const startX = Math.floor(Math.random() * gridSize);
            const startY = Math.floor(Math.random() * gridSize);

            let canPlace = true;
            let currentX = startX;
            let currentY = startY;

            for (let i = 0; i < word.length; i++) {
                if (
                    currentX < 0 ||
                    currentX >= gridSize ||
                    currentY < 0 ||
                    currentY >= gridSize ||
                    (grid[currentX][currentY] !== '' && grid[currentX][currentY] !== word[i])
                ) {
                    canPlace = false;
                    break;
                }

                currentX += dx[direction];
                currentY += dy[direction];
            }

            if (canPlace) {
                currentX = startX;
                currentY = startY;

                for (let i = 0; i < word.length; i++) {
                    grid[currentX][currentY] = word[i];
                    currentX += dx[direction];
                    currentY += dy[direction];
                }

                placed = true;
            }
        }
    }

    function getRandomLetter() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    function generateGridContent(grid) {
        const gridSize = grid.length;
        let content = '';
        for (let i = 0; i < gridSize; i++) {
            content += `<tr>`;
            for (let j = 0; j < gridSize; j++) {
                content += `<td>${grid[i][j]}</td>`;
            }
            content += `</tr>`;
        }
        return content;
    }

    function generateWordList(wordsArray) {
        let content = '';
        for (const word of wordsArray) {
            content += `<li>${word}</li>`;
        }
        return content;
    }

    

    
});
