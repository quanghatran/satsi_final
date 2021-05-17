// import styled from "styled-components";
// import { Wrapper } from "../styled/index";
// import ReactPlayer from "react-player";

const Introduce = () => {
	return (
		<div className='gallery-area pt-60'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-8 col-lg-8 col-md-10 mb-30'>
						<div className='section-tittle section-tittle2 text-center'>
							<h2 style={{ color: "#041735" }}>
								<a className='title titleComponent-introduce' href='#'>
									SATSI - VIỆN ĐÀO TẠO KHỞI NGHIỆP VÀ ỨNG DỤNG CÔNG NGHỆ CAO
								</a>
							</h2>
							<p style={{ color: "#041735" }}>
								SATSi là đơn vị trực thuộc Bộ Khoa học và Công nghệ, được thành
								lập bởi đội ngũ chuyên gia hàng đầu và tâm huyết với mong muốn
								trở thành cánh tay nối dài, cầu nối cho thế hệ trẻ đi đến tương
								lai.
							</p>
						</div>
					</div>
				</div>
				<div className='row flex-wrap'>
					<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
						<div className='single-cat text-center mb-30'>
							<iframe
								width='100%'
								height={400}
								src='https://www.youtube.com/embed/HSsqzzuGTPo'
								title='YouTube video player'
								frameBorder={0}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							/>
						</div>
					</div>
					<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
						<div style={{ textAlign: "justify", color: "#041735" }}>
							<p>
								Viện Đào tạo khởi nghiệp và Ứng dụng KHCN cao - SATSi là đơn vị
								trực thuộc Bộ Khoa học và Công nghệ. Đội ngũ đào tạo của Viện là
								những giáo sư, tiến sĩ trong lĩnh vực ứng dụng khoa học, công
								nghệ, kỹ thuật tiên tiến, đào tạo khởi nghiệp.
							</p>
							<div>
								Với 3 mục tiêu chính, SATSi tự hào nêu cao khẩu hiệu “Thắp sáng
								ước mơ - chung tay đào tạo nguồn nhân lực tinh hoa Việt”:
								<div className='ml-30'>
									<p>
										- Góp phần đẩy mạnh phát triển nguồn nhân lực Việt lên tầm
										cỡ thế giới qua các chương trình đào tạo và việc làm tốt
										nhất trên thế giới.
									</p>
									<p>
										- Đảm bảo đáp ứng đầy đủ mối quan tâm hàng đầu của các đơn
										vị đối tác về chất lượng tuyển sinh.
									</p>
									<p>
										- Đào tạo ngoại ngữ, tư vấn hướng nghiệp, bổ trợ kỹ năng
										mềm, hỗ trợ giúp học viên thích nghi với một trường học tập
										và làm việc trong thời gian ngắn nhất
									</p>
								</div>
							</div>
							{/* <p>
								<span className='blod'>Tầm nhìn:</span> Trở thành đơn vị hàng
								đầu trong lĩnh vực đào tạo khởi nghiệp và ứng dụng khoa học công
								nghệ cao, hướng tới toàn cầu hóa.
							</p> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// const IntroduceWrapper = styled(Wrapper)`
//     padding: 3rem 0;
// `

// const Description = styled.div`
//     width: 80%;
//     margin: 0 auto;
//     margin-bottom: 2.5rem;
//     text-align: center;
//     & h1 {
//         font-size: ${props => props.theme.fontSize.h1};
//         padding: 1.5rem 5rem;
//     }

//     & p{
//         font-size: ${props => props.theme.fontSize.p};
//         line-height: 3rem
//     }
// `

// const VideoContainer = styled.div`
//     display: flex;
//     height: 35rem;
//     border: 1px solid black;
// `

// const PlayerContainer = styled.div`
//     border: 1px solid black;
//     flex: 50%;
//     text-align: center;
// `

// const VideoDescription = styled.div`
//     border: 1px solid black;
//     flex: 50%;
//     text-align: center;
//     background-color: ${props => props.theme.colors.yellow};
//     color: ${props => props.theme.colors.text};
//     padding: 4rem;
//     font-size: ${props => props.theme.fontSize.p};;
//     line-height: 2.5rem;
// `

export default Introduce;
