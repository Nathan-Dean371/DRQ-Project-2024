const express = require('express')
const app = express()

//Require the dotenv package to access sucure env variables
require('dotenv').config()

const mongoose = require('mongoose')
const port = 4000
DATABASE_URL = process.env.DATABASE_URL
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  ConnectToDB()
})

async function ConnectToDB() 
{
  try 
  {
    await mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('Connected to DB');
  } 
  catch (err) 
  {
    console.log(err);
  } 
}

//Define the schema
const newPerson = new mongoose.Schema({
  name: String,
  occupation: String,
  dob: Date
});

//Define the model
const Person = mongoose.model('Person', newPerson);

app.post('/new-entry', async (req, res) => 
{
  
  const name = req.body.Fullname;
  const occupation = req.body.Occupation;
  const dob = req.body.Dob;
  var newPerson = new Person({name, occupation, dob});

  //Logging here to check if the data is being passed correctly
  console.log(newPerson);

  await newPerson.save();
  res.status(201).json({ message: "Person", person : newPerson });
})

app.get('/retrieve', async (req, res) =>
{
  const data = await Person.find();
  res.status(200).json(data);
})

app.delete('/delete', async (req, res) =>
{
  const id = req.body.id;
  await Person.findByIdAndDelete(id);
  res.status(200).json({message: "Person deleted"});
})

app.put('/update', async (req, res) =>
{
  //Logging the request body to check if the data is being passed correctly
  console.log(req.body);

  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  const dob = req.body.dob;
  const updatedPerson = await Person.findByIdAndUpdate(id, {name, occupation, dob}, {new: true});

  console.log(updatedPerson);

  res.status(200).json(updatedPerson);
})