import React, {useState} from 'react';

export default function TextForm(props) {

  let handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  let handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  let handleChange = (event) => {setText(event.target.value);}

  let handleClear = () => {setText("");}

  let handleCopy = () => {
    let text = document.getElementById('textBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard", "success");
  }

  let checkLength = () => {
    if (text.length === 0) {
      return 0;
    }
    else {
      return text.split(" ").length;
    }
  }

  const [text, setText] = useState("");

  return (
    <>
    <div className="container my-3">
        <div className="mb-3">
            <label htmlFor="textBox" className="form-label"><h2>{props.heading}</h2></label>
            <textarea className="form-control" id="textBox" rows="10" value={text} onChange={handleChange} ></textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex">
         <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleUpper} >UPPERCASE</button> 
         <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleLower} >lowercase</button> 
         <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleClear} >Clear</button> 
         <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleCopy} >Copy</button> 
        </div>
    </div>
    <div className="container my-3" style={{paddingTop: "50px"}} >
      <h2>Text Summary</h2>

      <p>{checkLength()} words / {text.length} characters</p>
      <p>Average Time to Read: {0.008 * checkLength()} minutes</p>
    </div>
    </>
  );
}
