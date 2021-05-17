import styled from "styled-components";
import Commitment from "./Home/Commitment";
import ImageSlider from "./Home/ImageSlider";
import Introduce from "./Home/Introduce";
import Reputation from "./Home/Reputation";
import Selections from "./Home/Selections";
import Certificate from "./Home/Certificate";
import Itinerary from "./Home/Itinerary";
import ImageSatsi from "./Home/ImageSatsi";
import News from "./Home/News";
import Partners from "./Home/Partners";
import Testimonials from "./Home/Testimonials";
import Conditions from "./Home/Conditions";
import Suggestions from "./Home/Suggestions";

const Home = () => {
	return (
		<HomeContainer>
			<ImageSlider />
			<Introduce />
			<Reputation />
			<Commitment />
			<Certificate />
			<Selections />
			<Itinerary />
			<ImageSatsi />
			<Testimonials />
			<News />
			<Conditions />
			<Partners />
			<Suggestions />
		</HomeContainer>
	);
};

const HomeContainer = styled.div``;

export default Home;
