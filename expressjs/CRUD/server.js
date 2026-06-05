// const express = require('express');
// const app = express();
// const port = 3000;
// app.use(express.json())
// const students = [
//     {id:1,name:"adam",age:56,branch:"cse"},
//     {id:2,name:"larry",age:34,branch:"ece"},
//     {id:3,name:"spongbob",age:54,branch:"eee"},
//     {id:4,name:"eve",age:25,branch:"Mech"}
// ]


// app.get("/",(req,res)=>{
//     res.send("welcome to student mangement system")
// })

// app.get("/students",(req,res)=>{
//     res.json(students)
// })

// app.get("/students/:id",(req,res)=>{
//     const id = parseInt(req.params.id);
//     const student= students.find((student)=>student.id === id)
//     if(student) {
//         res.json(student)
//     }else{
//         res.status(404)
//     }
// })

// app.post("/students",(req,res)=>{
//     const {name,age,branch} = req.body;
//     const newStudent = {
//         id:students.length+1,
//         name,
//         age,
//         branch
//     }
//     students.push(newStudent)
//     res.status(201).json(newStudent)
// })

// app.put("/students/:id",(req,res)=>{
//     const id = parseInt(req.params.id);
//     const {name,age,branch} = req.body
//     const student = students.find(s =>s.id ===id)
//     if(student){
//         student.name = name || student.name
//         student.age = age || student.age
//         student.branch = branch || student.branch
//         res.json(student)

//     }else{
//         res.status(404).send("student not found")
//     }
// })

// app.delete('/students/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = students.findIndex(s => s.id === id);

//   if (index !== -1) {
//     const deleted = students.splice(index, 1);
//     res.json(deleted[0]);
//   } else {
//     res.status(404).send('Student not found');
//   }
// })

// app.get('/search', (req, res) => {
//   const { name } = req.query;
//   const result = students.filter(s => s.name.toLowerCase() === name.toLowerCase());
//   res.json(result);
// });

// app.listen(port,()=>{
//     console.log(`server is running at http://localhost:${port}`)
// })

// const express = require('express');
// const app = express();

// app.use(express.json());                        
// app.use(express.urlencoded({ extended: true }));

// app.use('/static', express.static('public')); 
// app.post('/submit', (req, res) => {
//     res.send(`Received: ${req.body.name}`);
// });

// app.listen(3000);



const express = require('express');
const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.post('/submit-form', (req, res) => {
  const { name, email, course, age } = req.body;

  const errors = [];

  // Validate Name: required, length 3-30
  if (!name || name.trim().length < 3 || name.trim().length > 30) {
    errors.push('Name must be between 3 and 30 characters.');
  }

  // Validate Email: required, simple regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Valid email is required.');
  }

  // Validate Course: requi red, length 2-20
  if (!course || course.trim().length < 2 || course.trim().length > 20) {
    errors.push('Course must be between 2 and 20 characters.');
  }

  // Validate Age: number between 10 and 100
  const ageNum = Number(age);
  if (!age || isNaN(ageNum) || ageNum < 10 || ageNum > 100) {
    errors.push('Age must be a number between 10 and 100.');
  }

  if (errors.length > 0) {
    // If errors found, respond with error messages and a link to retry
    res.status(400).send(`
      <h3>Errors:</h3>
      <ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul>
      <a href="/form.html">Go Back</a>
    `);
  } else {
    // If valid, show success message and submitted data
    res.send(`
      <h2>Student Registered Successfully!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Age:</strong> ${age}</p>
      <a href="/form.html">Register another student</a>
    `);
  }
});




app.listen(3000,()=>{
    console.log('server is running')
})