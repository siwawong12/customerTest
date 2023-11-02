const express = require("express")
var cors = require('cors')
const path = require("path")

const port = 5000;
const app = express();
app.use(cors())
// Statics
app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const customerRouter = require('./routes/customer');

app.use(customerRouter.router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});