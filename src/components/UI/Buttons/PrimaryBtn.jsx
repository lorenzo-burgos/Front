import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import ToggleIcon from '../../../utils/ToggleIcon';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';

const PrimaryBtn = ({ content, isActive, toggleActive }) => {
    const theme = useTheme();

    const [isUp, setIsUp] = useState(false);
    const handleClick = () => {
        setIsUp(!isUp);
    };

    return (
        <Button
            variant="text"
            onClick={() => {
                toggleActive();
                handleClick();
            }}
            endIcon={
                <ToggleIcon
                    isDown={!isActive}
                    IconUp={ArrowDropUpIcon}
                    IconDown={ArrowDropDownIcon}
                />
            }
            sx={{
                padding: '0px 8px',
                border: isUp ? `1px solid ${theme.palette.primary.main}` : 'none',
                bgcolor: 'transparent', 
                color: theme.palette.primary.contrastText, 
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
        >
            <Typography variant="button" sx={{ color: 'white' }}>
                {content}
            </Typography>
        </Button>
    );
};

export default PrimaryBtn;
