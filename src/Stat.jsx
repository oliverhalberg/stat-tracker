
const Stat = ( { title, value, isNumeric, id } ) => {

    const handleSubmit = (event) => {
        //do code in here to handle changing between layouts (CSS)
    }

    // whenever values change, update the stats state in App.jsx using the id value
    return (
        <div style={{border: 'black solid 2px'}}>
            <form onSubmit={(event) => handleSubmit(event)}> 
                <input type="radio" id="numeric" name="typeSelect"></input>
                <label for="numeric">Numeric</label><br />
                <input type="radio" id="text" name="typeSelect"></input>
                <label for="text">Text</label> <br />
            </form>
            <input type="text" value={"Title will go here"}></input>
            <button>-</button>
            <input type="text" value={"Value will go here"}></input>
            <button>+</button>
        </div>
    )
}

export default Stat