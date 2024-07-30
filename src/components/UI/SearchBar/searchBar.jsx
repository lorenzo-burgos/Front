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
            height="100vh"
        >
            <SearchBarBox isCollapsed={isCollapsed} />
            <SearchBarBtn onClick={handleClick} />
        </Box>
    );
}

export default SearchBar;
