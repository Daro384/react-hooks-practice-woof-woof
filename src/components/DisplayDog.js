import React from "react"

const DisplayDog = ({showDog, setShowDog}) => {

    const goodDog = (showDog.isGoodDog) ? "Good Dog!":"Bad Dog!"

    const handleGoodDog = () => {
        setShowDog({...showDog, isGoodDog:(!showDog.isGoodDog)})
    }
    
    if (!showDog) return <></>
    return (
        <>
        <img src={showDog.image} alt={showDog.name} />
        <h2>{showDog.name}</h2>
        <button onClick={handleGoodDog}>{goodDog}</button>
        </>
    )
}

export default DisplayDog