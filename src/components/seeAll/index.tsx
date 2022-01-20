import { useAppContext } from "../../hooks/useAppContext"
import { Container } from "./styles"
import { CardListComponent } from "../CardList"



export const SeeAllComponent = () =>{

    const {category,updateCategory} = useAppContext()

    const HandleCategory = (name:string) =>{
        switch(name){
            case 'todos':
                return updateCategory({ todos: true,fire: false, eletric: false,water:false})
            case 'fire':
                return updateCategory({ todos: false,fire: true, eletric: false,water:false})
            case 'eletric':
                return  updateCategory({ todos: false,fire: false, eletric: true,water:false})
            case 'water':
                return  updateCategory({ todos: false,fire: false, eletric: false,water:true})
        }  

    }
    
   
    return (
        <>
        <Container category={category}>
           
           <div id="todos" onClick={()=>HandleCategory("todos")} >
               Todos
           </div>
           <div id="fire" onClick={()=>HandleCategory("fire")}>
               Fire
           </div>
           <div id="eletric" onClick={()=>HandleCategory("eletric")}>
               Eletric
           </div>
           <div id="water" onClick={()=>HandleCategory("water")}>
               Water
           </div>

        </Container>
        
        <CardListComponent/>
        </>
    )
   
} 