import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import ToggleIcon from '../../../utils/ToggleIcon';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';

const AltBtn = ({ content, isActive, toggleActive }) => {
    const theme = useTheme();

    return (
        <Button
            variant="text"
            onClick={toggleActive}
            endIcon={
                <ToggleIcon
                    isDown={!isActive}
                    IconUp={ArrowDropUpIcon}
                    IconDown={ArrowDropDownIcon}
                />
            }
            sx={{
                padding: '0px 8px',
                border: 'none',
                bgcolor: 'transparent', 
                color: 'white',
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
        >
            <Typography
                variant="button"
                sx={{
                    borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : 'none',
                    color: 'white'
                }}
            >
                {content}
            </Typography>
        </Button>
    );
};

export default AltBtn;