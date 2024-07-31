import React from 'react';
import { makeStyles } from '@mui/styles';

const getCSSVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

const primaryColor = getCSSVariable('--color-primary');
const primaryHighlight = getCSSVariable('--color-primary-highlight');
const secondaryColor = getCSSVariable('--color-secondary');
const secondaryHighlight = getCSSVariable('--color-secondary-highlight');
const backgroundColor = getCSSVariable('--color-background');
const textColor = getCSSVariable('--color-text');
const textHighlightColor = getCSSVariable('--color-text-highlight');
const fontTitle = getCSSVariable('--font-title');
const fontText = getCSSVariable('--font-text');
const shadow = getCSSVariable('--shadow');

const useStyles = makeStyles({
    backgroundColor: {
        backgroundColor: backgroundColor,
    },
    primaryBtn: {
        backgroundColor: primaryColor,
        border: `1px solid ${primaryColor}`,
        color: textColor,
        padding: '8px 16px',
        cursor: 'pointer',
        fontFamily: fontTitle,
        '&:hover': {
            backgroundColor: primaryHighlight,
            color: textHighlightColor,
        },
    },
    secondaryBtn: {
        backgroundColor: secondaryColor,
        border: `1px solid ${secondaryColor}`,
        color: textColor,
        padding: '8px 16px',
        cursor: 'pointer',
        fontFamily: fontTitle,
        '&:hover': {
            backgroundColor: secondaryHighlight,
            color: textHighlightColor,
        },
    },
    text:{
        color: textColor,
        fontFamily: fontText,
    },
    title:{
        color: textColor,
        fontFamily: fontTitle,
    },
});

export default useStyles;
