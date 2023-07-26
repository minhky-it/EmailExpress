// Imports the express module
const express = require('express');

// Create a new app instance
const app = express();

app.get('/', (req, res)=>{
    res.send({hi: 'there',
    qq: "1234"
});
});

// Dynamic port
const PORT = process.env.PORT || 5000;

// 
app.listen(PORT, ()=>{
    console.log('Server running on port ' + PORT);
});