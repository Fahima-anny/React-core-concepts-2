// import { useState } from "react"



// export default function Count(){


//     let [count,setCount] = useState(0)
//     function handleCounter(){
// const newCount = count + 1 ;
// setCount(newCount) ;
//     }


//     return (
//         <div className="counter">
//             <h3>Counter: {count}</h3>
//             <button onClick={handleCounter}>Add to counter</button>
//         </div>
//     )
// }


import { useState } from "react"
export default function Count(){

    let [count, setCount] = useState(0)
    function handleCounter() {
    let newCount = count + 1 ;
    setCount(newCount) ;
}
function reduce(){
    let newCount = count - 1 ;
    setCount(newCount)
}


let [countR,setCount2]  = useState(100) ;
function counter(){
    const newCount = countR - 1 ;
    setCount2(newCount) ;
}


let [player, setPlayer] = useState(11) ;
function addPlayer(){
const newPlayer = player + 1 ;
setPlayer(newPlayer) ;
}
function reducePlayer(){
    const newPlayer = player - 1 ;
    setPlayer(newPlayer) ;
}

    return (
        <div>
<div className="counter">
<h2>Players : {player}</h2>
<button onClick={addPlayer}>Add</button>
<button onClick={reducePlayer}>Reduce</button>
</div>

       <div className="counter">
       <h3>Counter: {count}</h3>
        <button onClick={handleCounter}>Add to count</button>
        <button onClick={reduce}>Reduce Counter</button>
       </div>
       <div className="counter">
       <h3>Reduce Counter: {countR}</h3>
       <button onClick={counter}>Counter (Reduce)</button>
       </div>
        </div>
    )
}





