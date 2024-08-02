import { useState } from 'react';
import { Box, List, ListItem, } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OptionsBar from '../OptionsBar/optionsBar';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import SecondaryBtn from '../Buttons/SecondaryBtn';

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const theme = useTheme();

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <Box 
                component="header" 
                className="flex flex-row items-center p-1 m-0 content-start" 
                sx={{ backgroundColor: theme.palette.background.default, borderBottom: '1px solid #33333350', }}
            > 
                <Box className="content-center flex-1 pl-1">
                    <img
                        src="earth-logo.png"
                        alt='Earth Logo'
                    />
                </Box>
                <Box className="flex flex-row items-center justify-center flex-none">
                    <List className="flex flex-row p-0 m-0 list-none">
                        <ListItem className="m-0 flex flex-row">
                            <PrimaryBtn 
                                content="Produtores"
                                isActive={isActive}
                                toggleActive={toggleActive}
                            />
                        </ListItem>
                        <ListItem className="m-0">
                            <SecondaryBtn 
                                content="Home"
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
            {isActive && <OptionsBar />}
        </>
    );
}

export default Navbar;
