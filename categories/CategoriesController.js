const express = require('express');
const router = express.Router();

router.get('/admin/categories/new', (req, res) => {
    return res.render('admin/categories/new');
});



module.exports = router;