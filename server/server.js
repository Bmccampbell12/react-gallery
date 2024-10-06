const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;
const gallery = require('./routes/gallery.router.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());  // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/gallery', gallery);  // app.use('/api/list', listRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
  console.log('Listening on port: ', PORT);
});
