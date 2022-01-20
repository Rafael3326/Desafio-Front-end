
import styled from "styled-components";

interface MenuActived {
    favorites: boolean,
    search: boolean,
    seeAll: boolean
}



export const Header= styled.header< {menu:MenuActived}>`
 display: flex;
 justify-content: space-between;
 width: 100%;
 height: 50px;
 background: var(--yellow);
 align-items: center;

 

    img {
    width: 75px;
    height: 30px;
    margin-left: 138px;

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
                    color: var(--grey-500);
                    cursor: pointer;
                   
                }
            }
        }

    }

    div {
        margin-right: 137px;
        width: 89px;
        height: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #343232;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 400;
        color: #343232;
        padding: 9px;
        cursor: pointer;

        img {
            width: 9.6px;
            height: 9.6px;
            border: 1px solid #343232;
            margin-left: 0;
        }


    }

    #favorites {
        padding-bottom: ${menu=> menu.menu.favorites? '12px': ''};
        border-bottom: ${menu=> menu.menu.favorites? '2px solid black': ''};
    }
    #search {
        padding-bottom: ${menu=> menu.menu.search? '12px': ''};
        border-bottom: ${menu=> menu.menu.search? '2px solid black': ''};
    }
    #seeAll {
        padding-bottom: ${menu=> menu.menu.seeAll? '12px': ''};
        border-bottom: ${menu=> menu.menu.seeAll? '2px solid black': ''};
    }





`;