import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./theme/globalStyles";
import Theme from "./theme/theme";

import "./index.css";
import "./style.css";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
