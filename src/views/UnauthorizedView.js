/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: Promise.resolve("/[?&]e=1(&|$)/.test(document.location.search)&&(document.querySelector(\".w-password-page.w-form-fail\").style.display=\"block\");"), isAsync: false },
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64f5920c6e20f190be88e2d7").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class UnauthorizedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/UnauthorizedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnauthorizedView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '64f5920d6e20f190be88e323'
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
    const proxies = UnauthorizedView.Controller !== UnauthorizedView ? transformProxies(this.props.children) : {

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
            <div className="af-class-utility-page-wrap">
              <div className="af-class-utility-page-content w-password-page w-form">
                <form method="post" action="/.wf_auth" id="email-form" name="email-form" data-name="Email Form" className="af-class-utility-page-form w-password-page" data-wf-page-id="64f5920d6e20f190be88e323" data-wf-element-id="b818238a-1bae-ea27-17fc-e57488df4109"><img src="https://d3e54v103j8qbb.cloudfront.net/static/password-page-lock.832ca8e2c9.svg" alt />
                  <h2>Protected page</h2>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script"><input type="hidden" name="path" defaultValue="<%WF_FORM_VALUE_PATH%>" /><input type="hidden" name="page" defaultValue="<%WF_FORM_VALUE_PAGE%>" /></div><input type="password" className="w-password-page w-input" autofocus="true" maxLength={256} name="pass" data-name="field" placeholder="Enter your password" id="field" /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="w-password-page w-button" />
                </form>
                <div className="w-password-page w-form-fail">
                  <div>Incorrect password. Please try again.</div>
                </div>
                <div style={{display: 'none'}} className="w-password-page w-embed w-script">
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default UnauthorizedView

/* eslint-enable */