const express = require('express')
const app = express()
const port = 4000
app.use(express.json())
const mongoDB = require("./db");
mongoDB();

var cors = require('cors')
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["POST","GET"],
        credentials:true
    }
))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.use("/api",require("./Routes/Fetching"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
  
