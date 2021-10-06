import React from 'react';

const BlogHome = () => {
  const blogData = [
    {
      postImage: 'img/blog/single_blog_1.png',
      postDate: '7',
      postMonth: 'Dec',
      postTitle:
        'Combat stress (and sleep deeper) with this potent secret ingredient',
      postAuthor: 'Punita Srivastava',
    },
    {
      postImage: 'img/blog/single_blog_2.png',
      postDate: '25',
      postMonth: 'Jan',
      postTitle:
        '7 Foods to balance your blood sugar and help fight type 2 diabetes',
      postAuthor: 'Punita Srivastava',
    },
    {
      postImage: 'img/blog/single_blog_3.png',
      postDate: '15',
      postMonth: 'Jan',
      postTitle: 'The art and science of curbing your cravings',
      postAuthor: 'Punita Srivastava',
    },
  ];

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
                  <h2>Blogs</h2>
                  <p>
                    Home<span>/</span>Blog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb start*/}
      {/*================Blog Area =================*/}
      <section className='blog_area section_padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 mb-5 mb-lg-0'>
              <div className='blog_left_sidebar'>
                {blogData.map((data) => (
                  <article className='blog_item'>
                    <div className='blog_item_img'>
                      <img
                        className='card-img rounded-0'
                        src={data.postImage}
                        alt=''
                      />
                      <a href='#' className='blog_item_date rounded-0'>
                        <h3>{data.postDate} </h3>
                        <h3>{data.postMonth}</h3>
                      </a>
                    </div>
                    <div className='blog_details'>
                      <a className='d-inline-block' href='single-blog.html'>
                        <h2>{data.postTitle}</h2>
                      </a>

                      <ul className='blog-info-link'>
                        <li>
                          <a href='#'>
                            <i className='far fa-user' />
                            {data.postAuthor}
                          </a>
                        </li>
                      </ul>
                      {/* <button className='btn_2 mt-3'>Read More</button> */}
                    </div>
                  </article>
                ))}

                <nav className='blog-pagination justify-content-center d-flex'>
                  <ul className='pagination'>
                    <li className='page-item'>
                      <a href='#' className='page-link' aria-label='Previous'>
                        <i className='ti-angle-left' />
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link'>
                        1
                      </a>
                    </li>
                    <li className='page-item active'>
                      <a href='#' className='page-link'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link' aria-label='Next'>
                        <i className='ti-angle-right' />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================Blog Area =================*/}
    </div>
  );
};

export default BlogHome;
