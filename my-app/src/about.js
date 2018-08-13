import React, {Component} from 'react'

import Team from './images/team.gif'


class About extends Component {


  render() {
    return (<div className="about">



        <h2>About us</h2>
        <p> Newbie tech is founded by developer and art director Anna Ågren,
          and digital designer Lisa Engwall. The seed for the exploration lab
          was planted at Hyper Island where the duo explored creative tech together.
          Anna and Lisa want to spread the joy and beauty of tech to newbies through
          facilitated and curated tech explorations. Newbie tech work in the
          intersection of creative tech and design.</p>

          <div className="team">
            <img src={Team}></img>
          </div>


      </div>)
  }

}

export default About
