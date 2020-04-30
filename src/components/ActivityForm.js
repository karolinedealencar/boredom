import React from "react";

const ActivityForm = () => (
  <form className="activity-form">
    <label>
      <input type="number" placeholder="Add number of participants" required />
    </label>
    <button>Search</button>
  </form>
);

export default ActivityForm;
