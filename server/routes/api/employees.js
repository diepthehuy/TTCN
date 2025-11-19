const express = require('express');
const router = express.Router();
const EmployeesController = require('../../Controllers/EmployeesController');
const ROLE_LIST = require('../../config/role_list');
const verifyRole = require('../../middleware/verifyRole');

router.route('/')
    .get(EmployeesController.getAllEmployees)
    .post(verifyRole(ROLE_LIST.Admin),EmployeesController.addEmployee)
    .put(verifyRole(ROLE_LIST.Admin),EmployeesController.updateEmployee)
    .delete(verifyRole(ROLE_LIST.Admin),EmployeesController.deleteEmployee);

router.route('/:id')
    .get(EmployeesController.getEmployeeById)

module.exports = router;