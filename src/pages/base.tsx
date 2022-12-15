import {
  BrowserRouter, Route, Link, Routes
} from "react-router-dom";
import React from 'react';
import Splash from "./splash";

import styled from 'styled-components';
import { useTheme } from "../hooks/useTheme";

const BasePageContainer = styled.div<{background:string, color:string}>`
  height: calc(100vh - 100px);
  width: calc(100vw - 40px);
  padding: 50px 20px;
  background: ${({background}) => background};
  color: ${({color}) => color};
`;

const BasePage:React.FC = () => {
  const { theme: { background1, label } } = useTheme();
  
    return (
      <BasePageContainer background={background1} color={label}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={< Splash />}></Route>
          </Routes>
        </BrowserRouter>
      </BasePageContainer>
   );
}
  
export default BasePage;
