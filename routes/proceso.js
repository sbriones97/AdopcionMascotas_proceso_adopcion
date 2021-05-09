const express = require('express')
const ProcesoController = require('../controllers/proceso')


const router = express.Router()


router.get('/log-proceso/:procesoid', (req, res) => {
    let proceso_id = req.params.procesoid
    ProcesoController.getLogProcesos(res, proceso_id)
})

router.post('/log-proceso', (req, res) => {
    let body = req.body
    ProcesoController.postLogProceso(res, body)
})

router.get('/proceso/:mascotaid', (req, res) => {
    let mascota_id = req.params.mascotaid
    ProcesoController.getProceso(res, mascota_id)
})

router.post('/proceso', (req, res) => {
    console.log('post proceso')
    let body = req.body
    ProcesoController.postProceso(res, body)
})



module.exports = router