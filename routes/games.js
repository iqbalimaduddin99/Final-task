var express = require('express');
var router = express.Router();
let dbConn = require("../lib/db")

// router.get('/', function(req, res, next) {
//   res.render('wiki_game');
// });


// /* GET users listing. */
router.get("/", (req, res, next) => {
  dbConn.query("SELECT * FROM heroes_id ORDER BY id DESC", (error, rows) => {
    if (error) {
      req.flash("error", error);
      res.render("wiki_game", {data : [] });
    }else{
      res.render("wiki_game", {
        data : rows
      });
    }
  })
}); 

module.exports = router;
