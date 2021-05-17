import satsiImg1 from "../../images/satsiImg1.jpg";
import satsiImg2 from "../../images/satsiImg6.jpg";
import satsiImg3 from "../../images/satsiImg3.jpg";
import satsiImg4 from "../../images/satsiImg2.jpg";

const ImageSatsi = () => {
	// const handleRenderImages = () => {
	let arrImages = [satsiImg1, satsiImg2, satsiImg3, satsiImg4];

	// return <div>{arrImages.map((img) => console.log(img))}</div>;
	// };

	return (
		<div className='brand-area mt-60' style={{ backgroundColor: "#cc8e35" }}>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-8 col-lg-8 col-md-10'>
						<div className='section-tittle section-tittle2 text-center mb-60'>
							<h2>
								<a className='title titleComponent-images' href='#'>
									HÌNH ẢNH VỀ SATSI
								</a>
							</h2>
							<p style={{ color: "#ddd", textAlign: "justify" }}>
								SATSi luôn thể hiện trách nhiệm xã hội thông qua các hoạt động
								đồng hành tư vấn, hướng nghiệp và đào tạo nguồn nhân lực tinh
								hoa Việt.
							</p>
						</div>
					</div>
				</div>
				<div className='row justify-content-center align-items-end'>
					<div className='gallery-area' style={{ height: "270px" }}>
						<div className='row'>
							{arrImages.map((image) => (
								<div className='col-lg-3 col-md-6 col-sm-12'>
									<div className='box mb-30'>
										<div
											className='gallery-img small-img'
											style={{
												backgroundImage: `url(${image})`,
												borderRadius: "20px",
											}}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageSatsi;
