const News = () => {
	return (
		<div className='gallery-area'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-8 col-lg-8 col-md-10'>
						<div className='section-tittle section-tittle2 text-center mb-30 mt-30'>
							<h2 style={{ color: "#041735" }}>TIN TỨC &amp; SỰ KIỆN</h2>
						</div>
					</div>
				</div>
				<div className='row flex-wrap'>
					<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
						<div
							className='single-cat text-center mb-30'
							style={{ color: "#cc8e35" }}
						>
							<div className='images-news'>
								<img
									src='images/du-hoc-nghe-Duc-nha-hang-khach-san-750x400-1.png	'
									alt=''
									style={{ width: "100%", height: "300px", objectFit: "cover" }}
								/>
							</div>
							<div
								className='info-news'
								style={{
									fontWeight: 600,
									paddingBottom: "30px",
									paddingTop: "30px",
									margin: "0 auto",
								}}
							>
								<div className='users-testimonial'>
									<p
										style={{
											fontWeight: 700,
											textTransform: "uppercase",
											color: "#041735",
											textAlign: "start",
										}}
									>
										TIÊU ĐỀ BÀI VIẾT
									</p>
									<p
										className='text-dark'
										style={{ fontWeight: 200, textAlign: "start" }}
									>
										<span className='times-news'>25-06-2021 |</span>
										<span className='category-news'>Tin tức |</span>
										<span className='author-news'>Admin</span>
									</p>
									<p
										className='content-testimonial'
										style={{
											fontSize: "13px",
											textAlign: "justify",
											overflow: "hidden",
										}}
									>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
										rerum laudantium ratione totam cum adipisci commodi sint
										laborum aperiam et!
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
						<div className='row flex-wrap mb-20'>
							<div className='col-xl-4 col-lg-4 col-md-4 col-sm-4'>
								<div className='sub-images-news'>
									<img
										src='images/du-hoc-nghe-Duc-nha-hang-khach-san-750x400-1.png	'
										alt=''
										style={{
											width: "100%",
											height: "100px",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
							<div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
								<div
									className='info-news'
									style={{ fontWeight: 600, margin: "0 auto" }}
								>
									<div className='sub-users-testimonial'>
										<p className='sub-users-testimonial-title'>
											TIÊU ĐỀ BÀI VIẾT
										</p>
										<p className='text-dark sub-info-news'>
											<span className='times-news'>25-06-2021 |</span>
											<span className='category-news'>Tin tức |</span>
											<span className='author-news'>Admin</span>
										</p>
										<p className='sub-content-testimonial'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Eum rerum laudantium ratione totam cum adipisci commodi
											sint laborum aperiam et!
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='row flex-wrap mb-20'>
							<div className='col-xl-4 col-lg-4 col-md-4 col-sm-4'>
								<div className='sub-images-news'>
									<img
										src='images/du-hoc-nghe-Duc-nha-hang-khach-san-750x400-1.png	'
										alt=''
										style={{
											width: "100%",
											height: "100px",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
							<div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
								<div
									className='info-news'
									style={{ fontWeight: 600, margin: "0 auto" }}
								>
									<div className='sub-users-testimonial'>
										<p className='sub-users-testimonial-title'>
											TIÊU ĐỀ BÀI VIẾT
										</p>
										<p className='text-dark sub-info-news'>
											<span className='times-news'>25-06-2021 |</span>
											<span className='category-news'>Tin tức |</span>
											<span className='author-news'>Admin</span>
										</p>
										<p className='sub-content-testimonial'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Eum rerum laudantium ratione totam cum adipisci commodi
											sint laborum aperiam et!
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='row flex-wrap mb-20'>
							<div className='col-xl-4 col-lg-4 col-md-4 col-sm-4'>
								<div className='sub-images-news'>
									<img
										src='images/du-hoc-nghe-Duc-nha-hang-khach-san-750x400-1.png	'
										alt=''
										style={{
											width: "100%",
											height: "100px",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
							<div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
								<div
									className='info-news'
									style={{ fontWeight: 600, margin: "0 auto" }}
								>
									<div className='sub-users-testimonial'>
										<p className='sub-users-testimonial-title'>
											TIÊU ĐỀ BÀI VIẾT
										</p>
										<p className='text-dark sub-info-news'>
											<span className='times-news'>25-06-2021 |</span>
											<span className='category-news'>Tin tức |</span>
											<span className='author-news'>Admin</span>
										</p>
										<p className='sub-content-testimonial'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Eum rerum laudantium ratione totam cum adipisci commodi
											sint laborum aperiam et! Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Eum rerum laudantium ratione
											totam cum adipisci commodi sint laborum aperiam et!
										</p>
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

export default News;
