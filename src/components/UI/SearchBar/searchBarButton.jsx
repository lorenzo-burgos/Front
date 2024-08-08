import { useState } from 'react';
import ZoomInSharpIcon from '@mui/icons-material/ZoomInSharp';
import ZoomOutSharpIcon from '@mui/icons-material/ZoomOutSharp';
import ToggleIcon from '../../../utils/ToggleIcon';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function SearchBarBtn({ onClick }) {
    const theme = useTheme();
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
        if (onClick) {
            onClick();
        }
    };

    return (
        <Box 
            onClick={toggleActive}
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: isActive ? 50 : 310,
                height: 50,
                borderRadius: '0px 5px 5px 0px',
                borderTop: `1px solid ${theme.palette.secondary.main}`,
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                borderRight: `1px solid ${theme.palette.secondary.main}`,
                bgcolor: isActive ? `${theme.palette.secondary.main}` : `${theme.palette.secondary.light}`,
                '&:hover': {
                    bgcolor: theme.palette.secondary.light,
                },

                position: 'relative',
            }}
        >
            <ToggleIcon 
                isDown={isActive} 
                IconUp={ZoomOutSharpIcon} 
                IconDown={ZoomInSharpIcon} 
                style={{ marginLeft: 'auto', paddingRight: 12 }}
            />
        </Box>
    );
}

export default SearchBarBtn;
