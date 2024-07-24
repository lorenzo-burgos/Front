import { useState } from 'react';
import IconButton from '@mui/material/IconButton'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import './Navbar.css';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="Header">
            <header className="AppHeader">
                <div className="Left-options">
                    <div className="App-logo">
                        <img src="earth-logo.png" alt="Earth Logo" />
                    </div>
                    <IconButton aria-label='menu' size="small">
                        <MenuSharpIcon fontSize="small"/>
                    </IconButton>
                </div>
                <div className="Right-options">
                    <nav className="App-nav">
                        <ul className={isActive ? 'active' : ''}>
                            <li className="nav-option"><a href="#home">Home</a></li>
                            <li className="nav-option">
                                <a href="#produtores">Produtores <ArrowDropDownSharpIcon/></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}


export default Navbar;