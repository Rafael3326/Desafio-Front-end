
import { useRoutes } from "react-router-dom"

import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { SearchPokemon } from "./pages/Search"
import { SeeAll } from "./pages/SeeAll"
import { isLogged } from "./helpers/AuthHandle"
import { RequireAuth } from "./helpers/RequireAuht"


export const RoutesPages = () =>{
   let logged= isLogged()
    return useRoutes([
        {path: '/', element:<Login/>},
        {path: '/home', element:<RequireAuth><Home/></RequireAuth>},
        {path: '/home/search', element:<RequireAuth><SearchPokemon/></RequireAuth>},
        {path: '/home/seeall', element:<RequireAuth><SeeAll/></RequireAuth>},
        {path: '*', element:<h1>Pagina Não encontrada</h1>}
    ])
}