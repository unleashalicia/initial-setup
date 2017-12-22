const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;


const app = express();

app.use(cors());

app.get('/api/get-stuff', (req, res) => {
    const stuff = {
        name: 'Stuffins',
        message: 'Here is some stuff'
    };
    res.send(stuff);
});

app.get('/api/better-stuff', (req,res)=>{
    const betterStuff = {
        better: 'This is the good stuff',
        message: 'The stuffest with mostest'
    };

    res.send(betterStuff);
});



app.get('*', (req, res) => {
    res.send('<h1>Awesome App great to Go.</h1>')
});

app.listen(PORT, ()=>{
    console.log('Server Running at Localhost:' + PORT);
});

