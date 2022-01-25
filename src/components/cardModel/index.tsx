import FullHeartImg from '../../assets/testeCora.svg'
import { Detalhes,Container,Imagens } from "./style"
import EmptyHeartImg from '../../assets/emptyheart.svg'
import LogoutModelImg from '../../assets/logoutModel.svg'
import { useAppContext } from "../../hooks/useAppContext"
import { useState } from 'react'

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
        ]
    }
}

export const CardModel = () =>{  
    
    const {
        closeModal,
        AtualPokemon,
        insertFavoritePokemon,
        deleteFavoritePokemon,
        idPokemon,favoritesPokemons,
        pokemonActived,
        updatePokemonActived,
        deletePokemon  
         } = useAppContext()

       


        if(favoritesPokemons.length!==0){
            let nomes =  favoritesPokemons.map(elemento=> elemento.name)
            if( nomes.includes(AtualPokemon.name)){
               updatePokemonActived(true) 
             }
              else {
               updatePokemonActived(false)
              }
        }

    const addPokemon = () =>{
      
      if(favoritesPokemons.length !==0) {

        let nomes =  favoritesPokemons.map(elemento=> elemento.name)

        if( nomes.includes(AtualPokemon.name)) {

            deleteFavoritePokemon(AtualPokemon)
            updatePokemonActived(false)
                if(favoritesPokemons.length===0) {
                    deletePokemon()
                }
            }
           else {
            insertFavoritePokemon(AtualPokemon)
           }
        } else {
            insertFavoritePokemon(AtualPokemon)
        }    

    }
    
  

    return (

        <div>
            {idPokemon !== -1 && <Container AtualPokemon={AtualPokemon} ativado={pokemonActived}>

        
                <Detalhes>
                    <h4>Detalhes</h4>
                    <img src={LogoutModelImg} alt="logoutButton" onClick={closeModal}/>
                </Detalhes>
                <div className='pokemonName'>{AtualPokemon.name}</div>
                <Imagens>
                    <img src={AtualPokemon.sprites.front_default}  alt='frontImage'/>
                    <img src={AtualPokemon.sprites.back_default}  alt='backImage'/>
                </Imagens>
                <div className='dimensions'>
                    <span>{(AtualPokemon.height)/10}m</span>
                    <span>{(AtualPokemon.weight)/10}kg</span>
                </div>
                <div id="categoria">
                    <div id="typeone">{AtualPokemon.types[0].type.name}</div>
                    <div id="typetwo">{AtualPokemon.types.length==2 && AtualPokemon.types[1].type?.name }</div>
                </div>
                <p>Estatisticas</p>
                <div className='states'>
                    <span>HP</span>
                    <div className='barra'> 
                        <div id='hp'></div>
                    </div>
                    <span>{AtualPokemon.stats[0].base_stat}</span>
                </div>
                <div className='states'>
                    <span>ATK</span>
                    <div className='barra'> 
                        <div id='atk'></div>
                    </div>
                    <span>{AtualPokemon.stats[1].base_stat}</span>
                </div>
                <div className='states'>
                    <span>DEF</span>
                    <div className='barra'> 
                        <div id='def'></div>
                    </div>
                    <span>{AtualPokemon.stats[2].base_stat}</span>
                </div>
                <div className='states'>
                    <span>S.ATK</span>
                    <div className='barra'> 
                        <div id='satk'></div>
                    </div>
                    <span>{AtualPokemon.stats[3].base_stat}</span>
                </div>
                <div className='states'>
                    <span>S.DEF</span>
                    <div className='barra'> 
                        <div id='sdef'></div>
                    </div>
                    <span>{AtualPokemon.stats[4].base_stat}</span>
                </div>
                <div className='states'>
                    <span>SPD</span>
                    <div className='barra'> 
                        <div id='spd'></div>
                    </div>
                    <span>{AtualPokemon.stats[5].base_stat}</span>
                </div>
                <button onClick={addPokemon}>{pokemonActived?'Remover dos favoritos':'Adicionar aos favoritos'}</button>
            </Container>}
        </div>  
    )
}


