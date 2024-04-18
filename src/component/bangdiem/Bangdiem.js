import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Space, Table } from "antd";
import { render } from "@testing-library/react";
import "./bangdiem.scss";
import img from "../../assets/images/VIE.png";

const Bangdiem = () => {
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Status",
        key: "state",
        render: () => <Badge status="success" text="Finished" />,
      },
      {
        title: "Upgrade Status",
        dataIndex: "upgradeNum",
        key: "upgradeNum",
      },
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const columns = [
    {
      title: "Pos",
      dataIndex: "pos",
      key: "pos",
      align: 'center',
    //   render: (text, record, index) => {
    //     return (
    //       <>
    //         <div className="pos">
    //           {record.key}
    //         </div>
    //       </>
    //     );
    //   },
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      align: 'center',
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
      title: "Today",
      dataIndex: "today",
      key: "today",
    },
    {
      title: "Thru",
      dataIndex: "thru",
      key: "thru",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      render: (text, record, index) => {
        return (
          <>
            <div className="score-label score-label-am text-white">+8</div>
          </>
        );
      },
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      align: 'center',
    },
  ];
  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push({
      key: i.toString(),
      pos: i,
      country: "VN",
      player: "Nguyễn Đức Sơn",
      today: "+2",
      thru: "F",
      score: "+4",
      total: "73",
    });
  }
  const handleRow = (record) => {
    return {
      onClick: () => {
        // Handle row click event
        console.log('Row clicked:', record);
      },
      style: { cursor: 'pointer' },
    };
  };
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          showExpandColumn: false,
          expandRowByClick: true,
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
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
export default Bangdiem;
