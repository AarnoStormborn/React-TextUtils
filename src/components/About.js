import React from 'react';

export default function About(props) {

  let myStyle = null;
  if (props.mode === 'dark') {
    myStyle = {
      backgroundColor: '#292b2c',
      color: 'white'
    }
  } else {
    myStyle = {
      backgroundColor: 'white',
      color: 'black'
    }
  }

  return (
    <div className='container my-3' >
        <div className="d-grid gap-2 d-md-flex justify-content-center my-3">
            <h1>About us</h1>
        </div>
        <div className="accordion" id="accordionFlushExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Who Created this
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{props.creatorName}</div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Why was it Created
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{props.purpose}</div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    When was it Created
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{props.createdDate}</div>
                </div>
            </div>
        </div>
    </div>
  );
}

About.defaultProps = {
    creatorName: 'The Creator',
    purpose: 'Divinity',
    createdDate: 'The Big Bang'
}
