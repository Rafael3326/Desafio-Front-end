
import { Container } from './styles'
import { CardList } from "./styles"
import { CardComponent } from "../Card"
import { useAppContext } from '../../hooks/useAppContext'



export const CardListComponent = () =>{
  
  const {AllPokemons,favoritesPokemons, menu} = useAppContext()
  
  
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