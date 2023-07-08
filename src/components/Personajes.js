export default function Personajes(props) {
    const { characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null);
    }
//console.log(characters);
    return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacters}>Volver al Home</span>
        <div className="container-characters">
            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img className="img-characters" src={character.image} alt={character.name} /> 
                    </div>

                    <div>
                        <h3>{ character.name }</h3>
                        <h6>
                            {character.house=== "Slytherin" ? (
                                <>
                                    <span className="slytherin" />
                                    Slytherin
                                </>
                            ) : (
                                <>
                                </>
                            )}


                            {character.house=== "Gryffindor" ? (
                                <>
                                    <span className="gryffindor" />
                                    Gryffindor
                                </>
                            ) : (
                                <>

                                </>
                            )}

                            {character.house=== "Hufflepuff" ? (
                                <>
                                    <span className="hufflepuff" />
                                    Hufflepuff
                                </>
                            ) : (
                                <>

                                </>
                            )}

                            {character.house=== "Ravenclaw" ? (
                                <>
                                    <span className="ravenclaw" />
                                    Ravenclaw
                                </>
                            ) : (
                                <>

                                </>
                            )}

                        </h6>
                        <p>
                            <span className="text-grey">Patronus: </span>
                            <span>{character.patronus}</span>
                        </p>
                        <p>
                            <span className="text-grey">Specie: </span>
                            <span>{character.species}</span>
                        </p>

                        <p>
                            <span className="text-grey">Gender: </span>
                            <span>{character.gender}</span>
                        </p>
                        <p>
                            <span className="text-grey">Eye Colour: </span>
                            <span>{character.eyeColour}</span>
                        </p>
                        <p>
                            <span className="text-grey">Hair Colour: </span>
                            <span>{character.hairColour}</span>
                        </p>
                        <p>
                            <span className="text-grey">Date Of Birth: </span>
                            <span>{character.dateOfBirth}</span>
                        </p>
                        <p>
                            <span className="text-grey">Year Of Birth: </span>
                            <span>{character.yearOfBirth}</span>
                        </p>
                    </div>
                
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetCharacters}>Volver al Home</span>
    </div>
  )
}
