const Conditions = () => {
	return (
		<div className='brand-area' style={{ backgroundColor: "#041735" }}>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-8 col-lg-8 col-md-10'>
						<div className='section-tittle section-tittle2 text-center mb-30'>
							<h2>ĐIỀU KIỆN THAM GIA ỨNG TUYỂN</h2>
							<p style={{ color: "#ddd", textAlign: "justify" }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
								quibusdam repellendus reiciendis excepturi veniam ex,
								consectetur necessitatibus nemo illum tenetur dolorem dolor
							</p>
						</div>
						<div className='conditions'>
							<div className='project-caption mb-30'>
								<div className='collapse-wrapper'>
									<div className='accordion mb-10'>
										<div className='accordion-item'>
											<a
												href='#first-condition'
												className='condition-title'
												data-toggle='collapse'
											>
												ĐIỀU KIỆN I
											</a>
											<div
												id='first-condition'
												className='collapse text-white mr-25 ml-25'
											>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis
												nostrud exercitation ullamco laboris nisi ut aliquip ex
												ea commodo consequat.
											</div>
										</div>
									</div>
									<div className='accordion mb-10'>
										<div className='accordion-item'>
											<a
												href='#second-condition'
												className='condition-title'
												data-toggle='collapse'
											>
												ĐIỀU KIỆN II
											</a>
											<div
												id='second-condition'
												className='collapse text-white mr-25 ml-25'
											>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis
												nostrud exercitation ullamco laboris nisi ut aliquip ex
												ea commodo consequat.
											</div>
										</div>
									</div>
									<div className='accordion mb-10'>
										<div className='accordion-item'>
											<a
												href='#third-condition'
												className='condition-title'
												data-toggle='collapse'
											>
												ĐIỀU KIỆN II
											</a>
											<div
												id='third-condition'
												className='collapse text-white mr-25 ml-25'
											>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis
												nostrud exercitation ullamco laboris nisi ut aliquip ex
												ea commodo consequat.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Conditions;
