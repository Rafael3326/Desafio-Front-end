
import { HeaderComponent } from "../components/header"
import { FavoritosComponent } from "../components/favoritos"
import { useAppContext } from "../hooks/useAppContext"
import { useEffect } from "react"

export const Home= () =>{
    const {updateMenuActived}=useAppContext()

    useEffect(()=>{
    sessionStorage.setItem('atual','home') 
    updateMenuActived('home')
    })

    return (
        <>
            <HeaderComponent/>
            <FavoritosComponent/>
        </>
    )
}