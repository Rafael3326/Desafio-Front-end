
import { EmptyFavorites} from "../emptyFavorites"
import { SearchPokemonComponent } from "../searchPokemon"
import { SeeAllComponent } from "../seeAll"
import { useAppContext } from "../../hooks/useAppContext"

export const FavoritosComponent=() =>{
    
    const {menu} = useAppContext()
    return(
        <>
            {menu.seeAll && <SeeAllComponent/>}
            {menu.favorites && <EmptyFavorites/>}
            { menu.search && <SearchPokemonComponent/>}
        
        </>
       
    )
}



// essa tela contem o item <EmptyFavorites/> que esta aqui fora por questão de melhoria do codigo
// essa tela contem o item  <FavoritesList/>
// essa tela possui o <SearchPokemonComponent/>
