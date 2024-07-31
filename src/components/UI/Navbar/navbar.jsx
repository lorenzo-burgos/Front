import { useState } from 'react';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import OptionsBar from '../OptionsBar/optionsBar';
import useStyles from '../../../assets/styles/styles';

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const classes = useStyles();

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <Box component="header" className={classes.backgroundColor + " flex items-center justify-between p-2"}>
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
                                onClick={toggleActive}
                                endIcon={isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                className={classes.primaryBtn} // Aplica o estilo primário
                            >
                                <Typography variant="button" className={classes.text}>
                                    Produtores
                                </Typography>
                            </Button>
                        </ListItem>
                        <ListItem className="m-0">
                            <Button
                                href="#home"
                                className={classes.primaryBtn} // Aplica o estilo primário
                            >
                                <Typography variant="button" className={classes.text}>
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
