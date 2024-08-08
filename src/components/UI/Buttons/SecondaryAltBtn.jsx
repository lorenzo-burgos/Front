import React from 'react';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SAltBtn = ({ content, onClick }) => {
    const theme = useTheme();

    return (
        <Button
            variant="text"
            color="secondary"
            onClick={onClick}
            sx={{
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: '2px 8px',
                border: `none`,
                bgcolor: 'transparent',
                '&:hover': {
                    color: theme.palette.secondary.light,
                    borderBottom: `2px solid ${theme.palette.secondary.main}`,
                    padding: '2px 8px 0px 8px',
                },
            }}
        >
            <Typography
                variant="button"
            >
                {content}
            </Typography>
        </Button>
    );
};

export default SAltBtn;
