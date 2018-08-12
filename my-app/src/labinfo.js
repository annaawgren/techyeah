import React, {Component} from 'react'


class Labinfo extends Component {
  render() {
    return (<div className="labinfo-container">


        <div className="labinfo-row">
          <h2 className="labinfo place border-right">Malmö</h2>
          <h2 className="labinfo date border-right">181120</h2>
          <h2 className="labinfo">Wearables – where analogue meets digital (Arduino)</h2>
          <a href="#arduino" className="apply">
            <h2>Apply</h2>
          </a>
        </div>

        <div className="labinfo-row border-top">
          <a href="#machinelearning" className="apply border-right">
            <h2>Apply</h2>
          </a>
          <h2 className="labinfo">Play with your body – teach the machine (Machine learning)</h2>
          <h2 className="labinfo date border-right">181120</h2>
          <h2 className="labinfo place">Sthlm</h2>
        </div>




      </div>)
  }

}

export default Labinfo
