import React from 'react';
import { Link } from "react-router-dom"
import "antd/dist/antd.css";
import { Menu } from 'antd';

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
          props.newsData.map(newsSource => {
            return (
              <Menu.Item key={newsSource.newsSource.redirect}>
                <Link to={newsSource.newsSource.redirect}>{newsSource.newsSource.formattedName}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </div>
  );
};

export default SubNavigation;