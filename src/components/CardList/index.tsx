
import { Container } from './styles'
import { CardList } from "./styles"
import { CardComponent } from "../Card"
import { useAppContext } from '../../hooks/useAppContext'
import { useEffect } from 'react'

export const CardListComponent = () =>{
  
  const {AllPokemons} = useAppContext()

  const vazio= {}
  
  const outro= {}

  console.log(vazio === outro)
 
    
  

    return (
        <Container>
            <h2>Olá, você tem 01  pokémon salvo!</h2>
            <CardList>
              
              {AllPokemons && AllPokemons.map((pokemon,index)=>(
                <CardComponent key={index} AtualPokemon={pokemon} />
              ))}

            
            </CardList>

        </Container>
    )
}