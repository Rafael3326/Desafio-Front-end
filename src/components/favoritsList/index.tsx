
import { useAppContext } from "../../hooks/useAppContext"

import { CardComponent } from "../Card"
import { Container } from "./styles"

export const FavoritListPokemons = () =>{

    const{favoritesPokemons}=useAppContext()


    return (
        <Container>
        {favoritesPokemons.map((item,index)=> (
            <CardComponent key={index} AtualPokemon={item} />
        ))}
        
        </Container>
    )
}