import React from 'react';
import LikeButton from './likebutton.jsx';


const PostCard = ({ profileImage, username, content, isLiked }) => {
  return (
    <div className="post-card">
      <img src={profileImage} alt={`${username}'s profile`} className="profile-picture" />
      <h2>{username}</h2>
      <p>{content}</p>
      <LikeButton isLikedInitial={isLiked} />
    </div>
  );
};

export default PostCard;
