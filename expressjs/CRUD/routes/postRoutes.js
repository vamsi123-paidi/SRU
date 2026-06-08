const express = require('express');
const { addNewStudent, updateStudent, deleteStudent } = require('../controllers/postController');
const router = express.Router();


router.post("/students",addNewStudent)
router.put("/students/:id",updateStudent)

router.delete('/students/:id',deleteStudent )
module.exports = router