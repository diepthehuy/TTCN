const express = require('express');
const router = express.Router();
const ROLE_LIST = require('../../config/role_list');
const HangController = require("../../Controllers/HangController");
const verifyRole = require('../../middleware/verifyRole');

router.route('/')
    .get(verifyRole(ROLE_LIST.Admin),HangController.getAllHang)
    .post(verifyRole(ROLE_LIST.Admin),HangController.addHang)
    .put(verifyRole(ROLE_LIST.Admin),HangController.updateHang)
    .delete(verifyRole(ROLE_LIST.Admin),HangController.deleteHang);

router.route('/:id')
    .get(verifyRole(ROLE_LIST.Admin),HangController.getHangById)

module.exports = router;