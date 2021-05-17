import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import AppAdmin from "./App";

ReactDOM.render(
	<BrowserRouter>
		<AppAdmin />
	</BrowserRouter>,
	document.getElementById("root")
);

serviceWorker.unregister();
