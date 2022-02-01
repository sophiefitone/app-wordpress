import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Header from './header';

export default function Register() {

    let navigate = useNavigate();
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [email, setEmail] = useState([]);
    
   let APIusers='http://localhost/wordpress/wp-json/wp/v2/users'
   let handleUsername = (e) =>{
    setUsername(e.target.value);
 }

 let handlePassword = (e) =>{
    setPassword(e.target.value)
}

 let handleEmail = (e) =>{
    setEmail(e.target.value)
}

    let register = () =>{

     axios.post(APIusers + '/register',{
         username:username,
         email : email,
         password: password
     }).then(res => {
        console.log(res.data);
        navigate("/pages")
     }) .catch(error =>{
        console.log(error.response)
     })
     
    }


    return (
        
        <>
        <Header />
        <Container>
            <Form>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleUsername} required />
                </Form.Group>

                <Form.Group className="my-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email" onChange={handleEmail} required />
                </Form.Group>

                <Form.Group className="my-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={handlePassword} required />
                </Form.Group>

                <Button variant="primary my-3" className="form-control" onClick={register}>Registrati</Button>
            </Form>
        </Container></>
    )
}
