import React, { createContext, useState, useEffect } from "react";
import {api} from '../services/api'
import Modal from 'react-modal';

interface Pokemon {
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

const InitialState = {
    menu: 'favorites',
    category:'todos',
    modalIsOpen:false
}

interface PokeContext {
    menu:string
    category:string
    modalIsOpen:boolean
    pokemonActived:boolean
    login:string
    password:string
    idPokemon:number
    AtualPokemon:Pokemon
    AllPokemons: Pokemon[]
    favoritesPokemons:Pokemon[]
    updateMenuActived(menu:string): void;
    updatePokemon(obj:Pokemon):void;
    updateCategory(name:string): void;
    updateAllPokemons(obj:Pokemon[]):void
    openModal():void
    closeModal():void
    updateId(id:number):void
    insertFavoritePokemon(obj:Pokemon):void
    updatePokemonActived(bolean:boolean):void
    deleteFavoritePokemon(obj:Pokemon): void
    deletePokemon(): void
    updateLogin(login:string):void
    updatePassword(password:string):void
}

export const AppContext = createContext<PokeContext>({
    menu:'favorites',
    category: InitialState.category,
    modalIsOpen: false,
    pokemonActived:false,
    login:'',
    password:'',
    idPokemon:-1,
    favoritesPokemons: [] as Pokemon[],
    AtualPokemon:{} as Pokemon,
    AllPokemons:{} as Pokemon[],
    updatePokemon: () =>{},
    updateMenuActived: () =>{},
    updateCategory: () => {},
    updateAllPokemons: () => {},
    openModal: () => {},
    closeModal: () =>{},
    updateId: ()=>{},
    insertFavoritePokemon: () =>{},
    updatePokemonActived:() => {},
    deleteFavoritePokemon: () => {},
    deletePokemon: () => {},
    updateLogin:()=> {},
    updatePassword:()=>{}
})

export const AppProvider = ({children}: { children: JSX.Element}) =>{

    const[activado, setActivado]=useState<string>(InitialState.menu)
    const[categoryActived, setCategoryActived]=useState<string>(InitialState.category)
    const[pokemon,setPokemon]=useState<Pokemon>({} as  Pokemon)
    const[allPokemons, setAllPokemons]= useState<Pokemon[]>([] as Pokemon[])
    const[modalIsOpen,setIsOpen]=useState<boolean>(false)
    const[idPokemon,setId]=useState<number>(-1)
    const[favoritesPokemons,setFavoritesPokemons]=useState<Pokemon[]>([] as Pokemon[])
    const[pokemonActived,setPokemonActived]= useState<boolean>(false)
    const[login,setLogin]=useState<string>('')
    const[password,setPassword]=useState<string>('')

        function openModal() {
          setIsOpen(true);
          
        }
    
        function closeModal() {
          setIsOpen(false);
          setId(-1)
        }

    const  getAllPokemonsData= async () =>{
        let pokemons= await api.getAllPokemons()
        
        setAllPokemons(pokemons)   
     } 

     const  getAllTypePokemonData= async (type:string) =>{
        let pokemons= await api.getAllTypePokemon(type)
        let twentyPokemons= pokemons.slice(0,20)
        setAllPokemons(twentyPokemons)   
     } 

    useEffect(()=>{
  
           switch(categoryActived){
                case('todos'):

                getAllPokemonsData()
                    break;

                case('fire'):

                     getAllTypePokemonData('fire')
                     break;

               case('eletric'):
                     getAllTypePokemonData('electric')
                     break;

               case('water'):
                    getAllTypePokemonData('water')
                    break;
           }


    },[categoryActived])

    const updateLogin=(login:string)=>{
        setLogin(login)
    }

    const updatePassword=(password:string)=>{
        setPassword(password)
    }
  
    const updateMenuActived=(menu:string)=>{
        setActivado(menu)
    }
    const updatePokemonActived=(bolean:boolean)=>{
        setPokemonActived(bolean)
    }

    const updateCategory=(name:string)=>{
        setCategoryActived(name)
    }

    const updatePokemon = (obj:Pokemon) =>{
        setPokemon(obj)
    }
    const deletePokemon = () =>{
        setPokemon({} as Pokemon)
    }
    const insertFavoritePokemon = (obj:Pokemon) =>{
        let novo=[...favoritesPokemons]
        novo.push(obj)
        setFavoritesPokemons(novo)
    }

    const deleteFavoritePokemon = (obj:Pokemon) =>{
        let novo=[...favoritesPokemons]
       let newList= novo.filter(objeto=>objeto.name!==obj.name)
        setFavoritesPokemons(newList)
       
    }

    const updateId = (id:number) =>{
        const  getPokemonData = async (id:number) =>{
            let pokemon= await api.getPokemon(id)
            
            updatePokemon(pokemon)
            setId(id)
         }
        if( idPokemon !== -1){
            
            
        } else {
            getPokemonData(id)
        }
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
                modalIsOpen:modalIsOpen,
                idPokemon,
                favoritesPokemons,
                pokemonActived,
                login,
                password,
                updatePokemon,  
                updateMenuActived,
                updateCategory,
                updateAllPokemons,
                openModal,
                closeModal,
                updateId,
                insertFavoritePokemon,
                updatePokemonActived,
                deleteFavoritePokemon,
                deletePokemon,
                updateLogin,
                updatePassword
            }
        }>
          {children}
        </AppContext.Provider>
    )
}