import React,{useState} from "react"

const DogFilter = ({setDogs, allDogs}) => {

    const [on, setOn] = useState(false)
    const isOn = on ? "ON" : "OFF"

    const handleFilter = () => {
        setOn(!on)
        if (on) {
            
        }
    }

    return (
        <div id="filter-div">
            <button onClick={handleFilter} id="good-dog-filter">{`Filter good dogs: ${isOn}`}</button>
        </div>
    )

}

export default DogFilter

