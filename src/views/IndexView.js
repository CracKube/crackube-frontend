/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64f5920c6e20f190be88e2d7").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '64f5920d6e20f190be88e322'
    htmlEl.dataset['wfSite'] = '64f5920c6e20f190be88e2d7'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\yogeshwaran-ss-sublime-site.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-login-page-wrapper">
              <div className="af-class-login-box">
                <div className="af-class-login-section">
                  <div className="af-class-login-container w-form"><img src="images/Logo2.svg" alt className="af-class-login-image" />
                    <h1 className="af-class-login-head">Start your 14-day free trial by entering your information below</h1>
                    <div>Already have an account? <a href="login.html" className="af-class-login-link">Login Here.</a>
                    </div>
                    <form method="post" id="email-form" name="email-form" data-name="Email Form" data-ms-form="signup" className="af-class-memberstack-form" data-wf-page-id="64f5920d6e20f190be88e322" data-wf-element-id="94d40711-a351-edb4-d383-c96b0efd8370">
                      <div className="af-class-login-row">
                        <div className="af-class-field-wrapper af-class-first-name-wrapper"><label htmlFor="First-Name" className="af-class-login-label">First Name</label><input type="text" className="af-class-login-field w-input" maxLength={256} name="First-Name" data-name="First Name" placeholder id="First-Name" data-ms-member="first-name" required /></div>
                      </div>
                      <div className="af-class-field-wrapper"><label htmlFor="email" className="af-class-login-label">Email address</label><input type="email" className="af-class-login-field w-input" maxLength={256} name="email" data-name="email" placeholder id="email" data-ms-member="email" required /></div>
                      <div className="af-class-field-wrapper"><label htmlFor="password" className="af-class-login-label">Password</label><input type="password" className="af-class-login-field w-input" maxLength={256} name="password" data-name="password" placeholder id="password" data-ms-member="password" required /></div><input type="submit" defaultValue="Complete Sign up" data-wait="Please wait..." className="af-class-login-button w-button" />
                      <div className="af-class-terms-text">By joining, you are agreeing to our <a href="#" className="af-class-login-page-link">Terms</a> and <a href="#" className="af-class-login-page-link">Privacy Policy</a>
                      </div>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="af-class-error-message w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
                <div data-delay={3000} data-animation="cross" className="af-class-slider-section w-slider" data-autoplay="true" data-easing="ease-in-out" data-hide-arrows="true" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={5} data-duration={1000} data-infinite="true">
                  <div className="w-slider-mask">
                    <div className="af-class-slide-background w-slide">
                      <div className="af-class-slider-content"><img src="images/Scene-Whiteboard1x.png" alt className="af-class-slider-image" /></div>
                    </div>
                    <div className="af-class-slide-background w-slide">
                      <div className="af-class-slider-content"><img src="images/Scene-Wireframe1x.png" alt /></div>
                    </div>
                    <div className="af-class-slide-background w-slide">
                      <div className="af-class-slider-content"><img src="images/Scene-Plants1x.png" alt /></div>
                    </div>
                  </div>
                  <div className="w-slider-arrow-left" />
                  <div className="w-slider-arrow-right" />
                  <div className="af-class-slide-nav w-slider-nav w-slider-nav-invert w-round" />
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */