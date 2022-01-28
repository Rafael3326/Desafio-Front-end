import { Detalhes,Container,Imagens } from "./style"
import LogoutModelImg from '../../assets/logoutModel.svg'
import { useAppContext } from "../../hooks/useAppContext"
import { useEffect, useState } from 'react'


type Props = {
    ativado:boolean
}

export const CardModel = ({ativado}:Props) =>{  
    
    const {
        closeModal,
        insertFavoritePokemon,
        deleteFavoritePokemon,
        AtualPokemon,
        theme,
        AllPokemons,
        idPokemon,favoritesPokemons,
        pokemonActived,
        updateAllPokemons,
        deletePokemon  
         } = useAppContext()
         
         const [favoritos,setFavoritos]=useState<number[]>([])

         useEffect(()=>{
            setFavoritos(favoritesPokemons.map(pokemon=>pokemon.id))
            let todos = AllPokemons.map(pokemon=>{
                 
                if(favoritos.includes(pokemon.id)){

                    return {...pokemon, actived:true}
                }
                return {...pokemon, actived:false}
                }) 

                updateAllPokemons(todos)                            

         },[favoritesPokemons])
    
    const addPokemon = () => { 

        if (favoritesPokemons.length !== 0) { 
            if (favoritesPokemons.map(elemento => elemento.name).includes(AtualPokemon.name)) { 
                AtualPokemon.actived = true
                deleteFavoritePokemon(AtualPokemon) 
                deletePokemon()
                closeModal()
            }
            else {
                AtualPokemon.actived = true
                insertFavoritePokemon({ ...AtualPokemon, actived: true })
            }
        }
        else {  
            AtualPokemon.actived = true
            insertFavoritePokemon({ ...AtualPokemon, actived: true })
        }
    }

    const closeModalAtual = () =>{
        closeModal()
        deletePokemon()
    }
    
    return (

        <div>
            {idPokemon !== -1 && <Container tema={theme} AtualPokemon={AtualPokemon} actived={pokemonActived}>
                <Detalhes>
                    <h4>Detalhes</h4>
                    <img src={LogoutModelImg} alt="logoutButton" onClick={closeModalAtual}/>
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
                <button onClick={addPokemon}>{ pokemonActived ?'Remover dos favoritos':'Adicionar aos favoritos'}</button>
            </Container>}  
        </div>  
    )
}


