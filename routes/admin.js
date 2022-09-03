const express = require('express');

const router = express.Router();

// express 라우터 객체에 미들웨어를 등록해서 exports 해주고 app.js
// 에서 require 받아서 app.use 미들웨어에 app.use('/admin',router)
// 형탸로 미들웨어 선언시 라우터안 모든 미들웨어의 경로는 기본값으로
// '/admin/경로' 형태를 가짐 상당히 편한듯?
router.get('/add-product', (req, res, next) => {
	res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('/add-product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

module.exports = router;