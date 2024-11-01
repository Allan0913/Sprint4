const express = require('express');
const router = express.Router();
const { getAllConsultations, createConsultation, updateConsultation } = require('../controllers/ConsultationsController');


router.get('/consultations', getAllConsultations);
router.post('/consultations', createConsultation);
router.put('/consultations/:id', updateConsultation);

module.exports = router;
