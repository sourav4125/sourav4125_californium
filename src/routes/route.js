const express = require('express');
const router = express.Router();



const souravauthor=require("../controllers/souravauthorconttroller")
const souravpublish=require("../controllers/souravpublishcontroller")
const souravbook=require("../controllers/souravbookcontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/souravAuthor",souravauthor.createAuthor);
router.post("/souravPublisher",souravpublish.createPublish);
router.post("/souravBook",souravbook.createBook);
router.get("/getall",souravbook.getBooksWithBoth)




module.exports = router;