import React from "react";
import Home from "./components/home";
import Page from "./components/page";

function App() {
  return (
    <div className="App">
      <Page>
        <Home />
      </Page>
    </div>
  );
}

export default App;
