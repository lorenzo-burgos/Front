import React from 'react';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SecondaryBtn = ({ content, onClick }) => {
    const theme = useTheme();

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={onClick}
            sx={{
                padding: '4px 8px',
                border: `2px solid ${theme.palette.secondary.main}`,
                '&:hover': {
                    bgcolor: theme.palette.secondary.light,
                },
            }}
        >
            <Typography variant="button">
                {content}
            </Typography>
        </Button>
    );
};

export default SecondaryBtn;
