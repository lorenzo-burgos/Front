import React from 'react';

const ToggleIcon = ({ isDown, IconUp, IconDown, style }) => {
    const Icon = isDown ? IconDown : IconUp;

    return (
        <div style={style}> 
            <Icon />
        </div>
    );
};

export default ToggleIcon;

