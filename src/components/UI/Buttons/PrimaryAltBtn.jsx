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
            color="primary"
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
                border: `none`,
                bgcolor: 'transparent',
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
        >
            <Typography
                variant="button"
                sx={{
                    borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : 'none',
                }}
            >
                {content}
            </Typography>
        </Button>
    );
};

export default AltBtn;