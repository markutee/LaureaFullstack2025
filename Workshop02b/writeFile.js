const fs = require('fs');

const content = 'Tämä on lisätty teksti!\n';

// Append to the file asynchronously
fs.appendFile('output.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error appending to the file:', err.message);
    return;
  }
  console.log('Text has been appended successfully!');
});
