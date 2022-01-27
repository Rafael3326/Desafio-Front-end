
import { Container } from './styles'
import { CardList } from "./styles"
import { CardComponent } from "../Card"
import { useAppContext } from '../../hooks/useAppContext'
import { useEffect } from 'react'


export const CardListComponent = () =>{
  
  const {AllPokemons,
    favoritesPokemons,
    category,
    AtualPokemon,
    updateAllPokemonsList
  }  = useAppContext()

  useEffect(()=>{

    updateAllPokemonsList()
          
 },[favoritesPokemons,category,AtualPokemon])
  
  
    return (
        <Container>
    
            <CardList>
                        
              {AllPokemons && AllPokemons.map((pokemon,index)=>(
                <CardComponent key={index} AtualPokemon={pokemon} />
              ))}
    
            </CardList>

        </Container>
    )
}