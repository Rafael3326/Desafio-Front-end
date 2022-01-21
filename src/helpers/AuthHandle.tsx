


export const isLogged = () =>{
     let token= localStorage.getItem('token')

     return (token) ? true : false
}