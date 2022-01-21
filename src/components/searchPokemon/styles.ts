import styled from "styled-components";


export const InputContainer=  styled.div`
background-color: white;
width: 765px;
height: 54px;
border: 1px solid #DEE0E3;
box-sizing: border-box;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;

margin: 29px 25% 39px 25%;


    img {

        width: 17px;
        height: 17px;
        margin-right: 19px;
    }

    input {
        background-color: white;
        outline: 0;
        border: 0;
        margin-left: 20px;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
    }

    @media(max-width:1040px){
        width: 500px;  
    }

    @media(max-width:680px){
        width: 300px;  
    }
    @media(max-width:420px){
        width: 250px;  
    }

   

`;
export const ContainerCard= styled.div`
margin-left: 338px;

    @media(max-width:680px) {

        margin-left: 20%;
    }

`;

