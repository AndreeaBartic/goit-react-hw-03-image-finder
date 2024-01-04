import React from 'react';

const LoadMore = ({ onClick }) => {
  return (
    <div className="loadmore-btn">
      <button className="load-btn" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
export default LoadMore;
