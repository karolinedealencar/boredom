import React from "react";

const Activity = ({ activity }) => (
  <section className="activity">
    {activity.activity && (
      <h2>
        Activity Found!
        <span role="img" aria-label="Hugging Face">
          🤗
        </span>
      </h2>
    )}
    {activity.error && (
      <h2>
        {activity.error}
        <span role="img" aria-label="Crying Face">
          😢
        </span>
      </h2>
    )}
    {activity.activity && <p>{activity.activity}</p>}
  </section>
);

export default Activity;
