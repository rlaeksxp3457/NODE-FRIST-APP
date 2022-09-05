const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

app.use(bodyParser.urlencoded({ extended: false }));
// 정적 파일 추가, 자동 포워딩 시키기
app.use(express.static(path.join(__dirname, 'public')))

// admin routes
app.use("/admin", adminRoutes);

// user routes
app.use(shopRoutes);

// any routes
app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "404error.html"));
});

app.listen(3000);
