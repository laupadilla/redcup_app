const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

//router.use(authMiddleware); //rota se quiser utilizar o middleware em todas as requisições

router.get('/', authMiddleware, (req, res) => {
    res.status(200).send({ ok: true, id: req.userId });
});

module.exports = app => app.use('/projects', router);