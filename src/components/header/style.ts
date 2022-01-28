
import styled from "styled-components";






export const Header= styled.header< {menu:string,tema:boolean}>`
 display: flex;
 justify-content: space-between;
 width: 100%;
 height: 50px;
 background: ${tema=> tema.tema ? 'var(--yellow)': 'var(--grey-400)'} ;
 align-items: center;

 

    img {
    width: 75px;
    height: 30px;
    margin-left: 10%;

    }

    nav {

        ul {
            display: flex;
            

            li {

                list-style: none;
                margin-right: 54px;
                

                a {
                    text-decoration: none;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 18px;
                    color:${tema=>tema.tema? 'var(--grey-500)':'var(--grey-100)'};
                    cursor: pointer; 

                }
            }
        }

    }

    .logout {
        margin-right: 10%;
        width: 89px;
        height: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: ${tema=> tema.tema? '1px solid #343232': '1px solid var(--grey-100)'};
        border-radius: 8px;
        font-size: 12px;
        font-weight: 400;
        color: #343232;
        padding: 9px;
        cursor: pointer;

        span {
            color: ${tema=> tema.tema? 'black':'white'};
        }

        img {
            width: 9.6px;
            height: 9.6px;      
            margin-left: 0;
            color: white;
        }


    }

    #favorites {
        padding-bottom: ${()=> sessionStorage.getItem('atual') === 'home' ? '12px': ''};

        border-bottom: ${tema => !tema.tema ?  
        (sessionStorage.getItem('atual') === 'home' ? `2px solid yellow`: ''): 
        (sessionStorage.getItem('atual') === 'home' ? `2px solid black`: '') };

        color: ${tema => !tema.tema ?  
        (sessionStorage.getItem('atual') === 'home' ? 'yellow':'var(--grey-100)'): 'black' }
      
    }
    #search {
        padding-bottom: ${()=> sessionStorage.getItem('atual') === 'home/search' ? '12px': ''};

        border-bottom: ${tema => !tema.tema ?  
        (sessionStorage.getItem('atual') === 'home/search' ? `2px solid yellow`: ''): 
        (sessionStorage.getItem('atual') === 'home/search' ? `2px solid black`: '') };
        color: ${tema => !tema.tema ? 
         (sessionStorage.getItem('atual') === 'home/search' ? 'yellow':'var(--grey-100)'): 'black' }
    }
    #seeAll {
        padding-bottom: ${()=> sessionStorage.getItem('atual') === 'home/seeall'? '12px': ''};
        
        border-bottom: ${tema => !tema.tema ?  
        (sessionStorage.getItem('atual') === 'home/seeall' ? `2px solid yellow`: ''): 
        (sessionStorage.getItem('atual') === 'home/seeall' ? `2px solid black`: '') };
        color: ${tema => !tema.tema ?  
        (sessionStorage.getItem('atual') === 'home/seeall' ? 'yellow':'var(--grey-100)'): 'black' }
    }
    



    @media(max-width:620px){

        img {
            display: none;
        }
        
        nav {

            ul {

                li {
                    margin-right: 20px;
                    margin-left: 20px;

                }
            }
        }
    }

     @media(max-width:420px){
        
        img {
            display: none;
        }
    
        nav {
    
            ul {
        
                li {
                    margin-right: 10px;
                    margin-left: 10px;

                    a {
                        font-size: 10px;
                        line-height: 14px;

                    }
            
                }
            }
        }
    }

    .logout {
        width: 60px;
        height: 28px;
        font-size: 10px;
        margin-right: 40px;
        padding: 5px;

    }





`;