import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
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
    }
    useEffect(() => {
        Customer();
    }, [])
    return (
        <>
            {
                logindata.length === 0 ? "error" : <><h1 className='home-title'>Welcome {logindata[0].name}</h1>
                    <h2 className='home-title'>Customer</h2>
                    <Button onClick={userlogout}>LogOut</Button>
                    <img
                        src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-customers-buying-goods-online-vector-illustration-png-image_5347809.jpg"
                        alt='buyer pic'
                        className='img-fluid home-title'
                    /></>
            }
        </>
    )
}

export default Home