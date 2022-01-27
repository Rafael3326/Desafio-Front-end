import React, { useState } from 'react';
import { RoutesPages } from './Routes';
import { GlobalStyle } from './styles/global';
import  {AppProvider}  from './contexts/Context'
import Modal from 'react-modal';
import {HandleTheme} from './components/handleTheme'


Modal.setAppElement('#root')

function App() {
 

  return (
    <AppProvider >
      <>
      <RoutesPages/>
      <GlobalStyle/>  
      <HandleTheme/> 
      </>
     </AppProvider>
    
  );
}

export default App;
