import FullHeartImg from '../../assets/testeCora.svg'
import { Detalhes,Container,Imagens } from "./style"
import EmptyHeartImg from '../../assets/emptyheart.svg'
import LogoutModelImg from '../../assets/logoutModel.svg'
import { useAppContext } from "../../hooks/useAppContext"
import { useEffect } from 'react'

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
    const {closeModal,AtualPokemon,updateFavoritePokemon,idPokemon,favoritesPokemons} = useAppContext()

    const addPokemon = () =>{
        
        updateFavoritePokemon(AtualPokemon)
        console.log(favoritesPokemons)
        
    }
    
  

    return (
                <div>
                    {idPokemon !== -1 && <Container AtualPokemon={AtualPokemon}>
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
                <button onClick={addPokemon}>Adicionar aos favoritos</button>
            </Container>}
                </div>  
    )
}


{/* <img id="heart" src={EmptyHeartImg} alt="heart" />
<img id="pokemon" src={AtualPokemon.sprites.front_default} alt={AtualPokemon.name} />
<h4>{AtualPokemon.name}</h4>
<p>ID: {AtualPokemon.id}</p>

<div id="categoria">
    <div id="typeone">{AtualPokemon.types[0].type.name}</div>
    <div id="typetwo">{AtualPokemon.types.length==2 && AtualPokemon.types[1].type?.name }</div>
</div>

<button > Ver detalhes  </button> */}