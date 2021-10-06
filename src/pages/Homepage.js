import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <section className='banner_part'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-xl-6'>
              <div className='banner_text mt-5'>
                <div className='banner_text_iner'>
                  <h1
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(56,164,255,1) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Reclaim your Radiance with
                  </h1>
                  <h2>
                    <b> Dt. Punita Srivastava </b>
                  </h2>

                  <h4>
                    <b style={{ color: 'grey' }}>
                      Dietitian, Nutritionist and Certified Diabetes Educator
                      (CDE)
                    </b>
                  </h4>
                  <h3
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(56,164,255,1) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    &amp;
                  </h3>
                  <h2>
                    <b> Dr. Vivek Vidyarthi </b>
                  </h2>

                  <h4>
                    <b style={{ color: 'grey' }}>
                      Md. Physician, Diabetologist and Cardiologist.
                    </b>
                  </h4>

                  {/* <a
                    href='https://buy.stripe.com/test_aEUfZL1fi2c867SfYY'
                    className='btn_2'
                  >
                    Make payment stripe
                  </a> */}
                  <div className='banner_item mt-4'>
                    <div className='single_item'>
                      <img src='img/icon/banner_2.svg' alt='' />
                      <h5>Natural Methods</h5>
                    </div>
                    <div className='single_item'>
                      <img src='img/icon/banner_1.svg' alt='' />
                      <h5>Certified Professionals</h5>
                    </div>

                    <div className='single_item'>
                      <img src='img/icon/banner_3.svg' alt='' />
                      <h5>Trusted Practices</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner part start*/}
      {/* feature_part start*/}
      <section className='feature_part padding_top'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-md-4 align-self-center'>
              <div className='single_feature_text'>
                {/* <h2>Provide Special
                            Services</h2> */}
                <h2>How it works</h2>
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
                <Link className='btn_2' to='/programs'>
                  Select Program
                </Link>
              </div>
            </div>
            <div className='col-lg-8 col-md-8'>
              <div className='feature_item'>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_feature'>
                      <div className='single_feature_part'>
                        {/* <span className='single_feature_icon'>
                          <img src='img/icon/feature_2.svg' alt='' />
                        </span>
                        <h4> Step 1</h4> */}
                        <p>
                          <b>Step 1 &nbsp; </b>
                          <br />
                          Select the required program.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_feature'>
                      <div className='single_feature_part'>
                        {/* <span className='single_feature_icon'>
                          <img src='img/icon/feature_2.svg' alt='' />
                        </span>
                        <h4>Step 2</h4> */}
                        <p>
                          <b>Step 2 &nbsp; </b> <br />
                          Enroll yourself for the sected program and proceed for
                          payment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_feature'>
                      <div className='single_feature_part'>
                        {/* <span className='single_feature_icon'>
                          <img src='img/icon/feature_1.svg' alt='' />
                        </span>
                        <h4>Step 3</h4> */}
                        <p>
                          <b>Step 3 &nbsp; </b> <br /> Experts team will
                          schedule the appointment with you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_feature'>
                      <div className='single_feature_part'>
                        {/* <span className='single_feature_icon'>
                          <img src='img/icon/feature_1.svg' alt='' />
                        </span>
                        <h4>Step 4</h4> */}
                        <p>
                          <b>Step 4 &nbsp; </b> <br /> Consultaion will begain
                          on the scheduled date.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_feature'>
                      <div className='single_feature_part'>
                        {/* <span className='single_feature_icon'>
                          <img src='img/icon/feature_1.svg' alt='' />
                        </span>
                        <h4>Step 5</h4> */}
                        <p>
                          <b>Step 5 &nbsp;</b> <br />
                          Timely follow up the calls as per plan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature_part start*/}
      {/* our_ability part start*/}
      <section className='our_ability section_padding'>
        <div className='container'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-md-6 col-lg-6'>
              <div className='our_ability_img'>
                <img src='img/ability_img.png' alt='' />
              </div>
            </div>
            <div className='col-md-6 col-lg-5'>
              <div className='our_ability_member_text'>
                <h2>Our Clients Are at the Centre of Everything We Do</h2>
                <p>
                  Whatever you are facing in your health and body and wherever
                  you are in your journey, you have landed in the right place to
                  make peace with your plate and reclaim your health through
                  total food and body freedom.
                </p>
                <ul>
                  <li>
                    <span className='ti-mouse' />
                    Modern Approach
                  </li>
                  <li>
                    <span className='ti-heart-broken' />
                    Worldclass Guidance
                  </li>
                  <li>
                    <span className='ti-package' />
                    Experienced Prof.
                  </li>
                  <li>
                    <span className='ti-headphone-alt' />
                    Excellent Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our_ability part end*/}
      {/* top_service part start*/}
      <section className='top_service our_ability padding_bottom'>
        <div className='container'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-md-5 col-lg-5'>
              <div className='our_ability_member_text'>
                <h2>
                  Book a session with <br />
                  <b>Dr. Vivek Vidyarthi</b>
                </h2>

                <h4>
                  <b style={{ color: 'grey' }}>
                    Md. Physician, Diabetologist and Cardiologist.
                  </b>
                </h4>
                <p>
                  Dr. Vivek Vidyarthi has extensive experience as Physician,
                  Diabetologist, and Cardiologist. Adept in properly diagnosing
                  and strategizing for the best treatment plans for patients.
                  Bringing forth an empathetic and professional attitude,
                  committed to providing patients with the best care possible.
                  Experienced in counseling patients on preventative care and
                  positive lifestyle changes.
                </p>
                <p>
                  <b>One time consultancy fee: Rs 500</b>
                </p>
                <a href='https://rzp.io/l/FYBvqbFG' className='btn_2'>
                  Pay
                </a>
              </div>
            </div>
            <div className='col-md-6 col-lg-6'>
              <div className='our_ability_img'>
                <img src='img/top_service.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* top_service part end*/}
      {/*::review_part start::*/}
      <section className='review_part'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='client_review_part owl-carousel'>
                <div className='client_review_single'>
                  <img src='img/Quote.png' className='Quote' alt='quote' />
                  <div className='client_review_text'>
                    <p>
                      Also made from. Give may saying meat there from heaven it
                      lights face had is gathered god dea earth light for life
                      may itself shall whales made they're blessed whales also
                      made from give may saying meat. There from heaven it
                      lights face had amazing place
                    </p>
                  </div>
                  <h4>
                    Mosan Cameron, <span>Executive of fedex</span>
                  </h4>
                </div>
                <div className='client_review_single'>
                  <img src='img/Quote.png' className='Quote' alt='quote' />
                  <div className='client_review_text media-body'>
                    <p>
                      Also made from. Give may saying meat there from heaven it
                      lights face had is gathered god dea earth light for life
                      may itself shall whales made they're blessed whales also
                      made from give may saying meat. There from heaven it
                      lights face had amazing place
                    </p>
                  </div>
                  <h4>
                    Mosan Cameron, <span>Executive of fedex</span>
                  </h4>
                </div>
                <div className='client_review_single'>
                  <img src='img/Quote.png' className='Quote' alt='quote' />
                  <div className='client_review_text'>
                    <p>
                      Also made from. Give may saying meat there from heaven it
                      lights face had is gathered god dea earth light for life
                      may itself shall whales made they're blessed whales also
                      made from give may saying meat. There from heaven it
                      lights face had amazing place
                    </p>
                  </div>
                  <h4>
                    Mosan Cameron, <span>Executive of fedex</span>
                  </h4>
                </div>
                <div className='client_review_single'>
                  <img src='img/Quote.png' className='Quote' alt='quote' />
                  <div className='client_review_text'>
                    <p>
                      Also made from. Give may saying meat there from heaven it
                      lights face had is gathered god dea earth light for life
                      may itself shall whales made they're blessed whales also
                      made from give may saying meat. There from heaven it
                      lights face had amazing place
                    </p>
                  </div>
                  <h4>
                    Mosan Cameron, <span>Executive of fedex</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*::review_part end::*/}
      {/*::regervation_part start::*/}
      <section className='regervation_part'>
        <div className='container'>
          <div className='row align-items-center regervation_content'>
            <div className='col-lg-7 col-md-6'>
              <div className='regervation_part_iner'>
                <form>
                  <h2>Send an email</h2>
                  <div className='form-row'>
                    <div className='form-group col-md-6'>
                      <input
                        type='email'
                        className='form-control'
                        id='inputEmail4'
                        placeholder='Name'
                      />
                    </div>
                    <div className='form-group col-md-6'>
                      <input
                        type='email'
                        className='form-control'
                        id='inputPassword4'
                        placeholder='Email address'
                      />
                    </div>
                    <div className='form-group col-md-6'>
                      <select className='form-control' id='Select'>
                        <option value={1} selected>
                          Select service
                        </option>
                        <option value={2}>Name of service</option>
                        <option value={3}>Name of service</option>
                        <option value={4}>Name of service</option>
                        <option value={5}>Name of service</option>
                      </select>
                    </div>
                    <div className='form-group time_icon col-md-6'>
                      <select className='form-control' id='Select2'>
                        <option value selected>
                          Time
                        </option>
                        <option value={1}>8 AM TO 10AM</option>
                        <option value={1}>10 AM TO 12PM</option>
                        <option value={1}>12PM TO 2PM</option>
                        <option value={1}>2PM TO 4PM</option>
                        <option value={1}>4PM TO 6PM</option>
                        <option value={1}>6PM TO 8PM</option>
                        <option value={1}>4PM TO 10PM</option>
                        <option value={1}>10PM TO 12PM</option>
                      </select>
                    </div>
                    <div className='form-group col-md-12'>
                      <textarea
                        className='form-control'
                        id='Textarea'
                        rows={4}
                        placeholder='Your Note '
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className='regerv_btn'>
                    <a href='#' className='regerv_btn_iner'>
                      Send
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-5 col-md-6'>
              <div className='reservation_img'>
                <img src='img/reservation.jpg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*::regervation_part end::*/}
      {/*::doctor_part start::*/}
      {/* <section className='doctor_part section_padding'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-8'>
              <div className='section_tittle text-center'>
                <h2>Experienced Doctors</h2>
                <p>
                  Face replenish sea good winged bearing years air divide
                  wasHave night male also
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-lg-3'>
              <div className='single_blog_item'>
                <div className='single_blog_img'>
                  <img src='img/doctor/doctor_1.png' alt='doctor' />
                  <div className='social_icon'>
                    <a href='#'>
                      {' '}
                      <i className='ti-facebook' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-twitter-alt' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-instagram' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-skype' />{' '}
                    </a>
                  </div>
                </div>
                <div className='single_text'>
                  <div className='single_blog_text'>
                    <h3>DR Adam Billiard</h3>
                    <p>Heart specialist</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3'>
              <div className='single_blog_item'>
                <div className='single_blog_img'>
                  <img src='img/doctor/doctor_4.png' alt='doctor' />
                  <div className='social_icon'>
                    <a href='#'>
                      {' '}
                      <i className='ti-facebook' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-twitter-alt' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-instagram' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-skype' />{' '}
                    </a>
                  </div>
                </div>
                <div className='single_text'>
                  <div className='single_blog_text'>
                    <h3>DR Adam Billiard</h3>
                    <p>Medicine specialist</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3'>
              <div className='single_blog_item'>
                <div className='single_blog_img'>
                  <img src='img/doctor/doctor_2.png' alt='doctor' />
                  <div className='social_icon'>
                    <a href='#'>
                      {' '}
                      <i className='ti-facebook' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-twitter-alt' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-instagram' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-skype' />{' '}
                    </a>
                  </div>
                </div>
                <div className='single_text'>
                  <div className='single_blog_text'>
                    <h3>DR Fred Macyard</h3>
                    <p>CHeart specialist</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3'>
              <div className='single_blog_item'>
                <div className='single_blog_img'>
                  <img src='img/doctor/doctor_3.png' alt='doctor' />
                  <div className='social_icon'>
                    <a href='#'>
                      {' '}
                      <i className='ti-facebook' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-twitter-alt' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-instagram' />{' '}
                    </a>
                    <a href='#'>
                      {' '}
                      <i className='ti-skype' />{' '}
                    </a>
                  </div>
                </div>
                <div className='single_text'>
                  <div className='single_blog_text'>
                    <h3>DR Justin Stuard</h3>
                    <p>Heart specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*::doctor_part end::*/}
      {/* intro_video_bg start*/}
      <section className='intro_video_bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='intro_video_iner text-center'>
                <h2>View Our History</h2>
                <div className='intro_video_icon'>
                  <a
                    id='play-video_1'
                    className='video-play-button popup-youtube'
                    href='https://www.youtube.com/watch?v=pBFQdxA-apI'
                  >
                    <span className='ti-control-play' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* intro_video_bg part start*/}
      {/*::blog_part start::*/}
      <section className='blog_part section_padding'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-8'>
              <div className='section_tittle text-center'>
                <h2>Update From Blog</h2>
                <p>
                  Dt. Punita Srivastava love writing about food, health,
                  wellness, yoga, personal transformation, food psychology and
                  such things. Writing is truly one of her passions in life.
                  Below you will find some of her articles, thoughts, and
                  musings.
                  <br />
                  Click below to grab your seasonal self-care guide and learn
                  how to make peace with your Plate.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-lg-4 col-xl-4'>
              <div className='single-home-blog'>
                <div className='card'>
                  <img
                    src='img/blog/blog_1.png'
                    className='card-img-top'
                    alt='blog'
                  />
                  <div className='card-body'>
                    <ul>
                      <li>
                        <span className='ti-bookmark' />
                        Punita Srivastava
                      </li>
                      {/* <li>
                        <span className='ti-bookmark' />
                        Clinic, doctors
                      </li> */}
                    </ul>
                    <a href='blog.html'>
                      <h5 className='card-title'>
                        Combat stress (and sleep deeper) with this potent secret
                        ingredient.
                      </h5>
                    </a>
                    <a href='#' className='blog_btn'>
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-4 col-xl-4'>
              <div className='single-home-blog'>
                <div className='card'>
                  <img
                    src='img/blog/blog_2.png'
                    className='card-img-top'
                    alt='blog'
                  />
                  <div className='card-body'>
                    <ul>
                      <li>
                        <span className='ti-bookmark' />
                        Punita Srivastava
                      </li>
                    </ul>
                    <a href='blog.html'>
                      <h5 className='card-title'>
                        7 Foods to balance your blood sugar and help fight type
                        2 diabetes.
                      </h5>
                    </a>
                    <a href='#' className='blog_btn'>
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-4 col-xl-4'>
              <div className='single-home-blog'>
                <div className='card'>
                  <img
                    src='img/blog/blog_3.png'
                    className='card-img-top'
                    alt='blog'
                  />
                  <div className='card-body'>
                    <ul>
                      <li>
                        <span className='ti-bookmark' />
                        Punita Srivastava
                      </li>
                    </ul>
                    <a href='blog.html'>
                      <h5 className='card-title'>
                        The art and science of curbing your cravings.
                      </h5>
                    </a>
                    <a href='#' className='blog_btn'>
                      read more
                    </a>
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

export default Homepage;
