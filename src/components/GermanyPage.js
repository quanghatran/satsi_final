import IntroGermanySide from "./GermanyPage/IntroGermanySide";
import GeneralChoose from "./GermanyPage/GeneralChoose";
import WhyChoose from "./GermanyPage/WhyChoose";
import ImageSlider from "./Home/ImageSlider";
import NursingInfo from "./GermanyPage/NursingInfo";
import ConstructionInfo from "./GermanyPage/ConstructionInfo";
import GermanySlider from "./GermanyPage/GermanySlider";
import HotelInfo from "./GermanyPage/HotelInfo";
import MechanicalInfo from "./GermanyPage/MechanicalInfo";
import LogisticInfo from "./GermanyPage/LogisticInfo";
import Itinerary from "./GermanyPage/Itinerary";
import Air from "./GermanyPage/Air";
import Opportunities from "./GermanyPage/Opportunities";
import BoxContact from "./GermanyPage/BoxContact";
import Activities from "./GermanyPage/Activities";
import Partners from "./GermanyPage/Partners";
import HotJobs from "./GermanyPage/HotJobs";
// import ImageSlider from "./gẺ/ImageSlider";

const GermanyPage = () => {
	return (
		<div>
			{/* <ImageSlider /> */}
			<GermanySlider />
			<IntroGermanySide />
			<WhyChoose />
			<GeneralChoose />
			{/* <ReasonsChoose /> */}
			<NursingInfo />
			<ConstructionInfo />
			<HotelInfo />
			<MechanicalInfo />
			<LogisticInfo />
			<Itinerary />
			<Air />
			<Opportunities />

			<HotJobs />
			<Partners />
			<Activities />
			<BoxContact />
		</div>
	);
};

export default GermanyPage;
