import React from "react"

const Dogs = ({dogs, setShowDog}) => {

    const dogElements = dogs.map(dog => {
        const handleClick = () => {
            setShowDog(dog)
            
        }
        return (
        <span key={dog.name} onClick={handleClick}>{dog.name}</span>
        )
    })
    return (
        <div id="dog-bar">
            {dogElements}
        </div>
    )
}

export default Dogs