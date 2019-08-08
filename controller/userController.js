exports.getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'User list sent'
    })
}

exports.createUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'User created'
    })
}

