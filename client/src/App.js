import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { selectPlayersInfo } from "./redux/teams/teams.selector";

import "./App.scss";

import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import Navbar from "./components/navbar/navbar.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
const PlayerInfo = lazy(() =>
  import("./components/player-info/player-info.component")
);
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const PlayersCrosshairs = lazy(() =>
  import("./pages/playerscrosshairs/playerscrosshairs.component")
);
const PlayersSettings = lazy(() =>
  import("./pages/playerssettings/playerssettings.component")
);
const TeamsList = lazy(() => import("./pages/teamslist/teamslist.component"));
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));

const App = ({ checkUserSession, currentUser, info }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>{info ? <PlayerInfo /> : ""}</Suspense>
      <div className={`${info ? "blur" : ""} container`}>
        <Navbar />
        <Header />

        <main className="main-wrapper">
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/players" component={TeamsList} />
                <Route
                  exact
                  path="/players_settings"
                  component={PlayersSettings}
                />
                <Route
                  exact
                  path="/players_crosshairs"
                  component={PlayersCrosshairs}
                />
                <Route
                  exact
                  path="/signin"
                  render={() =>
                    currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
                  }
                />
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  info: selectPlayersInfo,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
