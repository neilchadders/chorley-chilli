import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container style = {{color: "black",
        background: "rgb(255, 255, 0, 0.6)",
        width: "100%"}}>
        <Row>
          <Col className='text-center py-3'>
            <p>Chorley-Chilli &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;