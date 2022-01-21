
import { useAppContext } from "../../hooks/useAppContext"

import { CardComponent } from "../Card"
import { Container } from "./styles"

export const FavoritListPokemons = () =>{

    const{favoritesPokemons}=useAppContext()


    return (
        <Container>
<<<<<<< HEAD
        {favoritesPokemons.length!==0 && favoritesPokemons.map((item,index)=> (
=======
        {favoritesPokemons.map((item,index)=> (
>>>>>>> 94982bf43546f60750b3332cf702a19a70323783
            <CardComponent key={index} AtualPokemon={item} />
        ))}
        
        </Container>
    )
}