
import AstronautaImg from '../../assets/Astronauta.svg'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../hooks/useAppContext'
import { HandleTheme } from '../handleTheme'

export const EmptyFavorites=() =>{
    const {theme,updateMenuActived,favoritesPokemons} = useAppContext()

    const navigate= useNavigate()

    const searchPokemons = () =>{
        updateMenuActived('search')
        sessionStorage.setItem('atual','home/search') 
        navigate('/home/search')
     
    }

    return(
    
       <Container tema={theme}>
            <img src={AstronautaImg} alt="astronauta" />
            <h2>Está meio vazio por aqui</h2>
            <p>Procure por pokémons para adicioná-los aos seus favoritos</p>
            <button onClick={searchPokemons}>
                Procurar pokémons
            </button>

            
               
       </Container>
        
    )
}