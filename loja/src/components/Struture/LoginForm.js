import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";


const LoginForm = () => {

    return (
        <Container>
            <Row className="mt-5">
                <Col md="10" className="mx-auto text-center">
                    <h2>Login</h2>
                </Col>
                <Col md="10" className="mx-auto text-center mt-3">
                    <Form>
                        <FormGroup className="mx-auto col-12 col-md-5">
                            <input placeholder="Email" type="email" className="form-control"></input>
                            <input placeholder="Password" type="password" className="form-control mt-2"></input>
                        </FormGroup> 
                        <FormGroup className="mx-auto col-12 col-md-6">
                            <button type="button" className="btn btn-primary mt-4 pl-4 pr-4">Login</button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}

export default LoginForm;