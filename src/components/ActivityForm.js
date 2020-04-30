import React from "react";

const ActivityForm = ({
  participants,
  handleChange,
  handleSubmit,
  loading,
}) => (
  <form className="activity-form" onSubmit={handleSubmit}>
    <label>
      <input
        type="number"
        value={participants}
        onChange={handleChange}
        placeholder="Add number of participants"
        required
      />
    </label>
    <button>{loading ? "Loading..." : "Search"}</button>
  </form>
);

export default ActivityForm;
