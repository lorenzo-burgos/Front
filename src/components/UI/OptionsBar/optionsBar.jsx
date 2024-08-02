import { useState } from "react";
import Produtor from '../../../config/Produtor.json';
import SubOptionsBox from './subOptionBox';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function OptionsBar() {
    const theme = useTheme();
    const [activeKey, setActiveKey] = useState(null);

    const toggleActive = (key) => {
        setActiveKey(activeKey === key ? null : key);
    }

    const produtorOptions = Produtor.produtorOptions;
    const mainKeys = Object.keys(produtorOptions);

    return (
        <>
            <Box 
                className="flex flex-row items-center p-2 m-0 content-start" 
                sx={{ backgroundColor: theme.palette.background.default, borderBottom: '1px solid #33333350', }}
            >
                {mainKeys.map(key => (
                    <Box 
                        key={key} 
                        sx={{ 
                            flex: 1, 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}
                    >
                        <PrimaryBtn
                            content={key}
                            isActive={activeKey === key}
                            toggleActive={() => toggleActive(key)}
                        />
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
