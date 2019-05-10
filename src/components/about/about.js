import React from 'react';
import styled from "styled-components"
import { Divider, Row, Col } from "antd"

const about = () => {
  return (
    <Container>
      <Row type="flex" justify="center">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }} xl={{ span: 8 }}>
        <Divider ><Title>Arubapage.com</Title></Divider>
      <p>
        One Happy Island, One well informed Aruban.
      </p>
      <p>
        Aruba page dot com was launched on the 18th of March 2018 and was created by Site Lift NL.
      </p>
      <p>
        The idea started when one frustrated and unhappy Aruban had to bookmark all news providers and daily opening them one by one to read the latest news. Knowing that Aruba is a one happy Island, this Aruban was determined to remove the hassle to get the latest news articles from each news provider and be happy with not having to open all those tabs on his browser again.
      </p>
      <p>
        Thus Aruba page was created and launched on Aruba's national anthem and flag day. Keeping in mind that Aruba Page is still brand new, there is going to be allot of new features added to the page so we can optimize the site for better user experience.
      </p>
      <p>
        So far we had a few really interesting feedback from our users. Your feedback is important to us, so feel free to reach us on Facebook, Twitter, Instagram or simply send us an email at: info@arubapage.com
      </p>
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  word-break: break-word;
  text-align:center;
`
const Title = styled.h1`

`

export default about;