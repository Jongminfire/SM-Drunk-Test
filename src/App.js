import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import WelcomePageContainer from "./Container/WelcomePageContainer";
import MainPageContainer from "./Container/MainPageContainer";
import ResultPageContainer from "./Container/ResultPageContainer";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={WelcomePageContainer} exact />
				<Route path="/main" component={MainPageContainer} exact />
				<Route path="/result" component={ResultPageContainer} exact />
			</Switch>
		</Router>
	);
};

export default App;
