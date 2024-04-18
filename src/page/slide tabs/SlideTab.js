import React from "react";
import { Tabs, Tab,TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import "./slidetab.scss";

const SimpleTabs = () => {
  // define state with initial value to let the tabs start with that value
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };
  const tabsArray = [...Array(5).keys()];
  return (
    <>
      <Tabs activeTab={activeTab} onTabClick={onTabClick}>
      
        {tabsArray.map((item) => (
          <Tab key={item}>NAM A  {item}</Tab>
        ))}
      </Tabs>

     
      
    </>
  );
};

export default SimpleTabs;