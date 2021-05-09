const Database = require('../models/database')
let params = {}

class SeguimientoController {
    getLogSeguimientos(res, seguimiento_id){
        params = {
            TableName: "SeguimientoLog",
            FilterExpression: "seguimiento_id = :i",
            ExpressionAttributeValues:{
                ':i': Number(seguimiento_id)
            }
        }

        Database.scan(params, res)
    }
    
    postLogSeguimiento(res, body){
        let id = (Math.random() * 1000)
        body.seguimiento_log_id = id
        params = {
            TableName: "SeguimientoLog",
            Item: body
        }

        Database.put(params, res, id)
    }

    getSeguimiento(res, mascota_id){
        params = {
            TableName: "Seguimiento",
            FilterExpression: 'mascota_id = :i',
            ExpressionAttributeValues:{
                ':i': Number(mascota_id)
            }
        }

        Database.scan(params, res)
    }
    
    postSeguimiento(res, body){
        let id = (Math.random() * 1000)
        body.seguimiento_id = id
        params = {
            TableName: "Seguimiento",
            Item: body
        }

        Database.put(params, res, id)
    }
}

module.exports = new SeguimientoController()