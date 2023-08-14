const jwt = require('jsonwebtoken');
// const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = require('../config/index');
const RefreshToken = require('../models/token');

const ACCESS_TOKEN_SECRET = "agh232kjh43kj4h2k3jh4kj3h4kj3h4kj5h4j6hkj7h567hjhjhjhjjhhhh8888"
const REFRESH_TOKEN_SECRET = "agh232kjh43kj4h2k3jh4kj3h4kj3h4kj5h4j6hkj7h567hSDFWERasahh8888"

class JWTService{
    // sign access token
    static signAccessToken(payload, expiryTime){
        return jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: expiryTime});
    }

    // sign refresh token
    static signRefreshToken(payload, expiryTime){
        return jwt.sign(payload, REFRESH_TOKEN_SECRET, {expiresIn: expiryTime});
    }

    // verify access token
    static verifyAccessToken(token){
        return jwt.verify(token, ACCESS_TOKEN_SECRET);
    }

    // verify refresh token
    static verifyRefreshToken(token){
        return jwt.verify(token, REFRESH_TOKEN_SECRET)
    }

    // store refresh token
    static async storeRefreshToken(token, userId){
        try{
            const newToken = new RefreshToken({
                token: token,
                userId: userId
            });

            // store in db
            await newToken.save();
        }
        catch(error){
            console.log(error);
        }
    }
}

module.exports = JWTService;