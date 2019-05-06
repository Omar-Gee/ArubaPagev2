import React from 'react';
import styled from "styled-components"
import NewsItem from "../newsItem/newsItem"

const newsSection = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <NewsItemsContainer>
        {props.newsItems.map(newsItem => {
          return (
            <NewsItem
              key={newsItem.id}
              id={newsItem.id}
              title={newsItem.title}
              image={newsItem.imageUrl}
              excerpt={newsItem.excerpt}
            />
          )
        })}
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
  justify-content: space-around;
  grid-template-columns: auto auto auto auto;
`

export default newsSection;