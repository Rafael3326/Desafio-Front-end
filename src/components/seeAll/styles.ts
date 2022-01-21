import styled from "styled-components";




export const Container = styled.div<{category:string}>`
display: flex;
margin-left: 138px;
margin-top: 40px;
text-align: center;

    div {
        width: 145px;
        height: 42px;
        border-radius: 8px;
        background: var(--yellow);
        font-weight: 500;
        font-size: 12px;
        line-height: 18px; 
        padding:  12px 15px;
        align-items: center;
        margin-right: 8px  ;
        border: 1px solid #6B6868;
        cursor: pointer;
    }

    #todos{
        background: ${category=> category.category ==='todos' ? "var(--yellow)":'var(--background)'};
    }
    #fire{
        background: ${category=> category.category ==='fire'? "var(--yellow)":'var(--background)'};
    }
    #eletric{
        background: ${category=> category.category ==='eletric' ? "var(--yellow)":'var(--background)'};
    }
    #water{
        background: ${category=> category.category === 'water' ? "var(--yellow)":'var(--background)'};
    }

    @media(max-width:800px){
        margin-left: 80px;
        div {
        width: 110px;
        height: 38px;
        font-size: 10px;
        line-height: 16px; 
        padding:  8px 12px;
        align-items: center;
        margin-right: 8px  ;
        border: 1px solid #6B6868;
        cursor: pointer;

        }
    }
    @media(max-width:600px){
        margin-left: 20px;
        div {
        width: 110px;
        height: 38px;
        font-size: 10px;
        line-height: 16px; 
        padding:  8px 12px;
        align-items: center;
        margin-right: 8px  ;
        border: 1px solid #6B6868;
        cursor: pointer;

        }
    }

`;