import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import Header from './header';
import './style.css';

export default function Login() {

    let navigate = useNavigate();
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    
    
    let logIn = () =>{

     axios.post('http://decoinside.altervista.org/wordpress/index.php/wp-json//jwt-auth/v1/token',{
         username: username,
         password: password
     }).then(res => {
        console.log(res.data);
        navigate("/posts")
     } ).catch(error =>{
        console.log(error.response)
     })
     
    }

     let handleUsername = (e) =>{
        setUsername(e.target.value);
     }
     let handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    return (

        <>
        <Header />
        <div className ='body'>
          <div className ='containform'>
              <h1>LOGIN</h1>
            <Form>
                <Form.Group className="mb-4" >
                    <Form.Control type="text" name="username" placeholder="Enter your username" onChange={handleUsername} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder=" Your Password" onChange={handlePassword} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{color:'white' }}>
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Link to="/register" style={{color:'rgb(240, 225, 143)',fontSize:'20px' }}>Sei nuovo? Registrati</Link>

                <Button variant="warning mt-3" className="form-control" onClick={logIn}>Login</Button>

            </Form>
         </div>
        </div> 
        </>
    )
}
