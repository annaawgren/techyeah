import React, {Component} from 'react'

import Header from "./header.js"
import Labinfo from "./labinfo.js"
import Hero from "./hero.js"
import Arduino from "./arduino.js"
import LiveInterFace from './interface.js'
import Machinelearning from './machinelearning.js'
import Facts from './facts.js'
import Footer from './footer.js'
import About from './about.js'
import Signup from './signup.js'


import './App.css'
import './header.css'
import './labinfo.css'
import './hero.css'
import './arduino.css'
import './machinelearning.css'
import './facts.css'
import './footer.css'
import './about.css'
import './signup.css'
import './colors.css'






class App extends Component {


  render() {
    return (<div className="App">

      <section className="section section-pad">
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

      <section className="section" id="arduino">
        <LiveInterFace />
      </section>

      <section className="section section-pad section-facts">
        <Facts />
      </section>

      <section className="section section-pad signup" id="signup">
        <Signup />
      </section>

      <section className="section section-pad">
        <About />
      </section>

      <section className="section-pad footer">
        <Footer />
      </section>

    </div>)
  }
}

export default App
