
import styled from "styled-components";



export const Container = styled.div`
display: flex;

  div{
    display:flex;
    flex-direction: column;

    img {
        width: 206px;
        height: 76px;
        margin-top: 33px;
        margin-left: 138px;   
    }

    h2 {
        font-weight: 700;
        margin-top: 79px;
        margin-left: 138px;
        line-height: 54px;
        font-size: 36px;
        width: 365px;
        height: 108px;
    } 

    form {
        div {
        width: 365px;
        height: 54px;
        border-radius: 8px;
        border: 1px solid var(--grey-300) ;
        margin-left: 138px;
        align-items: center;
        justify-content: center;
    }

    }

     #buttonSubmit {
        background-color: var(--yellow);
        height: 54px;
        width: 365px;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        margin-top: 33px;
        margin-left: 138px;
        font-weight: 500;
        font-size: 16px;
        border: 0;
    }

    #email, #senha {
        height: 18px;
        line-height: 18px;
        font-weight: 400;
        font-size: 12px;
        color: var(--grey-300);
        background-color: var(--background);
        outline: 0;
        border: 0;
        width: 270px;
    }

    #firstInput {
        margin-top: 48px;
    }

    #secondInput {
        margin-top: 15px;
    }

  }

  #pokeImg{
    position: fixed;
    background-size: cover;
    left:557px;
   }
`;

