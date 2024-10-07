const express = require('express'); //Imports express to create router
const router = express.Router(); //New Router connection
const pool = require('../modules/pool.js'); //import pool module for database

// GET gallery to fetch all gellery items from DB.
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "gallery" ORDER BY "id"`; //SQL query to retrieve all rows from 'gallery' table, ordered by 'id'
  
  pool.query(sqlText)//Excecutes SQL query
  .then((result) => {
    console.log(`Full result from server:`, result); // Logs the full result returned by the query
    console.log('result from database:', result.rows); // logs only data from 'gallery' table.
    res.send(result.rows); //sends the data back as a response
  })
  .catch((error) => {
   console.log(`error getting SELECT gallery query ${sqlText}`, error); //error message if query fails to send
   res.sendStatus(500); // internal Server error if response fails. 
    });
 });
// PUT route to incriment 'like' count for gallery items.
router.put('/like/:id', (req, res) => {
  const galleryId = req.params.id; // gets gallery id from url
  const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`; //need SQL query to increment 'likes' column.

  pool.query(queryText, [galleryId]) // executes with 'id'
  .then(result => {
    res.sendStatus(200); // Sends 200 when 'like' is updated
  })
  .catch(err => {
    console.error('Error completing UPDATE gallery query', err);
    res.sendStatus(500); // Sends server error response if query  fails 
  });
});


module.exports = router; // exports router 
