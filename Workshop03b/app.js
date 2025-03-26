const express = require('express');
const path = require('path');       //tehtävä 1

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Basic route
app.get('/', (req, res) => {        //tehtävä 2 muutettu route index.ejs
    res.render('index', { 
        message: 'Käyttäjälista',        // tehtävä 5 käyttäjälista
        users: [
            { name: 'Osku', age: 30 },
            { name: 'Eme', age: 27 },
            { name: 'Pade', age: 22 }
        ],
        showUsers: true              // Boolean näyttää tai piilottaa käyttäjät tehtävä 4
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
