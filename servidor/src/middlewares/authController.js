exports.validateToken = (req, res, next) => {
    let token = req.cookies.jwt;
    if (typeof token != "undefined") {

        jwt.verify(token, process.env.JWT_KEY, (err, data) => {
            if (!err) {
                // Token válido
                next();
            } else {
                // Token expirado
                res.send("Token expirado o erróneo");
            }
        })
    } else {
        // No hay token
        res.status(401).render("hola");
    }
}