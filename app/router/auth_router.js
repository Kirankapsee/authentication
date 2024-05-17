const { loginController } = require('../controller/auth_controller');

const router = require('express').Router();







router.post('/auth-user',loginController );
module.exports = router;