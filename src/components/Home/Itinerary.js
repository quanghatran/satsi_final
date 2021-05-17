const Itinerary = () => {
	return (
		<section className='categories-area pt-60'>
			<div className='container'>
				<div
					className='wrapper-color'
					style={{
						border: "1px solid #041735",
						boxShadow: "1px -2px 5px #041735",
					}}
				>
					<div className='row justify-content-center'>
						<div className='col-xl-8 col-lg-8 col-md-12'>
							<div className='section-tittle text-center mb-50 mt-50'>
								<h2 style={{ color: "#041735" }}>
									<a className='title titleComponent-introduce' href='#'>
										LỘ TRÌNH DU HỌC TẠI ĐỨC
									</a>
								</h2>
								<p style={{ textAlign: "justify" }}>
									Lộ trình du học được SATSi xây dựng rõ ràng, công khai và minh
									bạch. Đặc biệt, SATSi luôn ở bên đồng hành và hỗ trợ học viên
									trong suốt hành trình du học.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Itinerary;
