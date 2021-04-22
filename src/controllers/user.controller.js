const User = require('../model/user')

module.exports.LOGIN = async (req, res) => {
    console.log(res.body)
    const password = req.body.password;
    const email = req.body.email;

    if (!email) return res.send({status: false, msg: 'Email invalid'});

    const user = await User.findOne({email: email}).exec();
    if (!user) return res.send({status: false, msg: 'Email invalid'});

    if (user.password !== password) return res.send({status: false, msg: 'Password invalid'});

    return res.send({status: true, user: user})
}

module.exports.ALL = (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.send([]))
}

module.exports.REGISTER = (req, res) => {
    console.log(req.body)
    const user = new User()
    user.firstname = req.body.firstName
    user.lastname = req.body.lastName
    user.email = req.body.email
    user.password = req.body.password
    user.category = req.body.category
    user.save()
        .then(r => res.send('OK'))
        .catch(err => res.send('Not OK'))
}
module.exports.DELETE = (req, res) => {
    User.remove({
        '_id': req.body.id
    }).then(r => res.send('OK'))
        .catch(err => res.send('Not OK'))
}
