import React from "react"



class Signup extends React.Component {


  render() {
    return (
      <div className="signup">


        <div className="facts-hl">
          <h1>Sign up!</h1>
          <p>Want to know more? We are working on all the when, where and what's for our labs.</p>
            <p>Be the first to know when all details are up and applications are open.  </p>
        </div>


        <div className="signup-form" id="mc_embed_signup">


          <form
            action=""
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <div className="signup-box">
                <input
                  type="email"
                  className="signup-field email-input"
                  placeholder="enter your email"
                  name="EMAIL"
                  id="mce-EMAIL"
                />
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"s
                  xstyle="display:none"
                />
                <div
                  className="response"
                  id="mce-success-response"
                  xstyle="display:none"
                />
              </div>
              <div
                xstyle="position: absolute; left: -5000px;"
                aria-hidden="true"
              />
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup
