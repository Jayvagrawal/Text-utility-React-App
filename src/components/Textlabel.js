import React, {useState} from 'react'


const Textlabel = (props) => {
    const [text, setText] = useState('')

    const handleUpperCase = () => {
        setText(text.toUpperCase())
        if (text.length > 0) {
        props.setAlert('Text Changed to upper case', 'success')}
        else{
            props.setAlert('Some text must be there', 'warning')
        }
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase())
        if (text.length > 0) {
            props.setAlert('Text Changed to Lower case', 'success')}
            else{
                props.setAlert('Some text must be there', 'warning')
            }
    }

    const handleOnChange = (event) => {
        console.log("Form On changed")
        setText(event.target.value)
    }


    const checkEmptyString = (string) => {
        
        string = string.split(" ")
        
        if (string.length > 0){
            
            function checkEmpty(element) {
                return element !== '';
              }
              
            const newArray = string.filter(checkEmpty)
            return newArray.length
            
        }
        return 0

    }

    return (<>
    <div className="container" style={{color: props.mode === 'dark' ? 'white': '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" 
            style={{backgroundColor: props.mode === 'dark' ? 'grey': 'white', 
        color: props.mode === 'dark' ? 'white': '#042743'}} 
            value={text} onChange={handleOnChange} id="myBox" row="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" 
        style={props.buttonColor} onClick={handleUpperCase}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" style={props.buttonColor} 
        onClick={handleLowerCase}>Conver To Lower case</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white': '#042743'}}>
        <h1>Your text Summary</h1>
        <p>{checkEmptyString(text)} words {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: 'Enter The text on above text box'}</p>

    </div>
    </>
    )
}


export default Textlabel