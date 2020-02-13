import React from "react";
import Header from "../layout/Header";
import Aside from "../layout/Aside";
import Main from "../layout/Main";
import PageContainer from "../layout/PageContainer";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PageContainer>
        <Aside>...</Aside>
        <Main>
          <h2>haakon.underbakke.net/components</h2>
          This is a place that I will share components at some point in the
          future.
        </Main>
      </PageContainer>
    </div>
  );
}

export default App;
