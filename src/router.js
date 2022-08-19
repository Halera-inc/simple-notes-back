import Router from 'express'
import Controller from "./controller.js";

const router = new Router()

router.get('/', Controller.home)
router.get('/test', Controller.getTest)

router.get('/notes', Controller.getAllNotes)
router.get('/notes/:id', Controller.getTargetNote)
router.post('/notes', Controller.createNote)

export default router