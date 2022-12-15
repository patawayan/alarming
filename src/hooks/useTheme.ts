import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { AppTheme } from '../ui/colors';

export function useTheme() {
  const {  darkMode = true  } = useSelector((state: RootState) => state.settings);

  return {
    theme: darkMode ? AppTheme.DARK: AppTheme.LIGHT
  };
}