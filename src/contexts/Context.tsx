import React, { createContext, useState, useEffect } from "react";
import {api} from '../services/api'


interface MenuActived {
    favorites: boolean,
    search: boolean,
    seeAll: boolean
    
}

interface CategoryActived {
    todos: boolean,
    fire: boolean,
    eletric:boolean,
    water:boolean
}

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
    menu: {
    favorites: true,
    search: false,
    seeAll: false
    },

    category: {
    todos: true,
    fire: false,
    eletric:false,
    water:false
    }  
}

interface MenuActivedContext {
    menu:MenuActived
    category:CategoryActived
    AtualPokemon:Pokemon
    AllPokemons: Pokemon[]
    updateMenuActived(obj:MenuActived): void;
    updatePokemon(obj:Pokemon):void;
    updateCategory(obj:CategoryActived): void;
    updateAllPokemons(obj:Pokemon[]):void

}

export const AppContext = createContext<MenuActivedContext>({
    menu: InitialState.menu,
    category: InitialState.category,
    AtualPokemon:{} as Pokemon,
    AllPokemons:{} as Pokemon[],
    updatePokemon: () =>{},
    updateMenuActived: () =>{},
    updateCategory: () => {},
    updateAllPokemons: () => {}
})


export const AppProvider = ({children}: { children: JSX.Element}) =>{
    const[activado, setActivado]=useState<MenuActived>(InitialState.menu)
    const[categoryActived, setCategoryActived]=useState<CategoryActived>(InitialState.category)
    const[pokemon,setPokemon]=useState<Pokemon>({} as  Pokemon)
    const[allPokemons, setAllPokemons]= useState<Pokemon[]>([] as Pokemon[])

    useEffect(()=>{
        console.log(allPokemons)

        const  getPokemonData = async () =>{
            let pokemons= await api.getAllPokemons()
            setAllPokemons(pokemons)   
         }

         getPokemonData()

    },[])
  
    const updateMenuActived=(obj:MenuActived)=>{
        setActivado(obj)
    }

    const updateCategory=(obj:CategoryActived)=>{
        setCategoryActived(obj)
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
        }
            >
          {children}
        </AppContext.Provider>
    )
}