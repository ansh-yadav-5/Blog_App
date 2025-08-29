import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
        
        <nav className="navbar d-flex justify-content-between  align-items-center  p-3">
        <Link to={'/'}> <h1 className="mx-5 text-white fs-2 fw-bold">CodeByAnsh</h1></Link>
        <div className="d-flex align-items-center">
        {/* <Link to={'/login'}><button className="btn_sign mx-3">Sign in</button></Link>    */}
        <div className="dropdown">
        <div className="avatar-container pointer rounded-circle overflow-hidden bg-info" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '40px', height: '40px', cursor: "pointer" }}>

        <img src="https://www.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_6515452.htm#fromView=search&page=1&position=19&uuid=83e95615-091b-4309-8385-470f2ba78caa&query=man"
        className="img-fluid h-100 w-100" 
        style={{objectFit:"cover"}} alt="" />    
            
        </div>   
        <ul className="dropdown-">


        </ul>
        </div>

        </div>

        </nav>
        
        
        
        </>
    )
}