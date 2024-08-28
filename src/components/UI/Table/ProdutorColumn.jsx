import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from '@emotion/react';

export default function ProdutorColumn({ title, text, backgroundColor })  {
    const theme = useTheme();
    return (
        <Box sx={{ borderRadius: '8px 8px 0px 0px', overflow: 'hidden', display: 'flex', flexDirection: 'column',border: `2px solid ${backgroundColor}`, width: "30rem" }}>
            <Box sx={{ backgroundColor: backgroundColor }}>
                <Typography variant="h4" sx={{ textAlign: 'center', color: "#fff" }}>{title}</Typography>
            </Box>
            <Box sx={{ padding: '16px', flex: 1, backgroundColor: theme.palette.background.default }}>
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    {text}
                </Typography>
            </Box>
        </Box>
    );
}