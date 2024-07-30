import { useState } from 'react';
import styles from '../../../assets/styles/Navbar.module.css';
import ToggleIcon from '../../../utils/ToggleIcon';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import OptionsBar from '../OptionsBar/optionsBar';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className={styles.Header}>
                <header className={styles.AppHeader}>
                    <div className={styles.Logo}>
                        <img src="earth-logo.png" alt="Earth Logo" />
                    </div>
                    <div className={styles.NavOptions}>
                        <nav className={styles.AppNav}>
                            <ul className={isActive ? styles.active : ''}>
                                <li className={styles.navOption}>
                                    <div className={styles.option} onClick={toggleActive}>
                                        Produtores <ToggleIcon isDown={isActive} IconUp={ArrowDropUpIcon} IconDown={ArrowDropDownIcon}/>
                                    </div>
                                </li>
                                <li className={styles.navOption}><a href="#home">Home</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
            {isActive && <OptionsBar />}
        </>
    );
}

export default Navbar;
