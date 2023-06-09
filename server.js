const express = require('express')
const app = express()

app.get('/greeting/:name', (req, res) => {
    res.send(`What's up, ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let totalTip = req.params.total * (req.params.tipPercentage / 100)
    res.send(`${totalTip}`);
})

app.get('/magic/:phrase', (req, res) => {
    const magicAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let randomPhrase = Math.floor(Math.random() * 20)
    res.send(`<h1>${req.params.phrase}? The answer is... ${magicAnswers[randomPhrase]}</h1>`)
})

app.listen(3000, () => {
    console.log('Server started and listening on port 3000')
})

app.get('/', (req, res) => {
    res.send(`
        99 bottles of beer on the wall
        <a href ="http://localhost:3000/98">Take one down...</a>`
    )
})

app.get('/0', (req, res) => {
    res.send(`0 Bottles of Beer on the wall </br> <a href = "http://localhost:3000">Line 'em back up</a>`)
})

let reducedNumber = 97;

app.get('/:number', (req, res) => {
    res.send(`${req.params.number} bottles of beer on the wall...
    <a href ="http://localhost:3000/${reducedNumber}">Take one down...</a>
    `);
    reducedNumber--;
})

