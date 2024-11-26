const express = require('express')
const app = express()
//Require the dotenv package to access sucure env variables
require('dotenv').config()
const mongoose = require('mongoose')
const port = 4000
DATABASE_URL = process.env.DATABASE_URL

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
