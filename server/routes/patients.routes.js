const express = require('express');
const router = express.Router();
const patients = require('../controllers/patients.controller');

router.get('/', patients.getPatients);
router.post('/', patients.createPatients);
router.get('/:id', patients.getPatients);
router.put('/:id', patients.updatePatients);
router.delete('/:id', patients.deletepatients);

module.exports = router;
