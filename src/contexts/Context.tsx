import React, { createContext, useState, useEffect } from "react";
import {api} from '../services/api'


interface Pokemon {
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

const InitialState = {
    menu: 'favorites',
    category:'todos'
}

interface MenuActivedContext {
    menu:string
    category:string
    AtualPokemon:Pokemon
    AllPokemons: Pokemon[]
    updateMenuActived(menu:string): void;
    updatePokemon(obj:Pokemon):void;
    updateCategory(name:string): void;
    updateAllPokemons(obj:Pokemon[]):void
}

export const AppContext = createContext<MenuActivedContext>({
    menu:'favorites',
    category: InitialState.category,
    AtualPokemon:{} as Pokemon,
    AllPokemons:{} as Pokemon[],
    updatePokemon: () =>{},
    updateMenuActived: () =>{},
    updateCategory: () => {},
    updateAllPokemons: () => {}
})

export const AppProvider = ({children}: { children: JSX.Element}) =>{
    const[activado, setActivado]=useState<string>(InitialState.menu)
    const[categoryActived, setCategoryActived]=useState<string>(InitialState.category)
    const[pokemon,setPokemon]=useState<Pokemon>({} as  Pokemon)
    const[allPokemons, setAllPokemons]= useState<Pokemon[]>([] as Pokemon[])

    useEffect(()=>{
       if(categoryActived){
        const  getPokemonData = async () =>{
            let pokemons= await api.getAllPokemons()
            setAllPokemons(pokemons)   
         }
         getPokemonData()

       } else {

       }
       


    },[categoryActived])
  
    const updateMenuActived=(menu:string)=>{
        setActivado(menu)
    }

    const updateCategory=(name:string)=>{
        setCategoryActived(name)
    }

    const updatePokemon = (obj:Pokemon) =>{
        setPokemon(obj)
    }

    const updateAllPokemons = (obj:Pokemon[]) =>{
        setAllPokemons(obj)
    }

    return (
        <AppContext.Provider value={ 
            {
                menu:activado, 
                category:categoryActived,
                AtualPokemon:pokemon,
                AllPokemons:allPokemons, 
                updatePokemon,  
                updateMenuActived,
                updateCategory,
                updateAllPokemons
            }
        }>
          {children}
        </AppContext.Provider>
    )
}