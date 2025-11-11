const Employee = require("../model/Employee");

const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  if (!employees)
    return res.status(204).json({ message: "No employees found." });
  res.json(employees);
};

const addEmployee = async (req, res) => {
  if (!req?.body?.firstname || !req?.body?.lastname) {
    res.status(400).json({ message: "First and Last name are required." });
  }
  try {
    const newEmployee = await Employee.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
    res.status(201).json(newEmployee);
  } catch (err) {
    console.log(err.message);
  }
};

const updateEmployee = async (req, res) => {
  if (!req?.body?.id) {
    res.status(400).json({ message: "ID parameter is required" });
  }
  const employee = await Employee.findOne({ _id: req.body.id }).exec();
  if (!employee) {
    return res
      .status(204)
      .json({ message: `Cant find employee with ID ${req.body.id}.` });
  }
  if (req.body?.firstname) employee.firstname = req.body.firstname;
  if (req.body?.lastname) employee.lastname = req.body.lastname;
  const result = await employee.save();
  console.log(result);
  res.json(result);
};

const deleteEmployee = async (req, res) => {
  if (!req?.body?.id) {
    res.status(400).json({ message: "ID parameter is required" });
  }
  const employee = await Employee.findOne({ _id: req.body.id }).exec();
  if (!employee) {
    return res
      .status(204)
      .json({ message: `Cant find employee with ID ${req.body.id}.` });
  }
  const result = await employee.deleteOne({ _id: req.body.id });
  res.json(result);
};

const getEmployeeById = async (req, res) => {
  if (!req?.params?.id)
    res.status(400).json({ message: "ID parameter is required" });
  const employee = await Employee.findOne({ _id: req.params.id }).exec();
  if (!employee) {
    return res
      .status(204)
      .json({ message: `Cant find employee with ID ${req.params.id}.` });
  }
  res.json(employee);
};

module.exports = {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
};
