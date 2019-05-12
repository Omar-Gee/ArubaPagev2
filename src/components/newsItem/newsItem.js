import React from 'react';
import styled from "styled-components/macro"
import { Card, Modal } from "antd"

const NewsItem = (props) => {
  const [visible, setVisible] = React.useState(false)
  const showModal = () => {
    setVisible(!visible)
  }
  return (
      <Container id={props.id} >
        <Card
          hoverable
          style={{width: 300}}
          cover={<Image alt="article picture" src={props.image} />}
          onClick={showModal}
        >
          <Title>{props.title.length > 100 ? props.title.slice(0,100) + '...' : props.title}</Title>
          <Excerpt>{props.excerpt.length > 340 ? props.excerpt.slice(0,340) + '...' : props.excerpt}</Excerpt>
        </Card>
        <StyledModal
          title={props.title}
          visible={visible}
          onOk={showModal}
          onCancel={showModal}
          footer={null}
          mask={true}
          maskClosable={true}
        >
          <Card
            cover={<Image alt="article picture" src={props.image} />}
            onClick={showModal}
          >
            <Excerpt>{props.excerpt}</Excerpt>
          </Card>
        </StyledModal>
      </Container>
  );
};

const Container = styled.div`
  margin:32px auto;
  text-align: -webkit-center;
`
const Title = styled.h1`
  font-size: larger;
  height: 88px;
`
const StyledModal = styled(Modal)`
  .ant-card-cover > img {
    height: 320px;
  }
  .ant-modal-body {
  }
  .ant-card-bordered {
    width: unset;
    border: none;
  }
`
const Image = styled.img`
  height: 200px;
`
const Excerpt = styled.p`
  height:216px;
`


export default NewsItem;