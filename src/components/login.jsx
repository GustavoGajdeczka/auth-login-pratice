import React,  { useState } from 'react';
import './login.css'
import { Form } from 'react-bootstrap';
import { ReactComponent as Logo } from './../assets/leprechaun-svg.svg';
import {useHistory} from "react-router-dom";

const Login = () => {
  let history = useHistory();
  let [login, setLogin] = useState('')
  let [password, setPassword] = useState('')
  const auth = (e) => {
    if(login === 'gustavo' && password === 'teste'){
      history.push("/home");
    }else{
      alert("Dados Incorretos")
    }
  }
  return (
    <>
      <div className='login-box'>
        <div className="row">
          <Logo className='logo'/>
        </div>
        <div className="row">
          <div className="col-12">
            <Form className='my-2' onSubmit={(e) => auth()}>
              <Form.Group>
                <Form.Label>Login</Form.Label>
                <Form.Control type="text" value={login} onChange={(e) => setLogin(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
              </Form.Group>
            </Form>

          </div>
        </div>
        <div className="row p-3">
          <div className="d-flex mh-100 justify-content-center align-items-end">
            <button className='anim-button' onClick={(e) => auth()}>Login</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Login;
