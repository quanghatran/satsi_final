// import reason1 from "../../images/about1.jpg";
import image1 from "../../images/Berlin-Large-Landscape-1.png";

const Commitments = () => {
	return (
		<section className='categories-area'>
			<div className='cover_certificate'>
				<div className='row align-items-center text-white'>
					<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 '>
						<div className='bg-primary'>
							<div className='section-tittle mb-30'>
								{/* <h2 className='text-white'>Cam kết 1</h2> */}
								<img
									className='w-100'
									style={{ height: "200px", "object-fit": " cover" }}
									src={image1}
									alt=''
								/>
								{/* <p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
									neque nulla quaerat molestiae. Accusantium quo modi repellat
									officia cum quia.
								</p> */}
							</div>
						</div>
					</div>
					<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 '>
						<div className='bg-primary'>
							<div className='section-tittle mb-30 text-white'>
								<h2 classN ame='text-white'>
									Cam kết 2
								</h2>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
									neque nulla quaerat molestiae. Accusantium quo modi repellat
									officia cum quia.
								</p>
							</div>
						</div>
					</div>
					<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 '>
						<div className='bg-primary'>
							<div className='section-tittle '>
								<h2 classN ame='text-white'>
									Cam kết 3
								</h2>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
									neque nulla quaerat molestiae. Accusantium quo modi repellat
									officia cum quia.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Commitments;
