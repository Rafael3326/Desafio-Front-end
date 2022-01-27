
import { Container } from "./styles"
import  BlackTheme from '../../assets/backTheme.svg'



export const HandleTheme = () =>{

return <Container>
            <div className='theme'>
                <img src={BlackTheme} alt="" />
                <span>Tema Escuro</span>
            </div> 
    </Container>

}