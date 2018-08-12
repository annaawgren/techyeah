import React, {Component} from 'react'
import inView from "in-view"

import Header from "./header.js"
import Labinfo from "./labinfo.js"
import Hero from "./hero.js"
import Arduino from "./arduino.js"
import Machinelearning from './machinelearning.js'
import Facts from './facts.js'


import './App.css'
import './header.css'
import './labinfo.css'
import './hero.css'
import './arduino.css'
import './machinelearning.css'
import './facts.css'

import Arrow from "./images/down-arrow.svg"





class App extends Component {




  render() {
    return (<div className="App">

      <section className="section section-pad section-top">
        <Header />
        <Labinfo />
        <Hero />
      </section>


      <section className="section" id="arduino">
        <Arduino />
      </section>


      <section className="section" id="machinelearning">
        <Machinelearning />
      </section>

      <section className="section section-pad section-facts">
        <Facts />
      </section>

      <section className="section section-pad">
        <div>
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

      </section>

    </div>)
  }
}

export default App
