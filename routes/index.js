const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const mensaje = req.query.mensaje; // Obtener el mensaje de error hora si existe

  res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${req.dateType}</p>
    ${mensaje ? `<p style="color:red;">${mensaje}</p>` : ''} 
    <a href="/endroute"><button>Entrar</button></a>
  `);
});

module.exports = router;
