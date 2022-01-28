
import { RoutesPages } from './Routes';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import {HandleTheme} from './components/handleTheme'

import { useAppContext } from "./hooks/useAppContext";

Modal.setAppElement('#root')

function App() {
  const {theme}= useAppContext()

  return (
  
      <>
      <RoutesPages/>
      <GlobalStyle theme={theme}/>  
      <ToastContainer autoClose={3000} />
      <HandleTheme/> 
      </>
     
    
  );
}

export default App;
