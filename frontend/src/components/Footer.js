import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
        <footer id="footerbg" className="p-4">

        <div className="container p-4">
            <div className="row">
                <div className="col-sm-4">
                  <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                      <img src='./logo.png' width='200'/>
                      </Link>
    </div>
    
    <ul className='col-12 col-md-3 list-unstyled'>
      <li className="font-weight-bold"><h4>AIMPROVE</h4></li>
    <li>
    <Link className="text-decoration-none text-dark" to='/'>HOME</Link>
    </li>
    <li>
    <Link  className="text-decoration-none text-dark" to='/IISMA'>IISMA CAMP</Link>
    </li>
    <li>
    <Link  className="text-decoration-none text-dark" to='/fyp'>FYP</Link>
    </li>
    <li>
    <Link  className="text-decoration-none text-dark" to='/COMPANYcamp'>COMPANY CAMP</Link>
    </li>
    <li>
    <Link  className="text-decoration-none text-dark" to='/aboutus'>ABOUT US</Link>
    </li>
    </ul>
    <ul className='col-12 col-md-3 list-unstyled'>
      <li className="font-weight-bold"><h4>FIND US</h4> </li>
      <li className='d-flex justify-content-between p-2 col-12 col-md-3'>
        <i className='bi bi-linkedin'/>
        <i className='bi bi-instagram'/>
        <i className='bi bi-whatsapp'/>
    
    </li>
    </ul>
            
    
    <div className="text-center p-4 p-3 mb-2 bg ">
    © 2021 Copyright: 
    <a className="text-decoration-none text-dark fw-bold">AIMPROVE</a>
  </div>
</div>
</div>

</footer>
  )
}

export default Footer