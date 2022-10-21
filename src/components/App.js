import React,{useState, useEffect} from "react"
import Dogs from "./Dogs"
import DisplayDog from "./DisplayDog"
import DogFilter from "./DogFilter"

const api = "http://localhost:3001/pups"

function App() {

  let allDogs = []
  const [dogs, setDogs] = useState([])
  const [showDog, setShowDog] = useState("")

  useEffect(() => {
    fetch(api)
    .then(resp => resp.json())
    .then(data => {
      setDogs(data)
      allDogs = data
    })
  }, [])

  return (
    <div className="App">
      <DogFilter setShowDog={setShowDog} allDogs={allDogs}/>
      <Dogs dogs={dogs} setShowDog={setShowDog}/>
      <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
              <DisplayDog showDog={showDog} setShowDog={setShowDog}/>
            </div>
        </div>
      
    </div>
  );
}

export default App;
