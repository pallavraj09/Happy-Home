const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const users = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/dashboard.html');
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // You should perform validation and hashing of the password in a real-world scenario.
  users.push({ username, password });
  res.redirect('/');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    res.redirect('/dashboard');
  } else {
    res.send('Invalid login credentials.');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
