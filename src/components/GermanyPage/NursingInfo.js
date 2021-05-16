import image1 from "../../images/du-hoc-duc-eduland-1024x683.jpg";

const NursingInfo = () => {
	return (
		<section className='categories-area mt-60'>
			<div className='cover_certificate'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-xl-8 col-lg-8 col-md-6 col-sm-12'>
							<div
								className='pr-30 pt-15 pl-30 pb-15'
								style={{ height: "300px", "background-color": "#041735" }}
							>
								<div className='section-tittle mb-30'>
									<h2 className='text-white'>THÔNG TIN NGÀNH ĐIỀU DƯỠNG</h2>
								</div>
							</div>
						</div>
						<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
							<img
								className='w-100'
								style={{ height: "300px", objectFit: "cover" }}
								src={image1}
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NursingInfo;
