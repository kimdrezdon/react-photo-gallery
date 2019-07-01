import React from "react";

const Error = () => {
  /**
   * Returns an error message when the path doesn't exist.
   */
  return (
    <div className="error">
      <h3>404: Page Not Found!</h3>
      <p>Sorry, we could not find the page you were looking for.</p>
    </div>
  );
};

export default Error;
