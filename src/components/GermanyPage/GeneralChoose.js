import Commitments from "./Commitments";
import ReasonsChoose from "./ReasonsChoose";

const GeneralChoose = () => {
	return (
		<section className='categories-area mt-60 '>
			<div className='cover_certificate'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-xl-6 col-lg-6 col-md-12 bg-danger'>
							<div className='mb-30 mt-30'>
								<ReasonsChoose />
							</div>
						</div>
						<div className='col-xl-6 col-lg-6 col-md-12 bg-warning'>
							<div className='mb-30 mt-30'>
								<Commitments />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GeneralChoose;
