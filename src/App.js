import React from "react";

import "./index.css";

import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm";
import Activity from "./components/Activity";

function App() {
  return (
    <>
      <Header />
      <ActivityForm />
      <Activity />
    </>
  );
}

export default App;
