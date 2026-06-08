const express = require('express')
const { homePage, getAllStudents, getStudentById, searchByName } = require('../controllers/getController')
const router = express.Router()

router.get("/",homePage)
router.get('/students',getAllStudents)
router.get("/students/:id",getStudentById)
router.get("search",searchByName)

module.exports = router