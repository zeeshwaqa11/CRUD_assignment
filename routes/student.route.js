const express = require('express');
const router = express.Router();

const student_controller = require('../controllers/student.controller');

router.get('/test', student_controller.test);
router.post('/create', student_controller.student_create);
router.get('/:id', student_controller.student_detail);
router.put('/:id/update', student_controller.student_update);
router.delete('/:id/delete', student_controller.student_delete);

module.exports = router;