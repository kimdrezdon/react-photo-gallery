import React from "react";

const NoResults = () => {
  /**
   * Returns a no results message when the user's search didn't yield any results.
   */
  return (
    <li className="no-results">
      <h3>No Results Found!</h3>
      <p>Your search did not return any results. Please try again.</p>
    </li>
  );
};

export default NoResults;
