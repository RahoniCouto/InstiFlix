import React from 'react';
import Logo from '../../assets/image/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="InstiFlix logo"></img>
            </a>

            <Button as="a" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;