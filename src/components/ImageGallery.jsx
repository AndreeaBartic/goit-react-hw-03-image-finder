import React, { useState, useEffect } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import LoadMore from './Button';
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';

const ImageGallery = ({ searchTerm }) => {
  const [imageUrl, setImageUrl] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;
    setImageUrl([]);
    setIsLoading(true);
    axios
      .get(
        `https://pixabay.com/api/?q=${encodeURIComponent(
          searchTerm
        )}&page=${page}&key=40060920-6840b24aaee2d2997514145f9&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(function (response) {
        if (response.data.hits && response.data.hits.length > 0) {
          const urls = response.data.hits.map(hit => ({
            small: hit.webformatURL,
            large: hit.largeImageURL,
          }));
          setImageUrl(prevUrls => [...prevUrls, ...urls]);
        }
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setIsLoading(false);
      });
  }, [page, searchTerm]);

  const loadMoreImg = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {isLoading && (
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      )}

      <ul className="gallery">
        {imageUrl.map((imageUrl, index) => (
          <ImageGalleryItem
            key={index}
            smallImageUrl={imageUrl.small}
            largeImageUrl={imageUrl.large}
          />
        ))}

        {!isLoading && imageUrl.length > 0 && (
          <LoadMore onClick={loadMoreImg} />
        )}
      </ul>
    </>
  );
};
export default ImageGallery;
