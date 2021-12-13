import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import BussinessLayer from '../../BussinessLayer';
import { useDispatch } from "react-redux";
import loggedInAction from "../../actions/loggedInAction";

const LoginForm = () => {

    const dispatch = useDispatch();
    return (
        <Container>
            <Row className="mt-5">
                <Col md="10" className="mx-auto text-center">
                    <h2>Login</h2>
                </Col>
                <Col md="10" className="mx-auto text-center mt-3">
                    <Form>
                        <FormGroup className="mx-auto col-12 col-md-5">
                            <input placeholder="username" type="email" className="form-control"></input>
                            <input placeholder="password" type="password" className="form-control mt-2"></input>
                        </FormGroup> 
                        <FormGroup className="mx-auto col-12 col-md-6">
                            <button type="button" className="btn btn-primary mt-4 pl-4 pr-4" onClick={(e)=>{Login(e.target, dispatch)}}>Login</button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}

async function Login(target, dispatch){
    await BussinessLayer.loginFunction(target)
    .then((customer)=>{
        var dataToUpdate = {type:"SIGN_IN", data:customer};
        sessionStorage.setItem("login",JSON.stringify(customer));
        dispatch(dataToUpdate);
    }).catch((error)=>{
        console.log(error);
    })
}

export default LoginForm;