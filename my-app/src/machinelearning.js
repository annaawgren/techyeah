import React, {Component} from 'react'


class Machinelearning extends Component {
  render() {
    return (<div className="ml">

      <div className="background-img">
        <video autoPlay="autoPlay" loop="loop" infinite="true">
          <source src={require("./images/dancePP.mp4")} type="video/mp4" alt="video"/>
        </video>
      </div>

      <div className="container-ml section-pad">

        <div className="day-headline">
          <h1>one-day-lab with machine learning</h1>
        </div>

        <div>
          <h1 className="lab-headline white">Play with your body – teach the machine</h1>
        </div>

        <div className="lab-explainer white">
          <p> Learn the basics of Machine Learning (ML) and begin to explore using
            the camera in your computer. Create games where you use your body
            as a remote control. Bring your own laptop. No prior knowledge needed.
          </p>
            <br />
            <br />
          <p>
            Stockholm, December 2018
            <br />
            Location: To be announced
            <br />
            Price: 450 SEK
            <br />
            What you get: Breakfast, lunch and some nice goodies

          </p>
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

export default Machinelearning
