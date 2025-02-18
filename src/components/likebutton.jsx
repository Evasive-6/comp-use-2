import React, { useState } from 'react';

const LikeButton = ({ isLikedInitial }) => {
  const [isLiked, setIsLiked] = useState(isLikedInitial);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={toggleLike}>
      {isLiked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;
