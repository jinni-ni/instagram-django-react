import React from "react";

function Post({ post }) {
  const { id, caption, location, photo } = post;
  return (
    <div key={id}>
      <img src={photo} alt={caption} style={{ width: "100px" }} />
      {caption}, {location}
    </div>
  );
}

export default Post;
