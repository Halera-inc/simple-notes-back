import jwt from "jsonwebtoken";
import {secret} from "../../config.js"

export function generateAccessToken(id) {
    const payload = {
        id
    }
    console.log(secret)
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}