const pg = require('pg');

// création du client
const client = new pg.Client(process.env.PG_URL)

client.connect();

//on exporte le module client
module.exports = client