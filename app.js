const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});