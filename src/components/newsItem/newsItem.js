import React from 'react';
import styled from "styled-components"
import potret from "../../images/placeholder3.jpg"
const newsItem = () => {
  return (
    <Container>
        <Title>Valero ta sera porta pa sapatonan.</Title>
        <Image src={potret} alt="alt" />
        <Excerpt>Some excerpt here...Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum </Excerpt>
    </Container>
  );
};

const Container = styled.div`

  width: 350px;
`
const Title = styled.h1`
  color: red;
`
const Image = styled.img`
  border-radius: 6px;
`
const Excerpt = styled.div`
  color: blue;
`

export default newsItem;