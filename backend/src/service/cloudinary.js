const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

uploadToCloudinary = (path, folder) => {
  return cloudinary.uploader
    .upload(path, {
      folder,
    })
    .then((data) => {
      return { url: data.url, public_id: data.public_id, name: data.name };
    })
    .catch((error) => {
      console.log(error);
    });
};

removeFromCloudinary = async (public_id) => {
  await cloudinary.uploader.destroy(public_id, function (error, result) {
    console.log(result, error);
  });
};

module.exports = { uploadToCloudinary, removeFromCloudinary };
