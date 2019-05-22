import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components/macro"
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
        style={{
          [`textAlign`]: 'left',
          background: 'cornflowerblue'
          }}
      >
        <StyledMenuItem key="title">
          <Link to="/">
            <TitleContainer>
              <Title>Aruba</Title>
              <NavigationImage src={star} alt='star'/>
              <Title>Page</Title>
            </TitleContainer>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem key="about">
          <Link to="/about">About</Link>
        </StyledMenuItem>
      </Menu>
    </Container>
  );
};

export default MainNavigation;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

`
const Title = styled.p`
text-transform: uppercase;
margin: 0 32px;
font-size: x-large;
    font-weight: 500;
`
const NavigationImage = styled.img`
  height: 33.14px;
  border-radius: 16px;
`
const StyledMenuItem = styled(Menu.Item)`
.ant-menu-horizontal > .ant-menu-item {
    color: #fff !important;
  }

`
// TODO: change main nav to color white text
const Test = styled(Menu.Item)`
  .ant-menu-horizontal >
  .ant-menu-item:hover {
    border-bottom: 2px solid yellow !important;
  }
`
const Container = styled.div`

`
