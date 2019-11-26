var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/timestamp/:date_string?', (req, res) => {
    const { date_string } = req.params

    var date = date_string ? new Date(date_string.includes('-') ? date_string : parseInt(date_string)) : new Date()

    res.json({
        unix: date == 'Invalid Date' ? null : date.getTime(),
        utc: date == 'Invalid Date' ? "Invalid Date" : date.toUTCString()
    })
})

var listener = app.listen(process.env.PORT || 8000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});