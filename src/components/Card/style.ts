import styled from "styled-components";



export const Container = styled.div <{props:number}>`

 width: 165px;
 height: 236px;
 margin-left: 35px;
 background-color: white;
 border-radius: 8px;
    
    #heart {
        width: 26.13px;
        height: 22px;
        position: relative;
        top: -30px;
        left: 129px;

    }

    #pokemon {
        width: 72.92px;
        height: 79.2px;
        position: relative;
        top: 29px;
        left: 20px;

    }

    h4 {
        width: 144px;
        height: 27px;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: black;
        position: relative;
        top: 30px;
        left: 9px;
    }

    p {
        width: 144px;
        height: 20px;
        font-weight: 500;
        font-size: 13px;
        line-height: 19px;
        color: #8E8787;
        position: relative;
        top: 30px;
        left: 10px;
    }

    #categoria {
        position: relative;
        top: 30px;
        display: flex;
        margin-left: 10px;

        #typeone, #typetwo {
            width: 50.53px;
            height: 20px;
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            border-radius: 8px;  
        }

        #typeone {
            width: 44.36px;
            height: 15.33px;
            color: #343232;
            background-color: var(--yellow);
            text-align:center;
            padding: 2px;
        }

        #typetwo {
            width: 44.36px;
            height: 15.33px;
            color: white;
            background-color: var(--red);
            text-align:center;
            padding: 2px;
            margin-left: 4px;
            display: ${props=>props.props===2 ?'block': 'none'};
        }
    }

    button {
        position: relative;
        top: 50px;
        left: 10px;
        width: 147px;
        height: 32px;
        background-color: var(--yellow);
        border: 0;
        outline: 0;
        border-radius: 8px;
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        cursor: pointer;
    }
`;