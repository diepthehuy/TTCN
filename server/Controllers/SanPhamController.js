const SanPham = require("../model/SanPham");

const getAllSanPham = async (req, res) => {
  const danhsachsanpham = await SanPham.find();
  if (!danhsachsanpham)
    return res.status(204).json({ message: "Không tìm thấy sản phẩm" });
  res.json(danhsachsanpham);
};

const addSanPham = async (req, res) => {
  if (!req?.body?.firstname || !req?.body?.lastname) {
    res.status(400).json({ message: "First and Last name are required." });
  }
  try {
    const newSanPham = await SanPham.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
    res.status(201).json(newSanPham);
  } catch (err) {
    console.log(err.message);
  }
};

const updateSanPham = async (req, res) => {
  if (!req?.body?.id) {
    res.status(400).json({ message: "ID parameter is required" });
  }
  const sanpham = await SanPham.findOne({ _id: req.body.id }).exec();
  if (!sanpham) {
    return res
      .status(204)
      .json({ message: `Cant find employee with ID ${req.body.id}.` });
  }
  if (req.body?.firstname) sanpham.firstname = req.body.firstname;
  if (req.body?.lastname) sanpham.lastname = req.body.lastname;
  const result = await sanpham.save();
  console.log(result);
  res.json(result);
};

const deleteSanPham = async (req, res) => {
  if (!req?.body?.id) {
    res.status(400).json({ message: "Cần ID sản phẩm!" });
  }
  const sanpham = await SanPham.findOne({ _id: req.body.id }).exec();
  if (!sanpham) {
    return res
      .status(204)
      .json({ message: `Không tìm được sản phẩm với ID ${req.body.id}.` });
  }
  const result = await employee.deleteOne({ _id: req.body.id });
  res.json(result);
};

const getSanPhamById = async (req, res) => {
  if (!req?.params?.id)
    res.status(400).json({ message: "ID parameter is required" });
  const sanpham = await SanPham.findOne({ _id: req.params.id }).exec();
  if (!sanpham) {
    return res
      .status(204)
      .json({ message: `Không tìm được sản phẩm với ID ${req.params.id}.` });
  }
  res.json(sanpham);
};

module.exports = {
  getAllSanPham,
  addSanPham,
  updateSanPham,
  deleteSanPham,
  getSanPhamById,
};
