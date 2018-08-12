import React, {Component} from 'react'

import Test from "./images/hands-heart.png"


class Hero extends Component {
  render() {
    return (<div className="Hero">

        <div className="illis">
          <img src={Test}></img>
        </div>

        <div className="explainer">

          <p>A tech exploration lab.</p>

        </div>

      </div>)
  }

}

export default Hero
