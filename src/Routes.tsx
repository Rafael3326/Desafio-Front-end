
import { useRoutes } from "react-router-dom"

import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { SearchPokemon } from "./pages/Search"
import { SeeAll } from "./pages/SeeAll"




export const RoutesPages = () =>{

    return useRoutes([
        {path: '/', element:<Login/>},
        {path: '/home', element:<Home/>},
        {path: '/home/search', element:<SearchPokemon/>},
        {path: '/home/seeall', element:<SeeAll/>},
        {path: '*', element:<></>}
    ])
}