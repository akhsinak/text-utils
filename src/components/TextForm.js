import React, {useState} from 'react';

export default function TextForm(props) {
  function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const handleUpClick = ()=> {
              console.log("Uppercase  was clicked");
              let newText = text.toUpperCase();
              setText(newText);
              props.showalert("Converted to uppercase","success");
  }
  const handleOnChange = (event)=> {
              console.log("change in textfield detected");
              setText(event.target.value)
  }
  const handleLowClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase","success");

  }
  const handlecapitalize = ()=>{
    let newText = capitalize(text);
    setText(newText);
    props.showalert("Capitalized","success");

  }

  const handleCopy = ()=>{
    console.log("copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text is copied","success");

  }

  const handleExtraspaces = ()=>{
    console.log("removed extra spaces");
    let newtxt = text.split(/[ ]+/);
    setText(newtxt.join(" "));
    props.showalert("Extra spaces removed","success");

  }
  const [text,setText] = useState('')
  // text = "hello";
  // SetText("Hello");


  return (
    <>
    <div>
        <h3 className='my-3' style={{color:props.mode ==='light'?'black':'white'}}>{props.title}</h3>
        <div className = "my-2">
          <textarea className="form-control" value = {text} id="myBox" rows="10" onChange={handleOnChange} style={{color:props.mode ==='light'?'black':'white',backgroundColor:props.mode ==='dark'?props.theme:'white'}}>  </textarea>
        </div>
        <button className={`btn btn-${props.mode ==='dark'?'primary':'warning'} mx-2 my-2`} onClick={handleUpClick}>UPPERCASE</button>
        <button className={`btn btn-${props.mode ==='dark'?'secondary':'success'} mx-2 my-2`} onClick={handleLowClick}>lowercase</button>
        <button className={`btn btn-${props.mode ==='dark'?'light':'light'} mx-2 my-2`} onClick={handlecapitalize}>Capitalize</button>
        <button className={`btn btn-${props.mode ==='dark'?'success':'secondary'} mx-2 my-2`} onClick={handleCopy}>Copy</button>
        <button className={`btn btn-${props.mode ==='dark'?'warning':'primary'} mx-2 my-2`} onClick={handleExtraspaces}>Remove Extra Spaces</button>
        {/* <button className="btn btn-warning mx-2" onClick={handlecapitalize}>Capitalize</button>
        <button className="btn btn-light mx-2" onClick={handlecapitalize}>Capitalize</button>
        <button className="btn btn-dark mx-2" onClick={handlecapitalize}>Capitalize</button>
        <button className="btn btn-info mx-2" onClick={handlecapitalize}>Capitalize</button>
        <button className="btn btn-primary mx-2" onClick={handlecapitalize}>Capitalize</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode ==='light'?'black':'white'}} >
      <h3>Summary Of The Text</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h3 className="my-1">Preview</h3>
      <p>{text.length>0?text:"Null"}</p>


    </div>
    </>
  )
}