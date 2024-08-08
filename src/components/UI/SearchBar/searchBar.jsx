import { useState } from "react";
import { Box } from "@mui/material";
import SearchBarBox from "./searchBarBox";
import SearchBarBtn from "./searchBarButton";

function SearchBar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleClick = () => {
        setIsCollapsed(prevState => !prevState);
    };

    return (
        <Box 
            display="flex" 
            flexDirection="column"
            paddingTop='.3rem'
            paddingBottom='.3rem'
            height='100%'
        >
            <SearchBarBtn onClick={handleClick} />
            <SearchBarBox isCollapsed={isCollapsed} />
        </Box>
    );
}

export default SearchBar;

