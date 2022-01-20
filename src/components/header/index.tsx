import { Header } from './style'
import whiteLogoPokeImg from '../../assets/whiteLogoPoke.svg'
import logoutImg from '../../assets/logout.svg'
import { Link } from "react-router-dom"
import { useAppContext } from "../../hooks/useAppContext"

export const HeaderComponent = () =>{

    const {menu,updateMenuActived} = useAppContext()
  

    const handleActivedMenu = (name:string) =>{
        switch(name){
            case 'favorites':
                return updateMenuActived({ favorites: true,search: false, seeAll: false})
            case 'search':
                return updateMenuActived({ favorites: false,search: true, seeAll: false})
            case 'seeAll':
                return  updateMenuActived({ favorites: false,search: false, seeAll: true})
        }  
    }

    return (
        <Header menu={menu}>

            <img src={whiteLogoPokeImg} alt="logoPokemon" />

            <nav>
                <ul>
                    <li>
                       <Link to="/home" onClick={()=>handleActivedMenu('favorites')} id="favorites">Favoritos</Link>
                    </li>

                    <li>
                        <Link to="/home/search" onClick={()=>handleActivedMenu('search')} id="search"> Procurar</Link>
                    </li>

                    <li>
                        <Link to="/home/seeall" onClick={()=>handleActivedMenu('seeAll')} id="seeAll"> Ver todos</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <span>Sair </span>

                <img src={logoutImg}  alt="logout" />
            </div>

        </Header>
    )
}