import React from "react";
import Header from "../layout/Header";
import Aside from "../layout/Aside";
import Main from "../layout/Main";
import Article from "../layout/Article";
import PageContainer from "../layout/PageContainer";
import insideLabelInput from "./inside-label-input";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PageContainer>
        <Aside>...</Aside>
        <Main>
          <Article item={insideLabelInput} />
        </Main>
      </PageContainer>
    </div>
  );
}

export default App;
