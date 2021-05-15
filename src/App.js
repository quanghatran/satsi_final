import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContactHeader from "./components/ContactHeader";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
import Slogan from "./components/Slogan";
import Suggestions from "./components/Suggestions";

function App() {
	return (
		<Router>
			<ContactHeader />
			<Logo />
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
			<Suggestions />
			<Slogan />
			<Footer />
			<BackTop />
		</Router>
	);
}

export default App;
