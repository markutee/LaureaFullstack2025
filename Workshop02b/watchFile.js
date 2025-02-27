const fs = require('fs');

// Monitor changes to 'watch.txt' file
fs.watch('watch.txt', (eventType, filename) => {
  if (filename) {
    console.log(`The file ${filename} has been modified. Event type: ${eventType}`);
  } else {
    console.log('File name not provided');
  }
});
