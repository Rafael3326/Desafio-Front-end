import styled from "styled-components";

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
    ],
    
}

export const Container = styled.div <{AtualPokemon:Pokemon, ativado:boolean}>`

width: 378px;
max-height: 639px;
margin-left: 35px;
background-color: white;
border-radius: 8px;

    .pokemonName {
        width: 330px;
        height: 36px;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: black;
        padding: 15px 24px;
    }
    .dimensions {
        display: flex;
        padding: 8px;

        span {
            width: 47px;
            height: 27px;
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: black;
            margin-left: 18px;
        }
    }
    
    #categoria {
        top: 30px;
        display: flex;
        margin-left: 10px;
        

        #typeone, #typetwo {
            width: 90px;
            height: 30px;
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            border-radius: 8px;
            text-align: center;
            align-items: center;
            display: flex;
        }
        #typeone {
            color: #343232;
            background-color: var(--yellow);
            padding: 2px;
            margin-left: 10px;
            justify-content: center;
        }
        #typetwo {
            color: white;
            justify-content: center;
            background-color: var(--red);
            padding: 2px;
            margin-left: 4px;
            display: ${AtualPokemon=>AtualPokemon.AtualPokemon.types.length ===2 ?'flex': 'none'};
            }
        } 
        p {
        width: 330px;
        height: 20px;
        font-weight: 600;
        font-size: 13px;
        line-height: 19px;
        color: #B8B8B8;  
        margin-left:24px;
        margin-top: 10px;
    }  
    .barra {
        width: 240px;
        height: 9px;
        background: #F3F3F3;
        border-radius: 8px;
        margin: auto;
    }

    #hp{
        border-radius: 8px;
        height: 9px;
        width:${AtualPokemon=>(AtualPokemon.AtualPokemon.stats[0].base_stat)/1.2}%;
        position: relative;
        background-color: var(--yellow);
    }
    #atk{
        border-radius: 8px;
        height: 9px;
        width:${AtualPokemon=>(AtualPokemon.AtualPokemon.stats[1].base_stat)/1.2}%;
        position: relative;
        background-color: var(--yellow);
    }
    #def{
        border-radius: 8px;
        height: 9px;
        width:${AtualPokemon=>(AtualPokemon.AtualPokemon.stats[2].base_stat)/1.2}%;
        position: relative;
        background-color: var(--yellow);
    }
    #satk{
        border-radius: 8px;
        height: 9px;
        width:${AtualPokemon=>(AtualPokemon.AtualPokemon.stats[3].base_stat)/1.2}%;
        position: relative;
        background-color: var(--yellow);
    }
    #sdef{
        border-radius: 8px;
        height: 9px;
        width:${AtualPokemon=>(AtualPokemon.AtualPokemon.stats[4].base_stat)/1.2}%;
        position: relative;
        background-color: var(--yellow);
    }
    #spd{
        border-radius: 8px;
        height: 9px;
        width:${AtualPokemon=>(AtualPokemon.AtualPokemon.stats[5].base_stat)/1.2}%;
        position: relative;
        background-color: var(--yellow);
    }
    button {
        width: 331px;
        height: 46px;
        margin-top: 20px;
        background-color: ${ativado=> ativado.ativado? ' var(--red)': 'var(--yellow)'};
        border: 0;
        outline: 0;
        border-radius: 8px;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #343232;
        cursor: pointer;
    }

    .states{
        display: flex;
        padding: 5px 10px;
    }

    @media(max-width:480px) {
        width: 340px;
        margin-left: 10px;

        button {
        width: 260px;

        }

        .barra {
        width: 180px;
        }

        .states{
        display: flex;
        padding: 2px 4px;
    }


    }

    @media(max-width:410px) {
        width: 280px;
    }

`;

export const Detalhes = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

    h4 {
        width: 253px;
        height: 24px;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #343232;
        margin-left: 24px;     
    }
    img {
        width: 12px;
        height: 12px;
        color: #343232;
        margin-right: 26px ;
        cursor: pointer;
    }
`;

export const Imagens = styled.div`
display: flex;
margin-left: 10px;
margin-top: 10px;
`;