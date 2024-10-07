const express = require('express'); // Import express to create new server
const app = express();
const bodyParser = require('body-parser'); // Needed to parse incoming request.bodies
const PORT = process.env.PORT || 5001;  // Defines port!
const galleryRouter = require('./routes/gallery.router'); // Imports gallery router.

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());  // needed for axios requests
app.use(express.static('build')); // Static files from build directory

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/gallery', galleryRouter);  // app.use('/api/list', listRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
  console.log('Listening on port: ', PORT);
});
