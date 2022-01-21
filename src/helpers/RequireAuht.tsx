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
     
   if(Logged.login===login && Logged.password=== password){
       return children
   } else {
    updateLogin('')
    updatePassword('')
     return <Navigate to="/"/>
   }

    // const encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
    // const decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    // console.log(decrypted)
    
    
}