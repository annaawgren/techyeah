import React, {Component} from 'react'

import Team from './images/team.gif'


class About extends Component {


  render() {
    return (<div className="about">


        <div className="about-us">


          <h2>About us</h2>
          <p> Newbie tech is founded by developer and art director Anna Ågren,
            and digital designer Lisa Engwall. The seed for the exploration lab
            was planted at Hyper Island where the duo explored creative tech together.
            Anna and Lisa want to spread the joy and beauty of exploring and learning
            about new technologies together with other tech newbies through facilitated,
            high quality and curated exploration labs.
            Newbie tech work in the intersection of creative tech and design.</p>

            <div className="team">
              <img src={Team} alt="newbie tech team Anna and Lisa"></img>
            </div>


        </div>


      </div>)
  }

}

export default About
