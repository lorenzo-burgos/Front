import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from '@emotion/react';

export default function ProdutorColumn({ title, text, backgroundColor })  {
    const theme = useTheme();
    return(
        <Box sx={{ borderRadius: '8px 8px 0px 0px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{backgroundColor: backgroundColor}}>
            <Typography variant="h4">{title}</Typography>
        </Box>
        <Box sx={{ padding: '16px', flex: 1 }}>
            <Typography variant="body1">
                {text}
            </Typography>
        </Box>
    </Box>
    );
}