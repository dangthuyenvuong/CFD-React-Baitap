import React from "react";

const TextField = ({ label, value, helperText, ...ref }) => {
  return (
    <label>
      <div className="label">{label}</div>
      <input type="text" value={value} {...ref} />
      <p className="erro-text" style={{ color: "red" }}>
        {helperText}
      </p>
    </label>
  );
};

export default TextField;
