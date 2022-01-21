import styled from "styled-components";


export const Container = styled.div`

margin-left: 138px;
margin-top: 38px;
display:grid;
grid-template-columns: repeat(5,165px);
gap:35px;

   @media( max-width:1130px){
    grid-template-columns: repeat(4,165px);
    margin-left: 120px;
   }
   @media( max-width:900px){
    grid-template-columns: repeat(3,165px);
    margin-left: 10%;
   }
   @media( max-width:700px){
    grid-template-columns: repeat(2,165px);
   }
   @media( max-width:480px){
    grid-template-columns: repeat(1,165px);
   }
   
`;