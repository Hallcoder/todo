const config =  require('config')
const jwt =  require('jsonwebtoken')

module.exports = function(req,res,next){
    const token = req.header('x-token');
    if(!token) return res.status(401).send('No token found!!!')
    try {
    let payLoad =  jwt.verify(token,config.get('jwtPrivateKey'))
    req.user  = payLoad;
    next()
    } catch (error) {
        return res.status(401).send('Invalid token')
    }
}