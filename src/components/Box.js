import React, { useRef, useState } from "react";

function Box() {
  const elementRef = useRef();
  const [dimensions, setDimensions] = useState(null);

  function handleMeasureClick() {
    const div = elementRef.current;
    const rect = div.getBoundingClientRect();
    setDimensions(rect);
  }

  return (
    <div>
      <h1>Box</h1>
      <button onClick={handleMeasureClick}>Measure</button>
      <div ref={elementRef}>
        <p>This is a box element</p>
      </div>
      {dimensions && (
        <div>
          <p>Element dimensions:</p>
          <p>Width: {dimensions.width}px</p>
          <p>Height: {dimensions.height}px</p>
        </div>
      )}
    </div>
  );
}

export default Box;
