import React from 'react';
import { Button } from '@mui/material';
import './Custom.style.css';
import { CommonProps } from '@mui/material/OverridableComponent';

type ThemeButtonType = {
  title: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const ThemeButton: React.FC<ThemeButtonType> = ({ title, onClick, style }) => {
  return (
    <Button
      variant="contained"
      size="large"
      onClick={onClick}
      className="custom-button"
      style={style}
    >
      {title}
    </Button>
  );
};

export default ThemeButton;
