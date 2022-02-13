const express   = require('express');
const cors      = require('cors');
const path      = require('path');
const router    = require('./routes/app');
//Conectamos a base de datos
require('./settings/database')

const app = express();

//Asignamos puerto
app.set('port', process.env.PORT || 3000 );

const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
}


//Public  path
app.use(express.static(path.join(__dirname,'public')));
//Middlewares
app.use(express.json({extended:true})); // Para enviar json desde postman
app.use(cors());


//Rutas
app.use('/api',cors(corsOptions) ,router)



app.listen(app.get('port'),()=>{
    console.log('Servidor en puerto ', app.get('port'));
})