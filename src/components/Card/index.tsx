import { Container } from "./style"
import CoracaoImg from '../../assets/testeCora.svg'
import { useAppContext } from "../../hooks/useAppContext"

interface Pokemon {// componente que recebe os dados do pokemon
    AtualPokemon: {
    id:number,
    name:string,
    sprites: {
        back_default:string,
        front_default: string
    },
  
    types:[
         type:{name: string } 
    ]
    }
}

export const CardComponent = ({AtualPokemon}:Pokemon) =>{  
  

    return (
        
            <Container>
            <img id="heart" src={CoracaoImg} alt="heart" />
            <img id="pokemon" src={AtualPokemon.sprites.front_default} alt={AtualPokemon.name} />
            <h4>{AtualPokemon.name}</h4>
            <p>ID: {AtualPokemon.id}</p>

            <div id="categoria">
                <div id="eletrico">{AtualPokemon.types[0].name}</div>
                <div id="fire">Fire</div>
            </div>

            <button > Ver detalhes  </button>
            </Container>
        
    )
}