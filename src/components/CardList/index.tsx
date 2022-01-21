
import { Container } from './styles'
import { CardList } from "./styles"
import { CardComponent } from "../Card"
import { useAppContext } from '../../hooks/useAppContext'



export const CardListComponent = () =>{
  
  const {AllPokemons,favoritesPokemons, menu} = useAppContext()
  
  
    return (
        <Container>
    
            <CardList>
              
              
              {AllPokemons && favoritesPokemons.length ===0  && AllPokemons.map((pokemon,index)=>(
                <CardComponent key={index} AtualPokemon={pokemon} />
              ))}

              { favoritesPokemons.length !== 0 && favoritesPokemons.map((pokemon,index)=> (
                <CardComponent key={index} AtualPokemon={pokemon} />
              )) }
          
            </CardList>

        </Container>
    )
}