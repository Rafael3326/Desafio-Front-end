
import { Container } from './styles'
import { CardList } from "./styles"
import { CardComponent } from "../Card"
import { useAppContext } from '../../hooks/useAppContext'


export const CardListComponent = () =>{
  
  const {AllPokemons} = useAppContext()

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