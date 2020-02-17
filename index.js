// implement your API here
// implement your API here
const express = require('express');

const server = express();

const port = 5000;
//This will allow me to use the .json
server.use(express.json());

//Creating a mini database here to pull data from
let hobbits = [
    {
      id: 1,
      name: 'Bilbo Baggins',
      age: 111,
    },
    {
      id: 2,
      name: 'Frodo Baggins',
      age: 33,
    },
  ];
  let nextId = 3;

server.get('/hobbits', (req, res) => {
console.log(req.query)
    // query string parameters get added to req.query
    const sortField = req.query.sortby || 'id';
      
    // apply the sorting
    const response = hobbits.sort(
      (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
    );
  
    res.status(200).json(response);
  });
   // READ DATA


   server.post('/hobbits', (req, res) => {
       console.log(req.body)
    const hobbit = req.body;
    hobbit.id = nextId++;
  
    hobbits.push(hobbit);
  
    res.status(201).json(hobbits);
  });//CREATE data

server.put('/hobbits/:id', (req, res)=> {
  //this is finding an specific hobbit based on the id
  console.log(req.body)
 const hobbit = hobbits.find(h => h.id == req.params.id)
 
 if (!hobbit){
     res.status(404).json({
         message: 'Hobbit does not exist'
     }) 
 }else{
     //modify the existing hobbit
 Object.assign(hobbit, req.body);
 res.status(200).json(hobbit)

 }


})//UPDATE data 

server.delete('/hobbits/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params)
    // or we could destructure it like so: const { id } = req.params;
    res.status(200).json({
      url: `/hobbits/${id}`,
      operation: `DELETE for hobbit with id ${id}`,
    });
  });
  
server.listen(port, () => console.log(`sever listening on port http://localhost:${port}/`))