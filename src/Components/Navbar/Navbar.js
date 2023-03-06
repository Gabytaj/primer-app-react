import React from "react";
import './Navbar.css'

// const divStyle={
//     color:'blue',
//     backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/2/29/Godzilla_%2754_design.jpg')",
// }

const Navbar = () => {
    return (
        // React Fragment
        // solo se puede regresar un solo elemento al incluir React Fragment engañamos al sistema
        // <>
        //     <h1>Hola</h1>
        //     <h2></h2>
        // </>
        <nav className='navbar'>
            {/* <div style={divStyle} className="nav-left"> */}
            <div  className="nav-left">
                <a href='/'>
                    <img alt='space-logo' className='nav-img' src="https://cdn.dribbble.com/users/1769954/screenshots/4216600/media/f1ed192ec1c5300d413fac7fb076f7d0.png"></img>
                </a>
                {/* <h1 style={{color: 'pink'}} className="nav-title">Space-app</h1> */}
                <h1  className="nav-title">Space-app</h1>
            
            </div>

            <div className='nav-links'>

                <a href="/"> Personas en el espacio</a>
                <a href="/"> Foto de astronauta del dia</a>

            </div>
        </nav>

    )
}
export default Navbar;