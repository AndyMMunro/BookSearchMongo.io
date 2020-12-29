const router = require("express").Router();
const bookRoutes = require("./books");
const apiRoute = require("./apiroute");
// const { query } = require("express");

// Book routes end points what how in the URL
router.use("/books", bookRoutes);
router.use("/apiroute", apiRoute);
// router.use("/bookApiQuery" + query, bookApiQuery)
module.exports = router;
