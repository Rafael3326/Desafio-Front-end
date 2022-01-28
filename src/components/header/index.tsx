import { Header } from './style'
import whiteLogoPokeImg from '../../assets/whiteLogoPoke.svg'
import logoutImg from '../../assets/logout.svg'
import LogoutWhiteImg from '../../assets/logoutWhiteImg.png'
import { Link } from "react-router-dom"
import { useAppContext } from "../../hooks/useAppContext"
import { useNavigate } from 'react-router-dom'


export const HeaderComponent = () =>{

   const {menu,updateMenuActived,theme} = useAppContext()
   const navigate=useNavigate()
  
    
    const Logout = () =>{

        localStorage.removeItem('token')
        sessionStorage.removeItem('atual')
        navigate('/')
   
    }

    const updateMenu= (menu:string) =>{
        updateMenuActived(menu) 
        sessionStorage.setItem('atual',menu)    
    }

    return (
        <Header menu={menu} tema={theme}>

            <img src={whiteLogoPokeImg} alt="logoPokemon" />

            <nav>
                <ul>
                    <li>
                       <Link to="/home" onClick={()=>updateMenu('home')} id="favorites">Favoritos</Link>
                    </li>

                    <li>
                        <Link to="/home/search" onClick={()=>updateMenu('home/search')} id="search"> Procurar</Link>
                    </li>

                    <li>
                        <Link to="/home/seeall" onClick={()=>updateMenu('home/seeall')} id="seeAll"> Ver todos</Link>
                    </li>
                </ul>
            </nav>

            <div className='logout' onClick={Logout}>
                <span>Sair </span>

                <img src={theme? logoutImg : LogoutWhiteImg}  alt="logout" />
            </div>

        </Header>
    )
}