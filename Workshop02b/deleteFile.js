const fs = require('fs');

// Delete the file asynchronously
fs.unlink('temp.txt', (err) => {
  if (err) {
    console.error('Error deleting the file:', err.message);
    return;
  }
  console.log('File temp.txt has been deleted successfully!');
});
