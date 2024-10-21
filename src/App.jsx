
import './App.css'
import Count from './Count'
import Friends from './Friends'
import Users from './Users'

function App() {

let handleClick = () => {
  alert("button clicked")
}

function handleClick2 (){
  alert("button 2 clicked")
}

function addNum (n1,n2){
  alert(n1+n2)
}

function greet(name){
  alert( name)
}

  return (
<>
      <h1>React</h1>

      <Friends></Friends>
<Users></Users>
<Count></Count>
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert("button 3 clicked")}}>Click Me 3</button>
      <button onClick={() => {addNum(5,8)}}>Add 5 , 8</button>
      <button onClick={ () => {greet('anny')} }>Greetings</button>
    </>
  )
}

export default App
