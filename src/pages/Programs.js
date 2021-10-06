import React from 'react';

const Programs = () => {
  return (
    <div>
      <section
        className='breadcrumb breadcrumb_bg'
        style={{ marginTop: '100px' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='breadcrumb_iner'>
                <div className='breadcrumb_iner_item'>
                  <h2>Programs</h2>
                  <p>
                    Home<span>/</span>Programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb start*/}
      <section className='feature_part padding_top padding_bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-md-4 align-self-center'>
              <div className='single_feature_text'>
                {/* <h2>Provide Special
                              Services</h2> */}
                <h2>Featured Programs</h2>
                <p>
                  We use a powerful combination of science-based testing,
                  clinical nutrition, food psychology, metabolic typing,
                  mind-body connection and my signature methodology so that you
                  can transform your health and your life!
                </p>
                {/* <a
                  href='https://buy.stripe.com/test_aEUfZL1fi2c867SfYY'
                  className='btn_2'
                >
                  stripe
                </a> */}
              </div>
            </div>
            <div className='col-lg-8 col-md-8'>
              <div className='feature_item'>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_feature'>
                      <div className='single_feature_part'>
                        <span className='single_feature_icon'>
                          <img src='img/icon/feature_2.svg' alt='' />
                        </span>
                        <h4>
                          One time
                          <br /> consultation
                        </h4>
                        <p>
                          <b>Program 1 &nbsp; </b>{' '}
                        </p>

                        <p> Rs 500 </p>
                        <a
                          href='https://buy.stripe.com/test_aEUfZL1fi2c867SfYY'
                          className='btn_2'
                        >
                          Pay
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_feature'>
                      <div className='single_feature_part'>
                        <span className='single_feature_icon'>
                          <img src='img/icon/feature_2.svg' alt='' />
                        </span>
                        <h4>One month session</h4>
                        <p>
                          <b>Program 2 &nbsp;</b> &nbsp; <br />
                          Rs 5,000
                        </p>
                        <a
                          href='https://buy.stripe.com/test_aEUfZL1fi2c867SfYY'
                          className='btn_2'
                        >
                          Pay
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_feature'>
                      <div className='single_feature_part'>
                        <span className='single_feature_icon'>
                          <img src='img/icon/feature_1.svg' alt='' />
                        </span>
                        <h4>Three month session</h4>
                        <p>
                          <b>Program 3 &nbsp; </b> <br />
                          Rs 10,000
                        </p>
                        <a
                          href='https://buy.stripe.com/test_aEUfZL1fi2c867SfYY'
                          className='btn_2'
                        >
                          Pay
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_feature'>
                      <div className='single_feature_part'>
                        <span className='single_feature_icon'>
                          <img src='img/icon/feature_1.svg' alt='' />
                        </span>
                        <h4>Six month session</h4>
                        <p>
                          <b>Program 4 &nbsp; </b> <br />
                          Rs 15,000
                        </p>
                        <a
                          href='https://buy.stripe.com/test_aEUfZL1fi2c867SfYY'
                          className='btn_2'
                        >
                          Pay
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_feature'>
                      <div className='single_feature_part'>
                        <span className='single_feature_icon'>
                          <img src='img/icon/feature_1.svg' alt='' />
                        </span>
                        <h4>Annual session</h4>
                        <p>
                          <b>Program 5 &nbsp;</b> <br />
                          Rs 25,000
                        </p>
                        <a
                          href='https://buy.stripe.com/test_aEUfZL1fi2c867SfYY'
                          className='btn_2'
                        >
                          Pay
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
