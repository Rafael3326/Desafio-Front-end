import styled from "styled-components";



export const Container = styled.div`
display: flex;
flex-direction: column;

    h2 {
    width: 400px;
    height: 36px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #343232;
    margin-top: 38px;
    margin-left: 138px;
    }

`;


export const CardList= styled.div`
   margin-left: 10%;
   margin-top: 38px;
   display:grid;
   grid-template-columns: repeat(5,165px);
   gap:35px;

   @media( max-width:1130px){
    grid-template-columns: repeat(4,165px);
   }
   @media( max-width:900px){
    grid-template-columns: repeat(3,165px);
   }
   @media( max-width:700px){
    grid-template-columns: repeat(2,165px);
   }
   @media( max-width:480px){
    grid-template-columns: repeat(1,165px);
   }
   
`;

