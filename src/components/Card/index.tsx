import { Container } from "./style"
import FullHeartImg from '../../assets/testeCora.svg'
import EmptyHeartImg from '../../assets/emptyheart.svg'
import { useAppContext } from "../../hooks/useAppContext"
import Modal from 'react-modal';
import {CardModel} from '../cardModel'
import WhiteHeart from '../../assets/whiteheart.svg'
import { useEffect, useState } from 'react'


interface Pokemon {
  AtualPokemon: {
      id:number,
      name:string,
      height:number,
      weight:number,
      sprites: {
          back_default:string,
          front_default: string
      },
      stats:[
          { base_stat:number},
          { base_stat:number},
          { base_stat:number},
          { base_stat:number},
          { base_stat:number},
          { base_stat:number}
      ],
      types:[
          { type:{name: string } },
          { type?:{name?: string } }
      ],
      actived:boolean
  }
}

export const CardComponent = ({AtualPokemon}:Pokemon) =>{  
    
  const { openModal,
    theme,
    modalIsOpen,
    closeModal,
    updateId,
    favoritesPokemons,
    updatePokemonActived,
  } = useAppContext()



  const handleClick = () => {
    updateId(AtualPokemon.id)
    if (AtualPokemon.actived === true) {
      updatePokemonActived(true)
    } else {
      updatePokemonActived(false)
    }

    openModal()
  }

  if (favoritesPokemons.length !== 0) {

    if (favoritesPokemons.map(elemento => elemento.name).includes(AtualPokemon.name)) {
      AtualPokemon.actived = true

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
        
            <Container props={AtualPokemon.types.length} tema={theme}>

                <img id="heart" src={theme ? (AtualPokemon.actived? FullHeartImg: EmptyHeartImg):
                  (AtualPokemon.actived? WhiteHeart: EmptyHeartImg)  } alt="heart" />
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
                 <CardModel ativado={AtualPokemon.actived} />

                </Modal>
            </Container>
        
    )
}

