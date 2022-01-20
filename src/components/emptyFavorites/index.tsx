
import AstronautaImg from '../../assets/Astronauta.svg'
import { Container } from './styles'

import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../hooks/useAppContext'

export const EmptyFavorites=() =>{
    const {menu,updateMenuActived} = useAppContext()

    const navigate= useNavigate()

    const searchPokemons = () =>{
        updateMenuActived({ favorites: false,search: true, seeAll: false})
        navigate('/home/search')
     
    }


    return(
       <Container>
            <img src={AstronautaImg} alt="astronauta" />
            <h2>Está meio vazio por aqui</h2>
            <p>Procure por pokémons para adicioná-los aos seus favoritos</p>
            <button onClick={searchPokemons}>
                Procurar pokémons
            </button>


       </Container>
        
    )
}