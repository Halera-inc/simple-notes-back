import Router from 'express'
import Controller from "./controller.js";
import ControllerNotes from "./controllerNotes.js";
import ControllerUsers from "./controllerUsers.js";
import cors from "cors";

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
router.get('/users/:id', ControllerUsers.getTargetUser)
router.post('/users', ControllerUsers.createUser)
router.put('/users/:id', ControllerUsers.updateTargetUser)
router.put('/users/:id/changePassword', ControllerUsers.updateUserPassword)
router.delete('/users/:id', ControllerUsers.deleteTargetUser)

export default router