import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';

function Details() {
    return (
        <Container>
            <h1>Select Screen</h1>
            <Row className="mt-5">
                <Col md={4}>
                    <Link to="/home">
                        <img
                            src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-customers-buying-goods-online-vector-illustration-png-image_5347809.jpg"
                            alt='buyer pic'
                            className='img-fluid'
                        />
                    </Link>
                    <h4>Customer</h4>
                </Col>
                <Col md={4}>
                    <Link to="/home2" className='merchant-design'>
                        <img
                            src="https://cdn.pixabay.com/photo/2016/08/16/06/29/coconut-1597233_960_720.png"
                            alt='seller pic'
                            className='img-fluid'
                        />
                    </Link>
                    <h4 className='merchant-design title'>Merchant</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Details