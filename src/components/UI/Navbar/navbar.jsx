import { useState } from 'react';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import OptionsBar from '../OptionsBar/optionsBar';
import { useTheme } from '@mui/material/styles';

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const theme = useTheme();

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <Box component="header" className={" flex items-center justify-between p-2"} sx={{backgroundColor: theme.palette.background.default,}}>
                <Box className="flex items-center">
                    <img
                        src="earth-logo.png"
                        alt="Earth Logo"
                        className="h-6"
                    />
                </Box>
                <Box className="flex items-center">
                    <List className="flex flex-row p-0 m-0 list-none">
                        <ListItem className="m-0">
                            <Button
                                variant="contained" 
                                color="primary"
                                onClick={toggleActive}
                                endIcon={isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            >
                                <Typography variant="button">
                                    Produtores
                                </Typography>
                            </Button>
                        </ListItem>
                        <ListItem className="m-0">
                            <Button
                                href="#home"
                            >
                                <Typography variant="button" >
                                    Home
                                </Typography>
                            </Button>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            {isActive && <OptionsBar />}
        </>
    );
}

export default Navbar;
