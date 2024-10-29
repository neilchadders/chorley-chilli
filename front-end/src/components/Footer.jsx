import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style = {{margin: 0}}>
      <Container style = {{color: "black"}}>
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