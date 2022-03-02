import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';


function Footer() {
    return (
        <footer>
            <Container>   
                <Row>
                    <Col className="text-center py-3">Made & {<FaHeart style={{color: 'red', fontSize: '20px'}}/>} by Kamlesh Bannagare</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
