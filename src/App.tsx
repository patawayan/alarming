import React from 'react';
import BasePage from './pages/base';

import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';

const AppPageProvider = styled(Provider)`
  height: 100vh;
  width: 100vw;
`;


const App:React.FC = () => {
  return (
    <AppPageProvider store={store}>
      <BasePage />
    </AppPageProvider>
  );
}

export default App;
