const Hang = require("../model/Hang");

const getAllHang = async (req, res) => {
  const danhsachhang = await Hang.find();
  if (!danhsachhang)
    return res.status(204).json({ message: "Không tìm thấy Hãng" });
  res.json(danhsachhang,{message:"Đã tìm được hãng!."});
};

const addHang = async (req, res) => {
  if (!req?.body?.TenHang) {
    res.status(400).json({ message: "Vui lòng hãy nhập tên hãng." });
  }
  try {
    const newHang = await Hang.create({
      TenHang:req.body.TenHang
    });
    res.status(201).json({message:"Thêm thành công!."});
  } catch (err) {
    console.log(err.message);
  }
};

const updateHang = async (req, res) => {
  if (!req?.body?.id) {
    res.status(400).json({ message: "Cần ID Hãng" });
  }
  const hang = await Hang.findOne({ _id: req.body.id }).exec();
  if (!hang) {
    return res
      .status(204)
      .json({ message: `Không có hãng với id ${req.body.id} trong database.` });
  }
  if (req.body?.Hang) hang.Hang = req.body.Hang;
  const result = await hang.save();
  console.log(result);
  res.json(result,{message:"Update thành công!."});
};

const deleteHang = async (req, res) => {
  if (!req?.body?.id) {
    res.status(400).json({ message: "Cần ID Hãng!" });
  }
  const hang = await Hang.findOne({ _id: req.body.id }).exec();
  if (!hang) {
    return res
      .status(204)
      .json({ message: `Không có hãng với id ${req.body.id} trong database.` });
  }
  const result = await Hang.deleteOne({ _id: req.body.id });
  res.json(result,{message:"Xóa Hãng thành công!."});
};

const getHangById = async (req, res) => {
  if (!req?.params?.id)
    res.status(400).json({ message: "Cần ID Hãng!" });
  const hang = await Hang.findOne({ _id: req.params.id }).exec();
  if (!hang) {
    return res
      .status(204)
      .json({ message: `Không có hãng với id ${req.body.id} trong database.` });
  }
  res.json(Hang,{message:"Đã tìm được sản phẩm!."});
};

module.exports = {
  getAllHang,
  addHang,
  updateHang,
  deleteHang,
  getHangById,
};
