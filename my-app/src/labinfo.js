import React, {Component} from 'react'


class Labinfo extends Component {



  render() {
    return (<div className="labinfo-comp">

        <div className="labinfo-container">



          <div className="labinfo-row">
            <h2 className="labinfo border-right pink">A one day hands-on experience with Arduino</h2>
            <h2 className="labinfo pink-p">Interactive wearables – analogue meets digital</h2>

            <h2 className="labinfo border-left">Stockholm</h2>

          </div>

          <div className="labinfo-row border-top">
            <h2 className="labinfo border-right">>></h2>
            <h2 className="labinfo">Let your body become a remote controller</h2>
            <h2 className="labinfo date border-left pink">Try out machine learning</h2>
          </div>

          <div className="labinfo-row border-top">
            <h2 className="labinfo border-right pink">Prototype a live interface</h2>
            <h2 className="labinfo">Interactive wearables – where analogue
              meets digital</h2>

            <h2 className="labinfo border-left">3 x labs in Stockholm</h2>
          </div>

        </div>

        <div className="signup-button">
          <a href="#signup" className="js-scroll">
            <h2>sign up >>> </h2>
          </a>
        </div>






      </div>)
  }

}

export default Labinfo
