import React from 'react';
import styled from "styled-components"
import ToggleContent from "../modal/toggleContent"
import Modal from "../modal/modal"

const newsItem = (props) => {

  return (
    <Container id={props.id} >
        <Title>{props.title.length > 100 ? props.title.slice(0,100) + '...' : props.title}</Title>
        <Image src={props.image} alt="alt" />
        <Excerpt>{props.excerpt.length > 340 ? props.excerpt.slice(0,340) + '...' : props.excerpt}</Excerpt>
        <p id={props.id}>Lesa mas</p>
        <p>
          <ToggleContent
            toggle={show => <button onClick={show}>Open</button>}
            content={hide => (
              <Modal>
                <Title>{props.title.length > 100 ? props.title.slice(0,100) + '...' : props.title}</Title>
                <Image src={props.image} alt="alt" />
                <Excerpt>{props.excerpt.length > 340 ? props.excerpt.slice(0,340) + '...' : props.excerpt}</Excerpt>
                <button onClick={hide}>Close</button>
              </Modal>
            )}
          />
        </p>
    </Container>
  );
};

const Container = styled.div`
  word-break: break-word;
  width: 320px;
`
const Title = styled.h1`
  font-size: larger;
  height: 88px;
`
const Image = styled.img`
  height:300px;
  width: 320px;
  border-radius: 6px;
`
const Excerpt = styled.div`
  color: dimgrey;
`

export default newsItem;