import React from "react";
import { Box, Typography } from "@mui/material";

function SearchBarBox({ isCollapsed }) {
    return (
        <Box
            sx={{
                display: isCollapsed ? 'none' : 'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#D8CEB9",
                width: isCollapsed ? 0 : 290,
                height: '100vh',
                transition: 'width 0.3s ease',
            }}
        >
            <Typography>Opções</Typography>
        </Box>
    );
}

export default SearchBarBox;
