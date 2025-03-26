const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware function to log request method and URL
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Middleware function to check for X-Custom-Header
const checkCustomHeader = (req, res, next) => {
  if (!req.headers['x-custom-header']) {
    return res.status(400).json({ error: 'X-Custom-Header is missing' });
  }
  next();
};

// Use the middleware function
app.use(requestLogger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us');
});

app.get('/services', (req, res) => {  
  res.send('Our Services');
});      

// Use the checkCustomHeader middleware for the /submit route
app.post('/submit', checkCustomHeader, (req, res) => {
  const data = req.body;
  res.json({
    message: 'Data received successfully',
    data: data
  });
});

// Route to read data from a text file and return it to the browser
app.get('/list', (req, res) => {
  const filePath = path.join(__dirname, 'data.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.send(data);
  });
});

// Route to read JSON data from a file and return it as an HTML table
app.get('/json', (req, res) => {
  const filePath = path.join(__dirname, 'data.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    const jsonData = JSON.parse(data);
    let html = '<table border="1"><tr><th>Name</th><th>Email</th></tr>';
    jsonData.forEach(item => {
      html += `<tr><td>${item.name}</td><td>${item.email}</td></tr>`;
    });
    html += '</table>';
    res.send(html);
  });
});

// POST route to read new user data from the request body and add it to the JSON file
app.post('/add', (req, res) => {
  const newUser = req.body;
  const filePath = path.join(__dirname, 'data.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    const jsonData = JSON.parse(data);
    jsonData.push(newUser);
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.json({
        message: 'User added successfully',
        data: newUser
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});