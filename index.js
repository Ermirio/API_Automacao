
const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 3001



 


// serve static assets
app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/graf', (req, res) => {
  res.sendFile(__dirname + '/index.html')

  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






