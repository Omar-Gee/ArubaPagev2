import React from 'react';
import { Link } from "react-router-dom"
import "antd/dist/antd.css";
import { Menu } from 'antd';
import services from "../../services/newsSources"
import serviceNameFormatter from "../../utils/serviceNameFormatter"

const SubNavigation = (props) => {
  const [current, setCurrent] = React.useState('')
  const handleClick = (e) => {
    setCurrent(e.key)
  }
  return (
    <div>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{[`textAlign`]: 'center'}}
      >
        {
          Object.keys(services).map(newsSource => {
            const newsSourceData = serviceNameFormatter[newsSource]
            return (
              <Menu.Item key={newsSourceData.redirect}>
                <Link to={newsSourceData.redirect}>{newsSourceData.formattedName}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </div>
  );
};

export default SubNavigation;