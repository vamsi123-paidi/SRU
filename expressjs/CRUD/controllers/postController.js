exports.addNewStudent = (req,res)=>{
    const {name,age,branch} = req.body;
    const newStudent = {
        id:students.length+1,
        name,
        age,
        branch
    }
    students.push(newStudent)
    res.status(201).json(newStudent)
}

exports.updateStudent = (req,res)=>{
    const id = parseInt(req.params.id);
    const {name,age,branch} = req.body
    const student = students.find(s =>s.id ===id)
    if(student){
        student.name = name || student.name
        student.age = age || student.age
        student.branch = branch || student.branch
        res.json(student)

    }else{
        res.status(404).send("student not found")
    }
}

exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index !== -1) {
    const deleted = students.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).send('Student not found');
  }
}