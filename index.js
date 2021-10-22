const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());
const port = 5000;


app.get('/',  (req, res) => {
    res.send('yes im excited ! im am learning node excited to learn and express')
});

const users =  [
    {id: 0, name: 'jhankar mahabub',email: 'jhankarmahabub@gmaill.com'},
    {id: 11, name: 'jualmahabub',email: 'jualmahabub@gmaill.com'},
    {id: 2, name: 'jahidmahabub',email: 'jahidmahabub@gmaill.com'},
    {id: 3, name: 'jahangirmahabub',email: 'jahangirmahabub@gmaill.com'},
]


app.get('/users', (req, res) =>{
    const search = req.query.search;
    //use query search parameter
    if(search){
       const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
       res.send(searchResult);
    }
    else{
        res.send(users)
    }
    
})
// app method
app.post('/users', (req,res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
   // res.send(JSON.stringify(newUser));
   res.json(newUser);
})
//dynamic api
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, ()=>{
    console.log('listening to port', port);
})