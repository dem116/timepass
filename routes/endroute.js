const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<h1>Ruta final</h1><p>¡Bienvenido a la ruta final!</p>`);
});

module.exports = router;
