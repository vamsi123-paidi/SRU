const students = [
    {id:1,name:"adam",age:56,branch:"cse"},
    {id:2,name:"larry",age:34,branch:"ece"},
    {id:3,name:"spongbob",age:54,branch:"eee"},
    {id:4,name:"eve",age:25,branch:"Mech"}
]
exports.homePage = (req,res)=>{
    res.send("welcome to student mangement system")
}

exports.getAllStudents = (req,res)=>{
    res.json(students)
}

exports.getStudentById = (req,res)=>{
    const id = parseInt(req.params.id);
    const student= students.find((student)=>student.id === id)
    if(student) {
        res.json(student)
    }else{
        res.status(404)
    }
}

exports.searchByName = (req, res) => {
  const { name } = req.query;
  const result = students.filter(s => s.name.toLowerCase() === name.toLowerCase());
  res.json(result);
}
