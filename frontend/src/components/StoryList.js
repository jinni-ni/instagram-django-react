import React from "react";
import { Card } from "antd";
import "./StoryList.scss";

export default function StoryList({ style }) {
  return (
    <div style={style}>
      <Card title="Stories" size="small">
        Story from people you follow wiil show up here.
      </Card>
    </div>
  );
}
