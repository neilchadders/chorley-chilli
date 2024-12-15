import { Container, Row, Col } from 'react-bootstrap';
import './formcontainer.css';


const FormContainer = ({ children }) => {
  return (
    <Container className = "form-container">
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6} className='column'>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;