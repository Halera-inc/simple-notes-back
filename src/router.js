import Router from 'express'
import Controller from "./controller.js";
import ControllerNotes from "./controllerNotes.js";
import ControllerUsers from "./controllerUsers.js";

const router = new Router()

router.get('/', Controller.home)
router.get('/test', Controller.getTest)


router.get('/notes', ControllerNotes.getAllNotes)
router.get('/notes/:id', ControllerNotes.getTargetNote)
router.post('/notes', ControllerNotes.createNote)
router.put('/notes/:id', ControllerNotes.updateNote)
router.delete('/notes/:id', ControllerNotes.deleteNote)
router.post('/notes', Controller.createNote)

router.get('/users', ControllerUsers.getAllUsers)
router.post('/users', ControllerUsers.createUser)

export default router