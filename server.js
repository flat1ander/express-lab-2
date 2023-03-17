const express = require('express')
const app = express()

app.get('/greeting/:name', (req, res) => {
    res.send(`What's up, ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let totalTip = req.params.total * (req.params.tipPercentage / 100)
    res.send(`${totalTip}`);
})
























app.listen(3000, () => {
    console.log('Server started and listening on port 3000')
})