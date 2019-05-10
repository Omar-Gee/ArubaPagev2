import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"
import "antd/dist/antd.css";
import { Menu } from 'antd';
import  star  from "../../images/512.png"

const MainNavigation = () => {
  const [current, setCurrent] = React.useState('')

  const handleClick = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key)
  }

  return (
    <Container>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{[`textAlign`]: 'center'}}
      >
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="image">
          <Link to="/"><NavigationImage src={star} alt='star'/></Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default MainNavigation;

const NavigationImage = styled.img`
height: 33.14px;
    border-radius: 16px;
`
const Container = styled.div`
`
