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
        

      if(favoritesPokemons.length!==0) {
        let nomes =  favoritesPokemons.map(elemento=> elemento.name)
          if( nomes.includes(AtualPokemon.name)){
             updatePokemonActived(true)
           }
          else {
            updatePokemonActived(false) 
              }
          }
          const customStyles = {
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            },
          };


    return (
        
            <Container props={AtualPokemon.types.length}>

                <img id="heart" src={pokemonActived? FullHeartImg: EmptyHeartImg } alt="heart" />
                <img id="pokemon" src={AtualPokemon.sprites.front_default} alt={AtualPokemon.name} />
                <h4>{AtualPokemon.name}</h4>
                <p>ID: {AtualPokemon.id}</p>


                <div id="categoria">
                    <div id="typeone">{AtualPokemon.types[0].type.name}</div>
                    <div id="typetwo">{AtualPokemon.types.length==2 && AtualPokemon.types[1].type?.name }</div>
                </div>


                <button onClick={handleClick}>  Ver detalhes </button>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                overlayClassName={"react-modal"}
                >
                 <CardModel />

                
                </Modal>
            </Container>
        
    )
}

