import React, {Component} from 'react'
import inView from "in-view"

import TestBg from "./images/testbg5.jpg"


class Arduino extends Component {


  componentDidMount() {

      const scrollLinks = document.querySelectorAll('.js-scroll')

      scrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
          event.preventDefault()
          const href = link.getAttribute('href')
          document.querySelector(href).scrollIntoView({behavior: 'smooth'})
        })
      })

      inView('.container').on('enter', container => {
        container.classList.add('in-viewport')
      }).on('exit', container => {
        container.classList.remove('in-viewport')
      })

      inView.threshold(0.5);
    }





  render() {
    return (<div className="arduino">

      <div className="background-img">
        <img src={TestBg}></img>
      </div>

      <div className="container section-pad">

        <div>
          <h1 className="day-headline">one-day-lab with Arduino</h1>
        </div>

        <div>
          <h1 className="lab-headline">Interactive wearables – where analogue meets digital</h1>
        </div>

        <div className="lab-explainer">
          <p> Design, code, and build pieces of jewellery, pins or clothing items
            that reacts to touch, sound, moist or motion. An introduction to using
            micro-controllers and Arduino. Bring your own laptop.
            No prior knowledge of coding needed.
          </p>
            <br />
            <br />
          <p>
            Stockholm, October 2018
            <br />
            Location: To be announced
            <br />
            Price: 1000 SEK
            <br />
            What you get: Arduino starter kit, accessories, breakfast and lunch
          </p>
        </div>

      </div>



      </div>)
  }

}

export default Arduino
