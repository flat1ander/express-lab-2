const express = require('express')
const app = express()

app.get('/greeting/:name', (req, res) => {
    res.send('Hello ' + req.params)
})


























app.listen(3000, () => {
    console.log('Server started and listening on port 3000')
})