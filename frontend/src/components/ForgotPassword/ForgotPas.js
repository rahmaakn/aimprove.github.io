import React, {useState} from 'react';
import './ForgotPas.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/aimprove.png';
import axios from 'axios'


const ForgotPassword = () => {
    const[email,setEmail] = useState('');
    const[error,setError] = useState('');
    const[alert,setAlert] = useState('')

    const changeEmail = (e) =>{
        setEmail(e.target.value)
        setError('')
    }

    const send = () =>{
        if(!email){
            setError('Email wajib diisi')
        } else{
            axios.put('http://localhost:3001/forgotPassword', {email: email})
            .then(res => {
                setEmail('')
                setAlert('Silahkan cek Email anda')
                setTimeout(() =>{
                    setAlert('')
                }, 3000)
                // console.log(res)
            })
        }
        // console.log('sending')
    }

    return (
        <>
            <div className="maincontainer">
                <div class="container-fluid">
                    <div class="row no-gutter"> 
                        <div class="col-md-6 bg-light">
                            <img src={logo} width={200} height={150}>
                            </img>
                            <div class="login d-flex align-items-center py-5">
                                <div class="container">
                                    {
                                        alert && (
                                            <div className='alert alert-primary'>
                                                <p>{alert}</p>
                                            </div>
                                        )
                                    }
                                    {
                                        error && (
                                            <div className='alert alert-danger'>
                                                <p>{error}</p>
                                            </div>
                                        )
                                    }
                                    <div class="row">
                                        <div class="col-lg-10 col-xl-7 mx-auto">
                                            <h3 class="display-4">Forgot Password</h3>
                                            <p class="text-muted mb-4">Please enter your email here!</p>
                                            <form>
                                                <div class="mb-3">
                                                    <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={email} onChange={changeEmail} />
                                                </div>
                                                
                                                <div class="d-grid gap-2 mt-2">
                                                    <button type="submit"  class="btn btn-ungu btn-block text-uppercase mb-2 shadow-sm" onClick={send}>Send</button>
                                                </div>
                                                
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-6 d-none d-md-flex bg-image">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;