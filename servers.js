const express = require('express')
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/home', function (req, res) {
    res.send('Hello World this is home page')
})

app.get('/hii', function (req, res) {
    res.send('Hello World this is home page')
})

app.get('/about', (req, res) => {
    var details = {
        name: "rahul",
        roll_no: "222665035"
    }
    res.send(details)
})
app.listen(3000, () => {
    console.log("server is live");
});