import React from "react";
import { Input, Space } from "antd";

import { InputNumber } from "antd";
const NhapDiem = () => {
  const onChangeScore = (value) => {
    console.log("changed", value);
  };
  return (
    <>
      <InputNumber style={{width: "50px"}} min={0} max={100} onChange={onChangeScore} />
    </>
  );
};

export default NhapDiem;
