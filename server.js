var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/timestamp/:date_string?', (req, res) => {
    const { date_string } = req.params

    var date

    if (date_string && /^\d{5,}$/.test(date_string)) {

        date = new Date(parseInt(date_string))
    }
    else {
        date = date_string ? new Date(date_string) : new Date()
    }

    if (date == 'Invalid Date') {
        return res.json({
            error: 'Invalid Date'
        })
    }
    else {
        return res.json({
            unix: date == 'Invalid Date' ? null : date.getTime(),
            utc: date == 'Invalid Date' ? "Invalid Date" : date.toUTCString()
        })
    }
})

var listener = app.listen(process.env.PORT || 8000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});