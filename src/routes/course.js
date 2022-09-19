const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');




router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.put('/:id', courseController.update)
router.patch('/:id/restore', courseController.restore)
router.get('/:id/edit', courseController.edit)
router.delete('/:id', courseController.delete)
router.delete('/:id/force', courseController.forceDelete)
router.get('/:slug', courseController.show);
router.get('/', courseController.index);

module.exports = router;
