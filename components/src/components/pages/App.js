import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "../../routes";
import Header from "../layout/Header";
import Aside from "../layout/Aside";
import Main from "../layout/Main";
import RightSection from "../layout/RightSection";
import Template, { Demo } from "../layout/Template";
import PageContainer from "../layout/PageContainer";
import "../styles/App.scss";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const openNav = () => setNavOpen(true);
  const closeNav = () => setNavOpen(false);
  return (
    <div className="App">
      <Router basename="/components">
        <Header openNav={openNav}></Header>
        <PageContainer>
          <Aside open={navOpen} closeNav={closeNav} />
          <Main>
            <Switch>
              {Routes.map(item => (
                <Route path={item.url} exact={true} key={`route1-${item.url}`}>
                  <Template item={item} />
                </Route>
              ))}
            </Switch>
          </Main>
          <RightSection>
            <Switch>
              {Routes.map(item => (
                <Route path={item.url} exact={true} key={`route2-${item.url}`}>
                  <Demo item={item} />
                </Route>
              ))}
            </Switch>
          </RightSection>
        </PageContainer>
      </Router>
    </div>
  );
}

export default App;
