import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container style={{color: "black", margin:0}}>
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