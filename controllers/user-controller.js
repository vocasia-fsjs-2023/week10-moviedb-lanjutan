const user = require("../models/user");
const user = require("../models/user");
const user = require("../models/user");
const {generateToken} = require("../helpers/jwt")

class userController{
    static async register(req, res, next){
     const {email, password} = req.playload;
     try {
        const emailUsed = await user.findOne({ where: {email}});
        if(emailUsed){
            throw {name: "bad request", message: "email sudah digunakan"};
        }

        const hashPassword = await bcrypt.has(password, 10)

        const user = await User.create({
            email,
            password: hashPassword,
        });

        res.json(user).status(201);
     } catch (error) {
        next(error);
     }
    }

    static async login(req, res, next){
        const {email,password} = req.playload;
        try {
            const user = await User.findOne({ where: {email}});
            if(!user){
                throw { name: "not found", message: "email/password salah"}
            }
const isValid = await bcrypt.compare(password, user.password);
if(!isValid){
    throw { name: "bad request", message: "password salah"};
}

const playload = {
    id: user.id,
    email: user.email,
};
const token = await generateToken(palyload);

res.status(200).json({
    token,
});

        } catch (error) {
            next(error);
        }
    }
}
module.exports = userController; 