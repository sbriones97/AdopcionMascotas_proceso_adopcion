const express = require('express')
const SeguimientoController = require('../controllers/seguimiento')


const router = express.Router()

router.get('/log-seguimiento/:logseguimientoid', (req, res) => {
    usuario_id = req.params.logseguimientoid
    SeguimientoController.getLogSeguimientos(res, logseguimientoid)
})

router.post('/log-seguimiento', (req, res) => {
    let body = req.body
    SeguimientoController.postLogSeguimiento(res, body)
})

router.get('/seguimiento/:mascotaid', (req, res) => {
    usuario_id = req.params.mascotaid
    SeguimientoController.getSeguimiento(res, mascotaid)
})

router.post('/seguimiento', (req, res) => {
    let body = req.body
    SeguimientoController.postSeguimiento(res, body)
})



module.exports = router