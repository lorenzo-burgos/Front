import { useState } from "react";
import Produtor from '../../../config/Produtor.json';
import SubOptionsBox from './subOptionBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';          
import styles from '../../../assets/styles/Navbar.module.css';
import OptionsBarStyles from '../../../assets/styles/OptionsBar.module.css';
import ToggleIcon from '../../../utils/ToggleIcon';

function OptionsBar() {
    const [activeKey, setActiveKey] = useState(null);

    const toggleActive = (key) => {
        setActiveKey(activeKey === key ? null : key);
    }

    const produtorOptions = Produtor.produtorOptions;
    const mainKeys = Object.keys(produtorOptions);

    return (
        <>
            <div className={`${styles.Header} ${OptionsBarStyles.SubHeader}`}>
                {mainKeys.map(key => (
                    <div key={key} className={OptionsBarStyles.SubOptions} onClick={() => toggleActive(key)}>
                        <span>{key} <ToggleIcon isDown={activeKey === key} IconUp={ArrowDropUpIcon} IconDown={ArrowDropDownIcon}/></span>
                    </div>
                ))}
            </div>
            {activeKey && typeof produtorOptions[activeKey] === 'object' && produtorOptions[activeKey].opcoes && (
                <SubOptionsBox options={produtorOptions[activeKey].opcoes} />
            )}
        </>
    );
}

export default OptionsBar;
