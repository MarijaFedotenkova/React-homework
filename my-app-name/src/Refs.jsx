import React, { useState, useRef } from 'react';

export function Refs () {
  const [isChecked, setIsChecked] = useState(false);
  const inputRef = useRef(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      inputRef.current.blur();
    } else {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        Toggle Focus
      </label>
    </div>
  );
}

