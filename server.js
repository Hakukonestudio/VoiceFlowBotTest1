const express = require('express');
const app = express();
const port = 3000;

// Serveeri staatilisi faile juurkaustast
app.use(express.static('.'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});