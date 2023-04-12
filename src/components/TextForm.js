import React, {useState} from 'react';



export default function TextForm(props) {

  let clicked = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  let handleChange = (event) => {setText(event.target.value);}

  const [text, setText] = useState();

  return (
    <div className="container my-3">
        <div className="mb-3">
            <label htmlFor="textBox" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="textBox" rows="10" value={text} onChange={handleChange} ></textarea>
        </div>
        <button className="btn btn-primary" onClick={clicked} >UPPERCASE</button> 
    </div>
  );
}
