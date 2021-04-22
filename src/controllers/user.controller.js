const User = require('../model/user')
const jwt = require("jsonwebtoken");
const bycrypt = require('bcryptjs')

module.exports.LOGIN = async (req, res) => {
    console.log(res.body)
    const password = req.body.password;
    const email = req.body.email;

    if (!email) return res.send({status: false, msg: 'Email invalid'});
    const user = await User.findOne({email: email}).exec();
    if (!user) return res.send({status: false, msg: 'Email invalid'});
    const match = await bycrypt.compare(password, user.password)
    if (!match) return res.send({status: false, msg: 'Password invalid'});
    const payload = {user: {id: user._id}};
    jwt.sign(payload, "angualar", {expiresIn: 10000}, (err, token) => {
        if (err) res.send({error: true, msg: 'api error !'})
        res.status(200).json({token, user})
    })
}

module.exports.ALL = (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.send([]))
}

module.exports.REGISTER = (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then(r => res.send({error: false, msg: 'User successfully created !'}))
        .catch(err => res.send({error: true, msg: 'api error !'}))
}
module.exports.DELETE = (req, res) => {
    User.remove({
        '_id': req.body.id
    }).then(r => res.send('OK'))
        .catch(err => res.send('Not OK'))
}
