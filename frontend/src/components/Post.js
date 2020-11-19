import React from "react";
import { Avatar, Card } from "antd";
import { HeartOutlined, HeartFilled, UserOutlined } from "@ant-design/icons";
import "./Post.scss";

function Post({ post }) {
  const { author, caption, location, photo, tag_set, like_user_set } = post;
  const { username, name, avatar_url } = author;
  return (
    <div className="post">
      <Card
        hoverable
        cover={<img src={photo} alt={caption} />}
        // FIXME : host 지정 로직 처리
        actions={[<HeartOutlined />]}
      >
        <Card.Meta
          avatar={
            <Avatar
              size="large"
              icon={
                <img
                  src={"http://localhost:8000" + avatar_url}
                  alt={username}
                />
              }
            />
          }
          title={location}
          description={caption}
        />
      </Card>
    </div>
    // <div key={id}>

    //   {caption}, {location}
    // </div>
  );
}

export default Post;
