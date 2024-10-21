import { useEffect, useState } from "react";

export default function Users(){
let [user, setUser] = useState([])

useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json() )
    .then( data => setUser(data) )
} , [])

return (
    <div className="eff">
        <h2>Total Users: {user.length}</h2>
        
    </div>
)

}