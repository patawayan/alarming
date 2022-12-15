import React from 'react';
import styled from 'styled-components';
import { LogoSvg } from '../ui/svg/logo';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const SplashPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Splash:React.FC = () => {
  const {  darkMode  } = useSelector((state: RootState) => state.settings);

  return (
    <SplashPage>
      
        <LogoSvg darkMode={darkMode} />
      
    </SplashPage>
  );
}

export default Splash;