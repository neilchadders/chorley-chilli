import FormContainer from "../components/FormContainer";
import { Form, Button, } from 'react-bootstrap';

const [email, setEmail] = "";

const submitForgotEmail = (e) => {
  e.preventDefault();
  console.log(email);
};

const ForgetPasswordScreen = () => {
  return (
    <div>
      <h1>Forget Password</h1>
      <FormContainer>
      <Form onSubmit={submitForgotEmail}>
      <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Button type='submit' variant='primary'>
          Reset Password
        </Button>
    </Form>
      </FormContainer>

    </div>
  );
};

export default ForgetPasswordScreen;