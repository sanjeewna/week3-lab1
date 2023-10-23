const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
  });
  
  app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact US' });
  });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});