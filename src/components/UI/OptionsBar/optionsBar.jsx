import { useState } from "react";
import Produtor from '../../../config/Produtor.json';
import SubOptionsBox from './subOptionBox';
import { Box, Typography} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
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
            <Box className="Header SubHeader">
                {mainKeys.map(key => (
                    <Box key={key} className="SubOptions" onClick={() => toggleActive(key)}>
                        <Typography className="TextWithIcon">
                            {key} <ToggleIcon
                                isDown={activeKey === key}
                                IconUp={ArrowDropDownIcon}
                                IconDown={ArrowDropUpIcon}
                                className="Icon"
                            />
                        </Typography>
                    </Box>
                ))}
            </Box>
            {activeKey && typeof produtorOptions[activeKey] === 'object' && produtorOptions[activeKey].opcoes && (
                <SubOptionsBox options={produtorOptions[activeKey].opcoes} />
            )}
        </>
    );
}

export default OptionsBar;
