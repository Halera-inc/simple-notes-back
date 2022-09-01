import User from "../models/User.js";
import bcrypt from 'bcrypt'
import {generateAccessToken} from "../utils/generateAccessToken.js";

class AuthController {
    async registration(req, res) {
        try {
            const {username, password, email, country} = req.body
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: 'An account is already registered with your email address'})
            }
            const hashPassword = bcrypt.hashSync(password, 6)
            const user = await User.create({
                username,
                password: hashPassword,
                email,
                country
            })
            return res.json({message: "User successfully created"})

        } catch (e) {
            res.status(400)
            console.error(e);
            res.send("Error " + e);
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({message: `Email or Password incorrect`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: `Email or Password incorrect`})
            }
            const token = generateAccessToken(user._id)
            return res.json({token})
        } catch (e) {
            res.status(400)
            console.error(e);
            res.send("Error " + e);
        }
    }

    async logout(req, res) {
        try {

        } catch (e) {
            res.status(400)
            console.error(e);
            res.send("Error " + e);
        }
    }

    async me(req, res) {
        try {
            const user = await User.findById(req.user.id)
            res.json(user)
        } catch (e) {
            res.status(400)
            console.error(e);
            res.send("Error " + e);
        }
    }
}

export default new AuthController