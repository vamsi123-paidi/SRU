const express = require('express');
const app = express()
const port = 3000;

app.get('/',(req,res)=>{
    res.send("hello from express js")
})

app.get('/about',(req,res)=>{
    res.send("this is about server")
})

app.get('/info', (req, res) => {
  console.log('Request Method:', req.method);
  console.log('Request URL:', req.url);
  res.send('<h1>Check your terminal for request info</h1>');
});

app.get('/greet', (req, res) => {
  const name = req.query.name;
  res.send(`Hello ${name || 'Guest'}!`);
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
