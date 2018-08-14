import React, {Component} from 'react'
import Typing from 'react-typing-animation'


class Header extends Component {
  render() {
    return (<div className="Header">

      <header className="header">

        <div className="menu">
          <h3>labs</h3>
          <h3>faq</h3>
          <h3>about</h3>
          <h3>sign up</h3>
          <h3>contact</h3>

        </div>



        <div className="logo">
          <h1>NEWBIE TECH </h1>

          <Typing speed={100}>
            <span>
              <h1>EXPLORATION LAB</h1></span>
          </Typing>


        </div>



      </header>
      </div>)
  }

}

export default Header
