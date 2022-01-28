import styled from "styled-components";



export const Container = styled.div<{ tema: boolean }>`

.theme{

position: fixed;
top: 600px;
left: 20px;
width: 100px;
height: 31px;
border: 1px solid #4B4B4D;
box-sizing: border-box;
border-radius: 22px;
cursor: pointer;

    img {
        top: 2px;
        margin-left: 10px;
        position: relative;
        width: 12px;
        height: 13px;
    }

    span {
        position: relative;
        margin-left: 5px;
        width: 80px;
        height: 18px;
        font-weight: 500;
        font-size: 10px;
        line-height: 16px;
        color: ${tema => tema.tema ? 'black' : 'white'};
    
    }
}

    @media(max-width:850px){

        .theme{
        left: 10px;
        width: 90px;
        border-radius: 20px;
       
            img {
                top: 2px;
                margin-left: 8px;
            }

            span {
                margin-left: 5px;
                width: 70px;
                font-size: 8px;
                line-height: 14px;
            }
        }

    }

    @media(max-width:670px){

    .theme{
    left: 2px;
    width: 75px;
    border-radius: 20px;

        img {
            top: 2px;
            margin-left: 5px;
        }

        span {
            margin-left: 2px;
            width: 60px;
            font-size: 8px;
            line-height: 10px;
        }
    }

    }
`;