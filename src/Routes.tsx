
import { useRoutes } from "react-router-dom"

import { Login } from "./pages/Login"
import { Home } from "./pages/Home"





export const RoutesPages = () =>{

    return useRoutes([
        {path: '/', element:<Login/>},
        {path: '/home', element:<Home/>},
        {path: '*', element:<></>}
    ])
}