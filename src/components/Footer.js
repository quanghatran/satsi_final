const Footer = () => {
	return (
		<div className='footer-wrapper gray-bg'>
			<div className='footer-area footer-padding'>
				<div className='container'>
					<div className='row justify-content-between'>
						<div className='col-xl-2 col-lg-2 col-md-3 col-sm-12'>
							<div className='single-footer-caption mb-50'>
								<div className='single-footer-caption mb-20'>
									<div className='footer-logo mb-35'>
										<a href='#'>
											<img src='images/logo_satsi_3.png' alt='' />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-xl-2 col-lg-2 col-md-4 col-sm-6'>
							<div className='single-footer-caption mb-50'>
								<div className='footer-tittle'>
									<h4>Truy Cập Nhanh</h4>
									<ul>
										<li>
											<a href='#'>Du Học Đức</a>
										</li>
										<li>
											<a href='#'>Du Học Úc</a>
										</li>
										<li>
											<a href='#'>Đào Tạo Trực Tuyến</a>
										</li>
										{/* <li>
                                                  <a href="https://preview.colorlib.com/theme/olla/#"
                                                      >Tips &amp; Tricks</a
                                                  >
                                              </li> */}
									</ul>
								</div>
							</div>
						</div>
						<div className='col-xl-2 col-lg-2 col-md-4 col-sm-6'>
							<div className='single-footer-caption mb-50'>
								<div className='footer-tittle'>
									<h4>Hỗ Trợ</h4>
									<ul>
										<li>
											<a href='#'>Tin Tức</a>
										</li>
										<li>
											<a href='#'>Hỏi Đáp</a>
										</li>
										<li>
											<a href='#'>Liên Hệ</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='offset-xl-2 col-xl-4 col-lg-5 col-md-8 col-sm-10'>
							<div className='single-footer-caption mb-50'>
								<div className='footer-tittle mb-10'>
									<h4>Newsletter</h4>
									<p>Subscribe newsletter to get updates..</p>
								</div>
								<div className='footer-form mb-40'>
									<div id='mc_embed_signup'>
										<form
											target='_blank'
											method='get'
											className='subscribe_form relative mail_part'
											noValidate='true'
										>
											<input
												type='email'
												name='EMAIL'
												id='newsletter-form-email'
												placeholder='Enter your email'
												className='placeholder hide-on-focus'
											/>
											<div className='form-icon'>
												<button
													type='submit'
													name='submit'
													id='newsletter-submit'
													className='
                                                              email_icon
                                                              newsletter-submit
                                                              button-contactForm
                                                          '
												>
													<img src='images/arrow.svg' alt='' />
												</button>
											</div>
											<div className='mt-10 info' />
										</form>
									</div>
								</div>
								<div className='footer-social'>
									<a href='#'>
										<i className='fab fa-facebook' />
									</a>
									<a href='#'>
										<i className='fab fa-instagram' />
									</a>
									<a href='#'>
										<i className='fab fa-linkedin-in' />
									</a>
									<a href='#'>
										<i className='fab fa-youtube' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='footer-bottom-area'>
				<div className='container'>
					<div className='footer-border'>
						<div className='row'>
							<div className='col-xl-12'>
								<div className='footer-copy-right text-center'>
									<p>
										Copyright © www.satsi.edu.vn | Bản quyền thuộc về thương
										hiệu SATSi
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
