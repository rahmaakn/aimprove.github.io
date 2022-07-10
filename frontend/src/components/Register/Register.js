import React, {useState} from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/aimprove.png';
import {Form} from 'react-bootstrap';
import axios from 'axios'


const RegisterPage = () => {
    const[nama,setNama] = useState('');
    const[errorNama,setErrorNama] = useState('');
    const[tanggal,setTanggal] = useState('');
    const[errorTanggal,setErrorTanggal] = useState('');
    const[jurusan,setJurusan] = useState('');
    const[errorJurusan,setErrorJurusan] = useState('');
    const[email,setEmail] = useState('');
    const[errorEmail,setErrorEmail] = useState('');
    const[password,setPassword] = useState('');
    const[errorPassword,setErrorPassword] = useState('');
    const[alert,setAlert] = useState('');
    const[error,setError] = useState('');

    const onChangeNama =(e) =>{
        const value = e.target.value
        setNama(value)
        setError('')
        if(!value){
            setErrorNama('Nama tidak boleh kosong')
        } else{
            setErrorNama('')
        }
    }
    const onChangeTanggal =(e) =>{
        const value = e.target.value
        setTanggal(value)
        setError('')
        if(!value){
            setErrorTanggal('Tanggal Lahir tidak boleh kosong')
        } else{
            setErrorTanggal('')
        }
    }
    const onChangeJurusan =(e) =>{
        const value = e.target.value
        setJurusan(value)
        setError('')
        if(!value){
            setErrorJurusan('Jurusan tidak boleh kosong')
        } else{
            setErrorJurusan('')
        }
    }
    const onChangeEmail =(e) =>{
        const value = e.target.value
        setEmail(value)
        setError('')
        if(!value){
            setErrorEmail('Email tidak boleh kosong')
        } else{
            setErrorEmail('')
        }
    }
    const onChangePassword = (e) =>{
        const value = e.target.value
        setPassword(value)
        setError('')
        if(!value){
            setErrorPassword('Password tidak boleh kosong')
        } else{
            setErrorPassword('')
        }
    }
    const clickRegis = () =>{
        const data ={
            nama: nama,
            tanggal: tanggal,
            jurusan:jurusan,
            email: email,
            password: password
        }
        // console.log(data)
        if(!nama){
            setNama('Nama tidak boleh kosong!')
        } else if (!tanggal) {
            setTanggal('Tanggal tidak boleh kosong!')
        } else if (!jurusan){
            setError('Jurusan tidak boleh kosong!')
        } else if(!email){
            setError('Email tidak boleh kosong!')
        } else if (!password) {
            setError('Password tidak boleh kosong!')
        } else{
        axios.post('http://localhost:3001/register', data)
        .then(result =>{
            if(result){
                if(result.data){
                    setEmail('')
                    setPassword('')
                    setAlert(result.data.message)
                    setTimeout(() => {
                        setAlert('')
                    }, 3000)
                }
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
                                    {
                                        alert && (
                                            <div className='alert alert-primary'>
                                                <p>{alert}</p>
                                            </div>
                                        )
                                    }
                                    
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">SIGN UP</h3>
                                            <p className="text-muted mb-4">Register to login to our application</p>
                                            <Form>
                                                <div className="mb-3">
                                                    <input id="inputNama" type="nama" placeholder="Nama Lengkap" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={nama} onChange={onChangeNama} />
                                                    {
                                                        errorNama && (
                                                            <p className="text-danger">{errorNama}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputTanggalLahir" type="tanggal" placeholder="Tanggal Lahir" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={tanggal} onChange={onChangeTanggal} />
                                                    {
                                                        errorTanggal && (
                                                            <p className="text-danger">{errorTanggal}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputJurusan" type="jurusan" placeholder="Jurusan" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={jurusan} onChange={onChangeJurusan} />
                                                    {
                                                        errorJurusan && (
                                                            <p className="text-danger">{errorJurusan}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={email} onChange={onChangeEmail} />
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
                                                <div className="text-center d-flex justify-content-between mt-4">
                                                    
                                                    <p>Already have an account? Please <Link to="/signin">Sign In</Link>
                                                    </p>
                                                </div>
                                                <div className="d-grid gap-2 mt-2">
                                                <button type="submit"  className="btn btn-ungu btn-block text-uppercase mb-2 shadow-sm" onClick={clickRegis}>Sign Up</button>
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
        </>
    );
};

export default RegisterPage;