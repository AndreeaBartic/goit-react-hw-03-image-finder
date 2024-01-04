import React from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const ImageGalleryItem = ({ smallImageUrl, largeImageUrl }) => {
  console.log(basicLightbox);
  const showImageModal = () => {
    const instance = basicLightbox.create(`
      <img src="${largeImageUrl}">
    `);
    instance.show();
  };

  return (
    <li className="imageGalleryItem">
      <img
        onClick={showImageModal}
        src={smallImageUrl}
        alt="Preview"
        className="imageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
