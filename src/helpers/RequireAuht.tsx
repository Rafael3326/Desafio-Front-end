
import { useAppContext} from '../hooks/useAppContext'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useEffect } from 'react';

type Props = {
    children:JSX.Element
}

export const RequireAuth= ({children}:Props) =>{

const{login,password,updatePassword,updateLogin} =useAppContext()

 const Logged= {
     login:'admin@email.com',
     password:'1234'
 } 

 useEffect(()=>{
    if(Logged.login !== login){
        toast.error('login incorreto')
     }
     if(Logged.password !== password){
        toast.error('senha incorreta')
     }
 })
     
   if((Logged.login===login && Logged.password=== password) || sessionStorage.length !== 0){
       localStorage.setItem('token','ativado')
       
       return children
   } else {
    updateLogin('')
    updatePassword('')
     return <Navigate to="/"/>
   }
   
}