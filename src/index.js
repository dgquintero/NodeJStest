const express =  require('express');
const morgan = require('morgan');
const app = express();
const path = require('path')

// settings
app.set('port', 3000)

//middlewares
app.use(morgan('dev'));

// routes
app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
const Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'yXEQDE886PWAq4U16bZoJOima', 
    consumer_secret: 'PJF1PxUHEGlK8rstauznA53lr4F62KSDBOH4nXGknMshlj9sRb', 
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAANrrUgEAAAAA60iX05tblsvjIoXNXKVIzEOhf7A%3DnqZGCGdoM1w7tjgRO8EiyvtpRyWUfn6UCT1yNyTHdZMPsk94dE'
});

var params = {screen_name: 'danielq02', count: 5};
app.get('/twitter', (req, res)=> {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            res.json({ Items: [...tweets] })
        }
    });
})


// Static files
app.use(express.static(path.join(__dirname, '/')))


// listening the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})

