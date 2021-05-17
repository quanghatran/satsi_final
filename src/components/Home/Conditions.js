const Conditions = () => {
	return (
		<div className='brand-area' style={{ backgroundColor: "#041735" }}>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-8 col-lg-8 col-md-10'>
						<div className='section-tittle section-tittle2 text-center mb-30'>
							<h2>
								<a className='title titleComponent-images' href='#'>
									ĐIỀU KIỆN THAM GIA ỨNG TUYỂN
								</a>
							</h2>
							<p style={{ color: "#ddd", textAlign: "justify" }}>
								Nếu bạn đáp ứng đủ các điều kiện dưới đây, kết nối ngay với
								SATSi để lên đường du học tại CHLB Đức
							</p>
						</div>
						<div className='conditions'>
							<div className='project-caption mb-30'>
								<div className='collapse-wrapper'>
									<div className='accordion mb-10'>
										<div className=''>
											<a
												href='#first-condition'
												className='condition-title'
												data-toggle='collapse'
											>
												ĐIỀU KIỆN I
											</a>
											<div
												id='first-condition'
												className='collapse text-white mr-25 ml-25 mt-15 mb-15 text-center'
											>
												Nam, Nữ có độ tuổi từ 18-33 tuổi (tùy ngành nghề) và đã
												tốt nghiệp THPT trở lên.
											</div>
										</div>
									</div>
									<div className='accordion mb-10'>
										<div className=''>
											<a
												href='#second-condition'
												className='condition-title'
												data-toggle='collapse'
											>
												ĐIỀU KIỆN II
											</a>
											<div
												id='second-condition'
												className='collapse text-white mr-25 ml-25 mt-15 mb-15 text-center'
											>
												Lý lịch trong sạch. Không mắc các bệnh viêm gan B, C và
												các bệnh truyền nhiễm.
											</div>
										</div>
									</div>
									<div className='accordion mb-10'>
										<div className=''>
											<a
												href='#third-condition'
												className='condition-title'
												data-toggle='collapse'
											>
												ĐIỀU KIỆN III
											</a>
											<div
												id='third-condition'
												className='collapse text-white mr-25 ml-25 mt-15 mb-15 text-center'
											>
												Sở hữu chứng chỉ B1/B2 tiếng Đức có thể làm thủ tục đăng
												ký du học ngay hôm nay (chưa có sẽ được đào tạo tại
												SATSi).
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
