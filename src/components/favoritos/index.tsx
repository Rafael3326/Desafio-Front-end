
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
            {(menu === 'favorites' && favoritesPokemons.length===0) ? <EmptyFavorites/>: <FavoritListPokemons /> }
            {(menu === 'search')&& <SearchPokemonComponent/>}
        
        </>
       
    )
}



// essa tela contem o item <EmptyFavorites/> que esta aqui fora por questão de melhoria do codigo
// essa tela contem o item  <FavoritesList/>
// essa tela possui o <SearchPokemonComponent/>
