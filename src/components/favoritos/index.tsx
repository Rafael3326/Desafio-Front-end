
import { EmptyFavorites} from "../emptyFavorites"
import { SearchPokemonComponent } from "../searchPokemon"
import { SeeAllComponent } from "../seeAll"
import { useAppContext } from "../../hooks/useAppContext"
import { FavoritListPokemons } from "../favoritsList"


export const FavoritosComponent=() =>{
    
    const {menu,favoritesPokemons,category} = useAppContext()
    return(
        <>
            {(menu === 'seeall') && <SeeAllComponent/>}
<<<<<<< HEAD
            {(menu === 'favorites' && favoritesPokemons.length===0) ? <EmptyFavorites/>: <FavoritListPokemons/> }
=======
            {(menu === 'favorites' && favoritesPokemons.length===0) ? <EmptyFavorites/>: <FavoritListPokemons /> }
>>>>>>> 94982bf43546f60750b3332cf702a19a70323783
            {(menu === 'search')&& <SearchPokemonComponent/>}
        
        </>
       
    )
}



