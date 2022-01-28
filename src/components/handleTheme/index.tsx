
import { Container } from "./styles"
import  BlackTheme from '../../assets/backTheme.svg'
import { useAppContext } from "../../hooks/useAppContext"
import LightTheme from '../../assets/lightTheme.svg'


export const HandleTheme = () =>{

    const {theme,HandleTheme}=useAppContext()
    const HandleThemeApp =() =>{
        HandleTheme()
    }
    console.log(theme)

return <Container tema={theme}>
            <div className='theme' onClick={HandleThemeApp}>
                <img src={theme ? BlackTheme:LightTheme} alt="themeType" />
                <span>{theme ?'Tema escuro':'Tema claro'}</span>
            </div> 
    </Container>

}