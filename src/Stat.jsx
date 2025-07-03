
const Stat = ( { title, value, isNumeric, id, removeStat } ) => {

    const handleSubmit = (event) => {
        //do code in here to handle changing between layouts (CSS)
    }

    // whenever values change, update the stats state in App.jsx using the id value
    // is that actually necessary? it seems to be saving the values on its own
    // if I want this to persist on page reload (cookies) then I would need to do this
    return (
        <div style={{border: 'black solid 2px'}}>
            <div>
                <button onClick={() => removeStat(id)}>X</button>
            </div>
            <div>
                <form onSubmit={(event) => handleSubmit(event)}> 
                    <input type="radio" id="numeric" name="typeSelect"></input>
                    <label for="numeric">Numeric</label><br />
                    <input type="radio" id="text" name="typeSelect"></input>
                    <label for="text">Text</label> <br />
                </form>
            </div>
            <div>
                <input type="text" placeholder={"Title will go here"}></input>
            </div>
            <div>
                { /* Remove default buttons with CSS, hook buttons up to functions in this component */}
                <button>-</button>
                <input type="number" placeholder={"Number will go here"}></input>
                <button>+</button>
            </div>
            <div>
                <input type="text" placeholder={"Text will go here"}></input>
            </div>
        </div>
    )
}

export default Stat