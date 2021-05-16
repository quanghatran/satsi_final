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
						<p style={{ textAlign: "justify", color: "#041735" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non
							molestias quo saepe quasi quaerat quas atque neque blanditiis
							voluptatibus fugit impedit rem, nisi nesciunt facere odit! Eius
							odio repellat accusamus incidunt amet nemo iste earum corrupti
							deleniti quaerat quidem nam enim ipsam magni recusandae placeat,
							laborum eaque culpa dolores. Repudiandae, velit! Distinctio fugit
							fugiat rerum laudantium labore nihil. Accusantium temporibus ab
							dignissimos in quaerat, delectus officia, voluptatem tempore,
							laborum dolorum nemo assumenda commodi suscipit. Commodi
							perspiciatis architecto, possimus saepe beatae placeat voluptatem
							animi ducimus, eum error veniam quam quia fugiat maiores quasi?
							Dolores, ex fugit nihil laboriosam itaque, voluptatum beatae
							laborum culpa maxime alias ipsa. Voluptates iure possimus dolorem
							iste doloribus ipsam, vero consequatur veniam perspiciatis natus
							ut sed aperiam, ea necessitatibus error incidunt ad, blanditiis
							distinctio qui.
						</p>
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
