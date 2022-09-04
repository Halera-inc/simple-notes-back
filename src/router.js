import Router from 'express'
import Controller from "./controller/testController.js";
import testController from "./controller/testController.js";
import notesController from "./controller/notesController.js";
import userController from "./controller/userController.js";
import ControllerAuth from "./controller/authController.js";
import {verifyUser} from "./middleware/authMiddleware.js";

const router = new Router()

router.get('/', Controller.home)
router.get('/test', testController.getTest)

router.get('/notes', verifyUser, notesController.getAllNotes)
router.get('/notes/:id', verifyUser, notesController.getTargetNote)
router.post('/notes', verifyUser, notesController.createNote)
router.put('/notes/:id', verifyUser, notesController.updateNote)
router.delete('/notes/:id', verifyUser, notesController.deleteNote)
// router.post('/notes', Controller.createNote)

router.put('/user', verifyUser, userController.updateUser)
router.put('/user/changePassword', userController.updateUserPassword)
// router.delete('/users/:id', userController.deleteTargetUser)

router.post('/registration', ControllerAuth.registration)
router.post('/login', ControllerAuth.login)
router.delete('/logout', ControllerAuth.logout)
router.get('/me', verifyUser,  ControllerAuth.me)


export default router