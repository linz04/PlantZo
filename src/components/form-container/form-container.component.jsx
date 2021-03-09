import React from "react";

import "./form-container.styles.scss";

const FormContainer = ({ children, title }) => (
  <div className="form-container">
    <h2 className="title">{title.toUpperCase()}</h2>
    {children}
  </div>
);

export default FormContainer;
