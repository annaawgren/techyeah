import React, {Component} from 'react'
import Typing from 'react-typing-animation'

import Test from "./images/test.png"

class Hero extends Component {

  render() {
    return (<div className="hero">


      <div className="explainer">
        <p>ladjglajsfdlk<br/>
          aöhtöoawhrgö</p>
      </div>


      <div className="illis">
        <img src={Test}></img>
      </div>


    </div>)
  }

}

export default Hero
