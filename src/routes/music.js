const routerx = require('express-promise-router');
const MusicCont = require('../controllers/MusicController')

const app = routerx();

//GET
app.get('/list', MusicCont.list)

//POST
app.post('/add', MusicCont.add)
//PUT
app.put('/update/:_id', MusicCont.update)
//DELETE
app.delete('/remove/:_id', MusicCont.remove)

module.exports = app;