
import { Container } from "./styles"

import logoImg from '../../assets/logoPoke.png'
import pokelistLoginImg from '../../assets/pokelistLogin.png'



export const LoginComponent=() =>{


    return (
        <Container>
            <div>
                <img src={logoImg} alt="Logo-Pokemon" />
          
                <h2>Comece a coletar pokémons!</h2>
         
                <form>
                    <div id="firstInput">
                        <input id="email" type="email" placeholder="Email" /> 
                    </div>

                    <div id="secondInput">
                        <input id="senha" type="password" placeholder="Senha" />
                    </div>
                    
                    <button id="buttonSubmit">
                        Entrar
                    </button>
               
                </form>


            </div>

            <img id="pokeImg" src={pokelistLoginImg}  alt="pokemon-list"/>
        </Container>
    )
}