const Database = require('../models/database')
let params = {}

class ProcesoController {
    getLogProcesos(res, proceso_id){
        params = {
            TableName: "ProcesoLog",
            FilterExpression: "proceso_id = :i",
            ExpressionAttributeValues:{
                ':i': Number(proceso_id)
            }
        }

        Database.scan(params, res)
    }
    
    postLogProceso(res, body){
        let id = (Math.random() * 1000)
        body.proces_log_id = id
        params = {
            TableName: "ProcesoLog",
            Item: body
        }

        Database.put(params, res, id)
    }

    async getProceso(res, mascota_id){
        params = {
            TableName: "Proceso",
            FilterExpression: 'mascota_id = :i',
            ExpressionAttributeValues:{
                ':i': Number(mascota_id)
            }
        }

        let result = await Database.scan(params, null)
        res.send({
            success: true,
            message: "Ok",
            data: result[0]
        })

    }
    
    postProceso(res, body){
        let id = (Math.random() * 1000)
        body.proceso_id = id
        params = {
            TableName: "Proceso",
            Item: body
        }

        Database.put(params, res, id)
    }
}


module.exports = new ProcesoController()