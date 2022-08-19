import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home2() {
  const [logindata, setLoginData] = useState([]);
  const navigate = useNavigate();

  const Merchant = () => {
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
    Merchant();
  }, [])
  return (
    <>
      {
        logindata.length === 0 ? "error" : <><h1 className='home-title'>Welcome {logindata[0].name}</h1>
          <h2 className='home-title'>Merchant User</h2>
          <Button onClick={userlogout}>LogOut</Button>
          <img
            src="https://cdn.pixabay.com/photo/2016/08/16/06/29/coconut-1597233_960_720.png"
            alt='buyer pic'
            className='img-fluid home-title home2'
          /></>
      }
    </>
  )
}

export default Home2