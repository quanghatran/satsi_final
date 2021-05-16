import styled from "styled-components";
import { Wrapper, Button } from "../styled";
import nam from "../../images/nam.jpg";

const Reputaion = () => {
	return (
		<div className='brand-area mt-30'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-8 col-lg-8 col-md-10'>
						<div className='section-tittle section-tittle2 text-center mb-60'>
							<h2 style={{ color: "#cc8e35" }}>
								<a className='titleComponent-reputation' href='#'>
									SATSI - UY TÍN SỐ MỘT VỀ DU HỌC ĐỨC
								</a>
							</h2>
						</div>
					</div>
				</div>
				<div className='row justify-content-center align-items-end'>
					<div className='container'>
						<div className='brand-active text-center slick-initialized slick-slider'>
							<div className='row flex-wrap'>
								<div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
									<div
										className='single-cat text-center bg-light mb-30'
										style={{ borderRadius: "20px" }}
									>
										<img
											src='../../images/banner5.png'
											alt=''
											className='rounded-circle mt-30 satsi-reputation'
										/>
										<div className='reputation-title'>
											<a style={{ color: "#cc8e35" }} href='#'>
												KÝ KẾT ĐỘC QUYỀN TẬP ĐOÀN ĐỨC
											</a>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
									<div
										className='single-cat text-center bg-light mb-30'
										style={{ borderRadius: "20px" }}
									>
										<img
											src='images/Du-hoc-Uc-nganh-Du-lich-Nha-hang-Khach-san_5-1024x681.jpg'
											alt=''
											className='rounded-circle mt-30 satsi-reputation'
										/>
										<div className='reputation-title'>
											<a style={{ color: "#cc8e35" }} href='#'>
												CƠ SỞ VẬT CHẤT HIỆN ĐẠI, KHANG TRANG
											</a>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
									<div
										className='single-cat text-center bg-light mb-30'
										style={{ borderRadius: "20px" }}
									>
										<img
											src='images/tuy-n-sinh-h-c-ngh-c-khi-i-n-i-n-t-elektroniker-1024x683.jpg'
											alt=''
											className='rounded-circle mt-30 satsi-reputation'
										/>
										<div className='reputation-title' style={{}}>
											<a style={{ color: "#cc8e35" }} href='#'>
												LỘ TRÌNH HỌC TẬP RÕ RÀNG CỤ THỂ
											</a>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
									<div
										className='single-cat text-center bg-light mb-30'
										style={{ borderRadius: "20px" }}
									>
										<img
											src='images/du-hoc-duc-eduland-1024x683.jpg'
											alt=''
											className='rounded-circle mt-30 satsi-reputation'
										/>
										<div className='reputation-title'>
											<a style={{ color: "#cc8e35" }} href='#'>
												PHẦN MỀM HỖ TRỢ HỌC THẬP THÔNG TIN
											</a>
										</div>
									</div>
								</div>
							</div>
							<a
								href='#'
								className='btn_1 brand-btn mt-10 bg-transparent border-white'
							>
								ĐĂNG KÝ NGAY
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reputaion;
