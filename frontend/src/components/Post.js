import React from "react";
import { Avatar, Card, Comment, Tooltip } from "antd";
import { HeartOutlined, HeartTwoTone, UserOutlined } from "@ant-design/icons";
import "./Post.scss";
import CommentList from "./CommentList";

function Post({ post, handleLike }) {
  const { author, caption, location, photo, tag_set, is_like } = post;
  const { username, name, avatar_url } = author;

  return (
    <div className="post">
      <Card
        hoverable
        cover={<img src={photo} alt={caption} />}
        // FIXME : host 지정 로직 처리
        actions={[
          is_like ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              onClick={() => handleLike({ post, isLike: false })}
            />
          ) : (
            <HeartOutlined onClick={() => handleLike({ post, isLike: true })} />
          ),
        ]}
      >
        <Card.Meta
          avatar={
            <Avatar
              size="large"
              icon={<img src={avatar_url} alt={username} />}
            />
          }
          title={location}
          description={caption}
          style={{ marginBottom: "0.5em" }}
        />
        <CommentList post={post} />
      </Card>
    </div>
    // <div key={id}>

    //   {caption}, {location}
    // </div>
  );
}

export default Post;
