import React, { useState } from 'react';
import { RoutesPages } from './Routes';
import { GlobalStyle } from './styles/global';
import  {AppProvider}  from './contexts/Context'
import Modal from 'react-modal';


Modal.setAppElement('#root')

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
