

const { User } = require('../models');
const bcrypt = require("bcrypt");
const {generateToken} = require('../helper/jwt.js')

//POST 
const register = async (req, res) => {
    try {
        const { name, email, password} = req.body; 
        const emailUsed = await User.findOne({ where: { email } });
        if (emailUsed) {
            return res.status(400).json({ error: "Email sudah digunakan" });
        }
        
        const hashedPassword = bcrypt.hashSync(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword,
            isAdmin: true,
        }); 


        return res.status(201).json({ 
            message: 'akun berhasil dibuat, silahkan login.' ,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error'
        });
    }
};


// LOGIN
const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ where: { email } });
        if(!user) {
            return res.status(400).json({ error: "email atau password tidak terdaftar" });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) {
            return res.status(400).json({ error: "email atau password salah" });
        }

        const payload = {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        };

        const token = generateToken(payload);

        res.status(200).json({
            token
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}




module.exports = {register, login}

