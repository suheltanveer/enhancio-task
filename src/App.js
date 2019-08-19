import React from "react";
import UserList from "./components/userList";
import Page from "./components/page";

function App() {
  return (
    <div className="App">
      <Page>
        <UserList />
      </Page>
    </div>
  );
}

export default App;
