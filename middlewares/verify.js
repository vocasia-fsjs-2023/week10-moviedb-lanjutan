const { verifiCode } = require('../helper/jwt');
const {User} = require('../models');
const authUser = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        const code = auth?.slice(7);

        if (!code) {
            return res.status(401).json({ message: "user tidak terauthentikasi" });
        }

        const decoded = verifiCode(token);
        if (!decoded) {
            return res.status(401).json({ message: "user tidak terauthentikasi" });
        }

        const user = await User.findOne({ where: {email: decoded?.email}});
        if (!user) {
            return res.status(401).json({ message: "user tidak terauthentikasi" });
        }

        req.authUser = user;

        next();
    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}

module.exports = { authUser }