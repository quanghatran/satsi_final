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
									ĐỐI TÁC TẠI ĐỨC VÀ NGÀNH NGHỀ DU HỌC ĐA DẠNG
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
										style={{ borderRadius: "20px", height: "370px" }}
									>
										<img
											src='../../images/banner5.png'
											alt=''
											className='rounded-circle mt-30 satsi-reputation'
										/>
										<div className='reputation-title'>
											<a style={{ color: "#cc8e35" }} href='#'>
												ĐỐI TÁC TẠI ĐỨC VÀ NGÀNH NGHỀ DU HỌC ĐA DẠNG
											</a>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
									<div
										className='single-cat text-center bg-light mb-30'
										style={{ borderRadius: "20px", height: "370px" }}
									>
										<img
											src='images/Du-hoc-Uc-nganh-Du-lich-Nha-hang-Khach-san_5-1024x681.jpg'
											alt=''
											className='rounded-circle mt-30 satsi-reputation'
										/>
										<div className='reputation-title'>
											<a style={{ color: "#cc8e35" }} href='#'>
												HỢP TÁC ĐỘC QUYỀN VỚI ĐH HÀ NỘI ĐÀO TẠO TIẾNG ĐỨC CHO
												HỌC VIÊN
											</a>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
									<div
										className='single-cat text-center bg-light mb-30'
										style={{ borderRadius: "20px", height: "370px" }}
									>
										<img
											src='images/tuy-n-sinh-h-c-ngh-c-khi-i-n-i-n-t-elektroniker-1024x683.jpg'
											alt=''
											className='rounded-circle mt-30 satsi-reputation'
										/>
										<div className='reputation-title' style={{}}>
											<a style={{ color: "#cc8e35" }} href='#'>
												PHẦN MỀM HỖ TRỢ HỌC TẬP THÔNG MINH - HỌC TỪ XA
											</a>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
									<div
										className='single-cat text-center bg-light mb-30'
										style={{ borderRadius: "20px", height: "370px" }}
									>
										<img
											src='images/du-hoc-duc-eduland-1024x683.jpg'
											alt=''
											className='rounded-circle mt-30 satsi-reputation'
										/>
										<div className='reputation-title'>
											<a style={{ color: "#cc8e35" }} href='#'>
												LỘ TRÌNH HỌC TẬP VÀ PHÁT TRIỂN NGHỀ NGHIỆP RÕ RÀNG
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
