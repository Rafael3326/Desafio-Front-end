import { AES, MD5 } from 'crypto-js'
import CryptoJS from 'crypto-js'
import { useAppContext} from '../hooks/useAppContext'
import { Navigate } from 'react-router-dom'

type Props = {
    children:JSX.Element
}

export const RequireAuth= ({children}:Props) =>{

const{login,password,updatePassword,updateLogin} =useAppContext()

 const Logged= {
     login:'admin@email.com',
     password:'1234'
 } 
     
   if((Logged.login===login && Logged.password=== password) || sessionStorage.length !== 0){
       localStorage.setItem('token','ativado')
       
       return children
   } else {
    updateLogin('')
    updatePassword('')
     return <Navigate to="/"/>
   }
   
}