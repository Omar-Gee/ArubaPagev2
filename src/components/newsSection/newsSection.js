import React from 'react';
import styled from "styled-components/macro"
import NewsItem from "../newsItem/newsItem"
import 'antd/dist/antd.css';
import { Divider, Row, Col, Spin } from "antd"

const newsSection = (props) => {
  if (props.newsItems.length < 10) {
    return (
      <>
        <Divider ><Title>{props.title}</Title></Divider>
        <ContainerSpinner><Spin size="large" tip="Loading news.."/></ContainerSpinner>
      </>
    )
  } else
  return (
    <Container>
      <Divider ><Title>{props.title}</Title></Divider>
          <NewsItemsContainer>
            <Row type="flex" justify="center">
                {props.newsItems.map(newsItem => {
                  return (
                    <Col sm={{ span: 24 }} md={{ span: 10 }}xl={{ span: 6 }} key={newsItem.id}>
                      <NewsItem
                        id={newsItem.id}
                        title={newsItem.title}
                        image={newsItem.imageUrl}
                        excerpt={newsItem.excerpt}
                      />
                    </Col>
                  )
                })}
            </Row>
          </NewsItemsContainer>
    </Container>
  );
};

const ContainerSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`
const Container = styled.div`
margin: 0 0 64px 0;

`
const Title = styled.h1`

`

const NewsItemsContainer = styled.div`

`

export default newsSection;






