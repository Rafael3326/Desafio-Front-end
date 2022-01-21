import { Container } from "./style"
import FullHeartImg from '../../assets/testeCora.svg'
import EmptyHeartImg from '../../assets/emptyheart.svg'
import { useAppContext } from "../../hooks/useAppContext"
import Modal from 'react-modal';
import {CardModel} from '../cardModel'


interface Pokemon {
    AtualPokemon: {
    id:number,
    name:string,
    sprites: {
        back_default:string,
        front_default: string
    },
  
    types:[
         {type: { name: string } },
         { type?: {name?: string } }
      ]
    }
}

export const CardComponent = ({AtualPokemon}:Pokemon) =>{  
    
    const {openModal,
      modalIsOpen,
      closeModal,
      updateId,
      idPokemon,
      pokemonActived,
      favoritesPokemons,
      updatePokemonActived
    } = useAppContext()

      
      const handleClick= () =>{
        updateId(AtualPokemon.id)
        openModal()  
      }
        
<<<<<<< HEAD
      if(favoritesPokemons.length!==0) {
        let nomes =  favoritesPokemons.map(elemento=> elemento.name)
          if( nomes.includes(AtualPokemon.name)){
             updatePokemonActived(true)
           }
          else {
            updatePokemonActived(false) 
              }
          }
=======
      let nomes =  favoritesPokemons.map(elemento=> elemento.name)

      if( nomes.includes(AtualPokemon.name)){
         updatePokemonActived(true)
         
       }
        else {
         updatePokemonActived(false)
         
        }
>>>>>>> 94982bf43546f60750b3332cf702a19a70323783

    return (
        
            <Container props={AtualPokemon.types.length}>
<<<<<<< HEAD
                <img id="heart" src={pokemonActived? FullHeartImg: EmptyHeartImg } alt="heart" />
                <img id="pokemon" src={AtualPokemon.sprites.front_default} alt={AtualPokemon.name} />
                <h4>{AtualPokemon.name}</h4>
                <p>ID: {AtualPokemon.id}</p>
=======
            <img id="heart" src={pokemonActived? FullHeartImg: EmptyHeartImg } alt="heart" />
            <img id="pokemon" src={AtualPokemon.sprites.front_default} alt={AtualPokemon.name} />
            <h4>{AtualPokemon.name}</h4>
            <p>ID: {AtualPokemon.id}</p>
>>>>>>> 94982bf43546f60750b3332cf702a19a70323783

                <div id="categoria">
                    <div id="typeone">{AtualPokemon.types[0].type.name}</div>
                    <div id="typetwo">{AtualPokemon.types.length==2 && AtualPokemon.types[1].type?.name }</div>
                </div>

<<<<<<< HEAD
                <button onClick={handleClick} > Ver detalhes </button>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                overlayClassName={"react-modal"}
                >
                {idPokemon !== -1  && <CardModel />}
=======
            <button onClick={handleClick} > Ver detalhes </button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName={"react-modal"}
            >
            {idPokemon !== -1  && <CardModel />}
>>>>>>> 94982bf43546f60750b3332cf702a19a70323783
                
                </Modal>
            </Container>
        
    )
}

