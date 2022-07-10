import React, {useState, Fragment} from 'react';
import './Login.css';
import { Link, Navigate} from 'react-router-dom';
import logo from '../Assets/aimprove.png';
import {Form} from 'react-bootstrap';
import axios from 'axios'


const LoginPage = () => {

    const[email,setEmail] = useState('');
    const[errorEmail,setErrorEmail] = useState('');
    const[password,setPassword] = useState('');
    const[errorPassword,setErrorPassword] = useState('');
    const[redirect, setRedirect] = useState(false)
    const[error,setError] = useState('');

    const onChangeEmail =(e) =>{
        const value = e.target.value 
        setEmail(value)
        if(!value){
            setErrorEmail('Email tidak boleh kosong')
        } else{
            setErrorEmail('')
        }
    }
    const onChangePassword = (e) =>{
        const value = e.target.value
        setPassword(value)
        if(!value){
            setErrorPassword('Password tidak boleh kosong')
        } else{
            setErrorPassword('')
        }
    }
    const submitLogin = () =>{
        const data ={
            email: email,
            password: password
        }
        // console.log(data)
        if(!email){
            setError('Email tidak boleh kosong!')
        } else if (!password) {
            setError('Password tidak boleh kosong!')
        } else if (!email && !password){
            setError('Email dan Password tidak boleh kosong!')
        } else{
        axios.post('http://localhost:3001/signin', data)
        .then(result =>{
            if(result){
                localStorage.setItem('token', result.data.token)
                setRedirect(true)
            }

            // console.log(result)

        })
        .catch(e =>{
            setError(e.response.data.message)
        })
    }
    }

    return (
        <>
        <Fragment>
            {
                redirect && (
                    <Navigate to="/"/>
                )
            }
            <div className="maincontainer">
                <div className="container-fluid">
                    <div className="row no-gutter"> 
                        <div className="col-md-6 bg-light">
                            <img src={logo} width={200} height={150}>
                            </img>
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    {
                                        error && (
                                            <div className='alert alert-danger'>
                                                <p>{error}</p>
                                            </div>
                                        )
                                    }

                                    <div className="row">  
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">SIGN IN</h3>
                                            <p className="text-muted mb-4">Sign in to continue to our application</p>
                                            <Form>
                                                <div className="mb-3">
                                                    <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={email} onChange={onChangeEmail}/>
                                                    {
                                                        errorEmail && (
                                                            <p className="text-danger">{errorEmail}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary form-bg" value={password} onChange={onChangePassword}/>
                                                    {
                                                        errorPassword && (
                                                            <p className="text-danger">{errorPassword}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="text-right d-flex justify-content-between mt-4">
                                                    <Link to="/forgotPassword">Forgot Password</Link>
                                                </div>
                                                <div className="text-center d-flex justify-content-between mt-4">
                                                    <p>Don't have account? Please <Link to="/register">Sign Up</Link></p>
                                                </div>
                                                <div className="d-grid gap-2 mt-2">
                                                <button type="submit"  className="btn btn-ungu btn-block text-uppercase mb-2 shadow-sm" onClick={submitLogin}>Sign in</button>
                                                </div>
                                                
                                                
                                            </Form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-flex bg-image">
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        </>
    );
};

export default LoginPage;