
const express = require('express')
const app = express();
var cors = require('cors')
const port = 3000;


app.use(cors())
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

/** ROUTES */

const auth = require('./routes/auth');

app.use('/api/v1/auth', auth);

app.post('/', (req, res) => {
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})