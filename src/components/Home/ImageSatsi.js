const ImageSatsi = () => {
	return (
		<div className='brand-area mt-60' style={{ backgroundColor: "#cc8e35" }}>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-8 col-lg-8 col-md-10'>
						<div className='section-tittle section-tittle2 text-center mb-60'>
							<h2>HÌNH ẢNH VỀ SATSI</h2>
							<p style={{ color: "#ddd", textAlign: "justify" }}>
								SATSi luôn thể hiện trách nhiệm xã hội thông qua các hoạt động
								đồng hành tư vấn, hướng nghiệp và đào tạo nguồn nhân lực tinh
								hoa Việt.
							</p>
						</div>
					</div>
				</div>
				<div className='row justify-content-center align-items-end'>
					<div className='gallery-area'>
						{/* <div class="row justify-content-center">
                                <div class="col-xl-8 col-lg-8 col-md-10">
                                    <div class="section-tittle text-center mb-60">
                                        <h2>Projects we have done.</h2>
                                        <p>
                                            Combine sections from Olla's vast component library and create
                                            beautiful.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
						<div className='row'>
							<div className='col-lg-4 col-md-12 col-sm-12'>
								<div className='box mb-30'>
									<div
										className='gallery-img small-img'
										style={{
											backgroundImage:
												"url(images/du-hoc-duc-eduland-1024x683.jpg)",
											borderRadius: "20px",
										}}
									/>
								</div>
							</div>
							<div className='col-lg-4 col-md-12 col-sm-12'>
								<div className='box mb-30'>
									<div
										className='gallery-img small-img'
										style={{
											backgroundImage:
												"url(images/du-hoc-nghe-Duc-nha-hang-khach-san-750x400-1.png)",
											borderRadius: "20px",
										}}
									/>
								</div>
							</div>
							<div className='col-lg-4 col-md-12 col-sm-12'>
								<div className='box mb-30'>
									<div
										className='gallery-img small-img'
										style={{
											backgroundImage:
												"url(images/tuy-n-sinh-h-c-ngh-c-khi-i-n-i-n-t-elektroniker-1024x683.jpg)",
											borderRadius: "20px",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageSatsi;
