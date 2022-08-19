import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [logindata, setLoginData] = useState([]);
    const navigate = useNavigate();

    const Customer = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);

            setLoginData(user);
        }
    }


    const userlogout = () => {
        localStorage.removeItem("user_login")
        navigate("/");
        window.location.reload();
    }
    useEffect(() => {
        Customer();
    }, [])
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <h3 className="text-decoration-none text-light mx-2">E-commerce</h3>
                <Nav className="me-auto">
                    <NavLink to="/" className="text-decoration-none text-light mx-2"><Button>Home</Button></NavLink>
                    {
                        logindata.length === 0 ? <><NavLink to="/" className="text-decoration-none text-light mx-2"><Button>login</Button></NavLink>
                        <NavLink to="/register" className="text-decoration-none text-light"><Button>Register</Button></NavLink></>
                        : <><Button onClick={userlogout}>LogOut</Button></>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header