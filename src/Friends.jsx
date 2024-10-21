import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends(){

    let [friends,setFriends] = useState([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json() )
        .then( data => setFriends(data) )
    } , [] )


return (
    <div className="friends">
        <h2>Total Friends: {friends.length}</h2>
{
    friends.map( friend => <Friend friend={friend}></Friend> )
}
    </div>
)

}