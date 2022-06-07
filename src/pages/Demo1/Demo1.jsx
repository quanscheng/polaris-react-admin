import { Avatar, Segmented } from "antd";
import React, { useState } from "react";

const Demo1 = () => {
  const [options, setOptions] = useState([
    {
      label: (
        <div style={{ padding: 4 }}>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <div>User 1</div>
        </div>
      ),
      value: "user1",
    },
    {
      label: (
        <div style={{ padding: 4 }}>
          <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          <div>User 2</div>
        </div>
      ),
      value: "user2",
    },
    {
      label: (
        <div style={{ padding: 4 }}>
          <Avatar style={{ backgroundColor: "#87d068" }} />
          <div>User 3</div>
        </div>
      ),
      value: "user3",
    },
  ]);

  return (
    <Segmented
      options={options}
      onChange={(value) => {
        console.log('value: ', value);
      }}
    />
  );
};

export default Demo1;
