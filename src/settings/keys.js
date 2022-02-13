let host    = 'localhost';
let db      = 'playlist';
let port    = 27017;

const database = `mongodb://${host}:${port}/${db}`; //Cadena de conexión

module.exports = { database };