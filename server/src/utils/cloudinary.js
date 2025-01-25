const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: "dgx6y4k1f",
    api_key: "776891953711783",
    api_secret: "Q5B_A4EUe1bRBUE2Jhghqr3xfo8"
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return result;
}

const upload = multer({storage});
module.exports = {upload, imageUploadUtil};