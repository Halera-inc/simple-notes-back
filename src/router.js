import Router from 'express'
import Controller from "./controller.js";

const router = new Router()

router.get('/', Controller.home)
router.get('/test', Controller.getTest)


export default router