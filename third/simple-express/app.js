const express = require('express')
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

let jsOb={
    nm: 'android',
    ad: 78
}
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/app', (req, res) => res.send('You hit the app'))
app.get('/application', (req, res) => res.send('You hit the app'))

app.get('/json', (req, res) => res.json(jsOb))
app.post('/psDt',(req, res) => {
    console.log(req.body.nm)
    res.json(jsOb)
})

app.listen(
    3000, 
    () => console.log('Example app listening on port 3000!')
)