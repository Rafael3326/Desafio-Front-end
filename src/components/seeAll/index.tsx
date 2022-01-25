import { useAppContext } from "../../hooks/useAppContext"
import { Container } from "./styles"
import { CardListComponent } from "../CardList"



export const SeeAllComponent = () =>{

    const {category,updateCategory} = useAppContext()
    sessionStorage.setItem('atual','home/seeall')
      
   
    return (
        <>
        <Container category={category}>
           
           <div id="todos" onClick={()=>updateCategory('todos')} >
               Todos
           </div>
           <div id="fire" onClick={()=>updateCategory('fire')}>
               Fire
           </div>
           <div id="eletric" onClick={()=>updateCategory('eletric')}>
               Eletric
           </div>
           <div id="water" onClick={()=>updateCategory('water')}>
               Water
           </div>

        </Container>
        
        <CardListComponent  />
        </>
    )
   
} 