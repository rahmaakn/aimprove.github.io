import React, {useState} from 'react';
import './ResetPas.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/aimprove.png';
import axios from 'axios'
import {Form} from 'react-bootstrap';


const ResetPassword = (props) => {
    const[newPassword,setNewPassword] = useState('');
    const[confirmPassword,setConfirmPassword] = useState('');
    const[errorPassword,setErrorPassword] = useState('');
    const[errorConfirmPassword,setErrorConfirmPassword] = useState('');
    const[alert,setAlert] = useState('')

    const onChangeNewPassword = (e) =>{
        const value = e.target.value
        setNewPassword(value)
        if(!value){
            setErrorPassword('Password tidak boleh kosong')
        } else{
            setErrorPassword('')
        }
    }

    const onChangeConfirmPassword = (e) =>{
        const value = e.target.value
        setConfirmPassword(value)
        if(!value){
            setErrorConfirmPassword('Confirm Password tidak boleh kosong')
        } else if(newPassword !== value){
            setErrorConfirmPassword('Password tidak cocok')
        } else {
            setErrorConfirmPassword('')
        }
    }

    const update = (props) =>{
        const data = {
            newPassword: newPassword,
        }
        axios.put('http://localhost:3001/resetPassword', data)
        .then(res => {
            if(res){
                setNewPassword('')
                setConfirmPassword('')
                setAlert('Password berhasil diubah!')
                setTimeout(() =>{
                    setAlert('')
                }, 3000)
            }
            // console.log(res)
        })
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
                                    <div class="row">
                                        <div class="col-lg-10 col-xl-7 mx-auto">
                                            <h3 class="display-4">Reset Password</h3>
                                            <p class="text-muted mb-4">Please add a new password here!</p>
                                            <Form>
                                                <div className="mb-3">
                                                    <input id="inputNewPassword" type="newpassword" placeholder="New Password" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={newPassword} onChange={onChangeNewPassword}/>
                                                    {
                                                        errorPassword && (
                                                            <p className="text-danger">{errorPassword}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="confirmPassword" type="confirmPassword" placeholder="Confirm New Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary form-bg" value={confirmPassword} onChange={onChangeConfirmPassword}/>
                                                    {
                                                        errorConfirmPassword && (
                                                            <p className="text-danger">{errorConfirmPassword}</p>
                                                        )
                                                    }
                                                </div>
                                                
                                                <div class="d-grid gap-2 mt-2">
                                                    <button type="submit"  class="btn btn-ungu btn-block text-uppercase mb-2 shadow-sm" onClick={update}>Update</button>
                                                </div>
                                                
                                                
                                            </Form>
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

export default ResetPassword;