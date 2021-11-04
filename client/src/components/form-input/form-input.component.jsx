import React from "react";

import "./form-input.styles.scss";

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    {label ? <label className="group__label">{label}</label> : null}
    <input
      className="group__input form-input"
      type="form-input"
      onChange={handleChange}
      {...otherProps}
    />
  </div>
);
export default FormInput;
