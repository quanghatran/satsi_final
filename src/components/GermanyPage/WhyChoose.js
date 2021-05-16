import image1 from "../../images/Berlin-Large-Landscape-1.png";

const WhyChoose = () => {
	return (
		<section className='categories-area mt-60'>
			<div className='cover_certificate'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-xl-8 col-lg-8 col-md-6 col-sm-12'>
							<div
								className='pr-30 pt-15 pl-30 pb-15'
								style={{ height: "300px", "background-color": "#cc8e35" }}
							>
								<div className='section-tittle mb-30'>
									<h2 className='text-white'>TẠI SAO NÊN DU HỌC NGHỀ ĐỨC</h2>
								</div>
								<p
									style={{
										textAlign: "justify",
										color: "#ddd",
										height: "70px",
										overflow: "hidden",
									}}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Commodi dolorem corporis, minus amet natus eum, nobis quod
									necessitatibus facere, esse explicabo? Doloremque tempore
									itaque sequi, tempora beatae alias dolor a nihil distinctio
									odit vero adipisci totam modi reiciendis vel soluta.
									Voluptatum, natus. Eveniet porro ipsam nam officiis adipisci
									exercitationem ullam atque! Quos, amet. Modi cum in sed error
									nostrum velit molestias accusamus temporibus ullam, cupiditate
									expedita obcaecati odio, pariatur sapiente qui asperiores
									magnam tenetur et. Tempora quod excepturi debitis non,
									deserunt dicta consequatur necessitatibus maxime, accusantium
									ipsum laborum vel nesciunt corrupti. Ullam harum a ad vero ea
									possimus pariatur ratione?
								</p>
								<a
									href='#'
									className='btn_1 brand-btn mt-10 bg-transparent border-white'
								>
									ĐĂNG KÝ NGAY
								</a>
							</div>
						</div>
						<div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
							<img
								className='w-100'
								style={{ height: "300px" }}
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

export default WhyChoose;
