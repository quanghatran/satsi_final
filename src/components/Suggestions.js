const Suggestions = () => {
	return (
		<div className='contact pt-0 pb-30' style={{ backgroundColor: "#041735" }}>
			<div className='container'>
				<div className='row'>
					{/* <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div> */}
					<div className='row justify-content-center'>
						<div className='col-xl-8 col-lg-8 col-md-10'>
							<div className='section-tittle section-tittle2 text-center mb-30 mt-30'>
								<h2 style={{ color: "#cc8e35" }}>
									MUỐN DU HỌC ĐỨC NHƯNG CHƯA BIẾT CHUẨN BỊ TỪ ĐÂU?
								</h2>
								<p style={{ color: "#cc8e35" }}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Soluta facere odit iusto dolorum quis omnis possimus provident
									corporis voluptates est.
								</p>
							</div>
						</div>
					</div>
					<div className='col-lg-12 col-md-12 col-sm-12'>
						<form
							className='form-contact contact_form'
							action='contact_process.php'
							method='post'
							id='contactForm'
							noValidate='novalidate'
						>
							<div className='row'>
								<div className='col-sm-6'>
									<div className='form-group'>
										<input
											className='form-control valid'
											name='name'
											id='name'
											type='text'
											onfocus="this.placeholder = ''"
											onblur="this.placeholder = 'Enter your name'"
											placeholder='Enter your name'
											style={{ borderColor: "#fff" }}
										/>
									</div>
								</div>
								<div className='col-sm-6'>
									<div className='form-group'>
										<input
											className='form-control valid'
											name='email'
											id='email'
											type='email'
											onfocus="this.placeholder = ''"
											onblur="this.placeholder = 'Enter email address'"
											placeholder='Email'
											style={{ borderColor: "#fff" }}
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
											style={{ borderColor: "#fff" }}
										/>
									</div>
								</div>
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
											placeholder=' Enter Message'
											style={{ borderColor: "#fff" }}
											defaultValue={""}
										/>
									</div>
								</div>
							</div>
							<div className='form-group mt-3'>
								<button
									type='submit'
									className='button button-contactForm boxed-btn'
								>
									GỬI THÔNG TIN
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Suggestions;
