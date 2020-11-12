import React from "react";
import { Avatar, Card } from "antd";
import { HeartOutlined, HeartFilled, UserOutlined } from "@ant-design/icons";
import "./Post.scss";

function Post({ post }) {
  const { id, caption, location, photo } = post;
  return (
    <div className="post">
      <Card
        hoverable
        cover={<img src={photo} alt={caption} />}
        actions={[<HeartFilled />]}
      >
        <Card.Meta
          avatar={<Avatar size="large" icon={<UserOutlined />} />}
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
