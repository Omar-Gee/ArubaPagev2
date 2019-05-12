import React from 'react';
import styled from "styled-components"
import { Divider} from "antd"
import { Spin, Row, Col } from 'antd';

const Home = ({ loading }) => {
  console.log(loading);
  if (loading) {
    return (
      <ContainerSpinner><Spin size="large" tip="Loading news.."/></ContainerSpinner>
    )
  } else {
    return (
      <Container>
        <Row type="flex" justify="center">
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} xl={{ span: 8 }}>
            <Divider ><Title>Welcome to Aruba Page</Title></Divider>
              <h2>One happy Island, One well informed Aruban</h2>
            </Col>
          </Row>
      </Container>
    );
  }

};

const Container = styled.div`
  word-break: break-word;
  text-align:center;
`
const ContainerSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`
const Title = styled.h1`

`

export default Home;