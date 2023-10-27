const jwt = required("jsonwebtoken");
const JWT_SECRET = "secret";

function generateToken(playload){
    return jwt.sign(playload, JWT_SECRET);
}

function verifyToken(token){
    return jwt.verify(token, JWT_SECRET);
}
 module.exports = {generateToken, verifyToken};