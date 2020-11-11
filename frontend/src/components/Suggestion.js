import React from "react";
import { Button } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Suggestions.scss";

export default function Suggestion() {
  return (
    <div className="suggestion">
      <div className="avatar">
        <UserOutlined />
      </div>
      <div className="username">Username</div>
      <div className="actions">
        <Button size="small">Follow</Button>
      </div>
    </div>
  );
}
