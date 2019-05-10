import React from 'react';
import styled from "styled-components"
import NewsItem from "../newsItem/newsItem"
import { Divider, Row, Col } from "antd"

const newsSection = (props) => {
  return (
    <Container>
      <Divider ><Title>{props.title}</Title></Divider>
          <NewsItemsContainer>
            <Row type="flex" justify="center">
                {props.newsItems.map(newsItem => {
                  return (
                    <Col sm={{ span: 24 }} md={{ span: 10 }}xl={{ span: 6 }}   key={newsItem.id}>
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

const Container = styled.div`

`
const Title = styled.h1`

`

const NewsItemsContainer = styled.div`

`

export default newsSection;