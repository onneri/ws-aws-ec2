
const express = require('express');
const myIP = require('my-ip')
const app = express();
const port = 3000



app.get('/', (req, res) => res.send(`My ec2 server works! ${myIP()} -${ myIP(null,true)}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
