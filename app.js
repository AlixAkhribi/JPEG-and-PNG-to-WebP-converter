const fs = require('fs');
const imagemin = require('imagemin'); // The imagemin module.
const imageminWebp = require('imagemin-webp'); // imagemin's WebP plugin.
const outputFolder = `./output`; // Output folder
const JPEGImages = `./img/*.jpg`; // JPEG images

const converter = async (pathOfImages, inputImageFormat) => {
  try {
    await imagemin([pathOfImages], {
      destination: outputFolder,
      plugins: [
        imageminWebp({
          quality: 80 // Quality setting from 0 to 100
        })
      ]
    });
  } catch (error) {
    console.log(error);
  }
};

converter(JPEGImages);
