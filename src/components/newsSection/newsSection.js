import React from 'react';
import styled from "styled-components"
import NewsItem from "../newsItem/newsItem"

const newsSection = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <NewsItemsContainer>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </NewsItemsContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  width: 100%;
`
const Title = styled.h1`
text-align: left;
`

const NewsItemsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`

export default newsSection;