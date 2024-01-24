import React, {useState} from "react";
import './TextField.css';

export default function TextField(props) {

  const [text, setText] = useState('');
  const handleUpClick = () =>{
    
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLowClick = () =>{
    
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","success");
  }


  const handleOnChange = (event) =>{

    //event.target.value: used to change a value when the user wants to change the default value
    setText(event.target.value);
  }

    const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to ClipBoard!","success");
  }

  const handleClearOnClick = () =>{
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!","success");
  }
//   setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="mb-4">{props.heading}</h1>
      <div>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Please enter the details in this textarea
          </label>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? '#042743':'white',color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8">
    
          </textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>
            <span className="uppercase">
            Convert to Uppercase
            </span>
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleLowClick}>
            Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-4" onClick={handleClearOnClick}>
            Clear text
        </button>
        <button disabled={text.length===0} className="btn btn-info mx-2 my-4" onClick={handleCopy}>
            Copy text
        </button>
      </div>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes taken to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview here!!"}</p>
    </div>
    </>
    
  );
}
