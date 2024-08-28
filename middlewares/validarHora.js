const validarHora = (req, res, next) => {
    const hours = req.hours;

    if (hours >= 12 && hours < 24) {
        next(); // La hora es correcta --> procede a /endroute
    } else {
        const mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
        res.redirect('/index?mensaje=' + encodeURIComponent(mensaje)); // Redirige a la página principal con el mensaje
    }
}

module.exports = validarHora;
