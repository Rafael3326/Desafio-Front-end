import { Header } from './style'
import whiteLogoPokeImg from '../../assets/whiteLogoPoke.svg'
import logoutImg from '../../assets/logout.svg'
import { Link } from "react-router-dom"
import { useAppContext } from "../../hooks/useAppContext"
import { useNavigate } from 'react-router-dom'
export const HeaderComponent = () =>{

    const {menu,updateMenuActived} = useAppContext()
   const navigate=useNavigate()

    const Logout = () =>{

        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <Header menu={menu}>

            <img src={whiteLogoPokeImg} alt="logoPokemon" />

            <nav>
                <ul>
                    <li>
                       <Link to="/home" onClick={()=>updateMenuActived('favorites')} id="favorites">Favoritos</Link>
                    </li>

                    <li>
                        <Link to="/home/search" onClick={()=>updateMenuActived('search')} id="search"> Procurar</Link>
                    </li>

                    <li>
                        <Link to="/home/seeall" onClick={()=>updateMenuActived('seeall')} id="seeAll"> Ver todos</Link>
                    </li>
                </ul>
            </nav>

            <div className='logout' onClick={Logout}>
                <span>Sair </span>

                <img src={logoutImg}  alt="logout" />
            </div>

        </Header>
    )
}