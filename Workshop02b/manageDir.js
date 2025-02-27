const fs = require('fs');

// Create a new directory named 'testDir'
fs.mkdir('testDir', (err) => {
  if (err) {
    console.error('Error creating directory:', err.message);
    return;
  }
  console.log('Directory "testDir" has been created successfully!');
  
  // Remove the directory 'testDir' after it is created
  fs.rmdir('testDir', (err) => {
    if (err) {
      console.error('Error removing directory:', err.message);
      return;
    }
    console.log('Directory "testDir" has been removed successfully!');
  });
});
