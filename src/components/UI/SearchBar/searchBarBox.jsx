import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function SearchBarBox({ isCollapsed }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: isCollapsed ? 'none' : 'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: `${theme.palette.background.default}`,
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                borderRight: `1px solid ${theme.palette.secondary.main}`,
                width: isCollapsed ? 0 : 290,
                height: '100%',
            }}
        >
            <Typography>Opções</Typography>
        </Box>
    );
}

export default SearchBarBox;
