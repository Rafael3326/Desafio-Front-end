
import styled from "styled-components";



export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

   img{
       width: 516px;
       height: 344px;
       margin-top: 25px;
   }

   h2 {
       width: 366px;
       height: 36px;
       font-weight: 600;
       font-size: 24px;
       text-align:center;
       color: var(--grey-500);
   }

   p {
       width: 366px;
       height: 42px;
       font-weight: 400;
       font-size: 14px;
       text-align:center;
       color: var(--grey-300);
       line-height: 21px;
       margin-top: 9px;
   }

   button {

    width: 233px;
    height: 45px;
    border-radius: 8px;
    border: 1px solid var(--grey-300);
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 39px;
    text-align:center;
    justify-content: center;
    outline: 0;
    background-color: var(--background);
    color: var(--grey-300);
    font-weight: 500;
    line-height: 21px;
    font-size: 14px; 

        
   }

   @media(max-width:400px){

    h2 {
        font-size: 20px;

    }

    p {
        font-size: 12px;
        width: 340px;
    }

   }


`;