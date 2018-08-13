import React, {Component} from 'react'


class Labinfo extends Component {



  render() {
    return (<div className="labinfo-container">


        <div className="labinfo-row">
          <h2 className="labinfo border-right pink">A one day hands-on experience with Arduino</h2>
          <h2 className="labinfo pink-p">Build interactive wearables</h2>

          <h2 className="labinfo border-left">Stockholm</h2>

        </div>

        <div className="labinfo-row border-top">
          <h2 className="labinfo border-right">>></h2>
          <h2 className="labinfo">Play with your body – teach your machine</h2>
          <h2 className="labinfo date border-left pink">Try out machine learning</h2>
        </div>

        <div className="labinfo-row border-top">
          <h2 className="labinfo border-right">A one day learning experience with Arduino</h2>
          <h2 className="labinfo">Interactive wearables – where analogue
            meets digital</h2>

          <h2 className="labinfo border-left">Stockholm</h2>


          {/* <a href="#arduino" className="labinfo know-more js-scroll">
            <h2>know more</h2>
          </a> */}
        </div>




      </div>)
  }

}

export default Labinfo
