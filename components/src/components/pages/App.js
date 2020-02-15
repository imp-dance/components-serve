import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "../../routes";
import Header from "../layout/Header";
import Aside from "../layout/Aside";
import Main from "../layout/Main";
import Template from "../layout/Template";
import PageContainer from "../layout/PageContainer";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Router basename="/components">
        <Header></Header>
        <PageContainer>
          <Aside />
          <Main>
            <Switch>
              {Routes.map(item => (
                <Route path={item.url} exact={true}>
                  <Template item={item} />
                </Route>
              ))}
            </Switch>
          </Main>
        </PageContainer>
      </Router>
    </div>
  );
}

export default App;
