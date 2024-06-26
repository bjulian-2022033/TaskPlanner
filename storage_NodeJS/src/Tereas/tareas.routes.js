'use strict'

import { Router } from 'express'
import {
    addTarea,
    update,
    deleteTarea,
    listaCompletas,
    listaIncompletas
} from './tareas.controller.js'
import { validateJwt } from '../middlewares/validate-jwt.js' 

const api = Router()

api.post('/addTarea', validateJwt ,  addTarea )
api.get('/listaCompletas', listaCompletas)
api.get('/listaIncompletas', listaIncompletas)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteTarea)

export default api