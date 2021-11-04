import LinkAttribute from "../Attribute/LinkAttribute";
import Nav from 'react-bootstrap/Nav';
const HeaderComponent = () => {

    return (
        <>
            <Nav
                activeKey="/home"
            >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )

}

export default HeaderComponent;