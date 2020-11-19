import React, { useState } from "react";
import { Card, Form, Input, Button, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { getBase64FromFile } from "utils/base64";

export default function PostNewForm() {
  const [fileList, setFileList] = useState([]);
  const [previewPhoto, setPreviewPhoto] = useState({
    visible: false,
    base64: null,
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const handlePreviewPhoto = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64FromFile(file.originFileObj);
    }

    setPreviewPhoto({
      visible: true,
      base64: file.url || file.preview,
    });
  };
  const handleFinish = () => {};

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };
  return (
    <Form {...layout} onFinish={handleFinish} autoComplete={"false"}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: "Please input your username!" },
          { min: 5, message: "다섯글자 이상 입력해주세요" },
        ]}
        hasFeedback
        {...fieldErrors.username}
        {...fieldErrors.non_field_errors}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="photo"
        name="photo"
        rules={[{ required: true, message: "사진을 입력해주세요." }]}
        hasFeedback
        {...fieldErrors.photo}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          beforeUpload={() => {
            return false;
          }}
          onChange={handleUploadChange}
          onPreview={handlePreviewPhoto}
        >
          {fileList.length > 0 ? null : (
            <div>
              <PlusOutlined />
              <div className="ant-upload-text">Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Modal
        visible={previewPhoto.visible}
        footer={null}
        onCancel={() => setPreviewPhoto({ visible: false })}
      >
        <img
          src={previewPhoto.base64}
          style={{ width: "100%" }}
          alt="Preview"
        />
      </Modal>
      <hr />
      {JSON.stringify(fileList)}
    </Form>
  );
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
