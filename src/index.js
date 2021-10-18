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


// Static files
app.use(express.static(path.join(__dirname, '/')))


// listening the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})

