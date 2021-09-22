import React from 'react'
import IconInstagram from '../images/icon-instagram.svg'
import IconFacebook from '../images/icon-facebook.svg'
import IconWhatsapp from '../images/icon-whatsapp.svg'
import '../styles/Navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className='top-navbar'>
                <div className='div-contact-index contact-navbar'>AFStudio 2021</div>   
                <img className='logo-navbar' src='https://firebasestorage.googleapis.com/v0/b/afstudio-cd25e.appspot.com/o/Logo.png?alt=media&token=c9960ab6-bff0-4b27-b061-ccf6041c62fc'></img>
                <div className='div-contact-index index-navbar'>
                    <img className='icon-instagram' src={IconInstagram} />
                    <img className='icon-facebook' src={IconFacebook} />
                    <img className='icon-whatsapp' src={IconWhatsapp} />
                </div>
            </div>
            <div className='navbar'>
               
            </div>
            
        </div>
    )
}

export default Navbar;