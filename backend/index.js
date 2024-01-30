const express = require('express')
const app = express()
const port = 4000
app.use(express.json())
const mongoDB = require("./db");


var cors = require('cors')
app.use(express.json())
app.use(cors(
    {
        origin:["https://mnnitian.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
))

mongoDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.use(require("./Routes/Fetching"));

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
  
  
