import React, {Component} from 'react'

import TestBg from "./images/testbg5.jpg"


class Arduino extends Component {



  render() {
    return (<div className="arduino">

      <div className="background-img">
        <img src={TestBg} alt="background"></img>
      </div>

      <div className="container section-pad">

        <div className="day-headline">
          <h1>Date + Time + Place: TBA</h1>
        </div>

        <div>
          <h1 className="lab-headline">Build interactive wearables with Arduino</h1>
        </div>

        <div className="lab-explainer">
          <p> Design, code, and build pieces of jewellery, pins or clothing items
            that reacts to touch, sound, moist or motion. An introduction to using
            micro-controllers and Arduino. Bring your own laptop.
            No prior knowledge of coding needed.
          </p>
            <br />
            <br />
          {/* <p>
            Stockholm, October 2018
            <br />
            Location: To be announced
            <br />
            Price: 1000 SEK
            <br />
            What you get: Arduino starter kit, accessories, breakfast and lunch
          </p> */}
        </div>

        <div className="signup-button-small">
          <a href="#signup" className="js-scroll">
            <h2>Sign up >>> </h2>
          </a>
        </div>

      </div>





      </div>)
  }

}

export default Arduino
