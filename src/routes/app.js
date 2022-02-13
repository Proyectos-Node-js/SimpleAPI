const routerx = require('express-promise-router');
const Music = require('./music')

const router = routerx();

router.use('/music', Music)

module.exports = router;