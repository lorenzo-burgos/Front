import { useState } from 'react';
import ZoomInSharpIcon from '@mui/icons-material/ZoomInSharp';
import ZoomOutSharpIcon from '@mui/icons-material/ZoomOutSharp';
import ToggleIcon from '../../../utils/ToggleIcon';
import { Box } from '@mui/material';

function SearchBarBtn({ onClick }) {
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
                width: 50,
                height: 50,
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
                bgcolor: '#D8CEB9',
            }}
        >
            <ToggleIcon isDown={isActive} IconUp={ZoomOutSharpIcon} IconDown={ZoomInSharpIcon} />
        </Box>
    );
}

export default SearchBarBtn;
