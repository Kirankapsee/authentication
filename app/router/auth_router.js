const { loginController, logoutController, dashController, registerUser } = require('../controller/auth_controller');
const { verifySession } = require('../middleware/session_middleware');

const router = require('express').Router();

router.post('/auth',loginController );
router.post('/logout',logoutController );
router.post('/dashboard', verifySession, dashController );
router.post('/register', registerUser );

module.exports = router;