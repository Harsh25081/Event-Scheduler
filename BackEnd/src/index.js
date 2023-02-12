const express = require('express')
const cron = require("node-cron")
const route = require("./route/route")
const app = express()

app.use(express.json())

app.use('/',route)

app.listen(3001,()=>console.log("Express app is running on PORT 3001"))
