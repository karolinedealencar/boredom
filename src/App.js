import React, { useState } from "react";

import "./index.css";

import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm";
import Activity from "./components/Activity";

const App = () => {
  const [participants, setParticipants] = useState("");
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setParticipants(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setActivity({});

    fetch(`https://www.boredapi.com/api/activity?participants=${participants}`)
      .then((response) => response.json())
      .then((response) => setActivity(response))
      .catch((error) => setActivity({ error: `An error occurred ${error}` }))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />
      <ActivityForm
        participants={participants}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Activity activity={activity} />
    </>
  );
};

export default App;
