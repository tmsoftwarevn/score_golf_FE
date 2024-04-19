import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Space, Table } from "antd";
import { render } from "@testing-library/react";
import "./bangdiem.scss";
import img from "../../assets/images/VIE.png";
import BandiemCon from "../bangdiemcon/Bangdiemcon";
import BandiemConAdmin from "../bangdiemcon/BangdiemconAdmin";
const BangdiemAdmin = () => {
  const columns = [
    {
      title: "Pos",
      dataIndex: "pos",
      key: "pos",
      align: "center",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      align: "center",
      responsive: ["sm"],
      render: (text, record, index) => {
        return (
          <>
            <div className="country">
              <img src={img} />
            </div>
          </>
        );
      },
    },
    {
      title: "Thru",
      dataIndex: "thru",
      key: "thru",
    },
    {
      title: "Player Name",
      dataIndex: "player",
      key: "player",
      render: (text, record, index) => {
        return (
          <>
            <div className="name">Nguyễn Quang Za Vinh</div>
          </>
        );
      },
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      render: (text, record, index) => {
        return (
          <>
            <div
              className={
                6 > 0
                  ? "score-label score-label-duong text-white font-bold"
                  : "score-label score-label-am text-white font-bold"
              }
            >
              {-6 > 0 ? "+" + 5 : 5}
            </div>
          </>
        );
      },
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      align: "center",
      responsive: ["sm"],
      render: (text, record, index) => {
        return (
          <>
            <div className="text-blue-950 font-bold"> 75</div>
          </>
        );
      },
    },
  ];
  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push({
      key: i.toString(),
      pos: i + 1,
      country: "VN",
      thru: "F",
      score: "+4",
      total: "73",
    });
  }
  const handleRow = (record) => {
    return {
      onClick: () => {
        // Handle row click event
        console.log("Row clicked:", record);
      },
      style: { cursor: "pointer" },
    };
  };

  return (
    <>
      <Table
        columns={columns}
        expandable={{
          showExpandColumn: false,
          expandRowByClick: true,
          expandedRowRender: () => <BandiemConAdmin />,

          //   defaultExpandedRowKeys: ["0"],
        }}
        dataSource={data}
        onRow={(record, rowIndex) => ({
          ...handleRow(record),
        })}
        pagination={false}
      />
    </>
  );
};
export default BangdiemAdmin;
