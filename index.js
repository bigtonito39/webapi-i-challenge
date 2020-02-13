// implement your API here
// implement your API here
const express = require('express');

const server = express();

server.get('/', (req,res) =>{
    res.send('hello world!')
});

server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id:1,
            name:"jose"
        },

        {
            id:2,
            name: "reinoso"
        }
    ];
  res.status(200).json(hobbits)

})

server.listen(8000, () => console.log('API Running on port 8000'))