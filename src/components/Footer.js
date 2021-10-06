import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className='footer-area'>
        <div className='footer section_padding'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-4 col-sm-4 mb-4 mb-xl-0 single-footer-widget'>
                <h4>Top Programs</h4>
                <ul>
                  <li>
                    <a href='#'>Post Pregnancy Nutrition Consultancy</a>
                  </li>
                  <li>
                    <a href='#'>Pregnancy Nutrition Counseling</a>
                  </li>
                  <li>
                    <a href='#'>Stress Integrative Nutrition Therapy</a>
                  </li>
                  <li>
                    <a href='#'>ABS Plus</a>
                  </li>
                  <li>
                    <a href='#'>Therapeutic Lifestyle Changes</a>
                  </li>
                  <li>
                    <a href='#'>Weight Gain Nutritional Consultancy</a>
                  </li>
                </ul>
              </div>

              <div className='col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget'>
                <h4>Explore</h4>
                <ul>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>Success Stories</a>
                  </li>
                  <li>
                    <a href='#'>Programs</a>
                  </li>
                  <li>
                    <a href='#'>Blog Home</a>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                </ul>
              </div>
              <div className='col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget'>
                <h4>Blogs</h4>
                <ul>
                  <li>
                    <a href='#'>Blog page one</a>
                  </li>
                  <li>
                    <a href='#'> Blog page two</a>
                  </li>
                  <li>
                    <a href='#'>Blog page three</a>
                  </li>
                  <li>
                    <a href='#'>Blog page four</a>
                  </li>
                  <li>
                    <a href='#'>Blog page five</a>
                  </li>
                </ul>
              </div>
              <div
                className='
                col-xl-4 col-sm-8 col-md-8
                mb-4 mb-xl-0
                single-footer-widget
              '
              >
                <h4>Social</h4>
                <div>
                  <a href='mailto:kshitijkumar9630@gmail.com'>
                    <img
                      src='icons/gmail.png'
                      className='social-icons'
                      style={{ height: '40px' }}
                    />
                  </a>
                  <a href='https://wa.me/917751005076'>
                    <img
                      src='icons/whatsapp.png'
                      className='social-icons'
                      style={{ height: '40px' }}
                    />
                  </a>
                  <a href='https://facebook.com/kshitij.kumar.790'>
                    <img
                      src='icons/facebook.png'
                      className='social-icons'
                      style={{ height: '36px' }}
                    />
                  </a>
                  <a href='http://www.instagram.com/__kshitij_kumar__'>
                    <img
                      src='icons/instagram.png'
                      className='social-icons-instagram'
                      style={{ height: '29px' }}
                    />
                  </a>
                </div>
                {/* <div className='form-wrap' id='mc_embed_signup'>
                  <form
                    target='_blank'
                    action='#'
                    method='get'
                    className='form-inline'
                  >
                    <input
                      className='form-control'
                      name='EMAIL'
                      placeholder='Your Email Address'
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Your Email Address '"
                      required
                      type='email'
                    />
                    <button className='click-btn btn btn-default text-uppercase'>
                      subscribe
                    </button>
                    <div style={{ position: 'absolute', left: '-5000px' }}>
                      <input
                        name='b_36c4fd991d266f23781ded980_aefe40901a'
                        tabIndex={-1}
                        defaultValue
                        type='text'
                      />
                    </div>
                    <div className='info' />
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='copyright_part'>
          <div className='container'>
            <div className='row align-items-center'>
              <p className='footer-text m-0 col-lg-8 col-md-12'>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © 2021 Punita Srivastava. All rights reserved
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
              <div className=' footer-text col-lg-4 col-md-12 text-center text-lg-right '>
                <p>
                  Designed &#38; developed by
                  <a href='#' target='_blank'>
                    &nbsp;Kshitij Kumar
                  </a>
                </p>
                {/* <a href='#'>
                  <i className='ti-facebook' />
                </a>
                <a href='#'>
                  {' '}
                  <i className='ti-twitter' />{' '}
                </a>
                <a href='#'>
                  <i className='ti-instagram' />
                </a>
                <a href='#'>
                  <i className='ti-skype' />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
