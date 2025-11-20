const express = require('express');
const router = express.Router();
const ROLE_LIST = require('../../config/role_list');
const SanPhamController = require("../../Controllers/SanPhamController");
const verifyRole = require('../../middleware/verifyRole');

router.route('/')
    .get(SanPhamController.getAllSanPham)
    .post(verifyRole(ROLE_LIST.Admin),SanPhamController.addSanPham)
    .put(verifyRole(ROLE_LIST.Admin),SanPhamController.updateSanPham)
    .delete(verifyRole(ROLE_LIST.Admin),SanPhamController.deleteSanPham);

router.route('/:id')
    .get(SanPhamController.getSanPhamById)

module.exports = router;