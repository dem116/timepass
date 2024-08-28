const express = require('express');
const app = express();

// middlewares
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');

// rutas exportar
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

app.use(horaMiddleware);

// Redirigir a /index desde el inicio /
app.get('/', (req, res) => {
    res.redirect('/index');
});

//rutas
app.use('/index', indexRouter);  
app.use('/endroute', validarHora, endrouteRouter); 


app.use((req, res) => {
    res.status(404).send(`<h1>Página no encontrada</h1><a href="/index">Home</a>`);
});


app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000. Enlace: http://localhost:3000/');
});
