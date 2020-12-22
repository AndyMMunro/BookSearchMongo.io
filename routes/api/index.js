const router = require("express").Router();
const bookRoutes = require("./books");
const apiRoute = require("./apiroute");

// Book routes
router.use("/books", bookRoutes);
router.use("/apiroute", apiRoute);
module.exports = router;
