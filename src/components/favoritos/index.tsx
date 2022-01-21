
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
            {(menu === 'favorites' && favoritesPokemons.length===0) ? <EmptyFavorites/>: <FavoritListPokemons/> }
            {(menu === 'search')&& <SearchPokemonComponent/>}
        
        </>
       
    )
}



