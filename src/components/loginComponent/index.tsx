
import { Container } from "./styles"
import logoImg from '../../assets/logoPoke.png'
import pokelistLoginImg from '../../assets/pokelistLogin.png'
import DarkTheme from  '../../assets/darkTheme.svg'
import { useAppContext } from "../../hooks/useAppContext"
import React, {  ChangeEvent, useState } from "react"
import {useNavigate } from 'react-router-dom'

export const LoginComponent=() =>{
    const[email,setEmail]=useState<string>('')
    const[passwordState,setPasswordState]=useState<string>('')
    const {theme,updateLogin,updatePassword}=useAppContext()

    const navigate= useNavigate()

    const handleLogin = (e:ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e:ChangeEvent<HTMLInputElement>) =>{
        setPasswordState(e.target.value)
    }

    const handleClickButton = () =>{
       
        updateLogin(email)
        updatePassword(passwordState)
        navigate('/home')
    }

    if( localStorage.getItem('token') == 'ativado' && sessionStorage.length === 0){
        updateLogin('admin@email.com')
        updatePassword('1234')
        navigate('/home/seeall')  
        
    }

    return (
    <Container tema={theme}>
        <div>
            <img src={ logoImg} alt="Logo-Pokemon" />
          
            <h2>Comece a coletar pokémons!</h2>
         
            <div className="Envio">
                <div id="firstInput">
                    <input
                    id="email" 
                    type="email"
                    placeholder="Email" 
                    value={email}
                    onChange={handleLogin} 
                    /> 
                </div>

                <div id="secondInput">
                    <input 
                    id="senha"
                    type="password"
                    placeholder="Senha"
                    value={passwordState}
                    onChange={handlePassword}
                    />
                </div>
                
                <button id="buttonSubmit" onClick={handleClickButton}>
                    Entrar
                </button>
               
            </div>


        </div>

        <img id="pokeImg" src={theme? pokelistLoginImg : DarkTheme}  alt="pokemon-list"/>
    </Container>
    )
}