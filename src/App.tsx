import React from 'react';

import { RoutesPages } from './Routes';
import { GlobalStyle } from './styles/global';
import  {AppProvider}  from './contexts/Context'

function App() {
  return (
    <AppProvider >
      <>
      <RoutesPages/>
      <GlobalStyle/>
      </>
     </AppProvider>
    
  );
}

export default App;
