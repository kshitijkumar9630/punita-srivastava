import React from 'react';

const Contacts = () => {
  return (
    <div>
      {/* breadcrumb start*/}
      <section
        className='breadcrumb breadcrumb_bg'
        style={{ marginTop: '100px' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='breadcrumb_iner'>
                <div className='breadcrumb_iner_item'>
                  <h2>contact</h2>
                  <p>
                    Home<span>/</span>contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb start*/}
      {/* ================ contact section start ================= */}
      <section className='contact-section section_padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='contact-title'>Get in Touch</h2>
            </div>
            <div className='col-lg-8'>
              <form
                className='form-contact contact_form'
                action='contact_process.php'
                method='post'
                id='contactForm'
                noValidate='novalidate'
              >
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <textarea
                        className='form-control w-100'
                        name='message'
                        id='message'
                        cols={30}
                        rows={9}
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Message'"
                        placeholder='Enter Message'
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='name'
                        id='name'
                        type='text'
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder='Enter your name'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='email'
                        id='email'
                        type='email'
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder='Enter email address'
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='subject'
                        id='subject'
                        type='text'
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder='Enter Subject'
                      />
                    </div>
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <button type='submit' className='btn_2'>
                    Send mail!
                  </button>
                </div>
              </form>
            </div>
            <div className='col-lg-4'>
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-home' />
                </span>
                <div className='media-body'>
                  <p>
                    <b>Dt. Punita Srivastava</b>
                  </p>
                  <p>
                    Shiza Clinic, Bandh Toli Road, <br />
                    Ranchi, Jharkhand <br />
                    Landmark: Near Allahabad Bank, <br />
                    PIN: 835303
                  </p>
                </div>
              </div>
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-tablet' />
                </span>
                <div className='media-body'>
                  <p>
                    <b>+91 6207367341</b>
                  </p>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-email' />
                </span>
                <div className='media-body'>
                  <p>
                    <b>Punitanutritionist.com</b>
                  </p>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ contact section end ================= */}
    </div>
  );
};

export default Contacts;
