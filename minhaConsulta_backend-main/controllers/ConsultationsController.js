const db = require('../db/database');

// Obter todas as consultas com controle de acesso
const getAllConsultations = (req, res) => {
  const userId = req.user.id; // Id do usuário logado
  const role = req.user.role; // Role do usuário logado ('admin' ou 'user')

  let sql;
  const params = [];

  // Se for admin, pode visualizar todas as consultas
  if (role === 'admin') {
    sql = `SELECT consultations.*, users.username FROM consultations 
           JOIN users ON consultations.userId = users.id`;
  } else {
    // Se for user, pode visualizar apenas as suas próprias consultas
    sql = `SELECT consultations.*, users.username FROM consultations 
           JOIN users ON consultations.userId = users.id 
           WHERE consultations.userId = ?`;
    params.push(userId);
  }

  db.all(sql, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ consultations: rows });
  });
};

// Criar uma nova consulta
const createConsultation = (req, res) => {
  const { userId, date, doctor, specialty, status } = req.body;
  const sql = `INSERT INTO consultations (userId, date, doctor, specialty, status) 
               VALUES (?, ?, ?, ?, ?)`;
  const params = [userId, date, doctor, specialty, status];
  db.run(sql, params, function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({
      message: 'Consulta criada com sucesso!',
      consultationId: this.lastID
    });
  });
};

const updateConsultation = (req, res) => {
  const { id } = req.params;
  const { date, doctor, specialty, status, userId } = req.body;

  const sql = `UPDATE consultations SET date = ?, doctor = ?, specialty = ?, status = ?, userId = ? WHERE id = ?`;
  const params = [date, doctor, specialty, status, userId, id];
  db.run(sql, params, function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'Consulta atualizada com sucesso.' });
  });
};

module.exports = { getAllConsultations, createConsultation, updateConsultation };
