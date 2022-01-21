import { InputContainer, ContainerCard } from './styles'
import SearchImg from "../../assets/search.svg"
import { KeyboardEvent, useState } from "react"
import { api } from "../../services/api"
import { useAppContext } from "../../hooks/useAppContext"
import  { CardComponent } from "../Card"
import { CardModel } from '../cardModel'



export const SearchPokemonComponent = () =>{
    const[name,setName]=useState('')
    const {AtualPokemon, updatePokemon} = useAppContext()
   

    const  getPokemonData = async (name:string) =>{
        let pokemon= await api.getPokemon(name)
        console.log(pokemon)
        updatePokemon(pokemon)
     }

    const HandleKeyUp = (e:KeyboardEvent)=> {

     if(e.keyCode===13 && name.trim() !== '') {
         getPokemonData(name)
         setName('')  
        }
     
    }
  

    return (
        <>
            <InputContainer>
                <input type="text" 
                 placeholder="Procurar..."
                 value={name} onChange={e=>setName(e.target.value)} 
                 onKeyUp={HandleKeyUp}
                />
                <img src={SearchImg} alt="Pesquisar" />

            </InputContainer>
            

            <ContainerCard>
            {AtualPokemon.id !== undefined && <CardComponent AtualPokemon={AtualPokemon} />}
            </ContainerCard>
        
        </>
    )
}