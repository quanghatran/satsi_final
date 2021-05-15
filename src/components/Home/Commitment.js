import styled from "styled-components";
import { Wrapper } from "../styled";
import nam from "../../images/nam.jpg";

const Commitment = () => {
	return (
		<div className='gallery-area pt-60'>
			<div className='container'>
				<div className='row mb-60'>
					<div className='col-lg-4 col-md-12 col-sm-12'>
						<div className='box mb-30'>
							<div
								className='gallery-img small-img'
								style={{
									backgroundImage: "url(images/about1.jpg)",
									boxShadow: "1px -2px 5px #041735",
								}}
							/>
							<div className='text-center mt-30'>
								<h4 style={{ fontSize: "2.5rem" }}>
									Cam kết chất lượng đầu ra
								</h4>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-12 col-sm-12'>
						<div className='box mb-30'>
							<div
								className='gallery-img small-img'
								style={{
									backgroundImage: "url(images/Berlin-Large-Landscape-1.png)",
									boxShadow: "1px -2px 5px #041735",
								}}
							/>
							<div className='text-center mt-30'>
								<h4 style={{ fontSize: "2.5rem" }}>
									Cam kết thu nhập đạt trên XX
								</h4>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-12 col-sm-12'>
						<div className='box mb-30'>
							<div
								className='gallery-img small-img'
								style={{
									backgroundImage: "url(images/h1_hero1.jpg)",
									boxShadow: "1px -2px 5px #041735",
								}}
							/>
							<div className='text-center mt-30'>
								<h4 style={{ fontSize: "2.5rem" }}>
									Chứng chỉ, bằng cấp quốc tế
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Commitment;
