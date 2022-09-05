const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require('../util/path')

/* shop.html 파일을 브라우저로 보냅니다. */
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;