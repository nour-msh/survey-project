import React, { useState } from "react";

function Checkbox() {
  const [options, setOptions] = useState([]);

  const [textValue, setTextValue] = useState("");

  const [radioValue, setRadioValue] = useState("");

  const handleOptionAdd = () => {
    setTextValue("");
    setOptions([
      ...options,
      { label: textValue, value: textValue.toLowerCase().replace(" ", "-") },
    ]);
  };

  return (
    <div className="Checkbox">
      <input className="myText"
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button className="btn" onClick={handleOptionAdd}>Add</button>

      <div>
        {options.map((option) => (
          <div>
            <input
              type="radio"
              name="dynamic-radio"
              value={option.value}
              checked={radioValue === option.value}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <label>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Checkbox;