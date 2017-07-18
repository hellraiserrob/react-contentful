var express = require('express')
var logger = require('morgan')
var helmet = require('helmet')
var brands = require('./routes/brands')
var path = require('path')
var app = express()
var port = process.env.PORT || 5000;


app.use(helmet()) // protect from well known vulnerabilities

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.use('/api/brands', brands)

// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

app.listen(port, function () {
    console.log(`App listening on port ${port}!`)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(logger('dev'))
    app.use(function (err, req, res, next) {
        res.status(err.status || 500)
        res.json({
            message: err.message,
            error: err
        })
    })
}

