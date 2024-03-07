const express = require("express");
const upload = require("../middleware/upload");
const File = require("../model/file");
const {
  uploadToCloudinary,
  removeFromCloudinary,
} = require("../service/cloudinary");
const router = new express.Router();

router.post("/files", upload.single("fileImage"), async (req, res) => {
  try {
    //upload image to cloudinary
    const data = await uploadToCloudinary(req.file.path, "file-images");

    //save image url,name and publicId on the database
    const file = new File({
      name: data.name || req.file.originalname,
      fileUrl: data.url,
      publicId: data.public_id,
    });
    await file.save();
    res.status(200).send("user file uploaded with success!");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/image/:id", async (req, res) => {
  try {
    //find file
    const file = await File.findOne({ _id: req.params.id });
    //find its public Id
    const publicId = user.publicId;
    //remove it from cloudinary
    await removeFromCloudinary(publicId);
    //remove it from the databased
    const deleteImg = await File.updateOne(
      { _id: req.params.id },
      {
        $set: {
          fileUrl: "",
          publicId: "",
        },
      }
    );
    res.status(200).send("user file  delete with success!");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const file = await File.find();
    res.json(file);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

module.exports = router;
