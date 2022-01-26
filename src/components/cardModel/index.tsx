import { Detalhes,Container,Imagens } from "./style"
import LogoutModelImg from '../../assets/logoutModel.svg'
import { useAppContext } from "../../hooks/useAppContext"
import { useEffect, useState } from 'react'


type Props = {
    id:number
}

export const CardModel = ({id}:Props) =>{  
    
    const {
        closeModal,
        insertFavoritePokemon,
        deleteFavoritePokemon,
        AtualPokemon,
        idPokemon,favoritesPokemons,
        pokemonActived,
        updatePokemonActived,
        deletePokemon  
         } = useAppContext()

         
            
        
            if(favoritesPokemons.length!==0){  // verifica se tem pokemon na lista de favoritos

                let nomes =  favoritesPokemons.map(elemento=> elemento.name) // guarda os nomes dos pokemons da lista
                if( nomes.includes(AtualPokemon.name)){ // verifica se o pokemon atual esta na lista
                   updatePokemonActived(true) // se tiver, ele fica como ativado e recebe o coração
                 }
                else {
                   updatePokemonActived(false) // se não tiver, não fica ativado
                 }
            }


    const addPokemon = () =>{
      
        if (favoritesPokemons.length !== 0) {  // verifica se a lista de favoritos tem pokemon
            // se entrou aqui é pq tinha pokemon na lista
            let nomes = favoritesPokemons.map(elemento => elemento.name) // pega os nomes dos pokemons

            if (nomes.includes(AtualPokemon.name)) { // verifica se o atual pokemon ta na lista
                // se entrou aqui dentro é pq tava na lista
                deleteFavoritePokemon(AtualPokemon) // se ta na lista então, ele ta ativado e foi clicado pra retira-lo
                updatePokemonActived(false)  // depois de ter sido retirado, a mensagem deve voltar pro adicionar
                closeModal()
            }
            else {
                insertFavoritePokemon(AtualPokemon)
            }
            
        } else {
            insertFavoritePokemon(AtualPokemon)  // se não tiver pokemon, ele manda o atual
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


