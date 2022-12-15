import { store } from '../store';

export const appWhite = '#FFFFFF';
export const appBlack = '#020202';
export const appDarkBlue = '#132448';
export const appOrange = '#B2263E';
export const appLightYellow = '#FFF1A6';
export const appLightBlue = '#72CBFD';

export const lightMode1 = `linear-gradient(180deg, ${appLightBlue} 0%, ${appWhite} 100%)`;
export const lightMode2 = `linear-gradient(180deg, ${appLightBlue} 0%, ${appLightYellow} 100%)`;
export const darkMode1 = `linear-gradient(180deg, #0D182F 0%, #3D0C14 100%);`;
export const darkMode2 = `linear-gradient(180deg, #0D1932 0%, #1B3A55 100%);`;


interface ThemeInterface {
  background1: string;
  background2: string;
  background3: string;
  label: string;
  text: string;
}

export const AppTheme: {[key:string]: ThemeInterface} = {
  DARK : {
    background1: darkMode1,
    background2: darkMode2,
    background3: appDarkBlue,
    label: appLightYellow,
    text: appWhite
  },
  LIGHT: {
    background1: lightMode1,
    background2: lightMode2,
    background3: appWhite,
    label: appOrange,
    text: appDarkBlue
  }
}