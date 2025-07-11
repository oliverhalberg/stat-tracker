
import { useRef } from 'react'
const Stat = ( { title, value, isNumeric, id, removeStat } ) => {

    const handleSubmit = (event) => {
        //do code in here to handle changing between layouts (CSS)
        let buttons = document.getElementsByName("typeSelect");

        for (let i = 0; i < buttons.length; i++){
            if (buttons[i].checked){
                if (buttons[i].id == ("numeric-" + id)){
                    document.getElementById("stat-" + id).classList.toggle("numeric");
                    document.getElementById("textBlock-" + id).style.display = 'none';
                    document.getElementById("numbersBlock-" + id).style.display = 'block';

                }
                else {
                    document.getElementById("stat-" + id).classList.toggle("numeric");
                    document.getElementById("numbersBlock-" + id).style.display = "none";
                    document.getElementById("textBlock-" + id).style.display = "block";

                }
            }
        }
    }

    //ref for tracking numeric values
    const numberVal = useRef()

    //function to increment and decrement numeric values by 1
    const incAndDec = (increment) => {
        let num = document.getElementById(('number-' + id)).value;
        if(increment){
            document.getElementById(('number-' + id)).value = (Number(num) + 1);
            console.log("incremented")
        }
        else{
            document.getElementById(('number-' + id)).value = (Number(num) - 1);
            console.log("decremented")
        }
    }

    // whenever values change, update the stats state in App.jsx using the id value
    // is that actually necessary? it seems to be saving the values on its own
    // if I want this to persist on page reload (cookies) then I would need to do this
    return (
        <div id={'stat-' + id} className={"statWidget" + (isNumeric ? " numeric" : "")}>
            <div>
                <button onClick={() => removeStat(id)}>X</button>
            </div>
            <div className='typeSelectForm'>
                <form onChange={(event) => handleSubmit(event)}> 
                    <input type="radio" id={"numeric-" + id} name="typeSelect" defaultChecked={isNumeric}></input>
                    <label htmlFor="numeric">Numeric</label><br />
                    <input type="radio" id={"text-" + id} name="typeSelect" defaultChecked={!isNumeric}></input>
                    <label htmlFor="text">Text</label> <br />
                </form>
            </div>
            <div className='widgetTitle'>
                <input type="text" placeholder={"Title will go here"}></input>
            </div>
            <div className='widgetNumbers' id ={"numbersBlock-" + id} style={{display: (isNumeric ? "block" : "none")}}>
                { /* Remove default buttons with CSS */}
                <button onClick={() => incAndDec(false)}>-</button>
                <input type="number" placeholder={"Number will go here"} ref={numberVal} id={'number-' + id}></input>
                <button onClick={() => incAndDec(true)}>+</button>
            </div>
            <div className='widgetText' id={"textBlock-" + id} style={{display: (isNumeric ? "none" : "block")}}>
                <input type="text" placeholder={"Text will go here"}></input>
            </div>
        </div>
    )
}

export default Stat