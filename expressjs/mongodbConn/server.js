const express = require('express');
const app = express();
const Student = require('./models/Student')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const MONO_URL = process.env.MOGODB_URL
const PORT = process.env.port
app.use(express.json())
mongoose.connect(MONO_URL)
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));
app.get("/",(req,res)=>{
    res.send("hello from express")
})
app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})




