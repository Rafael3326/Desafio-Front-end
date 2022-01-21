import axios from "axios";

type Props ={
    name:string
    url:string
}
type PropsType = {
    pokemon: {
        name:string
        url:string
    }
}

const axiosInstance = axios.create({
    baseURL:'https://pokeapi.co/api/v2/'
})

export const api = {

    getPokemon: async (pokemon:string| number) =>{

        let response = await axiosInstance.get(`pokemon/${pokemon}`)
        return response.data
    },
    getAllPokemons: async () =>{

        let response = await axiosInstance.get('pokemon/')

        let resultado = await response.data.results.map( async(objeto:Props)=> { 

                let response = await axiosInstance.get(`pokemon/${objeto.name}`)
                return response.data
            })
      const PokeList =  Promise.all(resultado).then(pokemons=> pokemons)
        
        return PokeList
    },
    getAllTypePokemon: async (type:string) =>{
        
        let response = await axiosInstance.get(`type/${type}`)
       
        const resultado =   response.data.pokemon.map( async(objeto:PropsType)=> { 

            let response = await axiosInstance.get(`pokemon/${objeto.pokemon.name}`)
            return response.data
        })
        const PokeTypeList = Promise.all(resultado).then(pokemons => pokemons)

        return PokeTypeList
    },

}


