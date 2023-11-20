/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=631202296ef5e973dd425451").then(body => body.text()), isAsync: false },
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
    htmlEl.dataset['wfPage'] = '64efac1fdd6fa5e9c97805d2'
    htmlEl.dataset['wfSite'] = '631202296ef5e973dd425451'

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
        <span className="af-view">
          <div className="af-class-body">
            <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-nav-bar w-nav">
              <div className="af-class-nav-container w-container">
                <a href="#" className="af-class-brand w-nav-brand"><img src="images/Logo_menubar.png" width={64} sizes="(max-width: 991px) 48px, 64px" srcSet="images/Logo_menubar-p-500.png 500w, images/Logo_menubar.png 746w" alt className="af-class-image-2" />
                  <div className="af-class-text-block">CracKube</div>
                </a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <a href="https://google.com" className="af-class-nav-button af-class-border w-button">Sign Up</a>
                  <a href="https://google.com" className="af-class-nav-button w-button">Login</a>
                </nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="af-class-icon w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div id="Hero" className="af-class-section_hero">
              <div className="af-class-main-wrapper">
                <div className="af-class-hero_container">
                  <div className="af-class-container-flex">
                    <h1 className="af-class-hero-h1">Learn with the Power of Answering — with Earning money doing it</h1>
                    <p className="af-class-hero-paragraph">CracKube is a EduSocial Company which is targeting on helping students solve their problems and also serve as an Educational Social Media to share blogs and Earn Money.</p>
                    <a href="https://google.com" className="af-class-hero-button w-button">Get Started</a>
                  </div>
                  <div className="af-class-hero-image-wrapper"><img src="images/Earn-while-you-study-1.png" width={1280} sizes="(max-width: 1439px) 94vw, 1280px" srcSet="images/Earn-while-you-study-1-p-500.png 500w, images/Earn-while-you-study-1-p-800.png 800w, images/Earn-while-you-study-1-p-1080.png 1080w, images/Earn-while-you-study-1-p-1600.png 1600w, images/Earn-while-you-study-1-p-2000.png 2000w, images/Earn-while-you-study-1.png 2560w" alt className="af-class-hero-image-placeholder" />
                    <div className="af-class-profile-images-wrapper"><img src="images/people-white-bord.png" width={48} alt className="af-class-people-group-image" />
                      <div className="af-class-follower-number">Join our waiting list <span className="af-class-tag-span">500+</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="CKUnique" className="af-class-section_ckunique">
              <div className="af-class-main-container af-class-centre">
                <div className="af-class-header-wrap-centre">
                  <h2 data-w-id="54047699-74e5-b801-8940-cf392a68ca33" style={{opacity: 0}} className="af-class-h2">What makes <span className="af-class-text-span">CracKube</span> unique? 😉</h2>
                  <p data-w-id="54047699-74e5-b801-8940-cf392a68ca38" style={{opacity: 0}} className="af-class-paragraph">Crackube, an innovative EdTech platform, uniquely combines Q&amp;A, blogging, coding support, and adaptive learning, fostering collaboration, and offering diverse earning opportunities, making it a dynamic and comprehensive choice in online education.</p>
                </div>
                <div className="af-class-spacer-50px" />
                <div className="w-layout-grid af-class-_1-3-grid">
                  <div id="w-node-_54047699-74e5-b801-8940-cf392a68ca3c-c97805d2" className="af-class-content-wrap-icons"><img src="images/Answer-Intro.jpg" loading="lazy" alt height={180} width={320} srcSet="images/Answer-Intro-p-500.jpg 500w, images/Answer-Intro.jpg 640w" sizes="(max-width: 479px) 73vw, 320px" className="af-class-image" />
                    <div className="af-class-spacer-blank" />
                    <h3 className="af-class-h3">Answer and Earn</h3>
                    <p className="af-class-paragraph">The answer section offers students two distinct options. They can either ask questions or engage in earning opportunities by providing answers to these queries.</p>
                  </div>
                  <div id="w-node-_54047699-74e5-b801-8940-cf392a68ca43-c97805d2" className="af-class-content-wrap-icons"><img src="images/Blog-Intro.jpg" loading="lazy" width={320} height={180} alt srcSet="images/Blog-Intro-p-500.jpg 500w, images/Blog-Intro.jpg 640w" sizes="(max-width: 479px) 73vw, 320px" className="af-class-image" />
                    <div className="af-class-spacer-blank" />
                    <h3 className="af-class-h3">Blog and Earn</h3>
                    <p className="af-class-paragraph">Within the blog section, individuals have the opportunity to compose articles, and their earnings are contingent on the volume of views garnered.</p>
                  </div>
                  <div id="w-node-_54047699-74e5-b801-8940-cf392a68ca4a-c97805d2" className="af-class-content-wrap-icons"><img src="images/Code-Intro.jpg" loading="lazy" width={320} height={180} alt srcSet="images/Code-Intro-p-500.jpg 500w, images/Code-Intro.jpg 640w" sizes="(max-width: 479px) 73vw, 320px" className="af-class-image" />
                    <div className="af-class-spacer-blank" />
                    <h3 className="af-class-h3">Code and Earn</h3>
                    <p className="af-class-paragraph">Individuals proficient in coding are welcome to step forward and assist students by resolving paid coding queries, thus enabling them to earn a financial reward.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="Tablet" className="af-class-section_tablet">
              <div className="af-class-container-w3 af-class-gutter-outside">
                <div className="af-class-p-xl-start af-class-p-xl-end">
                  <div className="af-class-text-center">
                    <div className="af-class-wow-animation">
                      <div className="af-class-wow-heading af-class-wow-gradient">You have a lot more</div>
                      <div className="af-class-wow-heading af-class-wow-gradient af-class-big">Things to Discover!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-container-w2 af-class-gutter-outside">
                <div data-w-id="d2ba46a3-1085-913e-bf49-409973395adf" className="af-class-tablet-mockup-animation">
                  <div data-w-id="d2ba46a3-1085-913e-bf49-409973395ae0" className="af-class-_3d-tablet-wrap">
                    <div className="af-class-_3d-tablet-inner">
                      <div className="af-class-ipad-mockup">
                        <div className="af-class-ipad-screen af-class-overflow-hidden"><img src="images/Tablet-Bg-Test.jpg" loading="lazy" sizes="(max-width: 1919px) 84vw, 1247.5390625px" srcSet="images/Tablet-Bg-Test-p-500.jpg 500w, images/Tablet-Bg-Test-p-800.jpg 800w, images/Tablet-Bg-Test-p-1080.jpg 1080w, images/Tablet-Bg-Test-p-1600.jpg 1600w, images/Tablet-Bg-Test.jpg 1791w" alt className="af-class-screenshot-scroll" /></div><img src="https://uploads-ssl.webflow.com/5f6defc193852768e5fc2dab/60c8b3724c66fb10901fcab9_ipad-pro.svg" loading="lazy" alt className="af-class-ipad-shape" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="CKFeatures" className="af-class-section_ckfeatures">
              <div className="af-class-main-container">
                <div className="w-layout-grid af-class-_1-2-grid">
                  <div id="w-node-ffd76c4b-2829-657e-bd2c-4ad648b27bf3-c97805d2" className="af-class-content-wrap-1">
                    <h1 data-w-id="ffd76c4b-2829-657e-bd2c-4ad648b27bf4" style={{opacity: 0}} className="af-class-h1">Earn Money Just with <span className="af-class-text-span-2">Consistency</span><span className="af-class-purple-span" /></h1>
                    <p data-w-id="ffd76c4b-2829-657e-bd2c-4ad648b27bfa" style={{opacity: 0}} className="af-class-paragraph-2">Consistently posting blogs on CracKube can be a lucrative way to earn money. This attracts more visitors and potential advertisers. Building a loyal readership over time boosts your income as returning visitors are more likely to engage with your content.</p>
                  </div>
                  <div id="w-node-ffd76c4b-2829-657e-bd2c-4ad648b27bfc-c97805d2" className="af-class-hero-image-block">
                    <div data-w-id="ffd76c4b-2829-657e-bd2c-4ad648b27bfd" style={{opacity: 0}} className="af-class-benefit-block-1">
                      <div className="af-class-icon-2 w-embed"><svg width={420} height={420} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>200+ Followers</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-main-container">
                <div className="w-layout-grid af-class-_1-2-grid af-class-desktop">
                  <div id="w-node-ffd76c4b-2829-657e-bd2c-4ad648b27c03-c97805d2" className="af-class-section-1-image-block">
                    <div data-w-id="ffd76c4b-2829-657e-bd2c-4ad648b27c04" style={{opacity: 0}} className="af-class-benefit-block-2">
                      <div className="af-class-icon-2 w-embed"><svg width={420} height={420} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>Reputation Increased!</div>
                    </div>
                  </div>
                  <div id="w-node-ffd76c4b-2829-657e-bd2c-4ad648b27c08-c97805d2" className="af-class-content-wrap-1">
                    <h1 data-w-id="ffd76c4b-2829-657e-bd2c-4ad648b27c09" style={{opacity: 0}} className="af-class-h1">Help People and Grow <span className="af-class-text-span-3">Together</span><span className="af-class-text-span-2" /><span className="af-class-purple-span" /></h1>
                    <p data-w-id="ffd76c4b-2829-657e-bd2c-4ad648b27c11" style={{opacity: 0}} className="af-class-paragraph-2">Consistently posting blogs on CracKube can be a lucrative way to earn money. This attracts more visitors and potential advertisers. Building a loyal readership over time boosts your income as returning visitors are more likely to engage with your content.</p>
                  </div>
                </div>
                <div className="w-layout-grid af-class-_1-2-grid af-class-other">
                  <div id="w-node-ffd76c4b-2829-657e-bd2c-4ad648b27c14-c97805d2" className="af-class-content-wrap-1">
                    <h1 data-w-id="ffd76c4b-2829-657e-bd2c-4ad648b27c15" style={{opacity: 0}} className="af-class-h1">Help People and Grow <span className="af-class-text-span-3">Together</span><span className="af-class-text-span-2" /><span className="af-class-purple-span" /></h1>
                    <p data-w-id="ffd76c4b-2829-657e-bd2c-4ad648b27c1d" style={{opacity: 0}} className="af-class-paragraph-2">Consistently posting blogs on CracKube can be a lucrative way to earn money. This attracts more visitors and potential advertisers. Building a loyal readership over time boosts your income as returning visitors are more likely to engage with your content.</p>
                  </div>
                  <div id="w-node-ffd76c4b-2829-657e-bd2c-4ad648b27c1f-c97805d2" className="af-class-section-1-image-block">
                    <div data-w-id="ffd76c4b-2829-657e-bd2c-4ad648b27c20" style={{opacity: 0}} className="af-class-benefit-block-2">
                      <div className="af-class-icon-2 w-embed"><svg width={420} height={420} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>Reputation Increased!</div>
                    </div>
                  </div>
                </div>
                <div className="af-class-header-wrap-centre" />
              </div>
            </div>
            <div id="FAQ" className="af-class-section_faq">
              <div className="af-class-main-container af-class-centre">
                <div className="af-class-header-wrap-centre">
                  <h2 data-w-id="9fb94b29-5784-ce1f-f5f9-88f1cd9a6d23" style={{opacity: 0}} className="af-class-h2-2">Frequently Asked Questions🙋<span className="af-class-purple-span" /></h2>
                  <p data-w-id="9fb94b29-5784-ce1f-f5f9-88f1cd9a6d27" style={{opacity: 0}} className="af-class-paragraph-2">The FAQ section is your go-to destination for quick answers to common questions. Browse through these concise responses to find the information you need effortlessly</p>
                </div>
                <div className="af-class-spacer-50px" />
                <div className="af-class-faq-wrap">
                  <div id="w-node-_9fb94b29-5784-ce1f-f5f9-88f1cd9a6d2b-c97805d2">
                    <div className="af-class-faq-item">
                      <a data-w-id="9fb94b29-5784-ce1f-f5f9-88f1cd9a6d2d" href="#" className="af-class-faq-question w-inline-block">
                        <h3 className="af-class-h3-2">How do I get started?</h3>
                        <div className="af-class-p-m-wrap">
                          <div className="af-class-minus" />
                          <div className="af-class-plus" />
                        </div>
                      </a>
                      <div style={{height: 0}} className="af-class-faq-answer">
                        <div className="af-class-faq-answer-inner">
                          <p className="af-class-paragraph-2">Crackube is a educational platform meticulously designed to cater to students seeking academic assistance. Beyond being a resource for learning support, students have the opportunity to generate income by providing academic aid to their peers and contributing educational blog content.<br /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_9fb94b29-5784-ce1f-f5f9-88f1cd9a6d38-c97805d2">
                    <div className="af-class-faq-item">
                      <a data-w-id="9fb94b29-5784-ce1f-f5f9-88f1cd9a6d3a" href="#" className="af-class-faq-question w-inline-block">
                        <h3 className="af-class-h3-2">How do I ask my questions?</h3>
                        <div className="af-class-p-m-wrap">
                          <div className="af-class-minus" />
                          <div className="af-class-plus" />
                        </div>
                      </a>
                      <div style={{height: 0}} className="af-class-faq-answer">
                        <div className="af-class-faq-answer-inner">
                          <p className="af-class-paragraph-2">There are two primary methods for inquiring:1. Located in the upper right corner of the main page, you may input your query by selecting the upload button.<br />2. Situated in the lower right corner of the main page, you can enter your question by clicking the purple plus button.For the inclusion of special characters, mathematical equations, images, or attachments, a suite of tools is available at the bottom of the question input box.<br /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_9fb94b29-5784-ce1f-f5f9-88f1cd9a6d47-c97805d2">
                    <div className="af-class-faq-item">
                      <a data-w-id="9fb94b29-5784-ce1f-f5f9-88f1cd9a6d49" href="#" className="af-class-faq-question w-inline-block">
                        <h3 className="af-class-h3-2">Is CracKube free?</h3>
                        <div className="af-class-p-m-wrap">
                          <div className="af-class-minus" />
                          <div className="af-class-plus" />
                        </div>
                      </a>
                      <div style={{height: 0}} className="af-class-faq-answer">
                        <div className="af-class-faq-answer-inner">
                          <p className="af-class-paragraph-2">Crackube offers a range of features and resources accessible to all users. Our platform aims to provide value and support for learners and educators alike. To explore the full spectrum of services available and their respective pricing options, we recommend visiting our website or contacting our support team for more detailed information tailored to your specific needs.<br /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_9fb94b29-5784-ce1f-f5f9-88f1cd9a6d54-c97805d2">
                    <div className="af-class-faq-item">
                      <a data-w-id="9fb94b29-5784-ce1f-f5f9-88f1cd9a6d56" href="#" className="af-class-faq-question w-inline-block">
                        <h3 className="af-class-h3-2">How do I write my own blogs?</h3>
                        <div className="af-class-p-m-wrap">
                          <div className="af-class-minus" />
                          <div className="af-class-plus" />
                        </div>
                      </a>
                      <div style={{height: 0}} className="af-class-faq-answer">
                        <div className="af-class-faq-answer-inner">
                          <p className="af-class-paragraph-2">Located in the upper right-hand corner of the homepage, you will find the "Upload" button. Simply click on this button to initiate the process of submitting your blog content. <br />It's worth noting that the potential for earnings is directly correlated with the number of views your content garners.<br /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_9fb94b29-5784-ce1f-f5f9-88f1cd9a6d63-c97805d2">
                    <div className="af-class-faq-item">
                      <a data-w-id="9fb94b29-5784-ce1f-f5f9-88f1cd9a6d65" href="#" className="af-class-faq-question w-inline-block">
                        <h3 className="af-class-h3-2">Will we be able to Earn Money through CracKube?💸</h3>
                        <div className="af-class-p-m-wrap">
                          <div className="af-class-minus" />
                          <div className="af-class-plus" />
                        </div>
                      </a>
                      <div style={{height: 0}} className="af-class-faq-answer">
                        <div className="af-class-faq-answer-inner">
                          <p className="af-class-paragraph-2">Certainly, you have two avenues to generate income on our platform. You can either monetize your expertise by addressing fellow student’s inquiries through our paid question-solving feature or by contributing top-tier blog content. The earnings from the latter are commensurate with the volume of views your blogs accumulate.<br /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_9fb94b29-5784-ce1f-f5f9-88f1cd9a6d70-c97805d2">
                    <div className="af-class-faq-item">
                      <a data-w-id="9fb94b29-5784-ce1f-f5f9-88f1cd9a6d72" href="#" className="af-class-faq-question w-inline-block">
                        <h3 className="af-class-h3-2">Do you provide customer support?</h3>
                        <div className="af-class-p-m-wrap">
                          <div className="af-class-minus" />
                          <div className="af-class-plus" />
                        </div>
                      </a>
                      <div style={{height: 0}} className="af-class-faq-answer">
                        <div className="af-class-faq-answer-inner">
                          <p className="af-class-paragraph-2">Certainly, we prioritize our users' needs and offer comprehensive customer support services. At our ed tech company, assistance is readily available to address any inquiries, concerns, or technical issues you may encounter. Our dedicated support team is committed to ensuring a seamless and enriching educational experience for all users. <br />Feel free to reach out to us through various channels, including email, chat, or phone, and we'll be delighted to assist you in achieving your educational goals.<br /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Tagscroll" className="af-class-section_tagscroll">
              <div data-w-id="c118d179-c29a-eda8-7f43-7b67f20ce719" className="af-class-tags-slider_component">
                <div className="af-class-tags-slider_content">
                  <div className="af-class-tags-slider_list">
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce71c-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Coding_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Coding_tags-p-500.jpg 500w, images/Coding_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce722-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Mathematics_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Mathematics_tags-p-500.jpg 500w, images/Mathematics_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce730-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/History_tags.jpg" loading="lazy" sizes="160px" srcSet="images/History_tags-p-500.jpg 500w, images/History_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce71e-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Technology_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Technology_tags-p-500.jpg 500w, images/Technology_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce720-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Travel_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Travel_tags-p-500.jpg 500w, images/Travel_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce732-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Physics_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Physics_tags-p-500.jpg 500w, images/Physics_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce72c-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/AI_tags.jpg" loading="lazy" sizes="160px" srcSet="images/AI_tags-p-500.jpg 500w, images/AI_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce72e-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Sport_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Sport_tags-p-500.jpg 500w, images/Sport_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce724-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Economics_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Economics_tags-p-500.jpg 500w, images/Economics_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce726-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Commerce_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Commerce_tags-p-500.jpg 500w, images/Commerce_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce728-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Medicine_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Medicine_tags-p-500.jpg 500w, images/Medicine_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce72a-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Biology_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Biology_tags-p-500.jpg 500w, images/Biology_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                  </div>
                  <div className="af-class-tags-slider_list">
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce735-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Coding_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Coding_tags-p-500.jpg 500w, images/Coding_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce737-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Technology_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Technology_tags-p-500.jpg 500w, images/Technology_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce739-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Travel_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Travel_tags-p-500.jpg 500w, images/Travel_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce73b-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Mathematics_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Mathematics_tags-p-500.jpg 500w, images/Mathematics_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce73d-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Economics_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Economics_tags-p-500.jpg 500w, images/Economics_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce73f-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Commerce_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Commerce_tags-p-500.jpg 500w, images/Commerce_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce741-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Medicine_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Medicine_tags-p-500.jpg 500w, images/Medicine_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce743-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Biology_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Biology_tags-p-500.jpg 500w, images/Biology_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce745-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/AI_tags.jpg" loading="lazy" sizes="160px" srcSet="images/AI_tags-p-500.jpg 500w, images/AI_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce747-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Sport_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Sport_tags-p-500.jpg 500w, images/Sport_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce749-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/History_tags.jpg" loading="lazy" sizes="160px" srcSet="images/History_tags-p-500.jpg 500w, images/History_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                    <div id="w-node-c118d179-c29a-eda8-7f43-7b67f20ce74b-c97805d2" className="af-class-tags-slider_image-wrapper"><img src="images/Physics_tags.jpg" loading="lazy" sizes="160px" srcSet="images/Physics_tags-p-500.jpg 500w, images/Physics_tags.jpg 640w" alt className="af-class-tags-slider_image" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="CTA" className="af-class-section_cta">
              <div data-w-id="6fab6987-c4f9-fa87-9301-f7c522f1ee9e" style={{opacity: 0}} className="af-class-cta-2-container">
                <div className="af-class-header-wrap-centre">
                  <h2 className="af-class-h2-2">Want to Contribute and become a CracK?</h2>
                  <p className="af-class-paragraph-2 af-class-white">Join us and help out people with their doubts and become a CK Expert or start writing blogs and share your thoughts to the world!</p>
                </div>
                <div className="af-class-spacer-25px" />
                <a href="https://docs.google.com/forms/d/1LHbGgXIabhd31BCKyfiSp_0ZPMGtUJRd3wq41-As0mE/edit" target="_blank" className="af-class-button af-class-white w-button">Join now</a>
              </div>
            </div>
            <div id="Footer" className="af-class-section_footer">
              <div className="af-class-footer-07">
                <div className="af-class-container">
                  <div className="af-class-footer-centre"><img src="images/Logo_menubar.png" width={64} sizes="64px" srcSet="images/Logo_menubar-p-500.png 500w, images/Logo_menubar.png 746w" alt className="af-class-logo" />
                    <p className="af-class-paragraph-light">CracKube is a EduSocial Company which is targeting on helping <br />students solve their problems and also serve as a Educational Social Media <br />to share blogs and Earn Money.</p>
                    <div className="af-class-footer-link-wrap">
                      <a href="#CKFeatures" className="af-class-footer-link-white">Features</a>
                      <a href="#CKUnique" className="af-class-footer-link-white">About Us</a>
                      <a href="#Tablet" className="af-class-footer-link-white">Learn</a>
                      <a href="#FAQ" className="af-class-footer-link-white">FAQs</a>
                      <a href="#CTA" className="af-class-footer-link-white">Contact Us</a>
                    </div>
                    <div className="af-class-footer-wrapper">
                      <div className="af-class-text-rights">© 2023, CracKube Private Limited. All rights reserved.</div>
                    </div>
                  </div>
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