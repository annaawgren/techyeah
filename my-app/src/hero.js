import React, {Component} from 'react'
import Typing from 'react-typing-animation'

import Test from "./images/hands-heart.png"


class Hero extends Component {


  render() {
    return (<div className="Hero">

        <div className="illis">
          <img src={Test}></img>
        </div>

        <div className="explainer">

          <Typing speed={100}>
            <span>
              <p>100% <br />hands on!</p></span>
          </Typing>

        </div>

      </div>)
  }

}

export default Hero
