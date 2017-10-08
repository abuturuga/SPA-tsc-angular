const express = require('express'),
      app = express();
      bodyParser = require('body-parser'),
      state = require('./state');
      controllers = require('./controllers/index');


state.init();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1.0/', controllers);

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});